require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'imitate prize flock tribe street crawl rifle coconut gown light army gas'; 
let testAccounts = [
"0x56e313ed1921d7ea60e721eb3596d4aaf30a8d32d453db2753967710e2e8f443",
"0x02ff2f1042148d9526b68fa1a4d70694e9c96a38c28e9ce0cc18e3eb9e897763",
"0x6a51b3071676d6b4bdbca6ba0accde464fc0c4d2ae28e92e06cc6a570716aa0f",
"0x189b2a922f304851ab31afb9750539cbdc0631014c0b3957a0f9d7f18741c615",
"0xb9995f2fd17faac30d34b31afb3bb4de87670c44c994b02bb3b8823cac8898fc",
"0x8cd4f5e878893efdfb8c0568ccef25be673008cb70dd2624aa0d2eb1886378b1",
"0x8ceaeae65d39a89501ffef7c36bc160c2c2b78cf04d0b4230fbaf35d6375733d",
"0x6ee1d744c3209e82fbd78a7ed0763007a1bc846d3939496290e11a670fe35dbc",
"0x7572e629c3841ae4f2a633a37acf7402b29eea97f657fc4185b59a9949452be1",
"0x12324052daa1e33ef38eab018edadef6bc8556b62479ceea5c6a17504e049caa"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

