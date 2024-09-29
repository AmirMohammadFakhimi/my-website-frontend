import React from "react";
import "./ExperienceMedia.css";
import {MediaType} from "../../../../global/Types";
import CustomShowMoreText from "../../../utils/customShowMoreText/CustomShowMoreText";

function ExperienceMedia({index, media}: { index: number, media: MediaType }) {
    return (
        <li className={'current-media'} key={index}>
            <a className={'experience-media-title'} href={media.url} target={'_blank'} rel="noreferrer">
                {media.title}
            </a>
            {media.description &&
                <CustomShowMoreText character={50} className={'experience-media-description'}>
                    {media.description}
                </CustomShowMoreText>
            }
        </li>
    )
}

export default ExperienceMedia;