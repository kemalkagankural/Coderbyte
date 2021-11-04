function Calculator(str) { 

  var arithmeticOp=['+','-','/','*'];
  var replacedStr = str.replace(/(.)\(/g,function (match,g1){
    if(arithmeticOp.indexOf(g1) !=-1)
      return match;
    else 
    return match.replace(g1, g1 + '*');
  });
    return eval(replacedStr);
}
  
