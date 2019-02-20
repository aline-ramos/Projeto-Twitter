const lengthvalor= 140;

let tweetarMensagem=document.getElementById("tweetarMensagem");
let tweetBotao=document.getElementById("tweetBotao");
let listTweet=document.getElementById("tweetList");
let counter= document.getElementById("counter");

tweetBotao.addEventListener("click", tweetar);

function tweetar(event){
let mensagemTweet= document.createElement("li");
mensagemTweet.textContent=tweetarMensagem.value;
tweetList.appendChild(mensagemTweet);
tweetarMensagem.value="";
tweetBotao.setAttribute("disabled", "");

}

tweetarMensagem.addEventListener("keyup", counterUp)

function counterUp(event){
let counterValue = lengthvalor - tweetarMensagem.value.length;
counter.textContent=counterValue;
tweetBotao.removeAttribute("disabled");
if (counterValue === lengthvalor) {
    tweetBotao.setAttribute("disabled", "");    
} else{
    
} 


}

