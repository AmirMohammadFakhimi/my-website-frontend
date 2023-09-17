import React, {useEffect} from 'react';
import './App.css';
import {Route, Routes, useNavigate} from "react-router-dom";
import AboutMe from "./components/aboutMe/AboutMe";
import Header from "./components/header/Header";
import {urls} from "./global/Variables";
import Educations from "./components/educations/Educations";
import {getMenuItemUrl} from "./global/Storages";
import Experiences from "./components/experiences/Experiences";
import Volunteering from "./components/volunteering/Volunteering";
import Projects from "./components/projects/Projects";
import Courses from "./components/courses/Courses";
import Licenses from "./components/licenses/Licenses";
import ContactMe from "./components/contactMe/ContactMe";

function App() {
    const navigate = useNavigate()

    useEffect(() => {
        navigate(getMenuItemUrl())
    }, [])

    return (
        <div className="App">
            <Header/>

            <Routes>
                <Route path={urls.aboutMe} element={<AboutMe/>}/>
                <Route path={urls.educations} element={<Educations/>}/>
                <Route path={urls.experiences} element={<Experiences/>}/>
                <Route path={urls.experiences} element={<Experiences/>}/>
                <Route path={urls.volunteering} element={<Volunteering/>}/>
                <Route path={urls.projects} element={<Projects/>}/>
                <Route path={urls.courses} element={<Courses/>}/>
                <Route path={urls.licenses} element={<Licenses/>}/>
                <Route path={urls.contactMe} element={<ContactMe/>}/>
            </Routes>
        </div>
    );
}

export default App;
