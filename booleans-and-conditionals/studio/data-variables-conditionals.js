// Initialize Variables below
let date = "Monday 2019-03-18" // string
let time = "10:05:34 AM" // string
let astronautCount = 7 // int
let astronautStatus = "ready" // string
let averageAstronautMassKg = 80.7 // float
let crewMassKg = astronautCount * averageAstronautMassKg // int
let fuelMassKg = 760000 // int
let shuttleMassKg	= 74842.31 // float
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg // int
let maximumMassLimit =	850000 // int
let fuelTempCelsius	= -225 // int
let minimumFuelTemp	= -300 // int
let maximumFuelTemp = -150 // int
let fuelLevel =	"100%" // string
let weatherStatus =	"clear" // string
let preparedForLiftOff = true // boolean

let astronautCountValid = astronautCount <= 7
let statusReady = astronautStatus === 'ready'
let massDoesNotExceed = maximumMassLimit >= 850000
let tempsOkay = fuelTempCelsius >= -300 || fuelTempCelsius <= -150
let tankFull = fuelLevel === "100%"
let weather = weatherStatus === "clear"

let readyForLaunch = astronautCountValid && statusReady && massDoesNotExceed && tempsOkay && tankFull && weather

// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if (astronautCountValid) {
  console.log("Ready to launch")
}

// add logic below to verify all astronauts are ready
if (statusReady) {
  astronautStatus = "All astronauts ready!"
}

// add logic below to verify the total mass does not exceed the maximum limit of 850000
if (massDoesNotExceed) {
  console.log("Shuttle able to launch")
}

// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
if (tempsOkay) {
  console.log("Temp within normal limits")
}

// add logic below to verify the fuel level is at 100%
if (tankFull) {
  console.log("Tank Full")
}

// add logic below to verify the weather status is clear
if (weather) {
  console.log("All systems go")
}

// Verify shuttle launch can proceed based on above conditions
if (readyForLaunch) {
  console.log("Good luck Astronaunts!!")
} else {
    console.log("Abort Launch")

}
