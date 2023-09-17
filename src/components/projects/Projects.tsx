import React, {useEffect, useState} from "react";
import './Projects.css'
import HeaderTitle from "../utils/headerTitle/HeaderTitle";
import InfoTileInfoPart from "../utils/infoTile/infoTileInfoPart/InfoTileInfoPart";
import InfoTileLogoPart from "../utils/infoTile/infoTileLogoPart/InfoTileLogoPart";
import {onAxiosError, onAxiosSuccess} from "../../global/Errors";
import {getProjects} from "../../global/ApiCalls";

const Projects = () => {
    type ProjectsType = {
        title: string,
        startDate: Date,
        endDate: Date | 'Present',
        associateWith?: string,
        description: string,
        skills: string[],
        logoUrl: string,
        projectUrl: string,
    }[]

    type ProjectsResponseType = {
        projects: {
            title: string,
            start_date: Date,
            end_date: Date | 'Present',
            associate_with?: string,
            description: string,
            skills: string[],
            logo_url: string,
            project_url: string,
        }[]
    }

    const [projects, setProjects] = useState<ProjectsType>([])

    function convertProjectsResponse(response: ProjectsResponseType): ProjectsType {
        const currentProjects = response.projects
        const newProjects: ProjectsType = []

        currentProjects.forEach(project => {
            newProjects.push({
                title: project.title,
                startDate: new Date(project.start_date),
                endDate: project.end_date === 'Present' ? 'Present' : new Date(project.end_date),
                associateWith: project.associate_with,
                description: project.description,
                skills: project.skills,
                logoUrl: project.logo_url,
                projectUrl: project.project_url
            })
        })

        console.log(response)
        return newProjects
    }

    useEffect(() => {
        getProjects()
            .then(
                response =>
                    onAxiosSuccess({
                        res: response, onSuccess: () => setProjects(convertProjectsResponse(response.data))
                    }),
                error =>
                    onAxiosError({axiosError: error})
            )
    }, [])

    return (
        <div id={'projects'}>
            <HeaderTitle text={'Projects'}/>
            <div id={'projects-container'}>
                {projects.map((project, index) => (
                    <div key={index} className={'project'}>
                        <InfoTileLogoPart title={project.title} logoUrl={project.logoUrl}
                                          websiteUrl={project.projectUrl} className={'project-logo'}/>
                        <InfoTileInfoPart title={project.title}
                                          subtitle={project.associateWith ? 'Associated with ' + project.associateWith : undefined}
                                          startDate={project.startDate} endDate={project.endDate}
                                          description={project.description} skills={project.skills}
                                          websiteUrl={project.projectUrl}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects