import { assert, expect } from "chai";
import { A, EthersWallet, B } from "../src";

describe("demo2", () => {
  it("should A", async () => {
    // expect(A).to.equal("A");
  });

  it("should B", async () => {
    assert.equal(B, "B");
  });

  it("should createRandomWallet", async () => {
    const wallet = EthersWallet.createRandom();
    console.log(wallet.address);
    assert.equal(wallet.address.length, 42);
  });
});
