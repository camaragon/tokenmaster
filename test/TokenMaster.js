const { expect } = require("chai");
const { ethers } = require("hardhat");

const NAME = "TokenMaster";
const SYMBOL = "TM";

describe("TokenMaster", () => {
  let tokenMaster;
  let deployer, buyer;

  beforeEach(async () => {
    //Setup accounts
    [deployer, buyer] = await ethers.getSigners();

    const TokenMaster = await ethers.getContractFactory(NAME);
    tokenMaster = await TokenMaster.deploy(NAME, SYMBOL);
  });

  describe("Deployment", () => {
    it("sets the name", async () => {
      const name = await tokenMaster.name();
      expect(name).to.equal(NAME);
    });

    it("sets the name", async () => {
      const symbol = await tokenMaster.symbol();
      expect(symbol).to.equal(SYMBOL);
    });

    it("sets the owner", async () => {
      expect(await tokenMaster.owner()).to.equal(deployer.address);
    });
  });
});
