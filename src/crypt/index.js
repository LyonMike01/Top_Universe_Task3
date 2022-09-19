const crypto = require('crypto');
const qr = require("qrcode");

const algorithm = 'aes-256-ctr';
const key = "QR-Profile_Creation-Using-NodeJS"

const encrypt = (value) => {
    
    const iv = crypto.randomBytes(16);

    const cipher = crypto.createCipheriv(algorithm, key, iv);

    const encrypted = Buffer.concat([cipher.update(value), cipher.final()]);

    return {
        iv: iv.toString('hex'),
        content: encrypted.toString('hex')
    };
};

const decrypt = (value) => {

    const decipher = crypto.createDecipheriv(algorithm, key, Buffer.from(value.iv, 'hex'));

    const decrpyted = Buffer.concat([decipher.update(Buffer.from(value.content, 'hex')), decipher.final()]);

    return decrpyted.toString();
};

const qrCode = async (value) => {
    
    const encrypt = await qr.toString(value);
    return encrypt;
  };
  

module.exports = {
    encrypt,
    decrypt,
    qrCode
};
