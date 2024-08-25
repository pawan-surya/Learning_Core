function x(){
    var i = 1;
   setTimeout(function () {
    console.log(i)
   },1000);
}

function y(){
    for (var i = 1; i <=5; i++) {
        console.log("i",i)
    }
}
y();



function z(){
    for (var i = 1; i <=5; i++) {
        function close(n) {
            console.log("N",n)
            setTimeout(() => {
                console.log(i)
            }, n * 1000);
        } 
        close(i)
    }
}
// z();