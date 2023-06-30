const mapServices = require("../services/mapServices")

const getMap = async (req, res, next) => {
	// console.log(await mapServices.getVaccineConveysData())
	// console.log(await mapServices.getHospitalsData())	
	res.render("map", {
		title: "Map Service",
		hospitalData: JSON.stringify(await mapServices.getHospitalsData()),
		vaccineData: JSON.stringify(await mapServices.getVaccineConveysData()),
		mapData: "Map Data"
	})
}


module.exports = {
	getMap: getMap,

}



