let usd = document.getElementById('usd-input').value;
let rand = document.getElementById('rands-output').innerHTML;
console.clear();

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


getRands();

console.clear();