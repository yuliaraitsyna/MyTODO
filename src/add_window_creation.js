
const CreateAddWindow = () =>{

    const addWindow = document.getElementById('add-window')
    const taskButton = document.getElementById('task-btn')
    const paperButton = document.getElementById('paper-btn')

    const taskWindowCreation = () => {

        addWindow.classList.remove('active')
        const taskWindow = document.getElementById('task-window')
        taskWindow.classList.add('active')

    }

    taskButton.removeEventListener('click', taskWindowCreation)
    taskButton.addEventListener('click', taskWindowCreation)

    paperButton.addEventListener('click', () => {

        addWindow.classList.remove('active')
        const projectWindow = document.getElementById('project-window')
        projectWindow.classList.add('active')
        
    })
    
}

export {CreateAddWindow}