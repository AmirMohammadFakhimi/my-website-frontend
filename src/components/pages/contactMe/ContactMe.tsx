import React from "react";
import './ContactMe.css'
import HeaderTitle from "../../utils/headerTitle/HeaderTitle";
import {getResume} from "../../../global/ApiCalls";

function ContactMe({header}: { header: string }) {
    const socialMedia: {
        name: string,
        text: string,
        url: string,
    }[] = [
        {
            name: 'Address',
            text: 'Tehran, Iran',
            url: 'https://maps.google.com/?q=Tehran,+Tehran+Province,+Iran&ftid=0x3f8e00491ff3dcd9:0xf0b3697c567024bc',
        },
        {
            name: 'Personal Email',
            text: 'fakhimi.amirmohamad@gmail.com',
            url: 'mailto:fakhimi.amirmohamad@gmail.com',
        },
        {
            name: 'University Email',
            text: 'amfakhimi@sharif.edu',
            url: 'mailto:amfakhimi@sharif.edu',
        },
        {
            name: 'LinkedIn',
            text: 'amir-mohammad-fakhimi',
            url: 'https://linkedin.com/in/amir-mohammad-fakhimi',
        },
        {
            name: 'GitHub',
            text: 'AmirMohammadFakhimi',
            url: 'https://github.com/AmirMohammadFakhimi',
        },
        {
            name: 'Medium',
            text: 'amirmohammadfakhimi',
            url: 'https://amirmohammadfakhimi.medium.com',
        },
        {
            name: 'Stack Overflow',
            text: 'amir-mohammad-fakhimi',
            url: 'https://stackoverflow.com/users/14840048/amir-mohammad-fakhimi',
        },
    ]

    return (
        <div>
            <HeaderTitle text={header}/>
            <div id={'contact-me-body'}>
                <div id={'contact-me-text'}>
                    <p>
                        I'd love to hear from you! Whether it's for collaboration, a friendly chat, or if you have any
                        questions, don't hesitate to reach out. Feel free to drop me a message, and I'll get back to you
                        as
                        soon as possible.
                    </p>
                    <p>
                        If you are Looking for my qualifications in more detail, you can download my <a
                        href={getResume()} className={'file-download'} download={true}>Resume</a> :)
                    </p>
                    <p id={'contact-me-last-text'}>
                        Let's connect and explore new opportunities together!
                    </p>
                </div>
                <div id={'social-media-container'}>
                    <HeaderTitle text={'Social Media'} className={'social-media-title'}/>
                    <ul id={'social-media-list'}>
                        {socialMedia.map((socialMediaItem, index) => (
                            <li key={index} className={'social-media-item'}>
                                <div className={'social-media-name'}>{socialMediaItem.name}:</div>
                                <a className={'social-media-link'} href={socialMediaItem.url} target={'_blank'}
                                   rel='noreferrer'>
                                    <div className={'social-media-text'}>{socialMediaItem.text}</div>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ContactMe