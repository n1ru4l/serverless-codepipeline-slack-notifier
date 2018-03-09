"use strict";

const { PIPELINE_MAPPINGS } = require("./env")();

function getPipelines() {
  return String(PIPELINE_MAPPINGS)
    .split(",")
    .map(mapping => {
      const [pipeline, hookUrl] = mapping.split("|");
      if (!hookUrl || !pipeline) {
        // prettier-ignore
        throw new Error("Mappings do not have the right format: 'PIPELINE_NAME|SLACK_HOOK_URL'")
      }
      return pipeline;
    });
}

function getPipelineMappings() {
  const map = new Map();
  const mappings = String(PIPELINE_MAPPINGS).split(",");
  mappings.forEach(mapping => {
    const [pipeline, hookUrl] = mapping.split("|");
    map.set(pipeline, hookUrl);
  });
  return map;
}

module.exports = { getPipelines, getPipelineMappings };
