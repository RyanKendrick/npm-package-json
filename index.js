var chalk = require("chalk");

var message = chalk.rgb(255, 136, 0).bold("Hello ") + chalk.underline.bgBlue("World");
console.log(message);