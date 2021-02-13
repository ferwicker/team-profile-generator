const { expect } = require('@jest/globals');
const { describe } = require('yargs')
const Employee = require('../lib/employee.js')

describe('Employee', () => {

    describe("Initialization", () => {
        it("should return an object containing a 'role' property when called with the 'new' keyword", () => {
          const obj = new Employee();
    
          expect("role" in obj).toEqual(true);
        });
      }); 
      
});