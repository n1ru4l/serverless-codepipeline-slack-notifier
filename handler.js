"use strict";

const http = require("http");
const fetch = require("node-fetch");

const { SLACK_HOOK_URL } = process.env;

const getColor = state =>
  ({
    STARTED: "warning",
    SUCCEEDED: "good"
  }[state] || "danger");

module.exports.slack = ({ detail }) => {
  const pipeline = detail["pipeline"];
  const executionId = detail["execution-id"];
  const state = detail["state"];

  return fetch(SLACK_HOOK_URL, {
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
