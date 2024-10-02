import React, {useEffect, useState} from "react";
import './Projects.css'
import HeaderTitle from "../../utils/headerTitle/HeaderTitle";
import InfoTileInfoPart from "../../utils/infoTile/infoTileInfoPart/InfoTileInfoPart";
import {onAxiosError, onAxiosSuccess} from "../../../global/Errors";
import {getProjects} from "../../../global/ApiCalls";
import Filter from "../../utils/filter/Filter";
import TotalTile from "../../utils/totalTile/TotalTile";

function Projects({header}: { header: string }) {
    type LabelType = 'Highlights' | 'Others'

    type ProjectsType = {
        title: string,
        startDate: Date,
        endDate: Date | 'Present',
        associateWith?: string,
        description: string,
        skills: string[],
        projectUrl: string,
        labels: LabelType[]
    }[]

    type ProjectsResponseType = {
        projects: {
            title: string,
            start_date: Date,
            end_date: Date | 'Present',
            associate_with?: string,
            description: string,
            skills: string[],
            project_url: string,
            labels: LabelType[]
        }[]
    }

    const [projects, setProjects] = useState<ProjectsType>([])
    const [filteredProjects, setFilteredProjects] = useState<ProjectsType>([])

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
                projectUrl: project.project_url,
                labels: project.labels
            })
        })

        return newProjects
    }

    useEffect(() => {
        getProjects()
            .then(
                response =>
                    onAxiosSuccess({
                        res: response, onSuccess: () => {
                            const convertedResponse = convertProjectsResponse(response.data)
                            setProjects(convertedResponse)
                            setFilteredProjects(convertedResponse)
                        }
                    }),
                error =>
                    onAxiosError({axiosError: error})
            )
    }, [])

    return (
        <div id={'projects'}>
            <HeaderTitle text={header} className={'projects-header'}/>
            <TotalTile total={filteredProjects.length}/>
            <Filter values={projects} setFilteredValues={setFilteredProjects}/>
            <div id={'projects-container'}>
                {filteredProjects.map((project, index) => (
                    <div key={index} className={'project'}>
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