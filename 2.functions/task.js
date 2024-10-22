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
  if (!arr || arr.length === 0) return 0; // Проверка на наличие элементов
  let sum = 0;
  
  if (arr.length) {
    arr.forEach(element => { // Реализуем стрелочную функцию для подсчета элементов
      sum += element;
    });
  }
  
  return sum
}

function differenceMaxMinWorker(...arr) {
  if (!arr || arr.length === 0) return 0;
  let max = 0;
  let min = 0;

  if (arr.length) {
    arr.forEach(element => {
      if (element < min) {
        min = element;
      }
      if (element > max) {
        max = element;
      }
    });
  }
  
  return max - min;
}

function differenceEvenOddWorker(...arr) {
  if (!arr || arr.length === 0) return 0;
  let sumEvenElement = 0;
  let sumOddElement = 0;

  if (arr.length) { // Определяем четное или нечетное число
    arr.forEach(element => {
      if (element % 2 === 0) {
        sumEvenElement += element;
      } else {
        sumOddElement += element;
      }
    })
  }

  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if (!arr || arr.length === 0) return 0;
  sumEvenElement = 0;
  countEvenElement = 0;

  if (arr.lenght) {
    arr.forEach(element => {
      if (element % 2 === 0) {
        sumEvenElement += element;
        countEvenElement ++;
      }
    })
  }

  return sumEvenElement / countEvenElement;

}

// Задача №3
function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;

  for (let i = 0; i < arrOfArr.lenght; i++) {
    const workerResult = func(...arr);
    if (workerResult > maxWorkerResult) {
      maxWorkerResult = workerResult;
    }
  }

  return maxWorkerResult;
}
