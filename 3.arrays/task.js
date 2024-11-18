// Задача №1
function compareArrays(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every(function(value, index) {
        return value === arr2[index];
    });
}


// Задача №2
function getUsersNamesInAgeRange(users, gender) {    
    const filteredUsers = users.filter(function(user) {
        return user.gender === gender; // Фильтрация по полу
    });
        
    if (filteredUsers.length === 0) {
        return 0; // Если нет, возвращаем 0
    }
    
    const totalAge = filteredUsers.reduce(function(sum, user) {
        return sum + user.age; 
    }, 0); // Вычисляем средний возраст
        
    return Math.round(totalAge / filteredUsers.length * 10) / 10; // Средний возраст, с округлением до 1 знака
}