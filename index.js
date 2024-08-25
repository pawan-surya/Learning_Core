
function attchEventLister(){
    let count = 0;
    document.getElementById("clickMe").addEventListener("click",function () {
        console.log("Button Cliked",count++)
    })
}
attchEventLister();