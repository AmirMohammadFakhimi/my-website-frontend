import React from "react";
import "./ExperienceProject.css";
import {ProjectType} from "../../../../global/Types";
import CustomShowMoreText from "../../../utils/customShowMoreText/CustomShowMoreText";

function ExperienceProject({index, project}: { index: number, project: ProjectType }) {
    return (
        <li className={'current-project'} key={index}>
            <a className={'experience-project-title'} href={project.projectUrl} target={'_blank'} rel="noreferrer">
                {project.title}
            </a>
            <CustomShowMoreText className={'experience-project-description'}>
                {project.description}
            </CustomShowMoreText>
        </li>
    )
}

export default ExperienceProject;