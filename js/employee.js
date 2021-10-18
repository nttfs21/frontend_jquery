//var, let, const
//Single threaded application
//Assignments - October 13
//POST - XMLHttpRequest
//PUT - XMLHttpRequest, fetch
//DELETE - XMLHttpRequest, fetch
var employeesList;
/*function getEmployeeList(){
   var xhttp = new XMLHttpRequest();
   var obj = this;
   xhttp.onreadystatechange = function(){
        if(xhttp.readyState === 4 && xhttp.status === 200){
            employeesList = JSON.parse(xhttp.response);
            obj.displayEmployees();
        }
    };
    xhttp.open('GET', 'http://localhost:3000/employees');
    xhttp.send();
}*/

/*function addEmployee(){
    console.log("In POST request")
    let employee = {name:"Indrasen", email:"indrasen@gmail.com", active: "Y"};
    fetch('http://localhost:3000/employees',{
        method: 'POST',
        headers:{
            'Content-type': 'application/json'
        },
        body:  JSON.stringify(employee)
    }).then((res)=>console.log(res)).catch((err)=>console.log(err));

};*/

/*(function getEmployeeList(){
   fetch('http://localhost:3000/employees')
   .then((res)=>{
       res.json()
       .then((data)=>{
            employeesList = data;
            displayEmployees();
       });
   })
   .catch((err)=>{
       console.log(err)
   });
})();*/
// 1,2,3,4
// 2,4,6,8
//newArr = arr.map((elem)=>elem*2)



$(function(){
    /*$.get('http://localhost:3000/employees',function(response){
        employeesList = response;
        displayEmployees();
    })*/

   /* $('ul').load('http://localhost:3000/employees', function(response){
        console.log(response);
    });*/

    $.ajax({
        url: 'http://localhost:3000/employees',
        type: 'GET',
        success: function(response){
            employeesList = response;
            displayEmployees();
        }
    });

    
})

function addEmployee(){
    console.log("In POST request")
    let employee = {name:"Divyansh", email:"indrasen@gmail.com", active: "Y"};
    $.post('http://localhost:3000/employees',employee,function(response){
        console.log(response);
    })
}

function displayEmployees(){
    let employeesDispCont = employeesList.map((employee)=>`<li>${employee.name}(${employee.active?'Y':'N'})-${employee.email}</li>`);
    console.log(employeesDispCont);
    let element = document.getElementById('employeeList');
    let innerHTML = "";
    for(let index = 0; index<employeesDispCont.length; index++){
     innerHTML = innerHTML.concat(employeesDispCont[index]);
    }
    element.innerHTML = innerHTML;
 }




