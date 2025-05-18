// Игра угадай число
function firstGame() {
    function guessNumberGame() {
        // Генерируем случайное число от 1 до 100
        const secretNumber = Math.floor(Math.random() * 100) + 1;
        let attempts = 0;
        let userGuess;

        alert('Я загадал число от 1 до 100. Попробуй угадать!');

        do {
            // Запрашиваем у пользователя число
            userGuess = prompt('Введите вашу догадку (число от 1 до 100):');

            // Проверяем, хочет ли пользователь выйти (нажал Cancel)
            if (userGuess === null) {
                alert(`Игра окончена. Загаданное число было: ${secretNumber}`);
                return;
            }

            // Преобразуем в число и проверяем валидность
            userGuess = Number(userGuess);

            if (isNaN(userGuess)) {
                alert('Пожалуйста, введите число!');
                continue;
            }

            if (userGuess < 1 || userGuess > 100) {
                alert('Число должно быть от 1 до 100!');
                continue;
            }

            attempts++;

            // Даем подсказки
            if (userGuess < secretNumber) {
                alert('Загаданное число больше!');
            } else if (userGuess > secretNumber) {
                alert('Загаданное число меньше!');
            }

        } while (userGuess !== secretNumber);

        // Поздравляем с победой
        alert(`Поздравляю! Вы угадали число ${secretNumber} за ${attempts} попыток!`);
    }

    guessNumberGame();
}

// Игра Простая арифметика
function secondGame() {
    function generateMathProblem() {
        const operations = ['+', '-', '*', '/'];
        const operation = operations[Math.floor(Math.random() * operations.length)];

        let num1, num2, answer;

        if (operation === '+') {
            num1 = Math.floor(Math.random() * 10) + 1;
            num2 = Math.floor(Math.random() * 10) + 1;
            answer = num1 + num2;
        } else if (operation === '-') {
            num1 = Math.floor(Math.random() * 10) + 1;
            num2 = Math.floor(Math.random() * 10) + 1;
            answer = num1 - num2;
        } else if (operation === '*') {
            num1 = Math.floor(Math.random() * 10) + 1;
            num2 = Math.floor(Math.random() * 5) + 1;
            answer = num1 * num2;
        } else if (operation === '/') {
            num2 = Math.floor(Math.random() * 10) + 1;
            answer = Math.floor(Math.random() * 10) + 1;
            num1 = num2 * answer;
        }

        return {
            question: `Сколько будет ${num1} ${operation} ${num2}?`,
            correctAnswer: answer
        };
    }

    function startMathQuiz() {
        const problem = generateMathProblem();
        const userAnswer = parseFloat(prompt(problem.question + "\n(Введите ваш ответ)"));

        if (isNaN(userAnswer)) {
            alert("Пожалуйста, введите число!");
        } else if (Math.abs(userAnswer - problem.correctAnswer) < 0.0001) {
            alert("Правильно! 👍");
        } else {
            alert(`Неправильно. Правильный ответ: ${problem.correctAnswer}`);
        }

        if (confirm("Хотите решить еще одну задачу?")) {
            startMathQuiz();
        } else {
            alert("Спасибо за игру!");
        }
    }

// поехали!!!
    startMathQuiz();
}

// Игра «Переверни текст»
function thirdGame() {
    const userGuess = prompt('Введите текст для переворачивания');
    const turnText = userGuess.split('').reverse().join('');
    alert(`Перевернутый текс: ${turnText}`);
}

// Игра «Викторина»
function fourthGame() {
    const jobArray
        = [
        {
            question: "Какой цвет небо?",
            options: ["1. Красный", "2. Синий", "3. Зеленый"],
            correctAnswer: 2 // номер правильного ответа
        },
        {
            question: "Сколько дней в неделе?",
            options: ["1. Шесть", "2. Семь", "3. Восемь"],
            correctAnswer: 2
        },
        {
            question: "Сколько у человека пальцев на одной руке?",
            options: ["1. Четыре", "2. Пять", "3. Шесть"],
            correctAnswer: 2
        }
    ];

    let correctAnswers = 0;

    for (let i = 0; i < jobArray.length; i++) {
        const currentQuestion = jobArray[i];

        // Формируем текст вопроса с вариантами ответов
        let questionText = currentQuestion.question + "\n";
        questionText += currentQuestion.options.join("\n");

        // Запрашиваем ответ у пользователя
        const userAnswer = parseInt(prompt(questionText));

        // Проверяем ответ
        if (userAnswer === currentQuestion.correctAnswer) {
            correctAnswers++;
        }
    }

// Выводим результат
    alert(`Правильных ответов: ${correctAnswers} из ${jobArray.length}`);
}


//Игра 5
function fiveGame() {

    const options = ["камень", "ножницы", "бумага"];

    // Запрос выбора пользователя
    const userChoice = prompt("Выберите: камень, ножницы или бумага?").toLowerCase();

    // Проверка валидности выбора
    if (!options.includes(userChoice)) {
        alert("Пожалуйста, выберите камень, ножницы или бумагу!");
        return;
    }

    // Случайный выбор компьютера
    const computerChoice = options[Math.floor(Math.random() * options.length)];


    let result;

    if (userChoice === computerChoice) {
        result = "Ничья!";
    } else if (
        (userChoice === "камень" && computerChoice === "ножницы") ||
        (userChoice === "ножницы" && computerChoice === "бумага") ||
        (userChoice === "бумага" && computerChoice === "камень")
    ) {
        result = "Вы победили!";
    } else {
        result = "Компьютер победил!";
    }
    alert(result);
}


//Игра 6

const element = document.getElementsByClassName('btn');
const button = element[6];

button.addEventListener('click', function () {
    const element1 = document.querySelector('.box');
    element1.style.backgroundColor = getRandomColor();
});

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
