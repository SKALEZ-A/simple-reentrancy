// const { expect } = require("chai");
// const { ethers } = require("hardhat");

// describe("Reentrancy Attack", function () {
// 	let Attacked;
// 	let Attacker;
// 	let attackedContract;
// 	let attackerContract;

// 	beforeEach(async () => {
// 		Attacked = await ethers.getContractFactory("Attacked");
// 		Attacker = await ethers.getContractFactory("Attacker");

// 		attackedContract = await Attacked.deploy();
// 		await attackedContract.deployed();

// 		attackerContract = await Attacker.deploy(attackedContract.address);
// 		await attackerContract.deployed();
// 	});

// 	it("should successfully perform a reentrancy attack", async function () {
// 		const attackerBalanceBefore = await ethers.provider.getBalance(
// 			attackerContract.address
// 		);

// 		// Attacker contract initiates the attack by calling the `attack` function
// 		await attackerContract.attack({ value: ethers.utils.parseEther("1") });

// 		const attackerBalanceAfter = await ethers.provider.getBalance(
// 			attackerContract.address
// 		);

// 		expect(attackerBalanceAfter).to.be.gt(attackerBalanceBefore);
// 	});
// });
