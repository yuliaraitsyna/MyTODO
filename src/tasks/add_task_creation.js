import { CreateTask, AddTask } from './task'
import { currentProjectId } from '../projects/project'
import { v4 as uuidv4 } from 'uuid'

const CreateAddTaskWindow = () => {

    const taskWindow = document.getElementById('task-window')

    const titleInput = document.getElementById('task-title')
    const notes = document.getElementById('notes')
    const urgent = document.getElementById('urgent')
    const normal = document.getElementById('normal')
    const longterm = document.getElementById('longterm')
    const deadline = document.getElementById('deadline')

    normal.classList.add('active')

    let category = 'normal'

    const updateCategory = (newCategory) => {

        category = newCategory;
        urgent.classList.toggle('active', category === 'urgent')
        normal.classList.toggle('active', category === 'normal')
        longterm.classList.toggle('active', category === 'longterm')

    }

    urgent.addEventListener('click', () => updateCategory('urgent'))
    normal.addEventListener('click', () => updateCategory('normal'))
    longterm.addEventListener('click', () => updateCategory('longterm'))

    const createButton = document.getElementById('create-task-btn')

    const createTaskHandler = () => {

        const task = CreateTask(uuidv4(), titleInput.value.trim(), notes.value.trim(), new Date(), category, new Date(deadline.value))
        AddTask(currentProjectId, task)
        taskWindow.classList.remove('active')

    }

    createButton.removeEventListener('click', createTaskHandler)
    createButton.addEventListener('click', createTaskHandler)

    const exitButton = document.getElementById('exit-task-window')

    exitButton.addEventListener('click', () => {

        taskWindow.classList.remove('active')
        console.log('Task window is closed')
        titleInput.value = ''
        notes.value = ''
        deadline.value = ''
        category = 'normal'

    })
}

export { CreateAddTaskWindow }
