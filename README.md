# 📌 PROJ-QRCODE

Aplicação CLI (linha de comando) desenvolvida em **Node.js** que permite ao usuário:

- ✅ Gerar **QR Codes** diretamente no terminal
- ✅ Criar **senhas aleatórias personalizadas** usando variáveis de ambiente

O usuário escolhe qual ferramenta deseja utilizar ao iniciar o programa.

---

## 🚀 Tecnologias Utilizadas

- Node.js
- ES Modules
- chalk — estilização de textos no terminal
- prompt — entrada de dados via CLI
- qrcode-terminal — geração de QR Code no terminal

---

## 📂 Estrutura do Projeto


src
│
├── prompts
│ ├── prompt-main.js
│ └── prompt-qrcode.js
│
├── services
│ ├── password
│ │ ├── create.js
│ │ └── handle.js
│ │
│ └── qr-code
│ ├── create.js
│ └── handle.js
│
└── index.js


---

## ⚙️ Instalação

### 1️⃣ Clone o repositório

```bash
git clone https://github.com/SEU-USUARIO/proj-qrcode.git
2️⃣ Entre na pasta
cd proj-qrcode
3️⃣ Instale as dependências
npm install
🔐 Configuração (.env)

Crie um arquivo .env na raiz do projeto:

UPPERCASE_LETTERS=false
LOWERCASE_LETTERS=true
NUMBERS=true
SPECIAL_CHARACTERS=true
PASSWORD_LENGTH=8
Variáveis disponíveis
Variável	Descrição
UPPERCASE_LETTERS	Inclui letras maiúsculas
LOWERCASE_LETTERS	Inclui letras minúsculas
NUMBERS	Inclui números
SPECIAL_CHARACTERS	Inclui caracteres especiais
PASSWORD_LENGTH	Tamanho da senha
▶️ Como Executar

O projeto utiliza um script npm configurado no package.json:

"scripts": {
  "start": "node --env-file=.env src/index.js"
}

Execute com:

npm start
📱 Gerar QR Code

Selecionando 1, será solicitado:

Link para gerar o QR Code
Tipo do QR Code:
1 → Normal
2 → Pequeno (terminal)

O QR Code será exibido diretamente no terminal.

🔑 Gerar Senha

Selecionando 2, o sistema:

Lê as configurações do .env
Gera uma senha aleatória
Exibe o resultado no terminal

Exemplo:

a8#kP2@z
🧠 Funcionamento
index.js
   ↓
Escolha da ferramenta
   ↓
QR Code ou Password Service
   ↓
Resultado no terminal
✨ Funcionalidades
Interface interativa via CLI
Senhas configuráveis por variáveis de ambiente
QR Code instantâneo no terminal
Código modularizado
Arquitetura escalável
🔮 Melhorias Futuras
 Exportar QR Code como PNG
 Copiar senha automaticamente
 Menu interativo avançado
 Histórico de execuções
👨‍💻 Autor

Projeto desenvolvido para estudo de:

Node.js CLI Applications
Modularização de código
Prompts interativos
Manipulação de variáveis de ambiente