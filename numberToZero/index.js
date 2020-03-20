/*Given a valid (IPv4) IP address, return a defanged version of that IP address.
A defanged IP address replaces every period "." with "[.]".
*/

var defangIPaddr = function(address) {
	return address.replace(/\./gi, '[.]')
};

address = "1.1.1.1"
console.log(defangIPaddr(address))


//Given a non-negative integer num, return the number of steps to reduce it to zero. If the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.

/*
var numberOfSteps  = function() {
	stepCount = 0;
	
	function countTotalStep(num) {
		stepCount += 1;
		if (num === 1) {
			return stepCount;
		} else if ((num % 2) === 0) {
			countTotalStep(num/2);
		} else {
			countTotalStep(num-1);
		}
	}
	
    return {
		number: function(num) {
			countTotalStep(num);
			return stepCount;
		}
	}
};

let ns = new numberOfSteps()
ns.number(14)

var numberOfSteps  = function(num) {
	stepCount = 0;
	
	do {
		stepCount++;
		if ((num % 2) === 0) {
			num = num / 2;
		} else {
			num = num - 1
		}
	} while (num !== 0)
		return stepCount;
}

console.log("ss", numberOfSteps(14))
*/
