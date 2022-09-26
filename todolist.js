const task= [];
const addbtn = document.getElementById('addbtn');
const removebtn = document.getElementById('removebtn');
var display=document.querySelector('.display');
var consoleDislplay=document.querySelector('.display-console');
var userInput;
var todolists;

addbtn.addEventListener("click",(e)=>{
    userInput=document.getElementById('input');
    var input =userInput.value;
    task.push(input);
    display.innerHTML='';
    displayTodoList();
});

consoleDislplay.addEventListener('click',e=>{
    console.log('Final Todo list',task);
})

const displayTodoList=()=>{
    task.forEach(val=>{
        display.innerHTML+=`
        <div class='todo-list'>
            <input class='todo-list__input' value=' ${val}' disabled/>
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
    getTodoList();
}

const getTodoList=()=>{
    todolists=document.querySelectorAll('.todo-list');
    console.log('todol list all here',todolists);
    todolists.forEach((list,key)=>{
        console.log('lists here',);
        let editBtn=list.children[1].children[0];
        let delteBtn=list.children[1].children[1];

        editBtn.addEventListener('click',e=>{
            console.log('edit ');
        });
        
        delteBtn.addEventListener('click',e=>{
            console.log('delete');
        });
    });
}
        
   
