const { str, cleanEnv } = require("envalid");
const pick = require("lodash.pick");

const config = {
  PIPELINE_MAPPINGS: str()
};

const variablesToPick = Object.keys(config);
const env = pick(cleanEnv(process.env, config), variablesToPick);

module.exports = () => env;
