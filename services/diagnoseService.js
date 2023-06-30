const { getAccount } = require("./loginServices")

const db = require("../root/database")


const checkState = () => {
  
  // let USER_ACCOUNT = await getAccount(req.session.emailAddress)
  // console.log(USER_ACCOUNT);
  
}



const getAvailableHospitals = () => {
  return new Promise( async (resolve, reject) => {
    db.query(
      "select * from Hospital",
      (err, rows) => {
        if ( err ) {
          reject(err)
        }
        let vlblHospitals = sortAvailableHospitals(rows);
        // console.log(vlblHospitals);
        let vlblHospitalsResult = [];
        let numFNNullHospitals = 0;
       for ( let x = 0; x <= vlblHospitals.length-1; x++ ) {
        if ( vlblHospitals[x].Num_intensive_case_beds != null ) {
          vlblHospitalsResult.push(vlblHospitals[x])
          numFNNullHospitals++;
        }
       }
      //  console.log(vlblHospitalsResult);
      //  console.log("num of not null hospitals: " + numFNNullHospitals);
        resolve(vlblHospitalsResult)
      }
    )
  })
}



// Linear Sort Alg + 
const sortAvailableHospitals = (list) => {
  // let max = list[0].Num_intensive_case_beds;
  // frm left to right....
  for ( let y = 0; y <= list.length-1; y++ ) {
    for ( let x = y+1; x <= list.length-1; x++ ) {
      if ( list[y].Num_intensive_case_beds > list[x].Num_intensive_case_beds ) {
        let swap = list[y];
        list[y] = list[x];
        list[x] = swap;
      }
    }
  }
  return list;
}







module.exports = {
  checkState: checkState,
  getAvailableHospitals: getAvailableHospitals,
  
};
