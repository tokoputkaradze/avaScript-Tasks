// 1. for ციკლი: 0-დან 25-მდე
for (let i = 0; i <= 25; i++) {
    console.log(i);
}

// 2. while ციკლი: 0-დან 20-მდე
let i = 0;
while (i <= 20) {
    console.log(i);
    i++;
}

// 3. do while ციკლი: 0-დან 30-მდე
i = 0;
do {
    console.log(i);
    i++;
} while (i <= 30);

// 4. მასივიდან ლუწი რიცხვების კონსოლში გამოტანა
const numbers = [2, 3, 6, 7, 8, 9, 23, 24, 29];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        console.log(numbers[i]);
    }
}

// 5. currentDay-ის შემოწმება და კვირის დღის გამოყვანა
const currentDay = new Date().getDay();
switch (currentDay) {
    case 0:
        console.log("კვირა");
        break;
    case 1:
        console.log("ორშაბათი");
        break;
    case 2:
        console.log("სამშაბათი");
        break;
    case 3:
        console.log("ოთხშაბათი");
        break;
    case 4:
        console.log("ხუთშაბათი");
        break;
    case 5:
        console.log("პარასკევი");
        break;
    case 6:
        console.log("შაბათი");
        break;
    default:
        console.log("უცნობი დღე");
}