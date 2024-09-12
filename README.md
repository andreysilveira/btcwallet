# Bitcoin Address Generator with BIP32, BIP39, and BitcoinJS

This project generates a Bitcoin address using BIP32, BIP39, and BitcoinJS libraries. It allows the generation of addresses for testnets or mainnets, using a derivation path for hierarchical deterministic wallets.

## Features

- **BIP39 Mnemonic Generation**: Generate a mnemonic phrase for secure key generation.
- **BIP32 Key Derivation**: Derive private and public keys from a seed.
- **BitcoinJS Integration**: Generate Bitcoin addresses based on the public key.

## Setup

### Prerequisites

Make sure you have Node.js installed on your machine. Then, install the following dependencies:

```bash
npm install bip32 bip39 bitcoinjs-lib
```

To run:

```bash
npm run dev
```