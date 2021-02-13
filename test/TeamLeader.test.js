const { expect } = require('@jest/globals');
const { describe } = require('yargs');
const TeamLeader = require('../lib/engineer.js')

describe('Team Leader', () => {

    describe("Initialization", () => {
        it("should return an object containing a 'role' property when called with the 'new' keyword", () => {
          const obj = new TeamLeader();
    
          expect("role" in obj).toEqual(true);
        });
      }); 
      
});