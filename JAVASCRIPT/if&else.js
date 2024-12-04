/*
If = se;
Else = se não;
Else if = Meio termo, ao colocar condições que não se aplicam no if e antes de vir o else

Operadores:
> maior que
< menor que
== engualzinho

Operadores ternários (Apenas para códigos bem pequenos)
? --> if (se)
: --> else (se não)
&& --> if sem o else
*/

const temperature = 42

if(temperature === 36){
    console.log("Está tudo bem!")
}
else if(temperature > 36 && temperature <= 40){
    console.log("Você está febril!")
}
else if(temperature > 40){
    console.log("Você está com muita febre!")
}
else{
    console.log("Você está com hipotermia!")
}
