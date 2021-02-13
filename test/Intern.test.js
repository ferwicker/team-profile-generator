const { expect } = require('@jest/globals');
const { describe } = require('yargs');
const Intern = require('../lib/intern.js')

describe('Intern', () => {

    describe("Initialization", () => {
        it("should return an object containing a 'role' property when called with the 'new' keyword", () => {
          const obj = new Intern();
    
          expect("role" in obj).toEqual(true);
        });
      }); 
      
});