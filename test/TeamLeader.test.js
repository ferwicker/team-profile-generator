const TeamLeader = require('../lib/teamleader.js')

describe('Team Leader', () => {

    describe("Initialization", () => {
        it("should return an object containing an 'office' property when called with the 'new' keyword", () => {

            const obj = new TeamLeader('employeeName', 'ID', 'email', 'photo', 'officenumber');
    
          expect("office" in obj).toEqual(true);
        });
      }); 

      describe("Get Role", () => {
        it("should return an object containing a 'role' property that equals 'Team Leader'", () => {

            const obj = new TeamLeader('employeeName', 'ID', 'email', 'photo', 'office');
            const role = obj.getRole();
    
          expect(role).toEqual('Team Leader');
        });
      });

      describe("name", () => {
        it("should return an object containing an 'employeeName' property that equals the first parameter", () => {

            const obj = new TeamLeader('employeeName', 'ID', 'email', 'photo', 'office');
            const name = obj.employeeName;
    
          expect(name).toEqual('employeeName');
        });
      });
      
});