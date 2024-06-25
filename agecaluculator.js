const btnEl = document.getElementById("btn");
const dobEl = document.getElementById("dob");
const resEl = document.getElementById("result");

const quotes = [
    "Age is just a number.",
    "You are as young as you feel.",
    "Life is a journey, not a destination.",
    "Embrace the aging process.",
    "Age brings wisdom and experience.",
    "Celebrate every year of life.",
    "Live your life and forget your age.",
    "Every age can be enchanting, provided you live within it.",
    "Growing old is mandatory, but growing up is optional.",
    "You don’t get older, you get better.",
    "Age is an issue of mind over matter. If you don't mind, it doesn't matter.",
    "The longer I live, the more I realize that life is all about growth and the realization of potential.",
    "Count your age by friends, not years. Count your life by smiles, not tears.",
    "Youth has no age.",
    "You are never too old to set another goal or to dream a new dream.",
    "Aging is not lost youth but a new stage of opportunity and strength.",
    "Do not regret growing older. It is a privilege denied to many.",
    "You don't stop laughing when you grow old, you grow old when you stop laughing.",
    "Age is merely the number of years the world has been enjoying you. Cheers to you!",
    "With age comes a deeper understanding of life and a greater appreciation for the little things.",
    "The best way to predict the future is to create it.",
    "Do not wait to strike till the iron is hot; but make it hot by striking.",
    "The only limit to our realization of tomorrow is our doubts of today.",
    "It does not matter how slowly you go as long as you do not stop.",
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
    "The only way to do great work is to love what you do.",
    "Believe you can and you're halfway there.",
    "Your time is limited, don't waste it living someone else's life.",
    "Don't watch the clock; do what it does. Keep going.",
    "You miss 100% of the shots you don't take."  
];

function calculateAge() {
    const bdayValue = dobEl.value;
    if (bdayValue === "") {
        alert("Please enter your birthday!");
    } else {
        const age = getAge(bdayValue);
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        resEl.innerText = `Your age is ${age.years} ${age.years > 1 ? "years" : "year"}, ${age.months} ${age.months > 1 ? "months" : "month"}, and ${age.days} ${age.days > 1 ? "days" : "day"} old.\n\nHey, remember: "${randomQuote}"`;
        resEl.classList.add('show');
    }
}

function getAge(bdayValue) {
    const currentDate = new Date();
    const bdayDate = new Date(bdayValue);
    let years = currentDate.getFullYear() - bdayDate.getFullYear();
    let months = currentDate.getMonth() - bdayDate.getMonth();
    let days = currentDate.getDate() - bdayDate.getDate();

    if (days < 0) {
        months--;
        days += new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    return { years, months, days };
}

btnEl.addEventListener("click", calculateAge);
