
import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class JobsService {
    async edit(id, body) {
        return await dbContext.Jobs.findByIdAndUpdate(id, body, { new: true })
    }
    async delete(id) {
        return await dbContext.Jobs.findByIdAndDelete(id)
    }
    async find(query = {}) {
        return await dbContext.Jobs.find(query)
    }

    async findById(id) {
        const job = await dbContext.Jobs.findById(id)
        if (!job) {
            throw new BadRequest("Invalid Id");
        }
        return job;
    }

    async create(newJob) {
        return await dbContext.Jobs.create(newJob)
    }
}

export const jobsService = new JobsService();