


document.addEventListener('DOMContentLoaded',function(){
    const form=document.querySelector('.form');
    const todolist=document.querySelector('.todolist')
    const input=document.querySelector('.input');
    const btn=document.querySelector('.btn'); 
     let editMode=false;
     let edititem=null;

    function addTodo(text){
      const list=document.createElement('li');
      list.className="todo"
      list.innerHTML=`<span>${text}</span>`;
      const editButton=document.createElement('button');
      editButton.innerText='✏️';
      const deleteButton=document.createElement('button');
      deleteButton.innerText='❌'
      list.appendChild(editButton);
      list.appendChild(deleteButton);
      todolist.append(list);
      
    }



todolist.addEventListener('click',function(e){

    const target=e.target;
    if(target.tagName=="BUTTON"){
        const todoitem=target.parentNode;
        if(target.innerText=="❌"){
            if(editMode){
                alert("first edit then delete")
                return ;
            }
            todoitem.remove();
        }
        else if(target.innerText=="✏️"){
            editMode=true;
            edititem=todoitem;
            const editText=todoitem.firstChild.textContent;
            input.value=editText;
            btn.innerText="editTodo"
            input.focus();

        }
    }
})





    btn.addEventListener('click',function(e){
        e.preventDefault();
        const  text=input.value.trim();
        if(editMode){
            edititem.firstChild.innerText=text;
            btn.innerText="Add Todo"
            editMode=false;
            edititem=null;
            input.value="";

        }
        else{
            if(text==""){
                alert("plz fill input");
                
            }
            else{
    
                addTodo(text);
                input.value="";
    
            }

        }

    
    })
})