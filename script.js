// --- COLOQUE SEU NÚMERO DE WHATSAPP AQUI ---
const TELEFONE_WHATSAPP = "5500999999999"; 

// BANCO DE DADOS COMPLETO E CORRIGIDO
const products = [
    {
        id: 1,
        title: "Bolsa Crochê Clássica (Modelo 1)",
        category: "croche",
        price: 130.00,
        desc: "Bolsa de ombro perfeita para o dia a dia, tecida com fio premium e alças reforçadas.",
        images: [
            "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=500&auto=format&fit=crop&q=80", 
            "https://images.unsplash.com/photo-1544816155-12df9643f363?w=500&auto=format&fit=crop&q=80"
        ]
    },
    {
        id: 2,
        title: "Bolsa Crochê Bucket (Modelo 2)",
        category: "croche",
        price: 155.00,
        desc: "Modelo estilo saco com fechamento ajustável em cordão de crochê e detalhes delicados.",
        images: [
            "https://images.unsplash.com/photo-1544816155-12df9643f363?w=500&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=500&auto=format&fit=crop&q=80"
        ]
    },
    {
        id: 3,
        title: "Bolsa Crochê Clutch de Mão (Modelo 3)",
        category: "croche",
        price: 95.00,
        desc: "Bolsa de mão elegante para eventos e saídas casuais. Compacta e charmosa.",
        images: [
            "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=500&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1544816155-12df9643f363?w=500&auto=format&fit=crop&q=80"
        ]
    },
    {
        id: 4,
        title: "Tapete de Crochê Avulso (Modelo 1)",
        category: "croche",
        price: 85.00,
        desc: "Unidade avulsa de tapete retangular ou oval, ideal para portas ou beiras de cama.",
        images: [
            "https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=500&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=500&auto=format&fit=crop&q=80"
        ]
    },
    {
        id: 5,
        title: "Tapete Boho Chic Redondo (Modelo 2)",
        category: "croche",
        price: 180.00,
        desc: "Tapete redondo grande com desenhos em relevo, perfeito para decorar o centro da sala.",
        images: [
            "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=500&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=500&auto=format&fit=crop&q=80"
        ]
    },
    {
        id: 6,
        title: "Kit Jogo de Banheiro 3 Peças (Modelo 3)",
        category: "croche",
        price: 220.00,
        desc: "Kit completo contendo 3 tapetes combinando para harmonizar e decorar seu banheiro.",
        images: [
            "https://images.unsplash.com/photo-1527359395202-74f0105ad8f2?w=500&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=500&auto=format&fit=crop&q=80"
        ]
    },
    {
        id: 7,
        title: "Jogo de Sousplat em Crochê (4 un)",
        category: "croche",
        price: 110.00,
        desc: "Kit com 4 sousplats elegantes para deixar suas refeições muito mais acolhedoras.",
        images: ["https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=500&auto=format&fit=crop&q=80"]
    },
    {
        id: 8,
        title: "Kit Porta-Copos em Crochê (6 un)",
        category: "croche",
        price: 45.00,
        desc: "Descansos de copo delicados feitos à mão. Protegem seus móveis com charme.",
        images: ["https://images.unsplash.com/photo-1576016770956-debb63d900bb?w=500&auto=format&fit=crop&q=80"]
    },
    {
        id: 9,
        title: "Porta Maternidade Bastidor",
        category: "maternidade",
        price: 120.00,
        desc: "Personalizado com o nome do bebê e detalhes delicados em relevo.",
        images: ["https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=500&auto=format&fit=crop&q=80"]
    },
    {
        id: 10,
        title: "Bastidor Foto Bordada",
        category: "maternidade",
        price: 160.00,
        desc: "Eternize suas memórias mais lindas através do bordado realista feito à mão.",
        images: ["https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=500&auto=format&fit=crop&q=80"]
    },
    {
        id: 11,
        title: "Ecobag Algodão - Florescer",
        category: "ecobag",
        price: 45.00,
        desc: "Sacola ecológica em tecido ultra resistente com estampas exclusivas.",
        images: ["https://images.unsplash.com/photo-1544816155-12df9643f363?w=500&auto=format&fit=crop&q=80"]
    }
];

let cart = [];

// RENDERIZAR OS PRODUTOS (Voltou a Usabilidade Rápida!)
function renderProducts(productsToRender) {
    const catalogContainer = document.getElementById('productCatalog');
    catalogContainer.innerHTML = '';

    productsToRender.forEach(prod => {
        const card = document.createElement('div');
        card.classList.add('product-card');
        
        // Configura se tem segunda foto para o efeito de passar o mouse
        const temSegundaFoto = prod.images.length > 1;
        const mouseOverAction = temSegundaFoto ? `onmouseover="this.style.backgroundImage='url(${prod.images[1]})'"` : '';
        const mouseOutAction = `onmouseout="this.style.backgroundImage='url(${prod.images[0]})'"`;

        card.innerHTML = `
            <div class="product-img" id="img-${prod.id}" style="background-image: url('${prod.images[0]}');" ${mouseOverAction} ${mouseOutAction}>
                <span class="tag-artesanal">100% Manual</span>
                <div class="photo-counter">📸 ${prod.images.length} foto(s)</div>
            </div>
            <div class="product-info">
                <h3 class="product-title">${prod.title}</h3>
                <p class="product-desc">${prod.desc}</p>
                <p class="product-price">R$ ${prod.price.toFixed(2).replace('.', ',')}</p>
                <button class="add-to-cart-btn" onclick="addToCart(${prod.id})">Adicionar ao Carrinho</button>
            </div>
        `;
        catalogContainer.appendChild(card);
    });
}

// CONTROLAR FILTROS DE CATEGORIA
function filterCategory(cat) {
    document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
    if(event && event.target) {
        event.target.classList.add('active');
    }

    if (cat === 'todos') {
        renderProducts(products);
    } else {
        const filtered = products.filter(p => p.category === cat);
        renderProducts(filtered);
    }
}

// ADICIONAR ITEM AO CARRINHO
function addToCart(id) {
    const product = products.find(p => p.id === id);
    const existingItem = cart.find(item => item.id === id);

    if (existingItem) {
        existingItem.qty++;
    } else {
        cart.push({ ...product, qty: 1 });
    }
    updateCartUI();
}

// REMOVER ITEM DO CARRINHO
function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCartUI();
}

// ATUALIZAR INTERFACE DO CARRINHO (Sem sumir da tela)
function updateCartUI() {
    const cartItemsContainer = document.getElementById('cartItems');
    const cartTotalContainer = document.getElementById('cartTotal');
    const cartCountContainer = document.getElementById('cartCount');

    let total = 0;
    let totalItems = 0;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-cart">Seu carrinho está vazio.</p>';
        cartTotalContainer.innerText = 'R$ 0,00';
        cartCountContainer.innerText = '0';
        return;
    }

    cartItemsContainer.innerHTML = '';
    cart.forEach(item => {
        total += item.price * item.qty;
        totalItems += item.qty;

        const itemDiv = document.createElement('div');
        itemDiv.classList.add('cart-item');
        itemDiv.innerHTML = `
            <div class="cart-item-info">
                <span class="cart-item-title">${item.title}</span>
                <span class="cart-item-qty">Qtd: ${item.qty} x R$ ${item.price.toFixed(2).replace('.', ',')}</span>
            </div>
            <button class="remove-btn" onclick="removeFromCart(${item.id})"><i class="fa-solid fa-xmark"></i></button>
        `;
        cartItemsContainer.appendChild(itemDiv);
    });

    cartTotalContainer.innerText = `R$ ${total.toFixed(2).replace('.', ',')}`;
    cartCountContainer.innerText = totalItems;
}

// COMPARTILHAR PEDIDO NO WHATSAPP
function sendToWhatsapp() {
    if (cart.length === 0) {
        alert("Adicione produtos ao carrinho primeiro!");
        return;
    }

    let text = `Olá! Montei meu carrinho na *Dopamina Acessórios*:\n\n`;
    let total = 0;

    cart.forEach((item, index) => {
        const subtotal = item.price * item.qty;
        total += subtotal;
        text += `*${index + 1}. ${item.title}*\n`;
        text += `   Qtd: ${item.qty} | Subtotal: R$ ${subtotal.toFixed(2).replace('.', ',')}\n\n`;
    });

    text += `----------------------------------\n`;
    text += `*Total do Pedido:* R$ ${total.toFixed(2).replace('.', ',')}\n\n`;
    text += `Gostaria de combinar a entrega! ✨`;

    const encodedText = encodeURIComponent(text);
    const url = `https://api.whatsapp.com/send?phone=${TELEFONE_WHATSAPP}&text=${encodedText}`;

    window.open(url, '_blank');
}

// INTERRUPÇÃO DE SEGURANÇA
function quickExit() {
    window.location.replace("https://www.google.com");
}

let escCount = 0;
let escTimeout;

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        escCount++;
        if (escCount === 2) {
            quickExit();
        }
        clearTimeout(escTimeout);
        escTimeout = setTimeout(() => {
            escCount = 0;
        }, 500);
    }
});

// Inicialização imediata
renderProducts(products);