/* - - - - - - - - - - - - - - - - - - - - - - - - - - -
<> latest Update: 4/14/2021 - 12.45 PM -       -
<> Programmer: Ahmed                
  )-1 errHanlder `problem` + )+2 `Complete` the diagnose service + 
- - - - - - - - - - - - - - - - - - - - - - - - - - -  */
// // +1 Handle window of expert system
// let handleWindow = function ()
// {
//   // Handle width
//   EXPERT_WINDOW.style.width = window.innerWidth+'px';
//   // console.log(window.innerHeight+'px')
//   // +2 Handle height
//   // EXPERT_WINDOW.style.height = window.innerHeight+'px';
// };

// // +2 Handle expert system when resize the window of browser
// window.onresize = () => {
//   handleWindow();
// }

// // # Setup the application of expert system
// (function()
// {
//   console.log('@run expert system...');
//   // +1 Handle window
//   handleWindow();
// }());








// +3 Display the next page or the previous page
function expSysGuider(cfg)
{ 
  // )-1 Check configuration of process
  let selectedPgName = cfg.selectedPgName || '',
     mission     = cfg.mission || 'next',
     constraintId = cfg.constraintId || true;
   
  // let backHelper = selectedPgName;
  // console.log(cfg);
  // )+1  Select current page
  // console.warn('@1: Select current page of expert system')
  const crntPg = expSys.getCrntPg();
  // expSys.crntPg = crntPg;
  // console.log(crntPg);
  // console.log(crntPg.attributes.expPg.value)
  // )+2 Remove current class from current page
  // console.warn('@2: Remove current class of current page of expert system')
  // console.log(crntPg)
  crntPg.classList.remove('current');
  console.log("@req >> _Next_Page_");
  // )+3 Check attribute based on cofiguration object
  if (mission === 'next') {
    // console.warn('@3: Check configuration of current page of expert system')  
    // # Handle error of doesn't specify an answer
    expSys.error = false;
    
    // )+ Import Values of Diagnose Service Page
    let values = expSys.modules.diagnose.getValues(crntPg.attributes.expPg.value, crntPg);
    console.log(values);
    // values = [["no"], ["yes"]];
    // console.log(values[0][0])
    // +01 Check state to decide which page need to be displayed
    // console.log(crntPg.attributes.expPg.value);
    
    // )+ Return the name of the next page
    selectedPgName = expSys.modules.diagnose.checkState(crntPg.attributes.expPg.value, values);
    console.log(selectedPgName);
  }
  // console.log(selectedPgName)
  // )+4 Select selectedPg item
  // console.warn('@4: select selectedPg item')
  // console.log(EXPERT_WINDOW)
  
  if ( expSys.attrs.patient.isStableCase && mission == "back") {
    // console.log(crntPg);
    // console.log(expSys.getPgNm().pgNm)
    let pgNm = expSys.getPgNm(crntPg).pgNm;
    // console.log(pgNm);
    if (pgNm == "examinationsCase" || pgNm == "stableCase") {
      // Change the default page name
      selectedPgName = "isStableCase";
    }
  }
  
  const selectedPg = () => {
    let allExpPgs = EXPERT_WINDOW.querySelectorAll("aside"),
      expWnd1 = '';
    // console.log(allExpPgs);
    // # )-2 Check each expert system's window to match name
    allExpPgs = allExpPgs.forEach( (expWnd) => {
      // )-3 Check expPg attribute
      // console.log(expWnd);              
      if (expWnd.attributes.expPg.value === selectedPgName) {
        expWnd1 = expWnd;
        return;
      }
    });
    // console.log(expWnd1);
    return expWnd1;
  }
  // const selectedWnd = selectedPg();
  // console.log(selectedWnd)
  
  // # Check mission
  if ( mission == "back" ) {    
  
    // # Force hide the page
    // crntPg.classList.remove('current');
    selectedPg().classList.add('current');
    return;
  }
  // )+5 Add current class to selectedPg Or 'display the page'
  if ( !expSys.error ) {
    selectedPg().classList.add('current');
    // crntPg
    // console.log(expSys)
  }else {
    // window.alert("There're questions should be answered !!")
    animateMessage("There are questions should be answered...")
  }
  
}// @End expSysGuider()

// var errAnimate = false;
const animateMessage = (msg) => {
  const errorMessage = document.querySelector(".error-message");
  let messageCntr;
  // console.log(errorMessage); 
  if ( errorMessage == null ) {
    // console.log(errorMessage); 
    // Create DOM of Message
    messageCntr = document.createElement("p");
    messageCntr.innerHTML = msg;
    messageCntr.style.padding = "8px",
    messageCntr.style.textAlign = "center";
    messageCntr.style.backgroundColor = "#ee6c6c";
    messageCntr.style.color = "white";
    messageCntr.style.width = "367px";
    messageCntr.style.height = "37px";
    messageCntr.style.fontSize = "20px";
    messageCntr.style.position = "absolute";
    messageCntr.style.top = "-100px";
    messageCntr.style.left = "50%";
    messageCntr.style.zIndex = "5";
    messageCntr.style.borderRadius = "7px";
    messageCntr.style.fontSize = "15px";
    // messageCntr.style.display = "none";
    messageCntr.style.transform = "translate(-50%, -50%)";
    messageCntr.style.boxShadow = "1px 1px 18px #ee6c6c";
    messageCntr.classList.add("error-message");
    document.body.prepend(messageCntr);
  }else {
    messageCntr = errorMessage;
  }
   
  
  
  messageCntr.animate([
    { top: "-100px", 
      // display: "none"
    },
    { top: "100px",
      // display: "block"
    },
  ], {
    delay: 0,
    duration: 700,
    iterations: 1,  
    endDelay : 0,
    easing: "ease-in-out",
  })
  messageCntr.style.top = "100px";
  setTimeout( () => {
    messageCntr.style.top = "-100px";
    // errAnimate = true;
  }, 5000)
  // setTimeout( () => {
  //   messageCntr.style.display = "none";
  // }, 2000)
  
  // messageCntr
}

// padding: 8px;
// background-color: #ee6c6c;
// color: white;
// font-size: 15px;
// position: absolute;
// width: 367px;
// top: 41px;
// z-index: 5;
// text-align: center;
// left: 50%;
// box-shadow: 1px 1px 18px #ee6c6c;
// border-radius: 7px;
// height: 37px;
// /* font-weight: bold; */
// transform: translate(-50%, -50%);


// // +4 Handle the selection process of values for all pages of diagnose....
// ALL_QUNTS.forEach( ( quts ) => {
//   // console.log(quts)
//   const btns = quts.querySelectorAll('button');
//   // console.log(btns);
//   btns.forEach( ( btn ) => {
//     btn.addEventListener('click', ( e ) => {
//       // +1 Define it it selected or not
//       if(e.target.classList.contains('selected')) {
//         // console.log('selected')
//         e.target.classList.remove('selected');
//       }else {
//         // console.log('not selected')
//         // console.log(e.target)
//         if(e.target.innerText === 'YES') {
//           // console.log('yes')
//           const nxtBtn = e.target.nextSibling.nextSibling;
//           if(nxtBtn.classList.contains('selected')) { nxtBtn.classList.remove('selected')}
//         }else {
//           // console.log('no')
//           const prvBtn = e.target.previousSibling.previousSibling;
//           if(prvBtn.classList.contains('selected')) { prvBtn.classList.remove('selected')}
//         }
//         e.target.classList.add('selected');
//       }      
//     });
//   });
// });
// .forEach( ( vnt ) => {
//   console.log(vnt);
// })

