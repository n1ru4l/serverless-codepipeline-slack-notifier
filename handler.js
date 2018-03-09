"use strict";

const fetch = require("node-fetch");
const { getPipelineMappings } = require("./util");

const getColor = state =>
  ({
    STARTED: "warning",
    SUCCEEDED: "good"
  }[state] || "danger");

const pipelineMappings = getPipelineMappings();

module.exports.slack = ({ detail }) => {
  const pipeline = detail["pipeline"];
  const executionId = detail["execution-id"];
  const state = detail["state"];

  const slackHookUrl = pipelineMappings.get(pipeline);

  return fetch(slackHookUrl, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      text: `${pipeline}:${executionId} ${state}`,
      username: "CodePipeline",
      icon_emoji: ":shipit:",
      color: getColor(state)
    })
  });
};
