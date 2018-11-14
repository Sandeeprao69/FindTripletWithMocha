const expect = require('chai').expect;
const findTriplet = require('../index.js').findTriplet;

describe('Index', function() {
  describe('#findTriplet', function() {
    it('it should return triplet where sum of two number is equals to third numbde', function() {
      let result = findTriplet([4, 6, 3, 10, 9, 16]);
      expect(JSON.stringify(result)).to.equal('[{"total":16,"left":10,"right":6},{"total":10,"left":6,"right":4},{"total":9,"left":6,"right":3}]');
    });
    it('it should return error when array in empty', function() {
      let result = findTriplet([]);
      expect(result).to.equal('Empty array');
    });
    it('it should return no triplet found when no triplet found', function() {
      let result = findTriplet([2, 1, 4, 11]);
      expect(result).to.equal('No such triplet exists');
    });
    it('it should return undefined array found when no triplet found', function() {
      let result = findTriplet();
      expect(result).to.equal('undefined array');
    });
  });
});
