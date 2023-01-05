
var form=document.getElementById('addForm');
var amount=document.getElementById('amount');
var desc=document.getElementById('description');
var itemlist=document.getElementById('products');
document.addEventListener("submit",addProduct)
function addProduct(e){
    e.preventDefault();

    const obj = {
        amount:amount.value,
        description:desc.value
    }
    //localStorage.setItem(obj.email,JSON.stringify(obj));
    axios.post('https://crudcrud.com/api/fb90d3e3f5e04abf87814f39654aad48/productLister',obj)
    .then((response)=>{
        total=total+response.data.amount;
        console.log(total);
        showNewProductsOnScreen(obj);
    }).catch((err)=>console.log(err));
}

window.addEventListener('DOMContentLoaded',() => {
    axios.get("https://crudcrud.com/api/fb90d3e3f5e04abf87814f39654aad48/productLister")
    .then((response)=>{
        for(let i=0;i<response.data.length;i++)
        {
            console.log(response.data[i]);
            showNewProductsOnScreen(response.data[i]);
            
        }
    }).catch((err)=>console.log(err));

});

function showNewProductsOnScreen(product){
    const parentNode= document.getElementById('products');
    const childHTML = `<li id=${product._id}> Product Amount: ${product.amount}, Description: ${product.description}
                        <button onclick=deleteProduct('${product._id}')>Delete</button>
                        
                        </li>`;
    parentNode.innerHTML = parentNode.innerHTML+childHTML;
    

}
    function deleteProduct(productId){
        axios.delete(`https://crudcrud.com/api/fb90d3e3f5e04abf87814f39654aad48/productLister/${productId}`)
        .then((response)=>{
            removeProductFromScreen(productId);
        }).catch((err)=>console.log(err));

        
    }

    function removeProductFromScreen(productId){
        const parentNode = document.getElementById('products');
        const childNodeToBeDeleted = document.getElementById(productId);
        if(childNodeToBeDeleted){
            parentNode.removeChild(childNodeToBeDeleted)
        }
    }