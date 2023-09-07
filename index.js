import {exec} from "node:child_process";
import {promisify} from "node:util";

const {stderr} = await promisify(exec)("npm --loglevel error ci --only=prod", {
  cwd: new URL(".", import.meta.url),
});
if (stderr) {
  throw stderr;
}
const {run} = await import("./bin.js");
run();
