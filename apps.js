const age = 19;
const gender = "Муж";

if (age >18) {
    console.log ('Вам больше 18 лет');
} else {
    console.log ("Вам меньше 18 лет")
}

if (gender.toLocaleLowerCase() === "муж") {
    console.log ("Вам направо")
} 
if (gender.toLocaleLowerCase() === "жен") {
    console.log ("Вам налево")
} 
