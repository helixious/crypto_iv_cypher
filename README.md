# crypto_iv_cypher

Crypto IV Cypher.

## Installation

Use the package manager [pip](https://pip.pypa.io/en/stable/) to install foobar.

```bash
npm install crypto-iv-cypher
```

## Usage

```node
const {encryptData, decryptData} = require('crypto-iv-cypher');

let secretData = "Hello this is a secret";

const encryptedData = encryptData(SECRET_KEY, IV, secretData);
const decryptedData = decryptedData(SECRET_KEY, IV, encryptedData);
// decryptedData => "Hello this is a secret";

```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License