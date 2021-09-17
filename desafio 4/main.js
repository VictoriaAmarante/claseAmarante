// CALCULADORA; EL menor o igual a 0 es para que solo me pida una vez cada numero

let number1 = parseInt(prompt('CALCULADORA \nIngrese el primer numero para sumar \nSolo se podra hacer una operacion'))
for (let i = 0; i < 1; i++) {
    let number2 = parseInt(prompt('CALCULADORA \nIngrese el segundo numero para sumar \nSolo se podra hacer una operacion'))
    let suma = number1 + number2;
    alert('Su resultado es: ' + suma);
}

let captcha = parseInt(prompt('CAPTCHA \n Ingrese un numero entre 10 y 50'))
for (let i = 0; i < 1; i++) {
    if (captcha > 10 && captcha < 50) {
        alert('Acceso concedido')
    } else  {
        alert('Acceso Denegado')
        console.log('Eres un bot, aun así te dejaremos hacer el login.')   
    } 
}

// LOGIN 


let user = ''

while (user.toLowerCase() != 'exit') {
    user = prompt('Ingrese se nombre de usuario \nEscribirlo en MAYUS \nEjemplo: JULIAN \nEscriba EXIT para salir')
    if (user.toLowerCase() == 'daniel') {
        let password = prompt('Ingrese su password \nEscribirlo en MAYUS (No distingue minuscula y mayuscula) \nEjemplo: CONTRASEÑA5689')
        switch (password.toLowerCase()) {
            case 'danitupak':
                alert('Bienvenido DANIEL')
                break;
            default:
                alert('No eres DANIEL')
                break;
        }
    } else if (user.toLowerCase() == 'ezequiel') {
        let password = prompt('Ingrese su password \nEscribirlo en MAYUS (No distingue minuscula y mayuscula) \nEjemplo: CONTRASEÑA5689')
        switch(password.toLowerCase()) {
            case 'ezelomas':
                alert('Bienvenido Ezequiel')
                break;
            default:
                alert('no sos lo mas ')
                break;
        }
    } 
    else {
        alert('Usuario Desconocido')
    }
}
