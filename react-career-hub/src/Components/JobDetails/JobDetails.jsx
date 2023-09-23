import { AiOutlineDollarCircle } from 'react-icons/ai';
import { PiSubtitlesBold } from 'react-icons/pi';
import { GrLocation } from 'react-icons/gr';
import { BsTelephone } from 'react-icons/bs';
import { CiMail } from 'react-icons/ci';
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from '../utility/localStorage';


const JobDetails = () => {

    const jobs = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    // const job = jobs.find(job => job.id==id);
    const job = jobs.find(job => job.id===idInt);

    const {job_title,job_description,salary,job_responsibility,educational_requirements,experiences,contact_information} = job;
    // console.log(job);
    const handleAppleNow =()=>{
        saveJobApplication(idInt);
        toast('You have applied successfully')
    }

    return (
        <div>
            <h2 className="text-4xl font-extrabold text-center my-32">{job_title}</h2>
            <div className=" grid gap-4 grid-cols-1 md:grid-cols-4">
                <div className="md:col-span-3">
                    <h2><span className="font-extrabold" >Job Description: </span>{job_description}</h2>

                    <h2 className="mt-4"><span className="font-extrabold" >Job Responsibility: </span>{job_responsibility}</h2>
                    <h2 className="font-extrabold mt-4">Educational Requirements:</h2>
                    <p className="mt-2">{educational_requirements}</p>
                    <h2 className="font-extrabold mt-4">Experiences:</h2>
                    <p className="mt-2">{experiences}</p>
                </div>
                <div className="col-span-1">
                    <div className=' bg-base-200 rounded-lg pl-4'>
                        <h2 className="font-extrabold text-xl">Job Details</h2>
                        <hr className="mt-6 mx-5 border-[#7E90FE]"/>
                        <h2 className='flex mt-2'><AiOutlineDollarCircle className='text-2xl mr-2'></AiOutlineDollarCircle>Salary: {salary}</h2>
                        <h2 className='flex mt-2'><PiSubtitlesBold className='text-2xl mr-2'></PiSubtitlesBold>Job Title: {job_title}</h2>

                        <h2 className="font-extrabold text-xl mt-4">Contact Information</h2>
                        <hr className="mt-6 mx-5 border-[#7E90FE]"/>
                        <h2 className='flex mt-2'><BsTelephone className='text-2xl mr-2'></BsTelephone>Phone: {contact_information.phone}</h2>
                        <h2 className='flex mt-2'><CiMail className='text-2xl mr-2'></CiMail>Email: {contact_information.email}</h2>
                        <h2 className='flex mt-2'><GrLocation className='text-2xl mr-2'></GrLocation>Address: {contact_information.address}</h2>
                    </div>
                    <button onClick={handleAppleNow} className='btn btn-primary w-96 md:w-full mt-10'>Apply Now</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;