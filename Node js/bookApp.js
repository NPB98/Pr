var na=document.getElementById('name');
var em=document.getElementById('email');
var phne=document.getElementById('phone');
document.addEventListener('submit',addAppointment);

function addAppointment(e){
    e.preventDefault();
    const myObj={
        name:na.value,
        email:em.value,
        phone:phne.value,
    }
    console.log(myObj);
    axios.post("http://localhost:4000/addUser",myObj)
    .then((result)=>{
        console.log(result.data);
        showUsersOnScreen(result.data);
    })
    .catch((err)=>console.log(err));
}

window.onload=()=>{
    axios.get("http://localhost:4000/Users").then((result)=>{
   for(let i=0; i<result.data.length; i++){
    showUsersOnScreen(result.data[i]);
   }
   })
   .catch((err)=> console.log(err))
}

function showUsersOnScreen(obj){ 
    const parentNode= document.getElementById('itemList');
    //console.log(obj.name);
    const childHTML = `<li id=${obj.id}> Name: ${obj.name}, Email: ${obj.email}, Phone: ${obj.phone}
                        <button onclick=deleteUser('${obj.id}')>Delete</button>
                        </li>`;
    parentNode.innerHTML = parentNode.innerHTML+childHTML;
}

function deleteUser(id){
    axios.get(`http://localhost:4000/deleteBooking/${id}`)
    .then((res)=>{
        //console.log(res);
        const parentNode = document.getElementById('itemList');
    const childNodeToBeDeleted = document.getElementById(id);
    if(childNodeToBeDeleted){
        parentNode.removeChild(childNodeToBeDeleted)
    }
    })
    .catch((err)=> console.log(err));
  }