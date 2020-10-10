console.clear();

let usd = document.getElementById('usd-input').value;
let rand = document.getElementById('rands-output').innerHTM;

const getRands = () => {
    //log usd Input
    console.log("USD($) :", document.getElementById('usd-input').value);
    // assign usd input to variable
    const usd = document.getElementById('usd-input').value;
    // assign usd to zar conversion
    let conversion = usd * 16.46;
    // round off to whole integer
    let randFloor = Math.floor(conversion);
    // log result of conversion
    console.log("Rand(R) :", randFloor);
    // assign HTML output as result
    let result = document.getElementById('rands-output').innerHTML = "R " + randFloor;

    return result;

}



let miles = document.getElementById('miles-input').value;
let km = document.getElementById('km-output').innerHTM;

const getKm = () => {
    //log usd Input
    console.log("Miles :", document.getElementById('miles-input').value);
    // assign usd input to variable
    const miles = document.getElementById('miles-input').value;
    // assign usd to zar conversion
    let conversion = miles * 1.61;
    // round off to whole integer
    let kmFloor = Math.floor(conversion);
    // log result of conversion
    console.log("Kilometers(km) :", kmFloor);
    // assign HTML output as result
    let result = document.getElementById('km-output').innerHTML = kmFloor + " km";

    return result;

}




let feet = document.getElementById('feet-input').value;
let meter = document.getElementById('meter-output').innerHTM;

const getMeters = () => {
    //log usd Input
    console.log("feet(ft) :", document.getElementById('feet-input').value);
    // assign usd input to variable
    const feet = document.getElementById('feet-input').value;
    // assign usd to zar conversion
    let conversion = feet / 3.28;
    // round off to whole integer
    let meterFloor = Math.floor(conversion);
    // log result of conversion
    console.log("meter(m) :", meterFloor);
    // assign HTML output as result
    let result = document.getElementById('meter-output').innerHTML = meterFloor + " m";

    return result;

}



let inch = document.getElementById('inch-input').value;
let cm = document.getElementById('cm-output').innerHTM;

const getCm = () => {
    //log usd Input
    console.log('Inches (") :', document.getElementById('inch-input').value);
    // assign usd input to variable
    const inch = document.getElementById('inch-input').value;
    // assign usd to zar conversion
    let conversion = inch * 2.54;
    // round off to whole integer
    let cmFloor = Math.floor(conversion);
    // log result of conversion
    console.log("Centimeters(cm) :", cmFloor);
    // assign HTML output as result
    let result = document.getElementById('cm-output').innerHTML = cmFloor + " cm";

    return result;

}



let knot = document.getElementById('knot-input').value;
let kmph = document.getElementById('kmph-output').innerHTM;

const getKmph = () => {
    //log usd Input
    console.log("knots :", document.getElementById('knot-input').value);
    // assign usd input to variable
    const knot = document.getElementById('knot-input').value;
    // assign knot to zar conversion
    let conversion = knot * 1.85;
    // round off to whole integer
    let kmphFloor = Math.floor(conversion);
    // log result of conversion
    console.log("km/h :", kmphFloor);
    // assign HTML output as result
    let result = document.getElementById('kmph-output').innerHTML = kmphFloor + " km/h";

    return result;

}






















console.clear();