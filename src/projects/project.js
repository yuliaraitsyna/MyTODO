import { CreateTask } from "../tasks/task"

const MAX = 15
let currentProjectId = null

const CreateProject = (id, title, tasks, date) => {

    const CreateProjectObject = () => {
        const project = document.createElement('div')

        project.id = id || uuidv4()
        project.className = 'project-' + project.id
        project.textContent = title
        project.title = title
        project.date = date instanceof Date  ? date : new Date()
        project.tasks = tasks || []

        const deleteButton = document.createElement('div')
        deleteButton.innerHTML = 'x'
        deleteButton.className = 'delete-project-btn'
        deleteButton.addEventListener('click', (event)=>{
            event.stopPropagation()
            DeleteProject(project.id)
        })

        project.append(deleteButton)

        return project
    }


    const project = CreateProjectObject()
    
    return {
        id: project.id,
        title,
        date: project.date,
        tasks: project.tasks,
        element: project,
    };
}

const AddProject = (project) => {

    if(project.title === ''){
        window.alert('Error: no project can be created')
        return
    }

    const sidebar = document.getElementById('sidebar');
    const projects = JSON.parse(localStorage.getItem('projects')) || [];
    const projectIndex = projects.findIndex((p) => p.title === project.title);

    console.log(projects)
    if (projects.length > MAX){
        window.alert('Error: no project can be created. You have overcome limit of ' + MAX + ' projects');
        return
    }

    if (projectIndex === -1){
        projects.push({
            id: project.id,
            title: project.title,
            date: project.date.toJSON(),
            tasks: project.tasks,
        })

        localStorage.setItem('projects', JSON.stringify(projects))
        sidebar.appendChild(project.element)
    }
}

const DeleteProject = (projectId) => {

    const header = document.getElementById('project-header')
    const date = document.getElementById('date-display')
    const projects = JSON.parse(localStorage.getItem('projects')) || []
    const projectIndex = projects.findIndex((p) => p.id === projectId)

    if (projectIndex !== -1) {
        projects.splice(projectIndex, 1)
        localStorage.setItem('projects', JSON.stringify(projects))

        const sidebar = document.getElementById('sidebar');
        const projectElement = document.querySelector('.project-' + projectId)

        if (projectElement) {
            sidebar.removeChild(projectElement)
            currentProjectId = null
            console.log('Success: deleted project with ID: ' + projectId)
        }
        console.log(projects);

        header.textContent = ''
        date.textContent = ''
    }
}

const DisplayProject = (projectId) => {
        
    const header = document.getElementById('project-header')
    const date = document.getElementById('date-display')
    const tasksContainer = document.getElementById('tasks-container')

    tasksContainer.innerHTML = ''

    const projects = JSON.parse(localStorage.getItem('projects'))
    const project = projects.find((p) => p.id === projectId)

    header.textContent = project.title.trim();
    date.textContent = 'Creation date: ' + (new Date(project.date)).toUTCString()

    const tasks = project.tasks
    tasks.forEach((taskData)=> {
        const task = CreateTask(taskData.id, taskData.title, taskData.notes, taskData.date, taskData.category, taskData.deadline)
        tasksContainer.appendChild(task.element)
    })
};

const DeleteAllProjects = () =>{

    localStorage.removeItem('projects')
    const header = document.getElementById('project-header')
    const date = document.getElementById('date-display')
    const tasksContainer = document.getElementById('tasks-container')
    const sidebar = document.getElementById('sidebar')
    const projectElements = document.querySelectorAll('[class^="project"]')

    projectElements.forEach((projectElement) => {
        sidebar.removeChild(projectElement);
        header.textContent ='';
        date.textContent ='';
        tasksContainer.innerHTML ='';
    })

    currentProjectId = null
    console.log('Success: local storage is clear now')
    console.log('Success: sidebar is clear now')
}

const deleteAllButton = document.getElementById('delete-all-btn');

deleteAllButton.addEventListener('click', () =>{
    DeleteAllProjects()
})

export { CreateProject, AddProject, DisplayProject, currentProjectId};
