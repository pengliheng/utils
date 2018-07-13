// section 1
var a = [1,3,3,4,5,6,7,8];
var b = [234,2,34,23,423,4,23,423,4,32];

// console.log(a.concat(b));


res = b.every((e,i,j)=>{
	return e>5
})

console.log(res);


console.log(
	b.valueOf()
);

// section 2
// var fib = []
// fib[1] = 1;
// fib[2] = 1;

// for (let i = 3; i < 20; i++) {
// 	fib[i] = fib[i-1] + fib[i-2];
// }

// for (let i = 0; i < fib.length; i++) {
// 	console.log(fib[i]);
// }