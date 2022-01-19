function getSecret(file, secretPassword) {
    file.opened = file.opened + 1;
    if (secretPassword == file.password) {
        return file.contents;
    }
    else {
        return "Invalid password! No secret for you.";
    }
}

function setSecret(file, secretPassword, secret) {
    if (secretPassword == file.password) {
        file.opened = 0;
        file.contents = secret;
    }
}

var superSecretFile = {
    level: "classified",
    opened: 0,
    password: 12345,
    contents: "Dr Evel's next meeting is in Detroit."
};

var secret = getSecret(superSecretFile, 12345);
console.log(secret);

setSecret(superSecretFile, 12345, "Dr Evel's next meeting is in Philadelphia.");
secret = getSecret(superSecretFile, 12345);
console.log(secret);