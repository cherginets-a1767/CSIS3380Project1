/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
let quotes = [];
let quote1 = {quote:"Bitcoin is a remarkable cryptographic achievement and the ability to create something that is not duplicable in the digital world has enormous value", 
source:"Eric Schmidt"};
let quote2 = {quote:"Bitcoin will do to banks what email did to the postal industry", 
source:"Rick Falkvinge"};
let quote3 = {quote:"Bitcoin is a technological tour de force", source:"Bill Gates", year:"2013"};
let quote4 = {quote:"The root problem with conventional currency is all the trust that’s required to make it work. The central bank must be trusted not to debase the currency, but the history of fiat currencies is full of breaches of that trust.", 
source:"Satoshi Nakamoto", citation:"bitcointalk.org",year:"2009"};
let quote5 = {quote:"I am very intrigued by Bitcoin. It has all the signs. Paradigm shift, hackers love it, yet it is described as a toy. Just like microcomputers.", 
source:"Paul Graham"};
quotes.push(quote1,quote2,quote3,quote4,quote5);
// console.log(quotes);
/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
  let roll = Math.floor(Math.random() * 5);
  // console.log(roll);
  let pick = quotes[roll];
  return pick;
}

// console.log(getRandomQuote());
/***
 * `printQuote` function
***/
function printQuote(){

// call method
let RandomQuote = getRandomQuote();
console.log(RandomQuote);
console.log(RandomQuote.source);

// string building
let PtoHTML1 = "<p class='quote'>" + RandomQuote.quote + "<p class='source'>" +
RandomQuote.source;

// check for citation
if (RandomQuote.hasOwnProperty("citation")) {

  PtoHTML1+= "<span class='citation'>" + RandomQuote.citation + "</span>";
  
}

// check for year
if (RandomQuote.hasOwnProperty("year")) {

  PtoHTML1+= "<span class='year'>" + RandomQuote.year + "</span>";
}

PtoHTML1+= "</p>";

document.getElementById('quote-box').innerHTML = PtoHTML1;

}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);