var total = 0;
var i = 0;
var limit = prompt("What is the highest number possible?")

var summin = function(){
  while (i <= limit) {
    var multiple3 = i*3;
    var multiple5 = i*5;
    if (multiple3 < limit){
      total = total + multiple3;
    }
    else{
        
    }
    if (multiple5 % 3 === 0){
    }
    else if (multiple5 < limit){
        total = total + multiple5;
    }
    else {
        
    }
    ++i;
  }
  return total
  console.log(total)
}
summin();