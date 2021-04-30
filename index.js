const { SECRET_KEY, IV } = require('./config');
const crypto = require('crypto');

const decryptData = (secretKey, iv, encryptedData) => {
    return new Promise((resolve, reject) => {
        try {
            if (!iv) {
                iv = crypto.randomBytes(12);
            } else if (typeof iv === 'string') {
                iv = Buffer.from(iv, 'hex');
            }
            crypto.scrypt(secretKey, 'salt', 32, (err, key) => {
                const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
                let decrypted = decipher.update(encryptedData, 'hex', 'utf-8');
                decrypted += decipher.final('utf-8');
                resolve(decrypted);
            });
        } catch(e) {
            reject(e);
        }
    });
}

const encryptData = (secretKey, iv, data) => {
    return new Promise((resolve, reject) => {
        try {
            crypto.scrypt(secretKey, 'salt', 32, (err, key) => {
                if (err) return null;
                if(!iv) {
                    iv = crypto.randomBytes(12);
                } else if(typeof iv === 'string') {
                    iv = Buffer.from(iv, 'hex');
                }
        
                let cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
                let encrypted = cipher.update(data, 'utf-8', 'hex');
                encrypted += cipher.final('hex');
                resolve(encrypted);
            })
        } catch (e) {
            reject(e);
        }
    })    
};


module.exports = {
    decryptData,
    encryptData
}