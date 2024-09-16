function calcula() {
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const c = parseFloat(document.getElementById('c').value);
    let x1;
    let x2;
    const delta= (b*b) * (-4 * a * c);
    const raiz_delta = Math.sqrt(delta);

    if(delta > 0){
        document.getElementById('res_1'). innerText = "não há raizes reais"
    }else if(delta > 0){
        x1 = (-b+raiz_delta)/(2*a);
        x2 = (-b-raiz_delta)/(2*a);
        document.getElementById('res_1').innerText = "valor de x1 = " + x1;
        document.getElementById('res_2'). innerText = "valor de x2 = " + x2;
    }else{
        x1 = (-b)/(2*a);
        document.getElementById('re_1').innerText="valor da única raiz é: = " + x1;
    }


}
    