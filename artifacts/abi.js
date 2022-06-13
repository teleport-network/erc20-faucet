module.exports = {
  abi: [
    // view methods
    'function totalSupply() view returns (uint totalSupply)',
    'function balanceOf(address who) view returns (uint balance)',
    'function allowance(address owner, address spender) view returns (uint allowance)',

    // transaction methods
    'function transfer(address to, uint value)',
    'function transferFrom(address from, address to, uint value)',
    'function approve(address spender, uint value)',
    'function mint(address to, uint256 value)',

    // events
    'event Transfer(address indexed from, address indexed to, uint value)',
    'event Approval(address indexed owner, address indexed spender, uint value)'
  ],
  networks: {
    4: '0xa801c61236c5ca55107a17329b8abbd337d63e1d'
  }
};
