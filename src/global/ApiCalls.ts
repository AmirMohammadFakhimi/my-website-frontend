import axios from "axios";

const customAxios = axios.create(
    {
        baseURL: process.env.REACT_APP_SERVER_ADDRESS,
        timeout: 15000,
    }
);

export const getEducations = () => customAxios.get('educations')

export const getExperiences = () => customAxios.get('work-experiences')

export const getLaboratories = () => customAxios.get('research-experiences')

export const getVolunteering = () => customAxios.get('volunteering')

export const getProjects = () => customAxios.get('projects')

export const getCourses = () => customAxios.get('courses')

export const getHonorsAndCertificates = () => customAxios.get('honors-and-certificates')

export const getResume = () => customAxios.defaults.baseURL + '/resume'