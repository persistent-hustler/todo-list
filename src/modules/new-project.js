import projectsList from "../data/projects-list";

export default function newProject(projectName) {
    projectsList[projectName] = projectName;
    return projectName;
}