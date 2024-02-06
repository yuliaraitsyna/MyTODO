import { v4 as uuidv4 } from 'uuid';
import { CreateProject, AddProject } from './project';

const CreateAddProjectWindow = () => {
    const projectWindow = document.getElementById('project-window')
    const exitButton = document.getElementById('exit-project-window')
    
    exitButton.addEventListener('click', () => {
        projectWindow.classList.remove('active')
        console.log('Project window is closed')
    })

    const titleInput = document.getElementById('project-title')
    const createButton = document.getElementById('create-project-btn')

    createButton.addEventListener('click', () => {
        const project = CreateProject(uuidv4(), titleInput.value.trim(), [], new Date())
        project.element.classList.add('project-obj')
        AddProject(project);
        projectWindow.classList.remove('active')
    })
}

export { CreateAddProjectWindow }
