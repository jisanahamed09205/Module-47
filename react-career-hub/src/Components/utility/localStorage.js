
const getStoredApplication = () =>{
    const storedApplication = localStorage.getItem('job-applications');
    if(storedApplication){
        return JSON.parse(storedApplication)
    }
    return [];
}


const saveJobApplication = (id) =>{
    const storedApplications = getStoredApplication();
    const exists = storedApplications.find(jobId => jobId === id)
    if(!exists){
        storedApplications.push(id);
        localStorage.setItem('job-applications',JSON.stringify(storedApplications))
    }
};

export {getStoredApplication,saveJobApplication};