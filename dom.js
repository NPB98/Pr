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
// var items=document.getElementsByClassName("list-group-item");
// console.log(items);
// console.log(items[1]);
// items[1].textContent="Hello 2";
// items[1].style.fontWeight ='bold';
// items[1].style.backgroundColor ='yellow';
// //Error
// //items.style.backgroundColor='yellow';
// for(var i=0;i<items.length;i++)
// {
//     items[i].style.backgroundColor='#f4f4f4';
// }
// items[2].style.backgroundColor='green';
// for(var i=0;i<items.length;i++)
// {
//     items[i].style.fontWeight='bold';
// }
// var li=document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent="Hello";
// li[1].style.fontWeight='bold';
// li[1].style.backgroundColor='yellow';
// for(var i=0;i<li.length;i++)
// {
//     li[i].style.backgroundColor='#f4f4f4';
// }
// var header=document.querySelector('#main-header');
// header.style.borderBottom='solid 4px #ccc';
// var input=document.querySelector('input');
// input.value='Hello World';
// var submit=document.querySelector("input[type='submit']");
// submit.value='SEND';
// var item=document.querySelector('.list-group-item');
// item.style.color='red';
// var lastItem=document.querySelector('.list-group-item:last-child');
// lastItem.style.color='blue';
// var secondItem=document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color='coral';
// secondItem.style.backgroundColor='green';
// var thirdItem=document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.visibility='hidden';

// var titles=document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent="Hello";
// var odd=document.querySelectorAll('li:nth-child(odd)');
// var even=document.querySelectorAll('li:nth-child(even)');
// for(var i=0;i<odd.length;i++)
// {
//     odd[i].style.backgroundColor='green';
//     even[i].style.backgroundColor='#ccc';
// }
// var items=document.querySelectorAll('.items');
//for(var j=0;j<items.length;j++)
//{
  //  if(j==1)
    //    items[j].style.color='green';
//}
// var itemList=document.querySelector('#items');
// console.log(itemList);
// //PARENT NODE
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor='#f4f4f4';
// //PARENT ELEMENT
// console.log(itemList.parentElement);
// itemList.parentElement.style.color='red';
// // //CHILD NODES
// console.log(itemList.childNodes);
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor='yellow';
// // //FIRST CHILD
// console.log(itemList.firstChild);
// // //FIRST ELEMENT CHILD
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent='hello';
// // //LAST CHILD    
// console.log(itemList.lastChild);
// // //LAST ELEMENT CHILD
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent='hello 1';
// // //NEXT SIBLING
// console.log(itemList.nextSibling);
// // //NEXT ELEMENT SIBLING
// console.log(itemList.nextElementSibling);
// // //PREVIOUS SIBLING
// console.log(itemList.previousSibling);
// // //PREVIOUS ELEMENT SIBLING
// console.log(itemList.previousElementSibling);
// // //CREATE ELEMENT
// //Create a div
// var newDiv=document.createElement('div');
// newDiv.className='Hello';
// newDiv.id='Hello 1';
// // //SET ATTRIBUTE
// newDiv.setAttribute('title','Hello Div');
// //CREATE A TEXTNODE
// var newDivText=document.createTextNode('HEllo');
// // //ADD TEXT TO DIV...APPEND CHILD    
// // newDiv.appendChild(newDivText);
// // var container=document.querySelector('header .container');
// // var h1=document.querySelector('header h1');
// // console.log(newDiv);
// // newDiv.style.fontSize='30px';
// // container.insertBefore(newDiv,h1);
// // var parentNode=document.getElementById('items');
// // console.log(parentNode);
// // parentNode.innerHTML='<li>HEllo</li>'+parentNode.innerHTML


