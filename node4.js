var Form=document.getElementById('addform')
var exp=document.getElementById('expense');
var desc=document.getElementById('description');
var cate=document.getElementById('category');
var itemlist=document.getElementById('users');
document.addEventListener("submit",addItem)

function addItem(e){
    e.preventDefault();
    if(exp.value==='' || desc.value==='' || cate.value===''){
        alert('please enter fields')
    }
    else{
        let Obj={
          expense:exp.value,
            description:desc.value,
            category:cate.value
        }
let Obj_serialized=JSON.stringify(Obj);
localStorage.setItem(Obj.description,Obj_serialized);

let Obj_deserialized=JSON.parse(localStorage.getItem("Obj"))
var li=document.createElement('li');
li.className='item';
var parentcontent=
li.appendChild(document.createTextNode(localStorage.getItem(Obj.description)));
var delbtn=document.createElement('button');
delbtn.className='delete-btn';
delbtn.appendChild(document.createTextNode('Delete'));
li.appendChild(delbtn)
var edibtn=document.createElement('button');
edibtn.className='edit-btn';
edibtn.appendChild(document.createTextNode('Edit'));
li.appendChild(edibtn);
itemlist.appendChild(li);
itemlist.addEventListener('click',deleteitem);
document.addEventListener('click',edititem);
function deleteitem(e){
    if(e.target==delbtn){
        if(confirm('Are U sure?')){
            var li=e.target.parentElement;
            itemlist.removeChild(li);
        }
    }
}
function edititem(e){
    if(e.target==edibtn){
        var li=e.target.parentElement;
        for(var i=0;i<itemlist.getElementsByClassName('item').length;i++){
            if(itemlist.getElementsByClassName('item')[i]==li){
                let myobj_deserialized1=JSON.parse(itemlist.getElementsByClassName('item')[i].firstChild.textContent);
                Form.querySelector('#expense').value=myobj_deserialized1.expense
                Form.querySelector('#description').value=myobj_deserialized1.description;
                Form.querySelector('#category').value=myobj_deserialized1.category;
                }
            }
            itemlist.removeChild(li)
        }
    }
}  
}



