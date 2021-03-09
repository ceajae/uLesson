import { subjects } from "./constants";


export const getSubjectData = (name) => {
    const subject = subjects.filter(item => (item.name).toLowerCase() === name.toLowerCase());
    const subjectData = (subject && subject[0]) || {};
    return subjectData;
}

export const getTimeInMinutesSeconds = (duration) => {
    const mins = Math.floor(duration % 3600 / 60);
    const secs = Math.floor(duration % 3600 % 60);
    return `${mins} : ${secs}`;
}

export const getPercentage = (currentTime = 0, duration = 0) => {
    const percentage = (currentTime / duration) * 100;
    return percentage.toFixed(2);
}
