// let inp = prompt("Are you married? (yes/no):");
// let message;

// if(inp == "yes") {
// 	message = "Congratulations";
// } else if(inp == "no") {
// 	message = "One day insAllah";
// } else {
// 	message = "Unknown answer";
// }

// message = (inp == "yes") ? "Congratulations" : (inp == "no") ? "On eday" : "Unknown";

// switch(inp) {
// 	case "yes":
// 		message = "Congratulations";
// 		break;
// 	case "NO":
// 	case "No":
// 	case "nO":
// 	case "no":
// 		message = "One day";
// 		break;
// 	case "he":
// 	case "yox":
// 	default:
// 		message = "Unknown answer";
// 		break;
// }

// alert(message);

// let answer = prompt("2 + 2 = ?");

// switch(answer) {
// 	case "3":
// 		alert("Less");
// 		break;
// 	case "5":
// 		alert("Bigger");
// 		break;
// 	case "4":
// 		alert("Correct");
// 		break;
// 	default:
// 		alert("Unknown answer");
// 		break;
// }

// let n = null;

// while(n == null || n == "" || isNaN(Number(n))) {
// 	n = prompt("Enter n:");
// }

let n = Number(prompt("Enter n:"));

let message = "";

while(n > 0) {
	if(n >= 10) {
		message = " - " + (n % 10) + message;
	} else {
		message = (n % 10) + message;
	}
	n = (n - (n % 10)) / 10;
}

alert(message);

// 527319
// 5 - 2 - 7 - 3 - 1 - 9