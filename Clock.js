function updateDate() {
    var date = new Date();
    var setTime = document.getElementById("IdH1SetTime");
      setTime.innerHTML=addZero(date.getHours()) + " : " + addZero(date.getMinutes()) + " : " + addZero(date.getSeconds()); 
    var setDate =document.getElementById("IdPSetDate");
    setDate.innerHTML=addZero(date.getDate()) +"-"+ addZero(parseInt(date.getMonth()+1) ) + "-" + date.getFullYear();

}
function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

setInterval(updateDate,100);
onload =updateDate();

function getColor(){
var getColor = document.getElementById("IdSetColor").value;
localStorage.setItem("Color",getColor);
 document.getElementById("IdArticleTime").style.background = localStorage.getItem("Color");
 document.getElementById("IdBody").style.background = localStorage.getItem("Color") ;
}
function setColor(){
    document.getElementById("IdSetColor").value= localStorage.getItem("Color");
  
    document.getElementById("IdArticleTime").style.background = localStorage.getItem("Color");
    document.getElementById("IdBody").style.background = localStorage.getItem("Color")  ;
 

}
setInterval(setColor,3000);
