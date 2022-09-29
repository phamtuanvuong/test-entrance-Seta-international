import {findLengthAppearMost} from './main.js'
import {sumTopTwo} from './main.js'
const expect = chai.expect;

describe('function findLengthAppearMost()', () => {
    it('should be ["ab", "cd", "gh"] if ["a", "ab", "abc", "cd", "def", "gh"].', () => {
        const result = findLengthAppearMost(["a", "ab", "abc", "cd", "def", "gh"]);
        expect(result).to.eql(["ab", "cd", "gh"]);
    });
    it('should be [" ", " ", "a", "b"] if [" ", "ab", "ge", "gha", " ", "a", "b"]', () => {
        const result = findLengthAppearMost([' ', 'ab', 'ge', 'gha', ' ', 'a', 'b']);
        expect(result).to.eql([' ', ' ', 'a', 'b']);
    });   
    it('should be ["abcd", "efhg", "trru"] if ["abcd", "efhg", "qwasas", "trru", "ab", "a", "ipqowe"]', () => {
        const result = findLengthAppearMost(["abcd", "efhg", "qwasas", "trru", "ab", "a", "ipqowe"]);
        expect(result).to.eql(["abcd", "efhg", "trru"]);
    });    
    it('should be ["abc", "cde", "nml"] if ["abc", "cde", "qwke", "tuan", "vuong", "nml"]', () => {
        const result = findLengthAppearMost(["abc", "cde", "qwke", "tuan", "vuong", "nml"]);
        expect(result).to.eql(["abc", "cde", "nml"]);
    });   
});

describe('function sumTopTwo()', () => {
    it('should be 9 if [1, 4, 2, 3, 5]', () => {
        const result = sumTopTwo([1, 4, 2, 3, 5]);
        expect(result).to.equal(9);
    });
    it('should be 25 if ["12", 2, 10, "gha", 5, 15, 2]', () => {
        const result = sumTopTwo(["12", 2, 10, "gha", 5, 15, 2]);
        expect(result).to.equal(25);
    });   
    it('should be 0 if ["2", "3", "4", "8", "10", "2", "3"]', () => {
        const result = sumTopTwo(["2", "3", "4", "8", "10", "2", "3"]);
        expect(result).to.equal(0);
    });    
    it('should be 18 if [2, 8, 8, 10, 10]', () => {
        const result = sumTopTwo([2, 8, 8, 10, 10]);
        expect(result).to.equal(18);
    });   
});