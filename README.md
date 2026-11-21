# WiraChain Smart Contract Deployment

Small toolkit for compiling, deploying, and inspecting Solidity event contracts on a local EVM/Besu JSON-RPC node. It also exposes a REST API to serve the compiled ABI and query patient/clinic permission events emitted on-chain.

## Technologies

- TypeScript, Node.js, Express 5, CORS
- Solidity 0.8.26 + `solc` (JS compiler)
- ethers.js v6 (deployment and event queries)
- Swagger UI / swagger-jsdoc
- Inquirer CLI, dotenv, Docker (multi-stage build)

## Features

- Interactive `.sol` compilation into ABI + bytecode artifacts
- Interactive deployment with address persistence and on-chain bytecode verification
- Wallet generator CLI (address, private key, mnemonic, balance)
- `Events` contract with `grantPatientPermission` / `revokePatientPermission`
- Chunked event log queries filtered by keccak256 patient GUID hash and clinic ID
- Swagger docs at `/api-docs`

## API

| Method | Endpoint | Description |
| --- | --- | --- |
| GET | `/abi/event-permission` | Get the compiled permission contract ABI |
| GET | `/logs/patient/:patientId/clinic/:clinicId` | Get permission events for a patient and clinic |
| GET | `/api-docs` | Swagger UI |

## Quick start

```bash
npm install
npm run build
node dist/server.js
```

Defaults: port `3000`, RPC `http://localhost:8545` (override with `PORT` and `RCP_URL`).

```bash
docker build -t wirachain-smart-contract-deployment .
docker run -p 3000:3000 wirachain-smart-contract-deployment
```

CLI helpers live in `scripts/` (`compile-contract.ts`, `deploy-contract.ts`, `wallet-generator.ts`) and run via `ts-node`.
