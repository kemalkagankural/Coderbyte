function DistinctList(arr) { 

  // code goes here  
  var duplicates=0;
  for(var i=0;i< arr.length; i++){
    for(var j=0;j< arr.length; j++){
      if(arr[i]===arr[j] && i!==j){
        duplicates++;i
        arr.splice(arr.indexOf(arr[i]),1)
      }
    }
  }
    for(var i=0;i< arr.length; i++){
    for(var j=0;j< arr.length; j++){
      if(arr[i]===arr[j] && i!==j){
        duplicates++;i
        arr.splice(arr.indexOf(arr[i]),1)
      }
    }
  }
  return duplicates;
}