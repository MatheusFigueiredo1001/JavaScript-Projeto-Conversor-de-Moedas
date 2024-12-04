/*

Operadores matemáticos
+ --> Adição
- --> Substração
/ --> Divisão
* --> Multiplicação
% --> Resto
++ --> Incremento
-- --> Decremento
** --> Exponencial

Operadores de atribuição
= --> Atribuição
+= --> Adição
-= --> Substração
/= --> Divisão
*= --> Multiplicação
%= --> Resto

Operadores de comparação
== --> Engual // Compara o valor, mas não o tipo
=== --> Totalmente engual // Compara o valor e o tipo (Ex: tipo considere diferente números e textos)
!= --> Diferente // Compara o valor, mas não o tipo
!== Totalmente diferente // Compara o valor e o tipo (Ex: tipo considere diferente números e textos)
> --> Maior
< --> Menor
>= --> Maior ou engual
<= --> Menor ou engual

Operadores lógicos
&& --> E --> Pessoa existente
    true && true = true
    true && false = false
    false && false = false

|| --> Ou --> Tanto vez
    true && true = true
    true && false = true
    false && false = false

! --> Negação
    !true = false
    !false = true

    Operadores Type of e Delete
    typeof --> Tipo de dado
    delete

*/

const digiteASenha = false
const useOToken = false
const numeroDaConta = true

if(!(digiteASenha && useOToken && numeroDaConta)){
    console.log("Login efetuado com sucesso")
}

else{
    console.log("Autenticação falhou!")
}