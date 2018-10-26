var array = [];


// a module that exports a function that takes
// a number as a parameter and stores it in a list.
// The list is not accessible from outside the module.
var storeList = function(num) {

  array.push(num);

};

// another function that returns a version of the
// data list that is sorted in ascending order.
function sortList(){

var sortedList = array.sort(function(a,b){
    return a - b

});
console.log(sortedList);
}



// exports the functions as modules
module.exports = {

  storeList: storeList,
  sortList: sortList

}