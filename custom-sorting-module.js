var array = [];



var storeList = function(num) {

  array.push(num);

};


function sortList(){

var sortedList = array.sort(function(a,b){
    return a - b

});
console.log(sortedList);
}




module.exports = {

  storeList: storeList,
  sortList: sortList

}