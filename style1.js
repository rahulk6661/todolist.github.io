//var btn1=document.querySelector(".signup-btn");
//btn1.style.backgroundColor="yellow";
/*btn1.style.color="blue";
btn1.style.fontWeight="bold";
let section=document.querySelector("#todo");
//console.log(section.innerHTML);
//changing innerhtml
section.innerHTML="<h2>Bhai Ajj ka Kya plan hai</h2>"; 
section.innerHTML +="<form class=\"form-todo\">";
section.innerHTML +="<input type=\"text\" name=\"\" id=\"\" placeholder=\"Add Todo\" />";
section.innerHTML +="<input type=\"submit\" value=\"Add Todo\" class=\"btn\" />";
section.innerHTML +="</form>";*/

/*var sectiontodo=document.querySelector('.section-todo');
sectiontodo.classList.add('bg-dark');
sectiontodo.classList.remove('container');
sectiontodo.classList.add('container');
sectiontodo.classList.toggle('container1');
sectiontodo.classList.toggle('bg-dark');
var todolist=document.querySelector('.todo-buttons');
todolist.innerHTML+="<button class=\"todo-btn done\">Done1</button>";
todolist.innerHTML+="<button class=\"todo-btn done\">Remove1</button>";
var newtodoitem=document.createElement("button");
newtodoitem.classList.add("todo-btn");
newtodoitem.classList.add("done");

var newitemtext=document.createTextNode("Done 2");
newtodoitem.appendChild(newitemtext);
var newtodoitem1=newtodoitem.cloneNode(true);
todolist.append(newtodoitem);
todolist.prepend(newtodoitem1);
var newi=document.createElement("h1");
var text=document.createTextNode("i love india");
newi.appendChild(text);
var newii=newi.cloneNode(true);
sectiontodo.before(newi);
sectiontodo.after(newii);
console.log(sectiontodo.getBoundingClientRect());
/*
var btn=document.querySelector(".btn-handler");
btn.onclick=function()
{
    console.log("you clicked me");
}
/*
let btn1=document.querySelector(".btn-headline");
btn1.addEventListener('click',clicked);
function clicked()
{
    console.log("thanks for clicked me");
}

var allbtn=document.querySelectorAll(".todo-btn");
for(let i of allbtn)
{
    i.addEventListener('click',function()
    {
        console.log(this.textContent);
    });
}
for(let i=0 ;i<allbtn.length;i++)
{
    allbtn[i].addEventListener('click',function(e)
    {
        console.log(this.target);
    });
}
for(let i=0 ;i<allbtn.length;i++)
{
    allbtn[i].addEventListener('click',(e)=>
    {
        e.currentTarget.style.backgroundColor="yellow";
        e.currentTarget.style.color="blue";
    });
}
for(let i=0 ;i<allbtn.length;i++)
{
    allbtn[i].addEventListener('click',(e)=>
    {
        console.log(e.currentTarget.textContent);
    });
}*/
let todoform=document.querySelector(".form-todo");
let ul=document.querySelector(".todo-list");
todoform.addEventListener("submit",(e)=>
{
    e.preventDefault();//prevent to refresh page
    var data=document.querySelector(".form-todo input[type='text']").value;
    const newli=document.createElement('li');
    const newinnerhtml= `<span class="text">${data}</span>
    <div class="todo-buttons">
      <button class="todo-btn done">Done</button>
      <button class="todo-btn remove" >Remove</button>
    </div>`;
  newli.innerHTML=newinnerhtml;
  ul.appendChild(newli);
  data="";
    
});
ul.addEventListener("click",(e)=>
{
   
    //check if click on done button
    if(e.target.classList.contains('done'))
    {
        const lispan=e.target.parentNode.previousElementSibling;
        lispan.style.textDecoration="line-through";
    }
    //check if click on remove button
    if(e.target.classList.contains('remove'))
    {
        const deleteli=e.target.parentNode.parentNode;
        ul.removeChild(deleteli);
    }
});
