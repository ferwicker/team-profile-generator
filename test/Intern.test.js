
const Intern = require('../lib/intern.js')

describe('Intern', () => {

    describe("Initialization", () => {
        it("should return an object containing a 'school' property when called with the 'new' keyword", () => {

            const obj = new Intern('employeeName', 'ID', 'email', 'photo', 'school');
    
          expect("school" in obj).toEqual(true);
        });
      }); 

      describe("Get Role", () => {
        it("should return an object containing a 'role' property that equals 'Intern'", () => {

            const obj = new Intern('employeeName', 'ID', 'email', 'photo', 'school');
            const role = obj.getRole();
    
          expect(role).toEqual('Intern');
        });
      });

      describe("name", () => {
        it("should return an object containing an 'employeeName' property that equals the first parameter", () => {

            const obj = new Intern('employeeName', 'ID', 'email', 'photo', 'school');
            const name = obj.employeeName;
    
          expect(name).toEqual('employeeName');
        });
      });
      
});