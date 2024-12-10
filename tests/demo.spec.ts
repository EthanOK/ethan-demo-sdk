import { assert } from "chai";
import { A, EthersWallet, B } from "../src";

describe("demo", () => {
  it("should A", async () => {
    // assert.equal(A, "A");
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
