let valorTotal = 0;

    function adicionarProduto() {
      const produto = document.getElementById('produto').value;
      const quantidade = parseInt(document.getElementById('quantidade').value);
      const   
 valor = parseFloat(document.getElementById('valor').value);   


      if (produto && quantidade && valor) {
        const valorItem = quantidade * valor;

        // Cria um objeto para representar o item
        const item = {
          produto: produto,
          quantidade: quantidade,
          valor: valor,
          valorTotal: valorItem
        };

        const li = document.createElement('li');
        li.textContent = `${produto} - ${quantidade} x R$ ${valor.toFixed(2)} = R$ ${valorItem.toFixed(2)}`;

        const botaoExcluir = document.createElement('button');
        botaoExcluir.textContent = 'Excluir';
        botaoExcluir.addEventListener('click', () => {
          valorTotal -= item.valorTotal;
          document.getElementById('valor-total').textContent = `R$ ${valorTotal.toFixed(2)}`;
          li.remove();
          botaoExcluir.classList.add('botao-excluir')
        });

        document.body.appendChild(botaoExcluir)

        li.appendChild(botaoExcluir);

        document.getElementById('lista-compras').appendChild(li);

        valorTotal += valorItem;
        document.getElementById('valor-total').textContent = `R$ ${valorTotal.toFixed(2)}`;

        // Limpar os campos
        document.getElementById('produto').value = '';
        document.getElementById('quantidade').value = '';
        document.getElementById('valor').value = '';
      } else {
        alert('Por favor, preencha todos os campos.');
      }
    }