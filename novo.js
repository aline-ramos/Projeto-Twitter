const lengthvalor = 140;

let tweetarMensagem = document.getElementById("tweetarMensagem");
let tweetBotao = document.getElementById("tweetBotao");
let listTweet = document.getElementById("tweetList");
let counter = document.getElementById("counter");

tweetBotao.addEventListener("click", tweetar);
function tweetar(event) {
    let mensagemTweet = document.createElement("li");
    mensagemTweet.textContent = tweetarMensagem.value;
    tweetList.appendChild(mensagemTweet);
    tweetarMensagem.value = "";
    tweetBotao.setAttribute("disabled", "");
}
tweetarMensagem.addEventListener("keyup", counterUp)
function counterUp(event) {
    let counterValue = lengthvalor - tweetarMensagem.value.length;
    counter.textContent = counterValue;
    tweetBotao.removeAttribute("disabled");
    if (counterValue === lengthvalor || counterValue < 0) {
        tweetBotao.setAttribute("disabled", "");
    } else {
}
    if (counterValue < 20 && counterValue >= 10) {
        counter.setAttribute("class", "counter-blue");
} else if (counterValue < 10) {
        counter.setAttribute("class", "counter-red");
} else {
        counter.setAttribute("class", "counter-white");
    }
}
function autoResize() {
    objTextArea = document.getElementById('tweetarMensagem');
    while (objTextArea.scrollHeight > objTextArea.offsetHeight) {
        objTextArea.rows += 1;
    }
}





