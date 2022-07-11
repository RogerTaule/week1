const fs = require("fs");
const solidityRegex = /pragma solidity \^\d+\.\d+\.\d+/

const verifierRegex = /contract Verifier/
const verifierPlonkRegex = /contract PlonkVerifier/

let content = fs.readFileSync("./contracts/HelloWorldVerifier.sol", { encoding: 'utf-8' });
let bumped = content.replace(solidityRegex, 'pragma solidity ^0.8.0');
bumped = bumped.replace(verifierRegex, 'contract HelloWorldVerifier');

fs.writeFileSync("./contracts/HelloWorldVerifier.sol", bumped);

let contentMultiplier3Groth = fs.readFileSync("./contracts/Multiplier3Verifier.sol", { encoding: 'utf-8' });
let bumpedMultiplier3Groth = contentMultiplier3Groth.replace(solidityRegex, 'pragma solidity ^0.8.0');
bumpedMultiplier3Groth = bumpedMultiplier3Groth.replace(verifierRegex, 'contract Multiplier3Verifier');

fs.writeFileSync("./contracts/Multiplier3Verifier.sol", bumpedMultiplier3Groth);

let contentMultiplier3Plonk = fs.readFileSync("./contracts/Multiplier3PlonkVerifier.sol", { encoding: 'utf-8' });
let bumpedMultiplier3Plonk = contentMultiplier3Plonk.replace(solidityRegex, 'pragma solidity ^0.8.0');
bumpedMultiplier3Plonk = bumpedMultiplier3Plonk.replace(verifierPlonkRegex, 'contract Multiplier3PlonkVerifier');

fs.writeFileSync("./contracts/Multiplier3PlonkVerifier.sol", bumpedMultiplier3Plonk);

