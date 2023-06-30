


// # Check 'semi form' that includes more questions of diagnose service
expSys.modules.tools.checkSemiFrmVls = (crntPg) => {
  // console.log("Semi Form");
  // # Import all vls
  let allQstns = crntPg.querySelectorAll(".radio-btn");
  // console.log(allQstns);
  // # Import inputs of each question
  let qstInpts = [];
  // for (let y =0; y < allQstns.length; y++) {
  //   console.log(allQstns[y]);
  // }
  allQstns.forEach((qstn) => {
    // console.log(qstn);
    // # Import inputs of each question
    qstInpts.push(qstn.querySelectorAll("input"));
    // console.log(qstn.querySelectorAll("input"));
  });
  // console.log(qstInpts);
  return qstInpts;
}
// ------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------
// # )+ Handle the error
expSys.modules.tools.errHandle = (crntPg, el) => {
  // )+ Disable the next button
  let btn = crntPg.querySelector("button:nth-child(2)");
  // console.log(btn)
  // btn.disabled = true;
  // )+ Display the error
  // el.parentElement.parentElement
  crntPg.classList.add('current');
  // console.log(el.parentElement.previousElementSibling)
  // el.parentElement.parentElement.style.border = "2px solid red";
  el.parentElement.parentElement.style.backgroundColor = "rgba(237, 123, 123, .4)";
} 
// ------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------
// # Return 'checked' value of question
expSys.modules.tools.checkRadioVls = (qst, crntPg, frm = false) => {
  let vlFctr = false;
  let checkedVl = "none";
  // let vlCntr = "id";
  // console.log(inpts)
  if (frm) {
    for (let y =0; y < qst.length; y++) {
      if (qst[y].checked == true) {
        checkedVl = qst[y].value; // value
        console.log(checkedVl)
        vlFctr = true;
      }
    }
  }else {
    for (let y =0; y < qst.length; y++) {
      if (qst[y].checked == true) {
        checkedVl = qst[y].id; // id
        console.log(checkedVl)
        vlFctr = true;
        // return;
      }
    }    
  }
  
  // # Validate the single question
  if (!vlFctr) { 
     // console.log('error: you need to answer the question.')
    // # Handle or interact with the error
    expSys.modules.tools.errHandle(crntPg, qst[0]);
    // # There's an error 
    expSys.error = true;
    
    // expSys.vldtr =false;
    // console.log(expSys.error)
  }
  // else {
  //   // # No Error
  //   // if ( expSys.vldtr == false ) {
  //   //   expSys.error = true;
  //   // }else {
  //   //   expSys.error = false;
  //   //   // console.log(expSys.error)
  //   // }
  // }
  return [checkedVl];
} 
// console.log(expSys.modules.tools.checkRadioVls(EXPERT_WINDOW.querySelector('.current').getElementsByTagName("input")))
// ------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------
// # Check all form values
expSys.modules.tools.checkFrmsVls  = (crntPg) => {
  // # Import all vls
  let allQstns = crntPg.querySelectorAll(".select-answers");
  // console.log(allQstns);
  // # Import inputs of each question
  let qstInpts = [];
  // for (let y =0; y < allQstns.length; y++) {
  //   console.log(allQstns[y]);
  // }
  allQstns.forEach((qstn) => {
    // console.log(qstn);
    // # Import inputs of each question
    qstInpts.push(qstn.querySelectorAll("input"));
    // console.log(qstn.querySelectorAll("input"));   
  });
  // console.log(qstInpts);
  return qstInpts;
}
// expSys.modules.tools.checkFrmsVls(expSys.getCrntPg())
// ------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------
// Define if patient has symptoms or not
expSys.modules.tools.checkSymptoms = (smpmsSlcts, getPg) => {
  let symptoms = false;
  if (smpmsSlcts == "plus symptoms") {
    symptoms = true;
  }
  return getPg(symptoms);
}


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// # Configuration of 'tools' module
expSys.modules.tools.documentation = {
  methods: [
    {name: 'checkSemiFrmVls', use: 'check semi forms that has more than one questions'},
    {name: 'checkRadioVls', use: 'Import the values from the diagnose service page'},
    { name: 'errHandle', use: "Handle the error of doesn't answer the question"},
    { name: 'checkFrmsVls', use: "check forms that has more questions"},
    { name: 'checkFrmsVls', use: "check forms that has more questions"},
  ],
  attrs: []
}
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++