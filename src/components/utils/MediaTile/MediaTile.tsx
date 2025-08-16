import React from "react";
import "./MediaTile.css";
import {MediaType} from "../../../global/Types";
import CustomShowMoreText from "../customShowMoreText/CustomShowMoreText";

function MediaTile({medias, containerClassName, descriptionClassName}: {
    medias: MediaType[],
    containerClassName?: string,
    descriptionClassName?: string
}) {
    return (
        <>
            {medias.length > 0 &&
                <div className={`medias-tile-container ${containerClassName}`}>
                    <div className={'medias-tile-title'}>Links:</div>
                    <ul className={'medias-tile'}>

                        {medias.map((media, index) =>
                            <li key={index} className={'current-media'}>
                                <a className={'media-tile-title'} href={media.url} target={'_blank'} rel='noreferrer'>
                                    {media.title}
                                </a>
                                {media.description &&
                                    <CustomShowMoreText character={50}
                                                        className={`media-tile-description ${descriptionClassName}`}>
                                        {media.description}
                                    </CustomShowMoreText>
                                }
                            </li>
                        )}

                    </ul>
                </div>
            }
        </>
    )
}

export default MediaTile