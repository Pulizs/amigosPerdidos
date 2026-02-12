const form = document.getElementById('form-amigo');
const listaContainer = document.getElementById('lista-amigos');

// Carregar amigos do LocalStorage ao iniciar
let amigos = JSON.parse(localStorage.getItem('sos_amigos')) || [];

function atualizarLista() {
    listaContainer.innerHTML = '';
    amigos.forEach((amigo, index) => {
        const card = document.createElement('div');
        card.className = "flex items-center justify-between p-4 border rounded-lg bg-slate-50";
        card.innerHTML = `
            <div>
                <p class="font-bold text-slate-700">${amigo.nome}</p>
                <p class="text-xs text-slate-400">Sangue: ${amigo.sangue}</p>
            </div>
            <div class="flex gap-2">
                <button onclick="gerarQR('${amigo.id}', '${amigo.nome}')" class="p-2 bg-blue-100 text-blue-600 rounded-lg">
                    <i class="ph ph-qr-code text-xl"></i>
                </button>
                <button onclick="removerAmigo(${index})" class="p-2 bg-red-100 text-red-600 rounded-lg">
                    <i class="ph ph-trash text-xl"></i>
                </button>
            </div>
        `;
        listaContainer.appendChild(card);
    });
    localStorage.setItem('sos_amigos', JSON.stringify(amigos));
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const novoAmigo = {
        id: Date.now().toString(), // ID único baseado no timestamp
        nome: document.getElementById('nome').value,
        sangue: document.getElementById('sangue').value,
        tel: document.querySelector('.contato-tel').value
    };
    
    amigos.push(novoAmigo);
    form.reset();
    atualizarLista();
});

function removerAmigo(index) {
    amigos.splice(index, 1);
    atualizarLista();
}

function gerarQR(id, nome) {
    const modal = document.getElementById('modal-qr');
    const qrContainer = document.getElementById('qrcode');
    qrContainer.innerHTML = ''; // Limpa QR anterior
    
    document.getElementById('qr-nome').innerText = `QR Code de ${nome}`;
    
    // URL que será codificada (Aponta para a subpage)
    const urlBase = window.location.href.replace('index.html', '') + `subpages/perfil.html?id=${id}`;
    
    new QRCode(qrContainer, {
        text: urlBase,
        width: 200,
        height: 200
    });
    
    modal.classList.remove('hidden');
}

function fecharModal() {
    document.getElementById('modal-qr').classList.add('hidden');
}

atualizarLista();