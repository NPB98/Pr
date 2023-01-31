var amt=document.getElementById('amount');
var desc=document.getElementById('description');
var cate=document.getElementById('category');
var itemlist=document.getElementById('items');
document.addEventListener("submit",addExpense)

function addExpense(e){
    e.preventDefault();
    const obj = {
        amount:amt.value,
        description:desc.value,
        category:cate.value
    }
    axios.post("http://localhost:4000/addExpenses",obj)
    .then((response)=>{
        showExpensesOnScreen(obj);
    }).catch((err)=>console.log(err));
}

window.onload=()=>{
    axios.get("http://localhost:4000/Expenses")
    .then((response)=>{
   for(let i=0; i<response.data.length; i++){
    showExpensesOnScreen(response.data[i]);
   }
   })
   .catch((err)=> console.log(err))
}

function showExpensesOnScreen(item){
    const parentNode= document.getElementById('items');
    const childHTML = `<li id=${item.id}> Expense Amount: ${item.amount}, Category: ${item.category}, Description: ${item.description}
                        <button onclick=deleteExpense('${item.id}')>Delete</button>
                        <button onclick=editExpenseDetails('${item.amount}','${item.description}','${item.category}','${item.id}')>Edit</button>
                        </li>`;
    parentNode.innerHTML = parentNode.innerHTML+childHTML;
}

function deleteExpense(expenseId){
    axios.get(`http://localhost:4000/deleteExpense/${expenseId}`)
    .then((response)=>{
        const parentNode = document.getElementById('items');
        const childNodeToBeDeleted = document.getElementById(expenseId);
        if(childNodeToBeDeleted){
            parentNode.removeChild(childNodeToBeDeleted)
        }
    }).catch((err)=>console.log(err));
}

function editExpenseDetails(amount, category, description,expenseId){
    document.getElementById('amount').value = amount;
    document.getElementById('description').value = description;
    document.getElementById('category').value = category;
    deleteExpense(expenseId);
 }













 
// var na=document.getElementById('name');
// var em=document.getElementById('email');
// var phne=document.getElementById('phone');
// document.addEventListener('submit',addAppointment);

// function addAppointment(e){
//     e.preventDefault();
//     const myObj={
//         name:na.value,
//         email:em.value,
//         phone:phne.value,
//     }
//     console.log(myObj);
//     axios.post("http://localhost:4000/addUser",myObj)
//     .then((result)=>{
//         console.log(result.data);
//         showUsersOnScreen(result.data);
//     })
//     .catch((err)=>console.log(err));
// }

// window.onload=()=>{
//     axios.get("http://localhost:4000/Users").then((result)=>{
//    for(let i=0; i<result.data.length; i++){
//     showUsersOnScreen(result.data[i]);
//    }
//    })
//    .catch((err)=> console.log(err))
// }

// function showUsersOnScreen(obj){ 
//     const parentNode= document.getElementById('itemList');
//     //console.log(obj.name);
//     const childHTML = `<li id=${obj.id}> Name: ${obj.name}, Email: ${obj.email}, Phone: ${obj.phone}
//                         <button onclick=deleteUser('${obj.id}')>Delete</button>
//                         </li>`;
//     parentNode.innerHTML = parentNode.innerHTML+childHTML;
// }

// function deleteUser(id){
//     axios.get(`http://localhost:4000/deleteBooking/${id}`)
//     .then((res)=>{
//         //console.log(res);
//         const parentNode = document.getElementById('itemList');
//     const childNodeToBeDeleted = document.getElementById(id);
//     if(childNodeToBeDeleted){
//         parentNode.removeChild(childNodeToBeDeleted)
//     }
//     })
//     .catch((err)=> console.log(err));
//   }