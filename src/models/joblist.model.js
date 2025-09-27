import JobCategoryModel from "./category.model.js";

export default class JobListModel{
    constructor(_id,_job_designation,_logo,_company_name,_job_location,_experience,_salary,_employees,_skills_required=[],_job_category,_job_posted){
        this.id = _id;
        this.job_designation = _job_designation;
        this.logo = _logo;
        this.company_name = _company_name;
        this.job_location = _job_location;
        this.experience = _experience;
        this.salary = _salary;
        this.employees = _employees;
        this.skills_required = _skills_required,
        this.job_category = _job_category || null;
        this.job_posted = _job_posted || new Date();
    }

    static getAllJobs() {
        return JobModel;
    }

    static getJobById(id) {
        let job=  JobModel.find(job => job.id == id);
        if(!job) return null;
        let category = JobCategoryModel.getCategoryById(job.job_category);
        job.category_name = category ? category.category_name : "Unknown";
        return job;
    }
}

var JobModel =[
    new JobListModel(
        1,
        "Senior Frontend Developer",
        "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
        "google",
        "Gurgaon HR INR Remote",
        "3-5 years",
        "₹15-25 LPA",
        "190,000+ employees",
        ["HTML","CSS","JavaScript","ReactJS"],
        1,
        new Date("2023-10-01")
    ),
    new JobListModel(
        2,
        "Angular Developer",
        "https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg",
        "Facebook",
        "Pune InD on Site",
        "3 years",
        "₹10-15 LPA",
        "10,000+ employees",
        ["Angular","Js","SQL","MongoDB","ExpressJS","AWS"],
        4,
        new Date("2023-09-25")
    ),
    new JobListModel(
        3,
        "SDE",
        "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
        "Juspay",
        "Banglore IND",
        "6+ years",
        "₹30-50 LPA",
        "2,000+ employees",
        ["React","NodeJs","Javascript","SQL","Mongo DB","Express","AWS"],
        3,
        new Date("2023-09-20")
    ),
    new JobListModel(
        4,
        "Software Application Engineer II",
        "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
        "Microsoft",
        "Hyderabad IND on Site",
        "5+ years",
        "₹35-45 LPA",
        "220,000+ employees",
        ["C#",".Net","Azure","SQL","Microservices"],
        1,
        new Date("2023-09-18")
    ),
    new JobListModel(
        5,
        "UI/UX Designer",
        "https://upload.wikimedia.org/wikipedia/commons/a/ab/Apple-logo.png",
        "Apple",
        "Chennai IND on Site",
        "4+ years",
        "₹20-30 LPA",
        "150,000+ employees",
        ["Figma","Adobe XD","Sketch","InVision","HTML","CSS"],
        8,
        new Date("2023-09-15")
    )
];