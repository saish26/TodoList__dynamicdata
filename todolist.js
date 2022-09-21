const task= [];
const addbtn = document.getElementById('addbtn');
const removebtn = document.getElementById('removebtn');
var display=document.querySelector('.display');
addbtn.addEventListener("click",(e)=>{
    const userInput=document.getElementById('input');
    var input =userInput.value;
    task.push(input);
    display.innerHTML+=`
    <div class='todo-list'>
        <li class='todo-list__input'>
        ${input}
        </li>
        <div class='todo-list__btn'>
            <button class='todo-list__btn--edit' >
                Edit
            </button>
            <button class='todo-list__btn--delete'>
                Delete
            </button>
        </div>
    </div>
     ` ;
     userInput.value='';
});

const editBtn=document.querySelector('.todo-list__btn--edit');
editBtn.addEventListener('click',e=>{
    console.log('clicked');
});



const displayTodoList=()=>{

    
}
       
        
   

