//const jwt= require("jsonwebtoken");

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

function showPremiumUser(){
    document.getElementById('rzp-button1').style.visibility='hidden';
    document.getElementById('premium').innerHTML = 'You are premium user' ;
}

function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
}

window.addEventListener("DOMContentLoaded",(e)=>{
    const token=localStorage.getItem('token');
    const decodedToken=parseJwt(token);
    const isPremiumUser=decodedToken.isPremiumUser;
    if(isPremiumUser){
        showPremiumUser();
        showLeaderboard();
    }
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

function showLeaderboard(){
    const inputElement = document.createElement('input');
    inputElement.type = "button";
    inputElement.value = "Show Leaderboard";
    inputElement.onclick = async() => {
        const token = localStorage.getItem('token');
       const leaderboardArray = await axios.get("http://localhost:4000/showLeaderboard", { headers: {"Authorization": token}});
        let leaderboardElem = document.getElementById('leaderboard');
        leaderboardElem.innerHTML += '<div class="container"><h3> LeaderBoard </h1></div>'

        leaderboardArray.data.forEach((userDetails) => {
            leaderboardElem.innerHTML += `<div class='container'><li>Name - ${userDetails.name} Total Expense-${userDetails.total_cost}</div>`
        })
    }
    document.getElementById('premium').appendChild(inputElement)
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
            document.getElementById('rzp-button1').style.visibility='hidden';
            document.getElementById('premium').innerHTML = 'You are premium user  ' ;
            localStorage.setItem('token',res.data.token);
            showLeaderboard();
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

