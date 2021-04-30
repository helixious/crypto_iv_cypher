# crypto_iv_cypher

Crypto IV Cypher.

## Installation

Use the package manager [pip](https://pip.pypa.io/en/stable/) to install foobar.

```bash
npm install crypto-iv-cypher
```

## Usage

```node
const cypher = require('crypto_iv_cypher');


let secret = 'secret';
let iv = cypher.generateIV();
// random 16 bytes => hex string (54e43ad7e7c60c61e584cf38be5f92fd)


// Call Examples:
cypher.encryptData(secret, iv, 'hello world').then(encrypted => {
    // 'aes-256-cbc' cipher => hex (4a5791d0dcd714659db08e93fb9a526b)
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