const { getTrips, getDriver, getVehicle } = require('api');

/**
 * This function should return the data for drivers in the specified format
 *
 * Question 4
 *
 * @returns {any} Driver report data
 */
async function driverReport() {

  // Retrieve trips
const trips = await getTrips();

// Retrieve unique driver IDs
const driverIDs = [];
for (let i = 0; i < trips.length; i++) {
  const trip = trips[i];
  if (!driverIDs.includes(trip.driverID)) {
    driverIDs.push(trip.driverID);
  }
}

// Initialize an empty array to store driver reports
const driverReports = [];

try{
// Iterate through each driver ID
for (let i = 0; i < driverIDs.length; i++) {
  const driverID = driverIDs[i];

  // Retrieve driver details
  
 const driverDetails = await getDriver(driverID);
 //driverDetails 

  // Filter trips for the current driver
  const driverTrips = trips.filter((trip) => trip.driverID === driverID);

  // Initialize variables to store cash and non-cash trips
  let cashTrips = [];
  let nonCashTrips = [];

  // Iterate through each trip and categorize as cash or non-cash
  for (let j = 0; j < driverTrips.length; j++) {
    const trip = driverTrips[j];
    if (trip.isCash === true) {
      cashTrips.push(trip);
    } else {
      nonCashTrips.push(trip);
    }
  }

  // Calculate total amounts earned
  let totalAmountEarned = 0;
  let totalCashAmount = 0; 
  let totalNonCashAmount = 0;

  for (let j = 0; j < driverTrips.length; j++) {
    const trip = driverTrips[j];
    //totalAmountEarned += trip.billedAmount;

    if (trip.isCash === true) {
      totalCashAmount += trip.billedAmount;
    } else {
      totalNonCashAmount += trip.billedAmount;
    }
    totalAmountEarned = parseFloat(totalCashAmount + totalNonCashAmount) 
  }

  // Retrieve vehicle details for each vehicle ID
  const vehicles = [];
  for (let j = 0; j < driverDetails.vehicleID.length; j++) {
    const vehicleID = driverDetails.vehicleID[j];
    const vehicleDetails = await getVehicle(vehicleID);
    vehicleDetails 
    vehicles.push({
      plate: vehicleDetails.plate,
      manufacturer: vehicleDetails.manufacturer,
    });
  }

  // Format trips for the current driver
  const formattedTrips = [];
  for (let j = 0; j < driverTrips.length; j++) {
    const trip = driverTrips[j];
    formattedTrips.push({
      user: trip.user.name,
      created: trip.created,
      pickup: trip.pickup.address,
      destination: trip.destination.address,
      billed: trip.billedAmount,
      isCash: trip.isCash,
    });
  }

  // Create driver report object
  const driverReport = {
    fullName: driverDetails.name,
    id: driverID,
    phone: driverDetails.phone,
    noOfTrips: driverTrips.length,
    noOfVehicles: driverDetails.vehicleID.length,
    vehicles: vehicles,
    noOfCashTrips: cashTrips.length,
    noOfNonCashTrips: nonCashTrips.length,
    totalAmountEarned: totalAmountEarned,
    totalCashAmount: totalCashAmount,
    totalNonCashAmount: totalNonCashAmount,
    trips: formattedTrips,
  };

  driverReport 
  // Add driver report to the array
  driverReports.push(driverReport);
}
} catch (err){
  console.log(err)
}


//driverReports 
// Return the array of driver reports
return driverReports;



}
driverReport()

module.exports = driverReport;
