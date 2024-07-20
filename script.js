/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    let x = arr.map(employee => { if (employee.profession == "developer") {console.log(employee);}});
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    arr.forEach(employee => {
      if (employee.profession == "developer") {
        console.log(employee);
      }
    });
  }
  
  function addData() {
    //Write your code here , just console.log
    arr.push({ id: 4, name: "susan", age: "20", profession: "intern" });
    console.log(arr);
  }
  
  function removeAdmin() {
    //Write your code here , just console.log
    let x = arr.filter(employee => employee.profession != "admin");
    console.log(x);
  }
  
  function concatenateArray() {
    //Write your code here , just console.log
    let newArr = [
      { id: 4, name: "ram", age: "21", profession: "designer" },
      { id: 5, name: "shyam", age: "22", profession: "manager" },
      { id: 6, name: "babuBhaiya", age: "23", profession: "trader" }
    ];
    let concatArr = arr.concat(newArr);
    console.log(concatArr);
  }
