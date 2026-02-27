var subtractOne = require("subtract-the-number-one")
var powerOfTwo = require("calculate-power-of-two")

module.exports = function calculateMersenne(n) {
  return subtractOne(powerOfTwo(n))
}