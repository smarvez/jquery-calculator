const expect = chai.expect

let result = '4 + 4';

describe('calculate', function () {
  it ('calculates the value in a string', function () {
    expect(calculate(result)).to.deep.equal(8)
  })
})
