const typeUser = ''; //user, guest, bot

switch (typeUser) {
    case 'admin':
        console.log ('Вы - администратор');
        break;
    case 'user':
        console.log ('Вы - пользователь');
        break;
    case 'guest':
        console.log ("Вы - гость");
        break;
    default:
        console.log ('Вы - бот!')
        break;
}


// let age;
// const gender = "Муж";

// age = +age;
// if (!isNaN(age)) {
//     if (age > 18) {
//         console.log ('Вам больше 18 лет');
//     } else if (age < 18) {
//         console.log ("Вам меньше 18 лет");
//     } else if (age == 18) {
//         console.log ("Поздравляем! Вам 18 лет");
//     } else {
//         console.log ("Пожалуйста, укажите ваш возраст");
//     }
// }
// console.log ("Введите корректные данные")



// if (gender.toLocaleLowerCase() === "муж") {
//     console.log ("Вам направо")
// } 
// if (gender.toLocaleLowerCase() === "жен") {
//     console.log ("Вам налево")
// } 

// const isAdmin = false;
// console.log (`Добро пожаловать: ${isAdmin? 'Администатор': 'Пользователь'}`);
