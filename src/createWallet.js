import * as bip32 from "bip32";
import * as bip39 from "bip39";
import * as bitcoin from "bitcoinjs-lib";

// Define the network:
// Bitcoin: main net
// Testnet: test net

const network = bitcoin.networks.testnet;

// Define the derivation path (exemplo: m/44'/0'/0'/0/0)
// /0 = mainnet
// /1 = testnet
const path = "m/44'/1'/0'/0/0";

// Generate a mnemonic
let mnemonic = bip39.generateMnemonic();

// Convert mnemonic to seed
const seed = bip39.mnemonicToSeedSync(mnemonic);

// Create a BIP32 root from seed
let root = bip32.fromSeed(seed, network);

// Private and Public accounts
let account = root.derivePath(path);
let node = account.derive(0).derive(0);

let btcAddress = bitcoin.payments.p2pkh({
  pubkey: node.publicKey,
  network: network,
}).address;

console.log("=====================================");
console.log("           🌐 Bitcoin Wallet          ");
console.log("=====================================");
console.log("🔑 Address:         ", btcAddress);
console.log("🔐 Private Key (WIF):", node.toWIF());
console.log("🧩 Public Key:      ", node.publicKey.toString("hex"));
console.log("🌱 Mnemonic (Seed): ", mnemonic);
console.log("=====================================");