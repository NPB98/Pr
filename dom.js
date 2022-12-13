//EXAMINE THE DOCUMENT OBJECT
//console.dir(document);
//console.log(document.all);
//console.log(document.all[10]);
//console.log(domain);
// console.log(URL);
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.forms);
// console.log(document.forms[0]);
// console.log(document.images);
// console.log(document.links);
// console.log(document.getElementById('header-title'));
// var headerTitle=document.getElementById('header-title');
// headerTitle.textContent="Hello";
// headerTitle.innerText="Goodbye";
// headerTitle.innerHTML='<h3>Hello</h3>';
// headerTitle.style.borderBottom='solid 3px #000';
// var header=document.getElementById('main-header');
// header.style.borderBottom='solid 3px #000';
// var border=document.getElementById('main');
// border.style.color='green';
var items=document.getElementsByClassName("list-group-item");
console.log(items);
console.log(items[1]);
items[1].textContent="Hello 2";
items[1].style.fontWeight ='bold';
items[1].style.backgroundColor ='yellow';
//Error
//items.style.backgroundColor='yellow';
for(var i=0;i<items.length;i++)
{
    items[i].style.backgroundColor='#f4f4f4';
}


