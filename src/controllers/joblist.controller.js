import JobListModel from "../models/joblist.model.js";
export default class JobListController {
    index(req, res) {
        let jobs = JobListModel.getAllJobs();
        res.render("list-all-jobs", { title: "Job Listings", jobs: jobs });
    }
    // show(req, res) {
    //     let jobId = req.params.id;
    //     console.log("Job ID:", jobId);
    //     let job = JobListModel.getJobById(jobId);
    //     if (job) {
    //         res.render("job-details", { title: job.job_designation, job: job });
    //     } else {
    //         res.status(404).send("Job not found");
    //     }
    // }
}