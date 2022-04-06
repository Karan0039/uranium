let trim = function (text) {
    console.log(text.trim());
}

let changetoLowerCase = function (text) {
    console.log(`After changing "`+text+`" to lowercase is: ` + text.toLowerCase())
}
let changeToUpperCase = function (text) {
    console.log(`After changing "`+text+`" to uppercase is: ` + text.toUpperCase())
}
module.exports.trim = trim;
module.exports.changetoLowerCase = changetoLowerCase;
module.exports.changeToUpperCase = changeToUpperCase;