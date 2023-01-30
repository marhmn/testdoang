

    const prompt = require('prompt-sync')({sigint: true});

     

    const num1 = prompt('Enter a first number: ');

    const num2 = prompt('Enter a second number: ');
    
    var z = Number(num1) + Number(num2);


    console.log('first number + second number =');

    console.log(Number(z));

    if (Number(z)%2==0){
        console.log('bilangan Genap');
    }else{
        console.log('bilangan Ganjil');
    }

