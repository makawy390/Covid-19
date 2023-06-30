const { validationResult, body } = require('express-validator')



let db = require("../root/database")

let {createNewUser, checkEmailUser} = require("../services/registerService")
let {checkPassword} = require("../services/loginServices")


const login =  (req, res, next) => {
  if (req.session.loggedinUser) {
    res.redirect("/")   
  } else {
    res.render("login", {
      title: "Log In",
      success: req.session.success,
      error: req.session.error,
    })
  }
}

// 
const checkUser =  (req, res, next) => {
 
  const ERRORs = validationResult(req);
  return new Promise( async (resolve, reject) => {
    let newUser = {
      name: req.body.name,
      password: req.body.password,
      email: req.body.email,
    }
    if (!ERRORs.isEmpty()) {
      req.session.error = ERRORs;
      req.session.success = false;
      // console.log(req.session.error);
      res.redirect("/user/login")
    }else {
      req.session.success = true;
      if ( req.session.next == "startDiagnose" ) {
        console.log("diagnose start");
        res.redirect("/diagnose/start")
      }else if( req.session.next == "completeDiagnose" ) {
        res.redirect("/diagnose/complete")
      }else {
        res.redirect("/")
      }
    }    
  })
}

const signup = (req, res, next) => {
  if ( req.session.loggedinUser ) {
    res.redirect("/")
  }else {
    res.render("signup", { 
      title: "Sign Up",
      success: req.session.success,
      error: req.session.error,
      email_exist: req.session.EMAIL_EXIST,
    })
  }
}

const createUser = async (req, res, next) => {
  const errors = validationResult(req);
  // global.$user_email = req.body.email;
  if (!errors.isEmpty()) {
    console.log(errors)
    req.session.success = false;
    req.session.error = errors;
    console.log(req.session.error);
    // req.session.error
    res.redirect("/user/signup")
    // return
  }else {
      try {
        let newUser = {
          name: req.body.name,
          password: req.body.password,
          email: req.body.email,
        }
        await createNewUser(newUser, req);
        req.session.success = true;
        // req.session.error = null;
        const SQL = "select * from User where email = ?";
        await db.query(SQL, [ req.body.email ], (err, rows) => {
          // req.session.user_id = rows[0].User_id;
          // console.log("New User Id");
          // console.log(req.session.user_id);
        })
        return res.redirect("/user/login")
        // return res.redirect("/")
      }catch(e) { 
        return res.redirect("/user/signup")
      }
    }
  // }
}


const logout = ( req, res) => {
  // req.logout()
  // redirect("/")
  req.session.destroy();
  res.redirect('/');
}


module.exports = {
  login: login,
  signup: signup,
  checkUser: checkUser,
  createUser: createUser,
  logout: logout,
};

// // Check user existance
//  db.query("select * from User", (err, rows, fields) => {
//   let cnt = 0;
//   global.checked = () => { 
//     while(cnt < rows.length) {
//       if ( rows[cnt].email == req.body.email) {
//         console.log(req.body.email)
//         console.log(rows[cnt].email)
//         return true
//       }
//     cnt++;
//     }
//   }
//   // Send error message
//   // res.send("email exist aready"); 
//  })
//  console.log(global.checked)
//  if ( global.exist ) {
//     res.redirect("/user/signup")
//     return
//   }

 
//  // Add new user
//  const SQL = "INSERT INTO User SET ?";
//  let hashedPassword = await bcrypt.hash(req.body.password, 10);
//  let newUser = {
//   User_id: Math.floor((Math.random() * 2000) + 1),
//   FullName: req.body.name,
//   email: req.body.email,
//   age: 20,
//   Password1: hashedPassword,
//   Birth_date: null,
//   Street: null,
//   City: null,
//   Phone: null,
//   Gender: null,
//   State: null,
//   Medicine: null,
//   Medicine_history: null,  
//  }
//  db.query(SQL, newUser, (err, rows, fields) => {
//   if ( err ) {
//     throw err;
//   }else {
//     // res.redirect("/")
//     res.redirect("/")
//   }
//  }).sql;
