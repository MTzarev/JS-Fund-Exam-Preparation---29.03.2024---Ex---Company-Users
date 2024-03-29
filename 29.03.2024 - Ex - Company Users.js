function companyUsersArr(input) {
    let companyUsers = {};
  
    for (let line of input) {
      let userList = [];
  
      let tokens = line.split(" -> ");
      let [comp, userID] = tokens;
  
      if (!companyUsers.hasOwnProperty(comp)) {
        companyUsers[comp] = [];
        companyUsers[comp].push(userID);
      } else {
        if (!companyUsers[comp].includes(userID))
          companyUsers[comp].push(userID);
      }
    }
    let sorted = Object.keys(companyUsers).sort((a, b) => a.localeCompare(b));
  
    for (let comp of sorted) {
      console.log(`${comp}`);
      let separated = companyUsers[comp].join("\n-- ");
      console.log("-- " + separated);
    }
  }
  
  companyUsersArr([
    "SoftUni -> AA12345",
    "SoftUni -> CC12344",
    "Lenovo -> XX23456",
    "SoftUni -> AA12345",
    "Movement -> DD11111",
  ]);