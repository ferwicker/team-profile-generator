const { expect } = require('@jest/globals');
const { describe } = require('yargs');
const Engineer = require('../lib/engineer.js')

describe('Engineer', () => {

    describe("Initialization", () => {
        it("should return an object containing a 'role' property when called with the 'new' keyword", () => {
          const obj = new Engineer();
    
          expect("role" in obj).toEqual(true);
        });
      }); 
      
});