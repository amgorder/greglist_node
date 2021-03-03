import express from "express";
import BaseController from "../utils/BaseController";
import { jobsService } from "../services/JobsService";

export class JobsController extends BaseController {
  constructor() {
    super("api/jobs");
    this.router
      .get("", this.getAll)
      .post("", this.create);
  }
  async getAll(_, res, next) {
    try {
      return res.send(["job1", "job2"]);
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      res.send(req.body);
    } catch (error) {
      next(error);
    }
  }
}
