const quotes = [
    {
        quote: "Be yourself; everyone else is already taken.",
        author: "Oscar Wilde",
    },
    {
        quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        author: "Albert Einstein",
    }, 
    {
        quote: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
        author: "Bernard M. Baruch",
    },
    {
        quote: "Never bend your head. Always hold it high. Look the world straight in the eye.",
        author: "Helen Keller",
    },
    {
        quote: "Limit your 'always' and your 'nevers'.",
        author: "Amy Poehler​​",
    },
    {
        quote: "Try to be a rainbow in someone else's cloud.",
        author: "Maya Angelou",
    },
    {
        quote: "You do not find the happy life. You make it.",
        author: "Camilla Eyring Kimball",
    },
    {
        quote: "Sometimes you will never know the value of a moment, until it becomes a memory.",
        author: "Dr. Seuss",
    },
    {
        quote: "You don't always need a plan. Sometimes you just need to breathe, trust, let go and see what happens.",
        author: "Mandy Hale",
    },
    {
        quote: "Memories of our lives, of our works and our deeds will continue in others.",
        author: "Rosa Parks",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;