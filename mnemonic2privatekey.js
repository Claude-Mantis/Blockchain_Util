const ethers = require('ethers');
let mnemonic = "MNEMONIC---HERE";
let mnemonicWallet = ethers.Wallet.fromMnemonic(mnemonic);
console.log(mnemonicWallet.privateKey);
