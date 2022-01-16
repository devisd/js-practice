// You need to calculate amount of tip to give in a restaurant/cafe.
// 	Workflow:
// 1.	User inputs check number. (Use “prompt” function).
// 2.	User inputs tip percentage. (Use “prompt” function)
// 3.	You need to validate the input data: both values should be numbers, total sum can’t be
// a negative number, percentage can’t be negative and bigger than 100.
// 4.	If input data isn’t valid, you should show message “Invalid input data”. (Use “alert” function).
// 5.	You need to calculate tip amount and total sum to pay.
// 6.	Show message: (example). Use ”alert” function
// Check number: 200
// Tip: 15%
// Tip amount: 30
// Total sum to pay:  230


// const checkNumber = prompt("Input check number please");
// const tip = prompt("Input tip percentage please");

// // console.log(checkNumber);
// if (checkNumber === null || tip === null) {
//     alert("Cancel");
// } else {
//     const secondNumber = Number.parseFloat(checkNumber);
//     const secondTip = Number.parseFloat(tip);

//     if (Number.isNaN(secondNumber) || Number.isNaN(secondTip) || secondNumber < 0 || secondTip < 0 || secondTip > 0) {
//         alert("Error");
//     } else {
//         const tipAmount = Number(((secondNumber * secondTip) / 100).toFixed(2));
//         const totalSumToPay = secondNumber + tipAmount;
//         alert(`Check number: ${secondNumber} : Tip ${secondTip}% Tip Amount: ${tipAmount}% Total sum to pay: ${totalSumToPay}`);
//     }
// }

const checkNumber = prompt("Введите сумму чека:");
const tip = prompt("Введите процент чаевых:");
if (checkNumber === null || tip === null) {
    alert("Отмена");
} else {
    const secondNumber = Number.parseFloat(checkNumber);
    const secondTip = Number.parseFloat(tip);
    if (Number.isNaN(secondNumber) || Number.isNaN(secondTip) || secondNumber < 0 || secondTip < 0 || secondTip > 100) {
        alert("Не валидные данные");
    }else {
        const tipAmount = Number(((secondNumber * secondTip) / 100).toFixed(2));
        const totalSumToPay = secondNumber + tipAmount;
        alert(`Check number: ${secondNumber} : Tip ${secondTip}% Tip amount: ${tipAmount}  Total sum to pay: ${totalSumToPay}`);
    }
}