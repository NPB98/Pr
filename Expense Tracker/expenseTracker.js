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

window.addEventListener("DOMContentLoaded",(e)=>{
    axios.get("http://localhost:4000/Expenses")
    .then((response)=>{
   for(let i=0; i<response.data.length; i++){
    //console.log(response.data[i]);
    showExpensesOnScreen(response.data[i]);
   }
   })
   .catch((err)=> console.log(err))
})

function showExpensesOnScreen(item){
    const parentNode= document.getElementById('items');
    console.log(item.id);
    const childHTML = `<li id=${item.id}> Expense Amount: ${item.amount}, Category: ${item.category}, Description: ${item.description}
                        <button onclick=deleteExpense('${item.id}')>Delete</button>
                        </li>`;
    parentNode.innerHTML = parentNode.innerHTML+childHTML;
}

function deleteExpense(expenseId){
    //console.log(expenseId);
    axios.get(`http://localhost:4000/deleteExpense/${expenseId}`)
    .then((response)=>{
        const parentNode = document.getElementById('items');
        const childNodeToBeDeleted = document.getElementById(expenseId);
        if(childNodeToBeDeleted){
            parentNode.removeChild(childNodeToBeDeleted)
        }
    }).catch((err)=>console.log(err));
}
