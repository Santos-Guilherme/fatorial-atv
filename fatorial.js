function fatorial(n) {
    if (n < 0) return undefined ;
    if (n == 0 || n == 1) return 1;
    
     let resultado = 1

    for (let i = 1; i <= n; i++) {
       
        resultado *= i
    }
    return resultado
    

}   
console.log(fatorial(5))

module.exports = fatorial;