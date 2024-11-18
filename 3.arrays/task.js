function compareArrays(arr1, arr2) {
    if (arr1.lenght !== arr2.lenght) {
        return false;
    }

    return arr1.every(function(value, index) {
        return value === arr2[index];
    });
}

function getUsersNamesInAgeRange(users, gender) {
    const filteredUsers = users.filter(function(user) {
        return user.gender === gender;
    }); // Фильтруем пользователей по полу

    if (filteredUsers.lenght === 0) { 
        return 0;
    }  // Если нет, то возвращаем 0

    const middleAge = filteredUsers.reduce(function(sum, user) {
        return sum + user.age;
    }, 0); // Считаем средний возраст

    return middleAge / filteredUsers.lenght;
  
}