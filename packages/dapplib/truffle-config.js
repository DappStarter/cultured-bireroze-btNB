require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom problem brown turtle chaos rare remain essay include clog orange virus'; 
let testAccounts = [
"0x0b414c0310773b47aafafbbdde444d50daf3c56471f52c911b940de6f17c9592",
"0x7c36a00af7566ee9b88f043b325bf7b7126ef9c15228ce4c5ac1783269fa45b3",
"0x993eed8daef45e54f0c8960d7ddd5aa42fb8f97705200c1c6a297dd5b34534c4",
"0x51441c01e24d542b229bb2d887ee0ebd7a153faf065d29709e63a098ebb72673",
"0xd500790c0efa20ac6c6e853d8add3a186d9def87a76c1cc54b315de726ce7784",
"0x8108f68169572e2a9cc9a8ec70644402fb8ec60da7436f66571808daa0d45ce0",
"0x69bd6dfe84cc7a1e3ad239c5bad89746d52ef7797f0b0261bbe350cab9824a9d",
"0x970a63d01f84724e48dede361e4927f6890fe3fee5057517a48a307067ddd2ce",
"0xe1e23ca98a088cd5a6284e59471a5503e78dad70031749aba67f390acc3026ba",
"0xa4d37f48c9554595b8051474aa1035cdff2ee67cb657d9ce21c0c68e44f90c5d"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

