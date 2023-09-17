import axios from "axios";

const customAxios = axios.create(
    {
        baseURL: 'http://localhost:8000',
        timeout: 5000
    }
);

export const getEducations = () => customAxios.get('educations')

export const getExperiences = () => customAxios.get('experiences')

export const getVolunteering = () => customAxios.get('volunteering')

export const getProjects = () => customAxios.get('projects')

export const getCourses = () => customAxios.get('courses')

export const getLicenses = () => customAxios.get('licenses')