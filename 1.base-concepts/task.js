"use strict"
function solveEquation(a, b, c) {
    let arr = [];    
    // Вычисляем дискриминант
    let discriminant = b ** 2 - 4 * a * c;
    // Проверяем значение дискриминанта
    if (discriminant < 0) {
        return arr;
    } else if (discriminant === 0) {
        let root = -b / (2 * a);
        arr.push(root);
        return arr;
    } else {
        // Два корня
        let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        arr.push(root1, root2);
        return arr;
    }
}

// Задача 2

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