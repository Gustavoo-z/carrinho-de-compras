limpar()

function adicionar() {
    let produto = document.getElementById('produto').value;
    let quantidade = parseInt(document.getElementById('quantidade').value);
    produtoValor = parseFloat(produto.split("R$")[1]);
    produtoNome = produto.split('-')[0];
    console.log(quantidade);
      if(quantidade <= 0 || isNaN(quantidade)) {
        alert('Por favor insira uma quantidade válida!');
      } else {
        let somaAdicionar = produtoValor * quantidade;
        let totalAtual = parseInt(document.getElementById
        ('valor-total').textContent.replace('R$', ''));
        let novoTotal = parseInt(somaAdicionar + totalAtual);
        document.getElementById('valor-total').textContent = `R$${novoTotal}`;
        document.getElementById('quantidade').value = '';
    
        let listaProdutos = document.getElementById('lista-produtos');
        listaProdutos.innerHTML = listaProdutos.innerHTML + `<section class="carrinho__produtos__produto">
        <span class="texto-azul">${quantidade}x</span> ${produtoNome} <span class="texto-azul">R$${somaAdicionar}</span>
      </section>`
    }
}

function limpar() {
    let produtosCarrinho = document.getElementById('lista-produtos');
    produtosCarrinho.innerHTML = '';
    let totalCarrinho = document.getElementById('valor-total');
    totalCarrinho.textContent = 'R$0';
    document.getElementById('quantidade').value = '';
}
