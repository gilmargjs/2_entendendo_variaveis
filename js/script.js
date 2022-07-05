    // tipos primitivos
    // String,Number,Boolean,undefined

    // Boolean
    var vouF = false;
    console.log(typeof (vouF));

    // Number
    var numeroQualquer = 1;
    console.log(typeof (numeroQualquer));

    // String
    var nome = 'ola você';
    console.log(typeof (nome));

    // Declaração de variáveis

    // escopo global e local,pode ter seu valor alterado, se não tiver um valor inicial será tratado com null;
    var variavel = 'gilmar';
    variavel = 'gilmar jose';

    // escopo local de bloco,pode ter o seu valor alterado se não tiver um valor inicial será tratado como null;
    let varivavel2 = 'gimargjs';
    varivavel2 = 'gilmarjosesilva'
    let variavel3 = 'todos';
    console.log(variavel3)
    // escopo local de bloco,somente leitura, o valor inicial é obrigatório e não pode ser alterado.
    const nos = "eu";
    console.log(nos)
    // desta forma dará um erro pois const não pode ser alterada 
    // nome = 'eu dinovo';

    // escopo em javascript define a limitação e visibilidadede um bloco de código

    // Escopo Global - quando a variável é declarada fora de bloco, sua visibilidade fica disponível  em todo o código.

    // Escopo Local - quando a variável é declarada dentro de um bloco , sua visibilidade pode ficar disponível ou não.


    var escopoGlobal = "global";
    console.log(escopoGlobal);

    function escopoLocal() {
        let escopoLocalInterno = 'local';
        var escopoLocalInterno1 = 'local1';

    
        console.log(escopoLocalInterno1)
        console.log(escopoLocalInterno)
    }
    
    escopoLocal()

    // comparação
    var comparacao = 0 == 0;
    console.log(comparacao)

    var comparaca2 = '0' === 0;
    console.log(comparaca2) 

