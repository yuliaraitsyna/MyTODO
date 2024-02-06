import { v4 as uuidv4 } from 'uuid'
import { DisplayProject, currentProjectId } from '../projects/project'

const MAX = 10

const CreateTask = (id, title, notes, date, category, deadline) => {

    const categoryColors = {
        normal: 'var(--normal-color)', 
        urgent: 'var(--urgent-color)',
        longterm: 'var(--longterm-color)', 
    }

    const CreateTaskObject = () => {

        const task = document.createElement('div')
        task.id = id || uuidv4()
        task.className = 'task-' + task.id
        task.date = date instanceof Date ? date : new Date()
        task.deadline = deadline instanceof Date ? deadline : new Date()
        task.category = category || 'normal'
        task.title = title
        task.notes = notes

        const contentContainer = document.createElement('div')

        const titleElement = document.createElement('h3')
        titleElement.className = 'title'
        titleElement.textContent = title

        const categoryElement = document.createElement('h4')
        categoryElement.className = 'category'
        categoryElement.textContent = task.category
        categoryElement.style.backgroundColor = categoryColors[task.category]

        const deadlineElement = document.createElement('p')
        deadlineElement.className = 'deadline'
        deadlineElement.textContent = 'Deadline: ' + task.deadline.toDateString()

        const notesElement = document.createElement('p')
        notesElement.className = 'notes'
        notesElement.textContent = notes

        const dateElement = document.createElement('p')
        dateElement.textContent = task.date.toDateString()

        contentContainer.appendChild(titleElement)
        contentContainer.appendChild(categoryElement)
        contentContainer.appendChild(deadlineElement)
        contentContainer.appendChild(notesElement)

        const buttonsContainer = document.createElement('div')
        buttonsContainer.className = 'btn-container'

        const completeButton = document.createElement('button')
        completeButton.className = 'complete-task-btn'
        completeButton.textContent = 'Done'

        completeButton.addEventListener('click', () => {

            task.classList.add('completed')
            completeButton.disabled = true
            
        })

        /*const editButton = document.createElement('button');
        editButton.textContent = 'Edit'
        editButton.className = 'edit-task-btn';
        editButton.addEventListener('click', ()=>{
            EditTask(task);
        })*/

        const deleteButton = document.createElement('button')
        deleteButton.textContent = 'Delete'
        deleteButton.className = 'delete-task-btn'
        deleteButton.addEventListener('click', ()=>{

            DeleteTask(task);

        })

        buttonsContainer.appendChild(completeButton)
        //buttonsContainer.appendChild(editButton);
        buttonsContainer.appendChild(deleteButton)

        task.appendChild(contentContainer)
        task.appendChild(buttonsContainer)

        return task

    }

    const task = CreateTaskObject();

    return {
        id: task.id,
        title: task.title,
        notes: task.notes,
        date: task.date,
        category: task.category, 
        deadline: task.deadline, 
        element: task,
    };
};

const AddTask = (projectId, task) => {

    if (!projectId) {
        window.alert('Choose a project first or create a new one')
        return
    }

    const taskContainer = document.getElementById('tasks-container')
    const projects = JSON.parse(localStorage.getItem('projects')) || []
    const projectIndex = projects.findIndex((p) => p.id === projectId)

    if (projectIndex !== -1) {

        const project = projects[projectIndex];
        const tasks = project.tasks;
        const taskIndex = tasks.findIndex((t) => t.title === task.title);
        
        if (tasks.length > MAX){
            window.alert('Error: no task can be created. You have overcome limit of ' + MAX)
            return
        }

        if (taskIndex === -1) {
            project.tasks.push({
                id: task.id,
                title: task.title,
                notes: task.notes,
                date: task.date,
                category: task.category,
                deadline: task.deadline,
            })
            
            taskContainer.appendChild(task.element)
            localStorage.setItem('projects', JSON.stringify(projects))
        }

    }

}
/*const EditTask = (task) => {
    const taskWindow = document.getElementById('edit-task-window');
    const header = document.getElementById('edit-task-window-header');
    const titleInput = document.getElementById('edit-task-title');
    const notes =  document.getElementById('edit-notes');
    const urgent = document.getElementById('edit-urgent');
    const normal = document.getElementById('edit-normal');
    const longterm = document.getElementById('edit-longterm');
    const deadline =  document.getElementById('edit-deadline');
    const editButton =  document.getElementById('edit-task-btn');

    taskWindow.classList.add('active');
    titleInput.value = task.title;
    notes.textContent = task.notes;
    let category = 'normal';
    switch(task.category){
        case'normal' :{

        }
        case 'urgent': {

        }
        case 'longterm': {

        }
        default : {
            //normal
        }
    }
    urgent.addEventListener('click', () => {
        category = 'urgent';
    });

    normal.addEventListener('click', () => {
        category = 'normal';
    });

    longterm.addEventListener('click', () => {
        category = 'longterm';
    });

    deadline.value = task.deadline;
    editButton.addEventListener('click', () => {
        const projects = JSON.parse(localStorage.getItem('projects'));
        const project = projects.find((p) => p.id === currentProjectId);
        const editTask = project.tasks.find((t) => t.id === task.id);
        editTask.title = titleInput.value;
        editTask.notes = notes.value;
        editTask.category = category;
        editTask.deadline = deadline.value;
        localStorage.setItem('projects', JSON.stringify(projects)); // Convert to JSON string
        DisplayProject(project);
    });
    
    const exitButton = document.getElementById('exit-edit-task-window');
    exitButton.addEventListener('click', () => {
        taskWindow.classList.remove('active');
        console.log('Edit task window is closed');
    });
}*/

const DeleteTask = (task)=>{

    const tasksContainer = document.getElementById('tasks-container')
    const projects = JSON.parse(localStorage.getItem('projects')) || []
    const project = projects.find((p)=> p.id === currentProjectId)
    const taskIndex = project.tasks.findIndex((t)=> t.id === task.id)

    if(taskIndex === -1){
        console.log("Error: task is not found")
        return
    }

    else{
        project.tasks.splice(taskIndex, 1)
        localStorage.setItem('projects', JSON.stringify(projects))
        const taskElement = document.querySelector('.task-' + task.id)
        tasksContainer.removeChild(taskElement)
    }
    
}

export { CreateTask, AddTask };

