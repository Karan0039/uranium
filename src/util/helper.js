let today = new Date();

let printDate = function () {
    today = new Date();
    console.log(`Today's date is: ` + today.getDate());

}
let printMonth = function () {
    today = new Date();
    let month=today.getMonth() + 1;
    console.log(`Current's month is: ` + month);

}
let getBatchInfo = function () {
    today = new Date();
    console.log("Uranium, W3D3, the topic for today is Nodejs module system");

}
module.exports.printMonth = printMonth;
module.exports.printDate = printDate;
module.exports.getBatchInfo = getBatchInfo;