# serverless-codepipeline-slack-notifier

Notify your slack channel about the aws codepipeline status ☺️.

## Instructions

1. run `git clone https://github.com/n1ru4l/serverless-codepipeline-slack-notifier.git`
2. run `cd serverless-codepipeline-slack-notifier`
3. run `yarn`
4. run `cp .env.sample .env`
5. Adjust `.env.sample`
6. run `yarn serverless deploy`

## Environment Variable Instructions

`PIPELINE_MAPPINGS`: A comma seperated list of pipeline and slack url mappings

Example Values:

`web-services-deploy-staging|https://hooks.slack.com/services/YOUR_HOOK_IDENTIFIER`

or

`web-services-deploy-staging|https://hooks.slack.com/services/YOUR_HOOK_IDENTIFIER,web-services-deploy-production|https://hooks.slack.com/services/YOUR_HOOK_IDENTIFIER`
