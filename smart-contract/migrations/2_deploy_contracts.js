const Karbonize = artifacts.require("Karbonize");

module.exports = function (deployer, _network, _accounts) {
  deployer.deploy(Karbonize, 20000000);
};
