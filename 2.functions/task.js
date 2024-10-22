// Задача №1
function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  let count = arr.length; // Счетчик для получения длины массива

  for (let i = 0; i < arr.length; i++) { // Проходим по массиву циклом
    let element = arr[i];
    if (element > max) { // Элемент больше текущего максимума
      max = element;
    }
    if (element < min) { // Элемент меньше текущего минимума
      min = element;
    }
    sum += element; // Добавляем элемент к сумме
  }

  let avg = sum / count; // Считаем среднее значение
  avg = parseFloat(avg.toFixed(2)); // Преобразуем в целое число
    
  return { min: min, max: max, avg: avg };
}

// Задача №2
function summElementsWorker(...arr) {
  if (!arr || arr.length === 0) {
    return 0;
  } // Проверка на наличие элементов
  let sum = 0;
  
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  
  return sum;
}

function differenceMaxMinWorker(...arr) {
  if (!arr || arr.length === 0) {
    return 0;
  }
  let max = Math.max(...arr);
  let min = Math.min(...arr);
    
  return max - min;
}

function differenceEvenOddWorker(...arr) {
  if (!arr || arr.length === 0) {
    return 0;
  }
  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
    sumEvenElement += arr[i];
    } else {
    sumOddElement += arr[i];
    }
  }

  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if (!arr || arr.length === 0) {
    return 0;
  }
  sumEvenElement = 0;
  countEvenElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
    sumEvenElement += arr[i];
    countEvenElement++;
    }
  }

  return sumEvenElement / countEvenElement;

}

// Задача №3
function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;

  for (const arr of arrOfArr) {
    const result = func(...arr);
    if (result > maxWorkerResult) {
        maxWorkerResult = result;
    }
  }

  return maxWorkerResult;
}
