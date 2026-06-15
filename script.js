// ==========================================================================
// 1. LÓGICA DE SEGURANÇA DIGITAL (Muda para aba segura)
// ==========================================================================
function saidaRapida() {
    window.location.href = "https://www.google.com";
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        saidaRapida();
    }
});

// ==========================================================================
// 2. FILTRAGEM DO CATÁLOGO DE PRODUTOS
// ==========================================================================
function filtrarProdutos(categoria) {
    const botoes = document.querySelectorAll('.btn-filtro');
    botoes.forEach(btn => btn.classList.remove('ativo'));
    
    if(event) {
        event.target.classList.add('ativo');
    }

    const produtos = document.querySelectorAll('.cartao-produto');
    produtos.forEach(produto => {
        if (categoria === 'todos') {
            produto.classList.remove('esconder');
        } else {
            if (produto.classList.contains(categoria)) {
                produto.classList.remove('esconder');
            } else {
                produto.classList.add('esconder');
            }
        }
    });
}

// ==========================================================================
// 3. CARRINHO DE COMPRAS E FINALIZAÇÃO NO WHATSAPP
// ==========================================================================
let carrinho = [];
let total = 0;

function adicionarAoCarrinho(nome, preco) {
    carrinho.push({ nome, preco });
    total += preco;
    atualizarInterfaceCarrinho();
}

function atualizarInterfaceCarrinho() {
    document.getElementById('contador-cart').innerText = carrinho.length;

    const containerItens = document.getElementById('itens-carrinho');
    containerItens.innerHTML = '';

    if (carrinho.length === 0) {
        containerItens.innerHTML = '<p class="carrinho-vazio">Seu carrinho está vazio.</p>';
    } else {
        carrinho.forEach(item => {
            const divItem = document.createElement('div');
            divItem.classList.add('item-no-carrinho');
            divItem.innerHTML = `
                <span>${item.nome}</span>
                <strong>R$ ${item.preco.toFixed(2).replace('.', ',')}</strong>
            `;
            containerItens.appendChild(divItem);
        });
    }

    document.getElementById('total-carrinho').innerText = total.toFixed(2).replace('.', ',');
}

function simularCheckout() {
    if (carrinho.length === 0) {
        alert("O seu carrinho está vazio! Adicione um produto antes de finalizar.");
        return;
    }
    
    const numeroWhatsApp = "5541998106536"; 
    let mensagem = `Olá! Gostaria de finalizar meu pedido na Dopamina Acessórios: \n\n`;
    
    carrinho.forEach((item, index) => {
        mensagem += `${index + 1}. ${item.nome} - R$ ${item.preco.toFixed(2).replace('.', ',')}\n`;
    });
    
    mensagem += `\n*Total: R$ ${total.toFixed(2).replace('.', ',')}*`;
    mensagem += `\n\nPor favor, me informe o valor do frete e os dados para pagamento! ✨`;

    const mensagemFormatada = encodeURIComponent(mensagem);
    const urlWhatsApp = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${mensagemFormatada}`;
    
    window.open(urlWhatsApp, '_blank');
    
    carrinho = [];
    total = 0;
    atualizarInterfaceCarrinho();
}