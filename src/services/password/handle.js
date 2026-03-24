async function handle() {
    let characters = [];
    let passsword = "";

    const passwordLength = process.env.PASSWORD_LENGTH


    if (process.env.UPPERCASE_LETTERS === "true") {
        characters.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    }


    if (process.env.LOWERCASE_LETTERS === "true") {
        characters.push(... "abcdefghijklmnopqrstuvwxyz")
    }

    if (process.env.NUMBER === "true") {
        characters.push(... "0123456789");
    }

    if (process.env.SPECIAL_CHARACTERS === "true") {
        characters.push(... "!@#$%^&*()-_");
    }

    for (let i = 0; i < passwordLength; i++) {
        const index = Math.floor(Math.random() * characters.length)
        passsword += characters[index];

    }

    return passsword;

}



export default handle;