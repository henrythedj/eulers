var i =0;
var term = 0;
var notaprime = 0;

while (term<100000){
    for (i=3; i<term; i=i+2){
        if (term % i ===0){
			notaprime = 1;
            break;
		}
	}
	if (notaprime===0 && 600851475143 % term === 0){
		answer = term;
	}
    ++term;
    notaprime = 0;
    i = 0;
}
console.log(answer);