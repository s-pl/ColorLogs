exports.green = function (parametro) {
 console.log("\x1b[32m", parametro);
}
exports.red = function (parametro) {
 console.log("\x1b[31m", parametro);
}
exports.yellow = function (parametro) {
 console.log("\x1b[33m", parametro);
}
exports.blue = function (parametro) {
 console.log("\x1b[34m", parametro);
}
exports.magenta = function (parametro) {
 console.log("\x1b[35m", parametro);
}
exports.cyan = function (parametro) {
 console.log("\x1b[36m", parametro);
}
exports.white = function (parametro) {
 console.log("\x1b[37m", parametro);
}
exports.black = function (parametro) {
 console.log("\x1b[30m", parametro);
}
exports.underscore = function (parametro) {
 console.log("\x1b[4m", parametro);
}
exports.bright = function (parametro) {
 console.log("\x1b[1m", parametro);
}
exports.hidden = function (parametro) {
 console.log("\x1b[8m", parametro);
}
exports.reverse = function (parametro) {
 console.log("\x1b[7m", parametro);
}
exports.dim = function (parametro) {
 console.log("\x1b[2m", parametro);
}

