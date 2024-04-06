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
                  target={'_blank'} rel="noreferrer">{getBold(text)}</a>
    }

    return (
        <div id={'about-me'}>
            <div id={'about-me-text'}>
                <p id={'title'}>Hi There! I'm Amir Mohammad 👋🏻</p>
                <p className={'about-me-paragraph'}>
                    First and foremost, I firmly believe in {getBold('Laughing to Life')} and making the most of every
                    moment {getBold(':)')}
                </p>
                <br/>
                <p className={'about-me-paragraph'}>
                    I hope your day has been fantastic so far. Allow me to introduce myself. I
                    am {getBold('Amir Mohammad Fakhimi')}, born on {getBold('September 16, 2002')}, in the picturesque
                    city of Kashan, Iran. That makes me {getBold(String(getAge()))} years old and brimming with
                    enthusiasm for life.
                </p>
                <br/>
                <p className={'about-me-paragraph'}>
                    My journey began in Kashan, where I completed my high school education
                    at {getLink('Shahid Beheshti (Ehsan) High School', 'http://www.beheshtikasch.ir')}. However, my
                    thirst for
                    knowledge and passion for technology led me to pursue my dreams further afield.
                </p>
                <p className={'about-me-paragraph'}>
                    For my university education, I ventured to Tehran, Iran, where I was fortunate enough to be accepted
                    into the prestigious {getLink('Sharif University of Technology', 'https://en.sharif.edu')} (the best
                    university in Iran, according
                    to {getLink('QS ranking 2023', 'https://www.topuniversities.com/university-rankings/world-university-rankings/2023')}).
                    Here, I delved headfirst into the world of {getBold('Computer Engineering')}, driven by my love for
                    coding and machine learning. I've honed my skills in various programming languages,
                    including {getBold('C')} and {getBold('Java')},
                    and immersed myself in the captivating realms of {getBold('Machine Learning')}.
                </p>
                <br/>
                <p className={'about-me-paragraph'}>
                    In the development arena, I've developed a keen interest in {getBold('iOS development')}, taking on
                    several projects to challenge and expand my skills. In the research sphere, I'm deeply fascinated by
                    Machine
                    Learning, particularly in the domains
                    of {getBold('Natural Language Processing')}, {getBold('Computer Vision')},
                    and {getBold('Deep Learning')}.
                </p>
                <br/>
                <p className={'about-me-paragraph'}>
                    One pivotal moment in my journey was when I secured a spot in
                    the {getLink('Rahnema College summer boot camp', 'https://rahnemacollege.com')} in
                    2022. There, I had the opportunity to acquire a wealth of knowledge, with a particular highlight
                    being my involvement in the {getBold('Frontend')} development of
                    the {getLink('final project', 'https://github.com/Rahnema-College-SU/Football-Fantasy-FrontEnd')}.
                    This experience added
                    another layer to my skill set and fueled my thirst for growth.
                </p>
                <br/>
                <p className={'about-me-paragraph'}>
                    In my ever-evolving quest for knowledge, I remain an avid learner and explorer of new horizons.
                    Learning
                    is a passion of mine, and I'm committed to being an active participant in my exciting journey of
                    self-improvement.
                </p>
                <p className={'about-me-paragraph'}>
                    I look forward to the opportunity of learning from you and sharing my knowledge. Let's embark on
                    this incredible journey together, and remember, {getBold('always Be happy')}! 😊
                </p>
                {/*<p id={'add-height'}/>*/}
            </div>
            <img id={'profile-image'} src={profileImage} alt={'my profile'}/>
        </div>
    );
}

export default AboutMe;