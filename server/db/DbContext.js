import ValueSchema from "../models/Value";
import CarsSchema from "../models/Car";
import mongoose from "mongoose";
import HousesSchema from "../models/House"
import JobSchema from "../models/Job"

class DbContext {
  Values = mongoose.model("Value", ValueSchema);
  Cars = mongoose.model("Car", CarsSchema);
  Houses = mongoose.model("House", HousesSchema);

  Jobs = mongoose.model("Job", JobSchema);

}

export const dbContext = new DbContext();
