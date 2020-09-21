// create an array conaining five objects with properties{name,age,city,salary}
//A. display all the objects in a table
//B. crete a search functionality for name and city
//C. delete button to delete records
//D. dat is not permanent


let emp=[
    {
        name:"samir",
        age:25,
        city:"Delhi",
        salary:"20000",
    }
    {
        name:"ishaan",
        age:30,
        city:"Manglore",
        salary:"30000",
    }

    {

        name:"monika",
        age:26,
        city:"Faridabad",
        salary:"28000",

    }
]

function display( superarray){
let tabledata="";
     
    let srno=1;
    superarray.forEach(function(employee){
        let currentrow=`<tr>
        <td>${index + 1}</td>
        <td>${employee.name}</td>
        <td>${employee.age}</td>
        <td>${employee.city}</td>
        <td>${employee.salary}</td>
        <td><buton onclick=`deletemp(${index})`>delete</button></td>
         </tr>`;
        tabledata +=tabledata+currentrow;
        srno++;

    });

    document.getElementsByClassName('tdata').innerHTML=tabledata;
} 
display();

function addemp(e){
    e.preventDefault();
    let employee={}
    let name=document.getElementById('name').value;
    let age=document.getElementById('age').value;
    let city=document.getElementById('city').value;
    let salary=document.getElementById('salary').value;
    employee.name=name;
    employee.age=Number(age);
    employee.city=city;
    employee.salary=salary;

    emp.push(employee);

    display(emp);

    document.getElementById('name').value="";
    document.getElementById('age').value="";
    document.getElementById('city').value="";
    document.getElementById('salary').value="";


}

function searchbyname(){
    let searchvalue=document.getElementById("searchname").value;
    console.log(searchvalue);

     let newdata=emp.filter(function(employee){
        return (employee.name.indexof(searchvalue)!=1);
    });
    
    display(newdata);

}
 function deletemp(index){ 
     emp.splice(index,1);
     display(emp);

 }