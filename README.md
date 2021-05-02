# crypto_iv_cypher

Crypto IV Cypher.

## Installation

Use the package manager [npm] to install crypto_iv_cypher.

```bash
npm install crypto-iv-cypher
```

## Usage

```node
const cypher = require('crypto_iv_cypher');


let secret = 'secret';
let iv = cypher.generateIV();
let secretData = 'Hello World, please encrypt me!';
// random 16 bytes => hex <string>


// Call Examples:
cypher.encryptData(secret, iv, secretData).then(encrypted => {
    // 'aes-256-cbc' cipher => hex <string>
    // return encrypted hex string
});

cypher.decryptData(secret,iv,encrypted).then(result => {
    // return result string
})

// Async examples:
const encrypt = async (secret, iv, data) => {
    let encrypted = await cypher.encryptData(secret, iv, data);
    return encrypted;
}

const decrypt = async(secret, iv, encrypted) => {
    let decrypted = await cypher.decryptData(secret,iv,encrypted);
    return decrypted;
}
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License