import React from 'react';
import './AboutMe.css';
import profileImage from './asset/profile image.jpeg'

function AboutMe() {
    function getAge() {
        const birthDate = new Date('2002-09-16')
        const today = new Date()
        let age = today.getFullYear() - birthDate.getFullYear()
        const month = today.getMonth() - birthDate.getMonth()
        if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
            age--
        }
        return age
    }

    function getBold(text: string) {
        return <span className={'bold'}>{text}</span>
    }

    function getLink(text: string, link: string) {
        return <a className={'about-me-link'} href={link}
                  target={'_blank'} rel='noreferrer'>{getBold(text)}</a>
    }

    return (
        <div id={'about-me'}>
            <div id={'about-me-text'}>
                <p id={'title'}>Hi there! I'm Amir Mohammad 👋🏻</p>
                <p className={'about-me-paragraph'}>
                    First of all, {getBold('Laugh to Life')} and welcome to my website {getBold(':)')}
                </p>
                <p className={'about-me-paragraph'}>
                    I’m {getBold('Amir Mohammad Fakhimi')}, born in the beautiful city of Kashan, and
                    currently {getBold(String(getAge()))} years old.
                </p>
                <br/>

                <p className={'about-me-paragraph'}>
                    My academic journey started
                    at {getLink('Shahid Beheshti (Ehsan) High School', 'http://www.beheshtikasch.ir')}, where I pursued
                    my passion for Mathematics and Physics.
                </p>
                <p className={'about-me-paragraph'}>
                    In 2020, I began my {getBold('undergraduate')} studies in {getBold('Computer Engineering')} at the
                    prestigious {getLink('Sharif University of Technology', 'https://en.sharif.edu')} (the best
                    university in Iran, according
                    to {getLink('QS ranking 2025', 'https://www.topuniversities.com/world-university-rankings?countries=ir')}).
                    During this time, I've deepened my knowledge of programming, learning languages such
                    as {getBold('C')}, {getBold('Java')}, {getBold('Swift')}, and {getBold('Python')}, while working
                    with {getBold('front-end')} and {getBold('back-end')} frameworks
                    like {getBold('FastAPI')}, {getBold('React.js')}, and {getBold('Next.js')}.
                </p>
                <p className={'about-me-paragraph'}>
                    My interest in {getBold('Artificial Intelligence (AI)')} grew during my university years, with a
                    special focus on {getBold('Deep Learning')},
                    particularly {getBold('Natural Language Processing (NLP)')} and {getBold('Computer Vision')}.
                </p>
                <br/>

                <p className={'about-me-paragraph'}>
                    I had the opportunity to complete two internships, which greatly enriched my practical experience:
                </p>
                <ul className={'about-me-list'}>
                    <li className={'about-me-list-item'}>
                        At {getBold('Rahnema College')}, I sharpened my programming skills, focusing on front-end
                        development.
                    </li>
                    <li className={'about-me-list-item'}>
                        Later, I joined {getBold('Sokhan AI')}, where I worked on Automated Speech Recognition (ASR).
                    </li>
                </ul>
                <p className={'about-me-paragraph'}>
                    These experiences helped me gain valuable insights into the real-world challenges of Software
                    Engineering and AI in the industry.
                </p>
                <br/>

                <p className={'about-me-paragraph'}>
                    On the research side, I’ve also contributed to AI-driven projects.
                </p>
                <ul className={'about-me-list'}>
                    <li className={'about-me-list-item'}>
                        We are conducting a survey on {getBold('Compositional Problems of Stable Diffusion Models')},
                        which solve compositional challenges in Stable Diffusion models, such as object relationships,
                        positional consistency, and scale issues. This survey provides a comprehensive overview of
                        advancements aimed at improving the generation of well-composed images by Diffusion Models.
                    </li>
                    <li className={'about-me-list-item'}>
                        In addition, We are developing
                        an {getBold('AI-Driven Referee Recommendation System for')} {getLink('Scientia Iranica Journal', 'https://scientiairanica.sharif.edu')}.
                        This project aims to enhance the peer review by automatically matching articles with suitable
                        referees using NLP and other AI methods.
                    </li>
                </ul>
                <p className={'about-me-paragraph'}>
                    These projects allowed me to explore advanced topics in NLP and Computer Vision, broadening my
                    knowledge and experience in these research areas.
                </p>
                <br/>

                <p className={'about-me-paragraph'}>
                    Looking forward, I am excited to further develop my expertise in {getBold('Deep Learning')} and
                    continue {getBold('exploring innovative solutions in AI')}.
                </p>
                {/*<br/>*/}

                <p className={'about-me-paragraph'}>
                    And remember-{getBold('there\'s always a reason to smile')}! 😊
                </p>
            </div>

            <img id={'profile-image'} src={profileImage} alt={'my profile'}/>
        </div>
    );
}

export default AboutMe