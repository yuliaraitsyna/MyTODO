import { CreateProject, DisplayProject, currentProjectId } from "./projects/project"

const LoadProjects = () => {

    const projects = JSON.parse(localStorage.getItem('projects')) || []
    const sidebar = document.getElementById('sidebar')

    console.log(projects)

    if (projects.length > 0){

        projects.forEach((projectData) => {  

            const project = CreateProject(projectData.id, projectData.title, projectData.tasks, new Date(projectData.date))
            sidebar.appendChild(project.element)

            if (currentProjectId === null) {
                DisplayProject(project.id)
                currentProjectId = project.id
                console.log('Info: current project ID: ' + currentProjectId)
            }

        })

    }

}

export { LoadProjects };
