var form=document.getElementById('addForm');
var pri=document.getElementById('price');
var dis=document.getElementById('dish');
var tab=document.getElementById('table');
document.addEventListener("submit",addOrder);
function addOrder(e){
    e.preventDefault();
    const obj = {
        price:pri.value,
        dish:dis.value,
        table:tab.value
    }
    axios.post('https://crudcrud.com/api/d42e288feefb4e16a8f64e1cbb22dd34/orderLister',obj)
    .then((response)=>{
        showNewOrdersOnScreen(obj);
        
    }).catch((err)=>console.log(err));
}
window.addEventListener('DOMContentLoaded',() => {
    axios.get("https://crudcrud.com/api/d42e288feefb4e16a8f64e1cbb22dd34/orderLister")
    .then((response)=>{
        for(let i=0;i<response.data.length;i++)
        {
            showNewOrdersOnScreen(response.data[i]);
        }      
    }).catch((err)=>console.log(err));
});
function showNewOrdersOnScreen(order){
    var tableNo=order.table;
    if(tableNo=='Table 1'){
      const parentNode= document.getElementById('order1');
    const childHTML = `<li id=${order._id}> Order Amount: ${order.price}, Dish Name: ${order.dish}
                        <button onclick=deleteOrder('${order._id}')>Delete</button>
        </li>`;
    parentNode.innerHTML = parentNode.innerHTML+childHTML;
    }else if(tableNo=='Table 2'){
        const parentNode= document.getElementById('order2');
    const childHTML = `<li id=${order._id}> Order Amount: ${order.price}, Dish Name: ${order.dish}
                        <button onclick=deleteOrder('${order._id}')>Delete</button>
        </li>`;
    parentNode.innerHTML = parentNode.innerHTML+childHTML;
    }else if(tableNo=='Table 3'){
        const parentNode= document.getElementById('order3');
    const childHTML = `<li id=${order._id}> Order Amount: ${order.price}, Dish Name: ${order.dish}
                        <button onclick=deleteOrder('${order._id}')>Delete</button>
        </li>`;
    parentNode.innerHTML = parentNode.innerHTML+childHTML;
    }
}
function deleteOrder(orderId){
    axios.get(`https://crudcrud.com/api/d42e288feefb4e16a8f64e1cbb22dd34/orderLister/${orderId}`)
    .then((response)=>{
        var tableNumber=response.data.table;
        console.log(tableNumber);
        axios.delete(`https://crudcrud.com/api/d42e288feefb4e16a8f64e1cbb22dd34/orderLister/${orderId}`)
        .then((response)=>{
        removeProductFromScreen(orderId,tableNumber);
        }).catch((err)=>console.log(err));
    }).catch((err)=>console.log(err));
    
}

function removeProductFromScreen(orderId,tableNumber){
    if(tableNumber=='Table 3')
    {
        const parentNode = document.getElementById('order3');
    const childNodeToBeDeleted = document.getElementById(orderId);
    if(childNodeToBeDeleted){
        parentNode.removeChild(childNodeToBeDeleted)
    }
    }
    if(tableNumber=='Table 2')
    {
        const parentNode = document.getElementById('order2');
    const childNodeToBeDeleted = document.getElementById(orderId);
    if(childNodeToBeDeleted){
        parentNode.removeChild(childNodeToBeDeleted)
    }
    }
    if(tableNumber=='Table 1')
    {
        const parentNode = document.getElementById('order1');
    const childNodeToBeDeleted = document.getElementById(orderId);
    if(childNodeToBeDeleted){
        parentNode.removeChild(childNodeToBeDeleted)
    }
    }

}

