"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let dis = b ** -4 * a * c;
	if (dis === 0) {
		arr[0] = -b / (2 * a);
	} else if (dis > 0) {
		arr[0] = (-b + Math.sqrt(d)) / (-b - Math.sqrt(d)) / (2 * a);
		arr[1] = (-b - Math.sqrt(d)) / (2 * a)
	} else if (dis < 0) {
		arr = []
	}
	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  // Преобразуем данные в число  
  percent = Number(percent);
  contribution = Number(contribution);
  amount = Number(amount);
  countMonths = Number(countMonths);

  // В остальных случаях возвращаем false
  if (isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)) {
    return false;
  }
  
  // Преобразуем процентную ставку  
  let convertedProcent = (percent / 100) / 12;

  // Считаем тело кредита
  let creditBody = amount - contribution;

  // Рассчитываем ежемесячный платеж
  let monthlyPayment = creditBody * (convertedProcent + (convertedProcent / (((1 + convertedProcent) ** countMonths) - 1)));

  // Cчитаем и округляем общую сумму
  let totalAmount = (monthlyPayment * countMonths).toFixed(2);

  // Возвращаем результат числового типа
  return Number(totalAmount);
}