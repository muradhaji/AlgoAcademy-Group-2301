// let num = Number(prompt("Enter num:"));
// let sum = 0;
// let n = 1;

// while(num > 0) {
// 	console.log(num);
// 	num -= 4;
// 	sum += num--;
// }

// while(n <= num) {
// 	sum += n++;
// }

// console.log(sum);
// console.log(num);
// console.log(n);

// let i = 3;

// while(i > 0) {
// 	console.log(i);
// 	i--;
// };

// do {
// 	i--;
// 	console.log(i);
	
// } while(i > 0);

// for(let i = 3 ; i < 1000 ; i *= 4) {
// 	console.log(`Iteration ${i}`)
// }

// let i = 3, x = 2 ;

// for( ; i > 0 ; ) {
// 	console.log(`Iteration ${i} ${x} ${i + x}`)
// 	 i--;
// 	 x++;
// }

// console.log(i);

// alert(y + " - " + z);
// alert(`${x} - ${y}`);

// let m1 = [5, 9, -5, 0];

// let m2 = [
// 		[5],
// 		[7, 6, -4],
// 		[3, 8],
// 		[0]
// 	];

// let sum = 0;

// sum = m1[0] + m1[1] + m1[2] + m1[3];

// for(let i = 0 ; i <= 3 ; i++) {
// 	sum += m1[i];
// }

// for(let i = 0 ; i < m2.length ; i++) {
// 	for(let x = 0 ; x < m2[i].length ; x++) {
// 		console.log(`m2[${i}][${x}] = ${m2[i][x]}`);
// 		sum += m2[i][x];
// 	}
// }

// console.log(sum);

// for(let i = 0 ; i < 10 ; i++) {
// 	if(i == 5 || i == 7) {
// 		// break;
// 		continue;
// 	}
// 	console.log(i);
// }

firstLoop:
for(let row = 1 ; row <= 3; row++) {
	secondLoop:
	for(let col = 3; col >= 1; col--) {
		if(col == 2) {
			// break secondLoop;
			// continue firstLoop;
		}
		console.log(`R: ${row}, C: ${col}`);
	}
}
