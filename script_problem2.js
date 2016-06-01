var total = 0;
var term1 = 1;
var term2 = 2;

if (term1 % 2 ===0){
    total = total+term1;
}
if (term2 % 2 ===0){
    total = total + term2;
}

var term = term1 + term2;

while( term < 4000000){
    if (term % 2 === 0){
        total = total + term;
    }
    term1 = term2;
    term2 = term;
    term = term1 + term2;
}
console.log(total);