const quoteText = document.querySelector(".quote")
const quoteBtn = document.querySelector("button")
const authorName = document.querySelector(".name")
const animeName = document.querySelector(".anime")
const speechBtn = document.querySelector(".sound")
const copyBtn = document.querySelector(".copy")
const twitterBtn = document.querySelector(".twitter")
const synth = document.querySelector(".sound")
const API_URL = "https://animechan.vercel.app/api/random"

function randomQuote() {
    quoteBtn.classList.add("loading");
    quoteBtn.innerText = "Loading Quote...";
    fetch(API_URL)
        .then(response => response.json())
        .then(result => {
            quoteText.innerText = result.quote;
            authorName.innerText = result.character;
            animeName.innerText = ` (${result.anime})`;
            quoteBtn.classList.remove("loading");
            quoteBtn.innerText = "New Quote";
        });
}

speechBtn.addEventListener("click", () => {
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText} from ${animeName.innerText}`)
    speechSynthesis.speak(utterance)
})

copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(quoteText.innerText);
});

twitterBtn.addEventListener("click", () => {
    let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
    window.open(tweetUrl, "_blank");
});

quoteBtn.addEventListener("click", randomQuote);