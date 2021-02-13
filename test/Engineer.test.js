
const Engineer = require('../lib/engineer.js')

describe('Engineer', () => {

    describe("Initialization", () => {
        it("should return an object containing a 'github' property when called with the 'new' keyword", () => {

            const obj = new Engineer('employeeName', 'ID', 'email', 'photo', 'github');
    
          expect("github" in obj).toEqual(true);
        });
      }); 

      describe("Get Role", () => {
        it("should return an object containing a 'role' property that equals 'Employee'", () => {

            const obj = new Engineer('employeeName', 'ID', 'email', 'photo');
            const role = obj.getRole();
    
          expect(role).toEqual('Engineer');
        });
      });

      describe("name", () => {
        it("should return an object containing an 'employeeName' property that equals the first parameter", () => {

            const obj = new Engineer('employeeName', 'ID', 'email', 'photo', 'school');
            const name = obj.employeeName;
    
          expect(name).toEqual('employeeName');
        });
      });
      
});