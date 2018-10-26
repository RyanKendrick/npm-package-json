// 'requires' the module/module within 'custom-sorting-module.js'
var list = require("./custom-sorting-module");

// Node.js script that imports the functionality of the module,
// adds 5 different data points to the module's data list, and outputs the sorted list.
list.storeList(7);
list.storeList(78);
list.storeList(9);
list.storeList(8);
list.storeList(3);
list.sortList();