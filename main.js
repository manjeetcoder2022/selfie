var speech  = window.webkitSpeechRecognition
var recongnition= new speech()
function start(){
    document.getElementById("mic").src="speak.gif"

    setTimeout(function(){
        document.getElementById("mic").src =  "mic.png"
    },5000)
document.getElementById("text_box").innerHTML=""
    recongnition.start()

}

recongnition.onresult= function(event){
    console.log(event)

    var say= event.results[0][0].transcript
    document.getElementById("text_box").innerHTML= say
}

