// Private Key --> Keystore File
// 2022.03.22

const Wallet = require("ethereumjs-wallet")
const fs = require("fs")

const pk = new Buffer.from('PrivateKey---Here', 'hex')
const wallet = Wallet['default'].fromPrivateKey(pk);

wallet.toV3('Password---Here').then(function (result) {

    const jsonContent = JSON.stringify(result) 

    const publicKey = wallet.getPublicKeyString();
    //console.log("public key :", publicKey);
    const address = wallet.getAddressString();
    //console.log("address :", address);
    //console.log("jsonContent :", jsonContent);

    const fileName = `UTC--${new Date().toISOString().replace(/[:]/g, '-')}--${address}`
    fs.writeFileSync(fileName, jsonContent)
})
