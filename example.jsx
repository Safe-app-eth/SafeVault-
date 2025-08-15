tx.status == 'mined' &&
  // filters list
  // filter 1
  ((tx.network == 1 &&
    tx.status == 'fail' &&
    tx.to == '0xafd5f60aa8eb4f488eaa0ef98c1c5b0645d9a0a0' &&
    contract.address == '0xFDf84a0e7D07bC56f7De56696fc409704cC83a24') ||
    // filter 2
    (tx.network == 3 &&
      tx.status == 'success' &&
      tx.to == '0xafd5f60aa8eb4f488eaa0ef98c1c5b0645d9a0a0'));
