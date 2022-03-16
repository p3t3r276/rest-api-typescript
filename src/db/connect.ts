import mongoose from "mongoose";
import config from "config";
import log from "../logger";

function connect() {
  const DBURI = config.get("dbUri") as string;

  return mongoose
    .connect(DBURI, {})
    .then(() => {
      log.info("Database connected");
    })
    .catch((err) => {
      log.error("db error", err);
      console.log(err);
    });
}

export default connect;
