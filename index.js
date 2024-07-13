
let lengthInMeters = 0
let lengthInFeet = 0
const metersToFeet = 3.2808
let volumeInLiters = 0
let volumeInGallons = 0
const litersToGallons = 0.2642
let massInKilos = 0
let massInPounds = 0
const kilosToPounds = 2.2046

let lengthEl = document.getElementById("length")    //paragraph conversion length
let volumeEl = document.getElementById("volume")    //paragraph conversion volume
let massEl = document.getElementById("mass")        //paragraph conversion mass
let inputEl = document.getElementById("input-el")
let inputBtn = document.getElementById("input-btn")

inputBtn.addEventListener("click", function() {
    lengthEl.innerHTML="Length (Meter/Feet)"
    volumeEl.innerHTML="Volume (Liters/Gallons)"
    massEl.innerHTML="Mass (Kilograms/Pounds)"
    const inputValue = inputEl.value
    lengthInFeet = inputValue * metersToFeet
    lengthInFeet=lengthInFeet.toFixed(3)
    lengthInMeters = inputValue / metersToFeet
    lengthInMeters = lengthInMeters.toFixed(3)
    volumeInLiters = inputValue * litersToGallons
    volumeInLiters =volumeInLiters.toFixed(3)
    volumeInGallons = inputValue / litersToGallons
    volumeInGallons = volumeInGallons.toFixed(3)
    massInKilos = inputValue * kilosToPounds
    massInKilos = massInKilos.toFixed(3)
    massInPounds =inputValue / kilosToPounds
    massInPounds = massInPounds.toFixed(3)
    lengthEl.innerHTML += `<br><br> <font size="2"> ${inputValue} meters = ${lengthInFeet} feet | ${inputValue} feet = ${lengthInMeters} meters</font>`
    volumeEl.innerHTML += `<br><br> <font size="2"> ${inputValue} liters = ${volumeInLiters}  gallons | ${inputValue} gallons = ${volumeInGallons} liters</font>`
    massEl.innerHTML += `<br><br> <font size="2"> ${inputValue} kilos = ${massInKilos} pounds | ${inputValue} pounds = ${massInPounds} kilos</font>`
})