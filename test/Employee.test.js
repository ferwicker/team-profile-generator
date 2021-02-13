const Employee = require('../lib/employee.js')

describe('Employee', () => {

    describe("Initialization", () => {
        it("should return an object containing a 'photo' property when called with the 'new' keyword", () => {

            const obj = new Employee('employeeName', 'ID', 'email', 'photo');
    
          expect("photo" in obj).toEqual(true);
        });
      }); 

      describe("Get Role", () => {
        it("should return an object containing a 'role' property that equals 'Employee'", () => {

            const obj = new Employee('employeeName', 'ID', 'email', 'photo');
            const role = obj.getRole();
    
          expect(role).toEqual('Employee');
        });
      });

      describe("name", () => {
        it("should return an object containing an 'employeeName' property that equals the first parameter", () => {

            const obj = new Employee('employeeName', 'ID', 'email', 'photo', 'school');
            const name = obj.employeeName;
    
          expect(name).toEqual('employeeName');
        });
      });
      
});