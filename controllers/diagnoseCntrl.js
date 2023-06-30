const diagnoseService = require("../services/diagnoseService")
const { getAccount } = require("../services/loginServices")
const db = require("../root/database")

// )+ Get diagnose service
let getDiagnose = (req, res, next) => {
  res.render('diagnose', 
    {
      title: 'Diagnose Service',
      logout: req.session.loggedinUser,
      layout: './layouts/diagnose',
    }
  )
};

// Get isolatesCase
let getIsolationCase = (req, res, next) => {
  res.render("isolation_diagnosis", {
    title: 'Isolation Case',
    logout: req.session.loggedinUser,
    layout: './layouts/diagnose',
  })
}

// Get examinationsCase
let getExaminationsCase = (req, res, next) => {
  res.render("examinations_diagnosis", {
    title: "Examinations Case",
    logout: req.session.loggedinUser,
    layout: './layouts/diagnose',
  })
}

const startDiagnose = (req, res, next) => {
  if (req.session.loggedinUser) {
    res.render("start_diagnosis", {
      title: "Start Diagnose Service",
      logout: req.session.loggedinUser,
      layout: './layouts/diagnose',
    })
  }else {
    req.session.next = "startDiagnose";
    res.redirect("/user/login")
  }
}

// )+ Done the state of patient
const doneState = (req, res, next) => {
  // res.send("done state");
  
  // Get current page
  
  
  // Get patient data
  
  
  // Store state of patient
  
  res.redirect('/');
}

// Complete the diagnose
const completeDiagnose = async (req, res) => {
  console.log("+++++ +++++++ +++++++");
  console.log("Check State of Patient");
  console.log(req.session.loggedinUser);
  console.log("+++++ +++++++ +++++++");
  if ( req.session.loggedinUser ) {
    // Check state of patient
    const SQL = "select ?? from User where email = ?";
    await db.query(SQL, ["State", req.session.emailAddress], (err, result) => {
      console.log("+++++ +++++++ +++++++");
      console.log("State of Patient:");
      console.log(result);
      console.log(result[0].State);
      console.log("+++++ +++++++ +++++++");
      if ( result[0].State == 2 ) {
        res.redirect("/diagnose/isolationCase")
      }else if ( result[0].State == 1) {
        res.redirect("/diagnose/examinationsCase")
      } else {
        res.redirect("/diagnose")
      }
    })
  }else {
    req.session.next = "completeDiagnose";
    res.redirect("/user/login")
  }
}


// End the diagnose service
const endDiagnoseService = async (req, res, next) => {
  // const USER_ACCOUNT = getAccount(req.session.emailAddress)
  let SQL = "update User set State = ? where email = ?";
  await db.query(SQL, [0, req.session.emailAddress], (err, fields) => {
    console.log("--------- --------- --------------- -------------");
    console.log(fields)
    console.log("--------- --------- --------------- -------------");
  })
  res.redirect("/")
}

const doneDiagnose = async (req, res, next) => {
  console.log("++++++ +++++++ ++++++++");
  console.log(req.params);
  const PATIENT_CASE = req.params.patientCase;
  let UPDATED_STATE;
  console.log("++++++ +++++++ ++++++++");
  switch(PATIENT_CASE) {
    case "isolationCase":
      UPDATED_STATE = 2;
      break;
    case "examinationsCase":
      UPDATED_STATE = 1;
      break;
  }
  const SQL = "update User set State = ? where email = ?";
  await db.query(SQL, [UPDATED_STATE, req.session.emailAddress], ( err, result ) => {
    console.log("-------- ---------- -----------------");
    console.log(result);  
    console.log("-------- ---------- -----------------");
  })
  res.redirect("/diagnose")
}


const selectHospitals = async (req, res, next) => {
  
  // Get Available Hospitals
  let availableHospitals = await diagnoseService.getAvailableHospitals();
  // res.send(JSON.stringify(availableHospitals))
  // console.log(availableHospitals);
  res.render("diagnose/selected_hospitals", {
    title: "Select Hospitals",
    availableHospitals: JSON.stringify(availableHospitals),
    logout: req.session.loggedinUser,
    layout: "./layouts/diagnose",
  })
  
  
  // Send Available Hospitals
  
  // Redirect to the selected hospitals
  // res.redirect("/diagnose/selectHospitals")
}




module.exports = {
  getDiagnose: getDiagnose,
  startDiagnose: startDiagnose,
  getIsolationCase: getIsolationCase,
  getExaminationsCase: getExaminationsCase,
  doneState: doneState,
  completeDiagnose: completeDiagnose,
  endDiagnoseService: endDiagnoseService,
  doneDiagnose: doneDiagnose,
  selectHospitals: selectHospitals,
};
