const { str, cleanEnv } = require("envalid");
const { pick } = require("lodash");

const config = {
  SLACK_HOOK_URL: str(),
  PIPELINE: str()
};

const variablesToPick = Object.keys(config);
const env = pick(cleanEnv(process.env, config), variablesToPick);

module.exports = () => env;
