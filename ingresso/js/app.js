function comprar() {
    let tipo = document.getElementById('tipo-ingresso');
    let qtd = parseInt(document.getElementById('qtd').value);


    if (qtd <= 0) {
        alert('insira um numero valido')
        return
    } else if ('pista' == tipo.value) {
        comprarPista(qtd)
    } else if ('superior' == tipo.value) {
        comprarSuperior(qtd)
    } else if ('inferior' == tipo.value)
        comprarinferior(qtd)
}

function comprarPista(qtd) {
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if (qtd > qtdPista) {
        alert('Quantidade indisponível para tipo pista');
    } else {

        let qtdPistatotal = qtdPista - qtd;
        document.getElementById('qtd-pista').textContent = qtdPistatotal;
        alert('Compra realizada com sucesso!');
    }
}

function comprarSuperior(qtd) {
    let qtdPista = parseInt(document.getElementById('qtd-superior').textContent);
    if (qtd > qtdPista) {
        alert('Quantidade indisponível para tipo pista');
    } else {

        let qtdPistatotal = qtdPista - qtd;
        document.getElementById('qtd-superior').textContent = qtdPistatotal;
        alert('Compra realizada com sucesso!');
    }
}

function comprarinferior(qtd) {
    let qtdPista = parseInt(document.getElementById('qtd-inferior').textContent);
    if (qtd > qtdPista) {
        alert('Quantidade indisponível para tipo pista');
    } else {

        let qtdPistatotal = qtdPista - qtd;
        document.getElementById('qtd-inferior').textContent = qtdPistatotal;
        alert('Compra realizada com sucesso!');
    }
}
