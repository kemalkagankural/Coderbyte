function ABCheck(str) { 

  // code goes here  
  var match = str.search(/a...b/);
  if(match > -1 ){
    return "true";
  }else{
    return "false";
  }

}
/*
English Description
I am going to use a RegExp to see the pattern [a...b] exists anywhere in the string. If the pattern exist or doesnt exist,it does then return true else return false. 
RegExp uses for do pattern-matching "search-and-replace" functions on text.
 Steps for solution                                                                  
  1) Use RegExp pattern to search string for pattern a...b                          
  2) If found return true                                                           
  3) Else return false       
Turkish Description
Bu stirng'de a ve b'nin herhangi bir yerde bulunup bulunmadığını görmek için RegExp'e kullanacağım. Eğer bu örnekte bulunuryorsa ya da bulunmuyorsa,başka true döndürür yoksa false döndürür.
RegExp, metinde desen eşleştirme "arama ve değiştirme" işlevleri yapmak için kullanılır.
  Çözüm Adımları
  1)a...b desene aramak için RegExp kullanın
  2)Eğer bulursa true
  3)Bulamazsa yanlış döndür

*/