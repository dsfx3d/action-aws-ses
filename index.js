import {exec} from "node:child_process";
import {promisify} from "node:util";

const {stderr} = await promisify(exec)("npm --loglevel error ci --only=prod");
if (stderr) {
  throw stderr;
}
const {run} = await import("./bin.js");
run();
