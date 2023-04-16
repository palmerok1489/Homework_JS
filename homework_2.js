let money = prompt("Ваш месячный доход?");
let expenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую?");
let amount = prompt("Во сколько обойдуться обязательые статьи расходов?");
let deposit = confirm("Есть ли у вас вклад в банке?");
if (result){
    document.querySelector("#result").textContent = "Да";
} else {
    document.querySelector("#result").textContent = "Нет";
}

let budgetMonth = 12875.3;
console.log(budgetMonth - 3129.8);
let purpose = 12824.4 ;
console.log(Math.ceil(purpose));
let budgetDay = -1;
console.log(Math.floor(budgetDay));
if (budgetDay > 100000){
    console.log("У вас высокиий уровень дохода");
} else if (budgetDay >= 30000){
    console.log("У вас средний уровень дохода");
} else if (budgetDay <= 30000 && budgetDay >=0 ) {
    console.log("К сожалению у вас уровень дохода ниже среднего");
} else if (budgetDay < 0) {
    console.log("что то пошло не так");
}

