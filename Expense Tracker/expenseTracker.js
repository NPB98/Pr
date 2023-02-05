var amt=document.getElementById('amount');
var desc=document.getElementById('description');
var cate=document.getElementById('category');
var itemlist=document.getElementById('items');
var form=document.getElementById('addForm');
form.addEventListener("submit",addExpense)
//premium.addEventListener("submit",window.location.href='https://github.com/NPB98/Pr/commits/main');


function addExpense(e){
    e.preventDefault();
    const obj = {
        amount:amt.value,
        description:desc.value,
        category:cate.value
    }
    const token=localStorage.getItem('token');
    axios.post("http://localhost:4000/addExpenses",obj,{headers:{'Authorization':token}})
    .then((response)=>{
        showExpensesOnScreen(obj);
    }).catch((err)=>console.log(err));
}

window.addEventListener("DOMContentLoaded",(e)=>{
    const token=localStorage.getItem('token');
    axios.get("http://localhost:4000/getExpenses",{headers:{'Authorization':token}})
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
    //console.log(item.id);
    const childHTML = `<li id=${item.id}> Expense Amount: ${item.amount}, Category: ${item.category}, Description: ${item.description}
                        <button onclick=deleteExpense('${item.id}')>Delete</button>
                        </li>`;
    parentNode.innerHTML = parentNode.innerHTML+childHTML;
}

function deleteExpense(expenseId){
    //console.log(expenseId);
    const token=localStorage.getItem('token');
    axios.get(`http://localhost:4000/deleteExpense/${expenseId}`,{headers:{'Authorization':token}})
    .then((response)=>{
        const parentNode = document.getElementById('items');
        const childNodeToBeDeleted = document.getElementById(expenseId);
        if(childNodeToBeDeleted){
            parentNode.removeChild(childNodeToBeDeleted)
        }
    }).catch((err)=>console.log(err));
}

document.getElementById('rzp-button1').onclick=async function(e){
    const token=localStorage.getItem('token');
    console.log(token);
    const response=await axios.get('http://localhost:4000/premiumMembership',{headers:{'Authorization':token}});
    var options=
    {
        "key": response.data.key_id,
        "order_id": response.data.order.id,
        "handler": async function(res){
            await axios.post('http://localhost:4000/updateTransactionStatus',{
                order_id: options.order_id,
                payment_id: res.razorpay_payment_id,
            },{headers:{'Authorization':token}})
            alert('You are a premium user now')
        }
    };
    const rzp1=new Razorpay(options);
    rzp1.open();
    e.preventDefault();
    rzp1.on('payment.failed',async function(response){
        console.log(response);
        const answer= await axios.post("http://localhost:4000/updateFailedTransactionStatus",{
            order_id: options.order_id
        },{headers: {'Authorization' : token}})
        console.log(answer);
        alert('Something went wrong');
    });
}

