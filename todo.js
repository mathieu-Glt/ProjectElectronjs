const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');
const addBtn = document.getElementById('addBtn');

addBtn.addEventListener('click', function(){

    if(todoInput.value){
        const li = document.createElement('li');
        const text = document.createTextNode(todoInput.value)
        li.classList.add('todoListli')
    
        const doneBtn = document.createElement('button')
        doneBtn.textContent = 'Done'
        doneBtn.classList.add('done-btn')
    
        const deleteBtn = document.createElement('button')
        deleteBtn.textContent = 'Delete'
        deleteBtn.classList.add('delete-btn')
    
        doneBtn.addEventListener('click', function(){
            li.classList.toggle('completed')
        })
    
        deleteBtn.addEventListener('click', function(){
            li.remove()
        })

        li.appendChild(text)
        li.appendChild(doneBtn)
        li.appendChild(deleteBtn)
        todoList.appendChild(li)
        todoInput.value = ''
    
    
    } else{
        // alert('You have to enter a task ')
         // Appel à l'API exposée pour ouvrir la fenêtre modale
        //  if (window.versions.openModal && window.versions.openModal) {
            window.versions.openModal();  // Ouvre la fenêtre modale via IPC
        // } else {
        //     console.error("L'API electronAPI n'est pas disponible.");
        // }
    }


})