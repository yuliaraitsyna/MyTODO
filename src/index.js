import './style.css';
import { CreateAddWindow} from './add_window_creation.js'
import {CreateAddButton} from './add_button.js'
import {LoadProjects} from './page_load.js'
import { CreateAddTaskWindow } from './tasks/add_task_creation.js'
import { CreateAddProjectWindow } from './projects/add_project_creation.js'
import { DisplayProject, currentProjectId } from './projects/project.js'

CreateAddWindow()
CreateAddButton()
CreateAddTaskWindow()
CreateAddProjectWindow()

document.addEventListener('DOMContentLoaded', () => {

    const sidebar = document.getElementById('sidebar')
    sidebar.addEventListener('click', (event) => {

        if (event.target.id === 'delete-all-btn') {
            console.log('Delete all projects clicked')
        }

        if (event.target.className && event.target.className.includes('project-')) {
            DisplayProject(event.target.id)
            currentProjectId = event.target.id
        }

    })
    
    LoadProjects();
});

