const inputText = document.querySelector('#add-book input');
const link = document.querySelector('.button');
const ul = document.querySelector('ul');

const spanDelete=`<span class="delete">حذف</span>`; 

link.addEventListener('click',function(e){
    const spanName = document.createElement('sapn');
    spanName.className = 'name';
    spanName.textContent = inputText.value;

    const li = document.createElement('li');

    li.appendChild(spanName);
    li.innerHTML += spanDelete;

    ul.appendChild(li);

    storeToLocalStorege(inputText.value);

    inputText.value ='';
    e.preventDefault();

})

//حذف نشدن مقادیر بعد از رفرش صفحه
document.addEventListener('DOMContentLoaded',function(e){
 let tasks;
 if(localStorage.getItem('tasks')===null){
    tasks =[];
 }
 else{
    tasks=localStorage.getItem('tasks').split(',');
 }

 for(let item of tasks){
    const spanName = document.createElement('span');
    spanName.className = 'name';
    spanDelete.textContent = item;

    const li = document.createElement('li');

    li.appendChild(spanName);
    li.innerHTML += spanDelete;

    ul.appendChild(li);
 }
})





function storeToLocalStorege(task){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks=[];
    }
    else{
        tasks= localStorage.getItem('tasks').split(',');
    }
    tasks.push(task);
    localStorage.setItem('tasks',tasks);
}