+++
title = "Purpleteam at Alpha"
subtitle = ""

# Add a summary to display on homepage (optional).
summary = "Where has Kim been for the last couple of years? This post explains why he's been so quiet and what he has been working on."

# By default the submission of new comments is enabled.
#comments = true

date = 2021-02-10T17:17:11+13:00
draft = false

# Authors. Comma separated list, e.g. `["Bob Smith", "David Jones"]`.
authors = ['Admin']

# Is this a featured post? (true/false)
featured = false

links = [{name = "Project", url = "project/external-project-purpleteam", icon = "project-diagram", icon_pack = "fas"}, {icon = "twitter", icon_pack = "fab", name = "Follow", url = "https://twitter.com/purpleteamlabs"}]

# Tags and categories
# For example, use `tags = []` for no tags, or the form `tags = ["A Tag", "Another Tag"]` for one or more tags.
tags = ["agile", "application-security", "bdd", "blue-team", "build-pipeline", "build-tool", "cd", "ci", "cli", "cloud", "cloud-security", "continuous-deployment", "continuous-integration", "cybersecurity", "dev-sec-ops", "dev-ops", "docker", "free-and-open-source", "information-security", "infosec", "owasp", "owasp-zap", "penetration-testing", "purpleteam", "red-team", "security", "security-regression-testing", "software", "software-security", "security-testing", "terminal", "testing", "tool", "web", "web-application", "web-application-security", "web-security", "zap"]
categories = []

# Projects (optional).
#   Associate this post with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["deep-learning"]` references 
#   `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects = [""]

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
[image]
  # Caption (optional)
  caption = ""

  # Focal point (optional)
  # Options: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight
  focal_point = ""
+++

purpleteam alpha (both `local` and `cloud` environments) have been released, after several years of hard work, mostly on top of a day job.

[![purpleteam](/img/post/2021/purple-team-logo_700w_noBM-min.png)](https://purpleteam-labs.com)

This is the very short story of the process of taking purpleteam (a web security regression testing SaaS and CLI) from Proof of Concept (PoC) to Alpha release.

# PoC

**Q**: What were my intentions with creating the original [Proof of Concept](https://github.com/OWASP/NodeGoat/blob/e2dffdb8c7e988c10bacdccba14d6f0d352c5090/test/security/profile-test.js) (PoC), what was I trying to achieve?  
**A**: Elicit Developer feedback, Find out what Developers and their Teams really needed for just in time security regression testing of their web applications and APIs. How to get this process (dynamic security testing) as close as possible to the coding of their applications and APIs

**Q**: What did I do with the PoC?  
**A**: Took it around the world speaking and running workshops with Developers and their Teams. That's right, getting this process as close as possible to Developers and their Teams

To name a few such events:

* [CHCH.js Meetup](https://binarymist.io/talk/chcjs-meetup-2016-workshop-security-regression-testing-with-zapapi-and-nodegoat/) 2016
* [OWASP Chch Meetup](https://binarymist.io/talk/owaspchch-meetup-2016-workshop-security-regression-testing-with-zapapi-and-nodegoat/) 2016
* [OWASP NYC Meetup](https://binarymist.io/talk/owaspny-meetup-2016-workshop-security-regression-testing-with-zapapi-and-nodegoat/) 2016
* [NodeConf EU](https://binarymist.io/talk/nodeconfeu-2016-workshop-security-regression-testing-with-zapapi-and-nodegoat/) 2016
* [NodeJS Meetup Auckland](https://binarymist.io/talk/nodejs-meetup-2016-workshop-security-regression-testing-with-zapapi-and-nodegoat/) 2016
* [AWS Meetup Auckland](https://binarymist.io/talk/aws-meetup-2016-workshop-security-regression-testing-with-zapapi-and-nodegoat/) 2016
* [OWASP NZ Day Auckland](https://binarymist.io/talk/owaspnzday-2019-talk-security-regression-testing-on-owasp-zap-node-api/) 2019

There are many Static Analyse Security Testing (SAST) tools available. As Developers we need both static and dynamic application security testing.

The Proof of Concept I created several years ago was to work out exactly what Developers and their Teams needed in terms of 
Dynamic Application Security Testing (DAST) capabilities to compliment the many Static Application Security Testing (SAST) tools already available
and able to be plugged into or consumed by your CI/build pipelines.

I've written extensively in the past on SAST offerings, for example the Web Applications chapter of my 2nd book [Holistic Info-Sec for Web Developers](https://holisticinfosecforwebdevelopers.com/) covers:

* The [perils of consuming free and open source libraries](https://f1.holisticinfosecforwebdevelopers.com/chap06.html#web-applications-identify-risks-consuming-free-and-open-source)
* [Countermeasures](https://f1.holisticinfosecforwebdevelopers.com/chap06.html#web-applications-countermeasures-consuming-free-and-open-source) to the above perils
* [Tooling options](https://f1.holisticinfosecforwebdevelopers.com/chap06.html#web-applications-countermeasures-consuming-free-and-open-source-tooling) for SAST

# Journey

If you're a Developer creating internet facing applications, you know security is something you need to be thinking about right?
As Developers we all need as much automated help with improving our AppSec as possible.
As we're creating it, no blockers, just enablers.

<!-- .......... following is from owasp project page ................ -->

Many organisations spend many thousands of dollars on security defect remediation of the software projects they create. Usually this effort is also performed late in the development life-cycle, often even after the code is considered done. This fact makes the remediation effort [very costly](https://f0.holisticinfosecforwebdevelopers.com/chap06.html#leanpub-auto-cheapest-place-to-deal-with-defects) and often too short. Because of this there are many bugs left in the software that get deployed to production.

<br>

<script async class="speakerdeck-embed" data-slide="48" data-id="8ca6ad5eb9c34ba9873158026d9cfc6a" data-ratio="1.37081659973226" src="//speakerdeck.com/assets/embed.js"></script>

<br>

Purpleteam strikes at the very heart of this problem. Purpleteam is a CLI and back-end/API (SaaS). The CLI can be run manually, but it's sweet spot is being inserted into Development Team's [build pipelines](https://github.com/purpleteam-labs/purpleteam#npm-install-locally), where it can find the security defects in your running web applications and APIs, and provide immediate and continuous notification of what and where your security defects are, along with tips on how to fix them.

<br>

<script async class="speakerdeck-embed" data-slide="49" data-id="8ca6ad5eb9c34ba9873158026d9cfc6a" data-ratio="1.37081659973226" src="//speakerdeck.com/assets/embed.js"></script>

<br>

The purpleteam back-end runs smart dynamic application security testing against your web applications or APIs. The purpleteam CLI drives the purpleteam back-end.

<!-- end....... following is from owasp project page ................ -->

<br>

<script async class="speakerdeck-embed" data-slide="18" data-id="8ca6ad5eb9c34ba9873158026d9cfc6a" data-ratio="1.37081659973226" src="//speakerdeck.com/assets/embed.js"></script>

<br>

I have also created the ability to add testers, There is currently a [TLS checher](https://github.com/purpleteam-labs/purpleteam-tls-checker) and [server scanner](https://github.com/purpleteam-labs/purpleteam-server-scanner) stubbed out and ready to be implemented. Feel free to dive in and start implementing.

<br>

<script async class="speakerdeck-embed" data-slide="58" data-id="8ca6ad5eb9c34ba9873158026d9cfc6a" data-ratio="1.37081659973226" src="//speakerdeck.com/assets/embed.js"></script>

<br>

If there is a tester that you need that purpleteam doesn't have, you can now create it.

# Environments

## `local`

The `local` environment is [free and open source](https://github.com/purpleteam-labs). It is also now an [OWASP project](https://owasp.org/www-project-purpleteam/).

* There's quite a bit of set-up to do
* You need to set-up all the mirco-services
* All the set-up should be documented [here](https://doc.purpleteam-labs.com/local/local-setup.html). Documentation [will be moving](https://github.com/purpleteam-labs/purpleteam/issues/37) to a proper doc site soon.

You will need to set-up the following:

1. [Lambda functions](https://github.com/purpleteam-labs/purpleteam-lambda)
2. [Stage 2 containers](https://github.com/purpleteam-labs/purpleteam-s2-containers)
3. [Orchestrator](https://github.com/purpleteam-labs/purpleteam-orchestrator)
4. Testers (only [app](https://github.com/purpleteam-labs/purpleteam-app-scanner) currently)
5. Get the [purpleteam CLI](https://github.com/purpleteam-labs/purpleteam) on your system
  1. [Install](https://github.com/purpleteam-labs/purpleteam/blob/3f2c97a14c617181a4bf71669a95540b99812e2d/README.md#install) it, the options are:
     * [Clone the repository](https://github.com/purpleteam-labs/purpleteam/blob/3f2c97a14c617181a4bf71669a95540b99812e2d/README.md#clone-the-git-repository)
     * [Local NPM install](https://github.com/purpleteam-labs/purpleteam/blob/3f2c97a14c617181a4bf71669a95540b99812e2d/README.md#npm-install-locally)
     * [Global NPM install](https://github.com/purpleteam-labs/purpleteam/blob/3f2c97a14c617181a4bf71669a95540b99812e2d/README.md#npm-install-globally)
  2. [Configure it](https://github.com/purpleteam-labs/purpleteam/blob/3f2c97a14c617181a4bf71669a95540b99812e2d/README.md#configure) and create your [_Job_](https://doc.purpleteam-labs.com/definitions.html) file
6. Run your System under Test (SUT). we use [purpleteam-iac-sut](https://github.com/purpleteam-labs/purpleteam-iac-sut) to build/deploy our cloud SUTs
7. [Run](https://github.com/purpleteam-labs/purpleteam/blob/3f2c97a14c617181a4bf71669a95540b99812e2d/README.md#run) the purpleteam CLI

## `cloud`

The `cloud` environment costs because purpleteam-labs have to maintain the infrastructure that the SaaS runs on, but is the easiest and quickest to get going.

All infrastructure set-up is done for you. You just need to set-up the following:

1. Get the purpleteam CLI on your system (same as step 5.1 of `local`). Configure the CLI and create your Job file (similar to step 5.2 of `local`)
2. Run your SUT (same as step 6 of `local`)
3. Run the purpleteam CLI (same as step 7 of `local`)

# Architecture and Tech

## `local`

<!-- .......... following is from owasp project page ................ -->

Redis pub/sub is used to transfer _Tester_ messages (live update data) from the [_Tester_](https://doc.purpleteam-labs.com/definitions.html) micro-services to the [Orchestrator](https://github.com/purpleteam-labs/purpleteam-orchestrator). 
The [_Build User_](https://doc.purpleteam-labs.com/definitions.html) can configure the [purpleteam CLI](https://github.com/purpleteam-labs/purpleteam) to receive these messages via Server Sent Events (SSE) or Long Polling (LP). The Orchestrator also needs to be configured to use either SSE or LP.
With Long Polling (LP) if the CLI goes off-line at some point during the _Test Run_ and then comes back on-line, no messages will be lost due to the fact that the Orchestrator persists the messages it's subscribed to back to Redis lists, then pops them off the given lists as a LP request comes in and returns them to the CLI. LP is request->response, SSE is one way. In saying that, LP can be quite efficient as we are able to batch messages into arrays to be returned.

![local architecture](/img/post/2021/purpleteam_local_2021-01_720w.png)

### Orchestrator

The Orchestrator is responsible for:

* Organising and supervising the Testers
* Sending real-time Tester messages to the CLI via either SSE or LP
* Packaging and sending the outcomes (test reports, test results) back to the CLI as they become available
* [Validating, filtering and sanitising](https://f1.holisticinfosecforwebdevelopers.com/chap06.html#web-applications-countermeasures-lack-of-input-validation-filtering-and-sanitisation) the _Build User_'s input

### Testers

Each Tester is responsible for:

* Obtaining resources, cleaning up and releasing resources once the _Test Run_ is finished
* Starting and Stopping [Stage Two Containers](https://github.com/purpleteam-labs/purpleteam-s2-containers) (hosted on docker-compose-ui) dynamically (via [Lambda Functions](https://github.com/purpleteam-labs/purpleteam-lambda) hosted locally via sam cli) based on the number of Test Sessions provided by the Build User in the [_Job_](https://doc.purpleteam-labs.com/definitions.html) file which is sent from the CLI to the Orchestrator, then disseminated to the Testers. The following shows two _Test Sessions_ from a test resource [_Job_](https://github.com/purpleteam-labs/purpleteam/blob/3f2c97a14c617181a4bf71669a95540b99812e2d/testResources/jobs/job_0.1.0-alpha.1_local) that we use:
<br><br>
  {{< highlight javascript >}}
  ...
  "included": [
  {
    "type": "testSession",
    "id": "lowPrivUser",
    "attributes": {
      "username": "user1",
      "password": "User1_123",
      "aScannerAttackStrength": "HIGH",
      "aScannerAlertThreshold": "LOW",
      "alertThreshold": 12
    },
    "relationships": {
      "data": [{
        "type": "route",
        "id": "/profile"
      }]
    }
  },
  {
    "type": "testSession",
    "id": "adminUser",
    "attributes": {
      "username": "admin",
      "password": "Admin_123"
    },
    "relationships": {
      "data": [{
        "type": "route",
        "id": "/memos"
      },
      {
        "type": "route",
        "id": "/profile"
      }]
    }
  },
  ...
  {{< /highlight >}}
* The actual (app, server, tls, etc) [test plan](https://github.com/purpleteam-labs/purpleteam-app-scanner/blob/e62601b76212f9bde866164fe6f4ad687fb5b458/src/features/app_scan.feature)

### Sam Cli

Sam Cli stays running and listening for the _Tester_ requests to run the lambda functions which start and stop the Stage Two Containers.

### docker-compose-ui

In `local` docker-compose-ui is required to be running in order to start/stop it's hosted (Stage Two) containers (it has access to the hosts Docker socket).

<!-- end....... following is from owasp project page ................ -->

## `cloud`

The `cloud` environment is similar in terms of functionality, a good number of components are quite different though.

For the _Tester_ messages only Long Polling (LP) is available due to streaming APIs not being supported by AWS API Gateway. We could have used API Gateway WebSockets for bi-directional comms, but that doesn't support OAuth client-credentials flow, which I had already completed.

When the CLI makes a request to the back-end (directly to the Orchestrator in `local`, but AWS API Gateway in `cloud`), first that request is intercepted and a request to the purpleteam auth domain is made with: `grant_type`, `client_id` of the user pool app client, `scope`s, `client_secret`. Cognito Authorisation server returns an `access_token` if all good. The CLI then makes requests with the `access_token` to the resource server which in our case is the API Gateway. The resource server/API Gateway validates the `access_token` with the User pool. If all good, the original request is allowed to continue on it's way.

_Testers_ run their lambdas, lambdas tell ECS to spin up and tear down n (where n is the number of <i>Test Session</i>s) stage 2 containers. I originally used AWS ALB but that didn't support our authentication requirements, so I had to back out and swap it for API Gateway and NLB.

![cloud architecture](/img/post/2021/purpleteam_cloud_2021-01_720w.png)

# Pressures

## Keeping NodeJS Dedendencies up to date

The never ending battle of staying on top of a constantly moving NodeJS echo-system. Never ending security and feature updates.
[This issue](https://github.com/purpleteam-labs/purpleteam/issues/29) has a check list of our last major updates after we finished the IaC for the `cloud` environment.

## Forking/adopting libraries

Then there is the forking and/or rewriting of libraries when authors loose interest, no longer maintain or just no longer have the bandwidth.
This must be expected and planned for when consuming free and open source libraries.
Yes it's great to have the head start of being able to just use someone else's code, but nothing is really free, everything ultimately costs.
Just realise that if you are consuming free and open source libraries in your project,
then at some stage you are going to have to dive into their code and either help out, or ultimately end up forking or rewriting.

Following are some of the libraries we have forked, ported and/or rewritten:

* [mocksse](https://github.com/binarymist/mocksse) was a rewrite/port of MockEvent. We use this library for mocking Server Sent Events (SSE)
* Cucumber [functionality](https://gitlab.com/purpleteam-labs/purpleteam-app-scanner/-/blob/9be05624afc9a92ebe89da9cc82e16dd856c562d/src/scripts/cucumber-redacted.js) that was [removed](https://github.com/cucumber/cucumber-js/issues/1489)
* [docker-compose-ui](https://github.com/francescou/docker-compose-ui) has been archived. This means we will have to either fork, rewrite, research to see if we can use something else.
This isn't currently urgent

## Competitors

When I started developing purpleteam, as part of the business plan creation I needed to list my competitors. There was really only one. Now that competitor has mostly gone away and we have several new ones.

Just to be clear, when I say competitor, I'm talking about Dynamic Application Security Tools for the web that can be used natively in any build pipeline.

Our current competitors are doing things differently to us, with different offerings. We think purpleteam has unique aspects that make it stand out from the rest.

# Next Steps

purpleteam `local` is now an [OWASP project](https://owasp.org/www-project-purpleteam/).

## Consuming purpleteam

How can you start using purpleteam today?

As discussed in the [Environments](#environments) sub section you have a few options

* `local`: set everything up yourself
* `cloud`: Sign-up for an account, set-up your test _Job_, get the CLI on your system

You can use the purpleteam CLI manually or consume it within your build pipelines.

* Manual examples:
  * [bin/purpleteam via npm script](https://github.com/purpleteam-labs/purpleteam/tree/3f2c97a14c617181a4bf71669a95540b99812e2d#clone-the-git-repository-option)
  * [bin/purpleteam directly](https://github.com/purpleteam-labs/purpleteam/tree/3f2c97a14c617181a4bf71669a95540b99812e2d#run-the-binpurpleteam-file-directly)
  * [purpleteam CLI directly](https://github.com/purpleteam-labs/purpleteam/tree/3f2c97a14c617181a4bf71669a95540b99812e2d#run-the-purpleteam-cli-directly)
* [Within your NodeJS app or build pipeline](https://github.com/purpleteam-labs/purpleteam/tree/3f2c97a14c617181a4bf71669a95540b99812e2d#run-your-app)
* [Within your non NodeJS app or build pipelines](https://github.com/purpleteam-labs/purpleteam/tree/3f2c97a14c617181a4bf71669a95540b99812e2d#npm-install-globally-option)

## Contributing to purpleteam

* Is purpleteam missing something you need that would otherwise allow you to use it?
* Do you need to add a different kind of [_Tester_](https://doc.purpleteam-labs.com/definitions.html)?
* Have you found a bug?

As you can see, there are plenty of avenues that you can contribute to:

* <a href="https://github.com/purpleteam-labs/purpleteam/discussions" target="_blank">Github Discussions</a>
* <a href="https://owasp.slack.com/messages/project-purpleteam" target="_blank">OWASP purpleteam Slack</a>
* <a href="https://github.com/purpleteam-labs/purpleteam/projects/2" target="_blank">Project Board</a>
* <a href="https://github.com/purpleteam-labs/purpleteam/issues" target="_blank">Submit Issue</a>
* <a href="https://github.com/purpleteam-labs/purpleteam/pulls" target="_blank">Submit PR</a>
* <a href="https://github.com/purpleteam-labs/purpleteam/security/policy" target="_blank">Reporting Security Issues</a>
* <a href="https://github.com/purpleteam-labs/purpleteam/projects/1" target="_blank">Public Roadmap</a>
* <a href="https://github.com/purpleteam-labs/purpleteam/blob/main/CONTRIBUTING.md" target="_blank">CONTRIBUTING.md</a>

purpleteam-labs also has a submission in with Google Summer of Code for students this year. We've got plenty to work on, so here's hoping!

## purpleteam Next Steps

We will be getting started on a documentation site (not just a [hosted doc git repo](https://doc.purpleteam-labs.com/)) soon. We will also be working on a real website.
If you have a Dev Team that is keen to try purpleteam out, reach out to us if you need to.
We are always looking for people to work on the codebase. Even if you're a student, it's a great way to learn about security, by coding it.
