import chalk from "chalk";

const promptQRcode = [
    {
        name: "link",
        description: chalk.green("Digite o link para gerar o QR CODE")
    },
    {
        name: "type",
        description: chalk.green("Escolha entre o tipo de QR CODE (1 - NORMAL ou 2 - TERMINAL)"),
   
    pattern: /^[1-2]+$/,
    messagem: chalk.red.italic("Escolha apenas entre 1 e 2"),
    required: true,
    },
    
];

export default promptQRcode;