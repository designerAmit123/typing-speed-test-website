const setOfWords =["My name is Amit Arun Kadu and I am a UI Developer.", 
"I have a Bachelor's of Commerce Degree from Mumbai University.", 
"I also have Diploma in UI/UX Design from Edit Institute."];

const msg = document.getElementById('msg');

const typedWords = document.getElementById('myWords');

const btn = document.getElementById('btn');

let startTime, endTime;

const playGame = () => {
  let randomNumber = Math.floor(Math.random()*setOfWords.length);
  
  msg.innerText = setOfWords[randomNumber];
  
  let date = new Date();
  startTime = date.getTime();
  btn.innerText = "Done";
}

const endPlay = () => {
  let date = new Date();
  endTime = date.getTime();
  let totalTime = ((endTime - startTime)/1000);
  let totalStr = typedWords.value;
  let wordCount = wordCounter(totalStr);
  
  let speed = Math.round((wordCount/totalTime)*60);
  
  let finalMsg = "You typed total at " + speed + " words per minute. ";
  
  finalMsg += compareWords(msg.innerText, totalStr);
  
  msg.innerText = finalMsg;
}

const compareWords = (str1, str2) => {
  let words1 = str1.split(" ");
  let words2 = str2.split(" ");
  let cnt = 0;
  
  words1.forEach(function(item, index){
    if(item == words2[index]){
      cnt++;
    }
  })
  
  let errorWords = (words1.length - cnt);
  
  return (cnt + " correct out of " + words1.length + " words and the total number of errors are " + errorWords + ".");
}

const wordCounter = (str) => {
  let response = str.split(" ").length;
  return response;
}

btn.addEventListener('click', function(){
  if(this.innerText == "Start"){
    
    typedWords.disabled = false;
    playGame();
  }else if(this.innerText == "Done") {
    typedWords.disabled = true;
    btn.innerText = "Start";
    endPlay();
    typedWords.value = "";
  }
});
