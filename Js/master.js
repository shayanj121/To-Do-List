const Openbtn = document.querySelector('#open')
const action = document.querySelector('#action')
const title = document.querySelector('#title')
const date = document.querySelector('#date')
const addBtn = document.querySelector('#btn')
const description = document.querySelector('#description')
const box = document.querySelector('#box')
const taskList = document.querySelector('ul');

let temp = 'close'
Openbtn.addEventListener('click', ()=>{
    if (temp == 'close') {
        box.style.height = '240px'
        box.style.opacity = '1'
        temp = 'open'
        Openbtn.style.transform = 'rotateZ(45deg)'
        
    }
    else{
        box.style.height = '0px'
        box.style.opacity = '0'
        temp = 'close'
        Openbtn.style.transform = 'rotateZ(0deg)'
    }
})



addBtn.addEventListener('click', ()=>{
    console.log()
    const _action = action.value;
    const _title = title.value.trim();
    const _date = date.value;
    const _description = description.value.trim();

    if (_title === "" || _description === "") {
        alert("Adam bash...");
        return;
    }

    let actionClass = '';
switch (_action) {
    case 'Sport':
        actionClass = 'action-sport';
        break;
    case 'Work':
        actionClass = 'action-work';
        break;
    case 'Music':
        actionClass = 'action-music';
        break;
    case 'Shopping':
        actionClass = 'action-shopping';
        break;
    default:
        actionClass = 'action-others';
}

    
        const taskItem = document.createElement('li');
        taskItem.classList.add(actionClass);
        taskItem.innerHTML = `
            <div>${_action}</div>
            <div><strong>${_title}</strong><h6>${_description}</h6></div><div>
            <h6>${_date}</h6><span class='dele'>✔</span></div>
        `;
        taskList.appendChild(taskItem);
    

        taskItem.querySelector('.dele').addEventListener('click', () => {
            taskItem.classList.add('remove-task');
            setTimeout(() => {
                taskItem.remove();
            }, 500);
        });
        
})


