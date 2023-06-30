var express = require('express');
var router = express.Router();

// Diagnose controller
let dgsCntrl = require("../controllers/diagnoseCntrl")


// )+ Get diagnose service
router.get('/', dgsCntrl.getDiagnose)
router.get("/start", dgsCntrl.startDiagnose)
router.get("/isolationCase", dgsCntrl.getIsolationCase)
router.get("/examinationsCase", dgsCntrl.getExaminationsCase)
router.get("/complete", dgsCntrl.completeDiagnose)

// )+ Select the current available hospitals
router.get("/selectHospitals", dgsCntrl.selectHospitals)


router.get("/end", dgsCntrl.endDiagnoseService)
router.get('/done/:patientCase', dgsCntrl.doneDiagnose);

module.exports = router;

