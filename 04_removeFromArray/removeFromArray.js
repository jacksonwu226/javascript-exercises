const removeFromArray = function(arr, ...delete_) {
  let res = []
  arr.forEach(item=>{
    if(!delete_.includes(item)){
      res.push(item)
    }
  })
  return res;
};
// Do not edit below this line
module.exports = removeFromArray;
