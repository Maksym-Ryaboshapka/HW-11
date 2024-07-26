// Task 1

const bankAccount = {
  ownerName: "Maksym",
  accountNumber: 1,
  balance: 580,

  deposit() {
    let quantityOfMoney;

    do {
      quantityOfMoney = Number(prompt("Введіть на скільки поповнити рахунок"));

      if (isNaN(quantityOfMoney)) {
        alert("Ви введли не число!");
      } else if (quantityOfMoney <= 0) {
        alert("Ви не можете поповнити рахунок на число менше або рівне нулю!");
      } else {
        this.balance += quantityOfMoney;

        alert(
          `Рахунок успішно попвнено на ${quantityOfMoney}грн, тепер у вас на рахунку ${this.balance}грн`
        );
      }
    } while (quantityOfMoney <= 0 || isNaN(quantityOfMoney));

    return this.balance;
  },

  withdraw() {
    let quantityOfMoney;

    do {
      quantityOfMoney = Number(prompt("Введіть скільки грошей потрібно зняти"));

      if (isNaN(quantityOfMoney)) {
        alert("Ви введли не число!");
      } else if (quantityOfMoney <= 0) {
        alert("Ви не можете зняти кількість грошей яка менша або рівна нулю!");
      } else if (quantityOfMoney > this.balance) {
        alert("Ви не можете зняти більше грошей ніж на вашому рахунку!");
      } else {
        this.balance -= quantityOfMoney;

        alert(
          `З вашого рахунку знято ${quantityOfMoney}грн, тепер у вас на рахунку ${this.balance}грн`
        );
      }
    } while (
      quantityOfMoney <= 0 ||
      isNaN(quantityOfMoney) ||
      quantityOfMoney > this.balance
    );

    return this.balance;
  },

  chooseOperation() {
    let choice;

    do {
      choice = prompt(
        `Оберіть операцию яку хочете виконати\nВведіть "поповнити" щоб поповнити рахунок\nВведіть "зняти" щоб зняти гроші з рахунку\nНа вашому рахунку ${this.balance}грн`
      ).toLowerCase();

      if (choice === "поповнити") {
        break;
      } else if (choice === "зняти") {
        break;
      } else {
        alert("Ви обрали невірну операцію");
      }
    } while (choice !== "поповнити" || choice !== "зняти");

    return choice;
  },
};

const operation = bankAccount.chooseOperation();

if (operation === "поповнити") {
  bankAccount.deposit();
} else {
  bankAccount.withdraw();
}

// Task 2

let temperature;

do {
  temperature = prompt("Введіть температуру");

  if (temperature !== null) {
    temperature = Number(temperature);

    if (isNaN(temperature)) {
      alert("Ви ввели не число!");
    }
  } else {
    alert("Ви ввели не число!");
  }
} while (isNaN(temperature) || temperature === null);

console.log(temperature);

const weather = {
  temperature,
  humidity: 45,
  windSpeed: 7,

  checkTemperature() {
    let isTemperatureNegative;

    if (this.temperature >= 0) {
      isTemperatureNegative = false;
    } else {
      isTemperatureNegative = true;
    }

    return isTemperatureNegative;
  },

  showMessage(callback) {
    let message;

    if (callback === true) {
      message = "Температура нижче 0";
    } else {
      message = "Температура вище або рівна 0";
    }

    return alert(message);
  },
};

weather.showMessage(weather.checkTemperature());

// Task 3

const user = {
  name: "Test",
  email: "test@gmail.com",
  password: "qwerty123",

  login(email, password) {
    let message;

    if (email !== this.email || password !== this.password) {
      message = "Пошта або пароль не вірні! Спробуйте ще раз";
    } else {
      message = "Ви успішно увійшли в аккаунт";
    }

    return alert(message);
  },
};

const email = prompt("Введіть пошту від аккаунта");
const password = prompt("Введіть пароль від аккаунта");

user.login(email, password);

// Task 4

const movie = {
  title: "Name of movie",
  director: "Vasya",
  year: 2005,
  rating: 8,

  checkRating() {
    let message;

    if (this.rating <= 8) {
      message = "Рейтинг фільму менший або рівний 8";
    } else {
      message = "Рейтинг фільму більший за 8";
    }

    return alert(message);
  }
};

movie.checkRating();