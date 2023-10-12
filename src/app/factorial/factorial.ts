export function factorial(number : number) {
    let resultado = 0;
    if (number >= 0 && number <= 15) {
        resultado = 1;
        if (number > 0) {
            for (let i = 1; i <= number; i++) {
                resultado = resultado * i;
            }
        }
    }
    return resultado;
}