import * as core from '@actions/core'
import * as octokit from '@octokit/request'
import { Octokit } from '@octokit/rest'
import fetch from "node-fetch";
import * as github from '@actions/github'
import { env } from "process";

// get input params
let parameters:any = {}

const token = core.getInput('token', {required: true} );
parameters['token'] = token

const environment = process.env
const gitHubOrgName = environment['GITHUB_REPOSITORY_OWNER']
core.info(`gitHubOrgName: ${gitHubOrgName}`)
core.info(`environment: ${JSON.stringify(environment)}`)



const ocotkit = new Octokit({
    auth: parameters.token
})
  
const secrets = octokit.request('GET /orgs/'+gitHubOrgName+'/actions/secrets', {
    org: gitHubOrgName,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
})

core.info(`secrets: ${JSON.stringify(secrets)}`)