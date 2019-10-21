


function calculateCalories() {
	let currentWeight = prompt("Какой Ваш вес сейчас?");
	let desireWeight = prompt("Желаемый вес?");
	let weekCalculator = prompt("За сколько недель?");
	let firstResult = (((7700 * (currentWeight - desireWeight)) / weekCalculator) / 7);
	let secondResult = (((7700 * (desireWeight - currentWeight)) / weekCalculator) / 7);
	if (currentWeight > desireWeight) {
		alert("Чтоб получить желаемый вес , вы должны терять" + firstResult + "калории в день");
		let confirmation = confirm("Посчитать еще раз?");
		if (confirmation === true) {
			calculateCalories();
			return firstResult;
		}
	} else {
		alert("Чтоб получить желаемый вес , вы должны набирать" + secondResult + "калории в день");
		let confirmation = confirm("Посчитать еще раз?");
		if (confirmation === true) {
			calculateCalories();
			return secondResult;		
		}
	}
}


let calculator = calculateCalories();	

