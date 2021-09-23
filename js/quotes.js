const quotes = [
    {quote : "시간은 금이다.", author : "벤자민 프랭클린"},
    {quote : "티끌모아 티끌.", author : "박명수"},
    {quote : "왜 굳이 의미를 찾으려 하는가? 인생은 욕망이지, 의미가 아니다.", author : "Charlie Chaplin"},
    {quote : "계획 없는 목표는 한낱 꿈에 불과하다.", author : "생택쥐페리"}
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
console.log(todaysQuote);