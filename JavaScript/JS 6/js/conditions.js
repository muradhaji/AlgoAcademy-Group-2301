// let num = Number(prompt("Enter number:"));

// if(num < 0) alert("Negative");

// if(num < 0) alert("Negative"), console.log("Negative");

// if(num < 0) {
// 	alert("Negative");
// 	console.log("Negative")
// };

// if("") {
// 	alert("Negative");
// };

// if(" ") {
// 	alert("Negative");
// };

// let condition = 4 < 5;
// if(condition) {
// 	// do something
// }

// let num = Number(prompt("Enter number:"));

// if(num < 0) {
// 	alert("Negative");
// } else {
// 	alert("Positive")
// };

// if(num < 0) {
// 	alert("Negative");
// } else {
// 	if(num > 0) {
// 		alert("Positive")
// 	} else {
// 		alert("Neutral")
// 	}
// };

// if(num < 0) {
// 	alert("Negative");
// } else if (num > 0) {
// 	alert("Positive")
// } else {
// 	alert("Neutral");
// };

// let mebleg = Number(prompt("Mebleg:"));
// let aylar = Number(prompt("Aylar:"));
// let sahibkar = confirm("Sahibkarsiniz?");

// let faiz = (sahibkar) ? 1.1 : 1.2;
// let umumiMebleg = mebleg * faiz;
// let ayliqMebleg = umumiMebleg / aylar;

// alert(`Umumi: ${umumiMebleg}, Ayliq: ${ayliqMebleg}`)

// let num = Number(prompt('Enter number:'));

// let message;
// if(num < 0) {
// 	message = "Negative";
// } else {
// 	message = "Positive";
// }
// message = (num < 0) ? "Negative" : "Positive";
// alert(message);

// alert((num < 0) ? "Negative" : "Positive");

// (num < 0) ? (alert("Negative"), console.log("Negative")) : alert("Positive");

// if(num < 0) {
// 	message = "Negative";
// } else if (num > 0) {
// 	message = "Positive";
// } else {
// 	message = "Zero";
// }

// alert((num < 0) ? "Negative" : (num > 0) ? "Positive" : "Zero");

// alert(
//   num < 0
//     ? 'Negative'
//     : num > 0
//     ? 'Positive'
//     : num == 0
//     ? 'Zero'
//     : num == null
//     ? 'Null'
//     : null == undefined
//     ? 'Undefined'
//     : 'Unknown'
// );

// console.log(0 || 1);
// console.log(0 || "x");
// console.log(0 || null || 45n);
// console.log(0 || NaN ** 0 || null);
// console.log(0 || null || undefined);

// console.log(0 && 1);
// console.log(undefined && 0);
// console.log(45n && 0 && null);
// console.log(NaN ** 0 && " " && 0);
// console.log("x" && null && 0);
// console.log(1 && " " && "ASD");

// console.log(0 ?? 1);
// console.log(undefined ?? 0);
// console.log(45n ?? 0 ?? null);
// console.log(null ** 0 ?? " " ?? 0);
// console.log(null ?? "x" ?? 0);
// console.log(1 ?? " " ?? "ASD");

let a = Number(prompt("A:"));
let b = Number(prompt("B:"));
let c = Number(prompt("C:"));

// if(a >= b && a >= c) {
// 	alert(`A: ${a}`)
// } else if(b >= a && b >= c) {
// 	alert(`B: ${b}`)
// } else if(c >= a && c >= b) {
// 	alert(`C: ${c}`)
// }

// if(a >= b) {
// 	if(a >= c) {
// 		if(a == b && a == c) {
// 			alert(`A, B, C: ${a}`)
// 		} else {
// 			alert(`A: ${a}`)
// 		}
// 	} else {
// 		alert(`C: ${c}`)
// 	}
// } else {
// 	if(b >= c) {
// 		alert(`B: ${b}`)
// 	} else {
// 		alert(`C: ${c}`)
// 	}
// }

let max;
let min;
let mid;

if(a >= b && a >= c) {
	max = a;
} else if(b >= a && b >= c) {
	max = b;
} else if(c >= a && c >= b) {
	max = c;
}

if(a <= b && a <= c) {
	min = a;
} else if(b <= a && b <= c) {
	min = b;
} else if(c <= a && c <= b) {
	min = c;
}

mid = (a + b + c) - (max + min);