const keythereum = require("keythereum");

var address = "Pubclic Address --- Here"
var dir = "~/.ethereum/keystore" // keystore directory

var keyObject = keythereum.importFromFile(address, dir)
var pk = keythereum.recover('Password --- Here', keyObject)
var privateKey = pk.toString('hex')

console.log(privateKey)
