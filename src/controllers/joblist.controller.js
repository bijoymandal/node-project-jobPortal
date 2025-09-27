import JobListModel from "../models/joblist.model.js";
export default class JobListController {
    index(req, res) {
        let jobs = JobListModel.getAllJobs();
        res.render("list-all-jobs", { title: "Job Listings", jobs: jobs });
    }
    show(req, res) {
        let jobId = req.params.id;
        console.log("Job ID:", jobId);
        let data = JobListModel.getJobById(jobId);
        console.log("Job Data:", data);
        if (data) {
            res.render("job-details", { title: data.job_designation, data: data });
        } else {
            res.status(404).send("Job not found");
        }
    }
}