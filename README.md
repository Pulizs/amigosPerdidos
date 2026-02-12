# 🛡️ SOS Pulseiras - Sistema de Emergência QR Code

O **SOS Pulseiras** é uma solução Web Full Stack desenvolvida para auxiliar em situações de urgência. Através de um QR Code impresso em pulseiras ou adesivos, qualquer socorrista pode acessar instantaneamente o perfil médico de uma pessoa e contatar sua rede de apoio via WhatsApp com apenas um clique.

[Image of a sequence diagram showing a QR code scan leading to an emergency profile page]

## 🚀 Funcionalidades

- **Painel Administrativo:** Interface para cadastrar amigos, tipos sanguíneos e alergias.
- **Geração de QR Code:** Criação dinâmica de códigos vinculados ao ID único de cada integrante.
- **Banco de Dados em Nuvem:** Integração com Firebase para sincronização de dados em tempo real.
- **Perfil de Emergência:** Página otimizada para dispositivos móveis com foco em legibilidade.
- **Mensagem Automatizada:** Link direto para WhatsApp com mensagem pré-configurada: *"Olá, estou com o seu amigo [Nome]..."*.

## 🛠️ Tecnologias Utilizadas

- **Frontend:** HTML5, CSS3 (Tailwind CSS), JavaScript (ES6+).
- **Backend as a Service:** Firebase Firestore (Banco de dados NoSQL).
- **Icons:** Phosphor Icons.
- **QR Generation:** QRCode.js.
- **Hospedagem:** GitHub Pages.

## 📂 Estrutura de Pastas

```text
nome-do-projeto/
├── index.html          # Painel de controle e cadastro
├── subpages/
│   └── perfil.html     # Página pública acessada pelo QR Code
├── README.md           # Documentação do projeto
