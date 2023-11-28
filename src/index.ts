import * as core from '@actions/core'
import { request } from '@octokit/request'
import * as github from '@actions/github'
import { env } from "process";

// get input params
let parameters:any = {}

const token = core.getInput('token', {required: true} );
parameters['token'] = token

const environment = process.env

core.info(`environment: ${JSON.stringify(environment)}`)

