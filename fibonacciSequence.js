
// Problem : Given a number 'n' find the fisrt 'n' element of the fibonacci sequence 
function fibonacci(n) {
    let fib = [0,1];
    if(n== 0){
        return 0;
    }
    if(n== 1){
        return 1;
    }
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i-1] + fib[i -2]
    }
    return fib;
}

function fac(n){
    let num =  1
      for(let i =0; i<n;i++){
        num *= (n -i )
    
      }
      return num
    }
    console.log(fac(4))

    function fib(n) {
        if (n <= 1) return n;
        let a = 0, b = 1, temp;
        for (let i = 2; i <= n; i++) {
            temp = a + b;
            a = b;
            b = temp;
        }
        return b;
    }
    console.log(fib(4)); // Output: 3