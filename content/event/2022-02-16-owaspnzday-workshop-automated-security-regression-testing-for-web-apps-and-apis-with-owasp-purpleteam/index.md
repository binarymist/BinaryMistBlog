+++
publishDate = 2021-12-05T09:00:00  # Schedule page publish date.

authors = ["admin"]
tags = ["workshop", "conference", "security", "purple-teaming", "cloud-security", "dev-ops", "dev-sec-ops", "web-application-security", "web-security", "web-application", "api-security", "application-security", "cybersecurity", "information-security", "security-weaknesses", "software-security", "hacking", "operational-efficiencies", "owasp", "owasp-nz-day", "purpleteam", "build-pipeline", "ci"]

title = "Workshop - Automated Security Regression Testing for Web Apps and APIs with OWASP PurpleTeam"
date = 2022-02-16T09:00:00
date_end = 2022-02-16T17:30:00
abstract = "Let's get your Web Apps and APIs under security regression testing with OWASP PurpleTeam. In this workshop you will bring the Web app and/or API that you and/or your Development Team are working on and we will help you setup PurpleTeam local on your laptop or infrastructure to test your App or API"

event = "OWASP NZ Day 2022"
event_url = "http://appsec.org.nz/conference/"
location = "Auckland University, New Zealand"

summary = """
Let's get your Web Apps and APIs under security regression testing with OWASP PurpleTeam.
"""

# Is this a selected talk? (true/false)
selected = true

# Projects (optional).
#   Associate this talk with one or more of your projects.
#   Simply enter the filename (excluding '.md') of your project file in `content/project/`.
# projects = [""]

# Links (optional).
url_pdf = ""
url_slides = ""
url_video = ""
url_code = ""

# Custom links (optional).
#   Uncomment line below to enable. For multiple links, use the form `[{...}, {...}, {...}]`.
links = [{name = "Project", url = "project/external-project-purpleteam", icon = "project-diagram", icon_pack = "fas"}, {name = "Docs", url = "https://purpleteam-labs.com/doc/local/", icon = "book", icon_pack = "fas"}, {name = "OWASP Project", url = "https://owasp.org/www-project-purpleteam/", icon = "project-diagram", icon_pack = "fas"}, {name = "Kim's other Workshops", url = "/tags/workshop", icon = "tools", icon_pack = "fas"}]


# Does the content use math formatting?
math = true

# Does the content use source code highlighting?
highlight = true

# Featured image
# Place your image in the `static/media/` folder and reference its filename below, e.g. `image = "example.jpg"`.
[header]
image = "headers/PurpleTeam_landscape_rev.svg"
#caption = "My caption :smile:"

+++

{{< figure src="talk/2018-owasp-workshop.jpg" caption="" alt="" >}}


OWASP PurpleTeam is a Developer focussed security regression testing CLI (front-end) and SaaS (back-end) that targets Web Applications and APIs. It's sweet spot is sitting in build-pipelines.
The CLI and SaaS can be run from any Linux platform.
PurpleTeam can be run in [UI mode with a pretty CUI or headless](https://github.com/purpleteam-labs/purpleteam#ui), informing the Build User in real-time of the testing effort that is taking place in the back-end as the [Tester Emissaries](https://purpleteam-labs.com/doc/definitions/) security test your system under test (SUT).
UI mode is great for getting started so you can see what's happening in real-time.
Headless mode has been designed to be run from your CI, nightly-build pipe-lines.
The two modes are easily switchable.

In this workshop (time permitting) you will set-up the [back-end components](https://purpleteam-labs.com/doc/local/set-up/#purpleteam-local-architecture), install and configure the [CLI](https://github.com/purpleteam-labs/purpleteam), create your [_Job_](https://purpleteam-labs.com/doc/jobfile/) file which specifies how to find and test your target system under test (SUT).

No actual tests need to be written. PurpleTeam is smart enough to know how to test your Web Apps and APIs.

{{% callout note %}}
You can work alone or within a team (ideally with engineers from your daily work-place). As well as the satisfaction of having your web app or API being under security regression testing, there will also be prizes for the individual or team that gets OWASP PurpleTeam up and running testing their BYO SUT (web app or API).
{{% /callout %}}

## What you need up-front

A decent night sleep before. There is a lot to get done in this short period of time!

You will need either a Web Application or API, either reachable from the Internet or locally within a Docker container that you can put into a docker-compose file in the same Docker network as PurpleTeam `local`, or on the day you can spin up an instance of NodeGoat (or something else as a local Docker container to join the local PurpleTeam docker network). If you decide to use NodeGoat we will provide a docker-compose override file.

If you intend on targeting an application or API on the Internet, you will need to prove you own or are responsible for it, this is non negotiable. You can do this by adding a DNS TXT record "PurpleTeam_SUT" or by adding the same text to the source of your app or API.

## Things that you should try and do and/or have set-up before the workshop

These items are just time consuming to set-up and are not specifically PurpleTeam related, so you really should try and have these set-up before the workshop:

Work through the [local documentation](https://purpleteam-labs.com/doc/local/set-up/) and the README files of each project, so you are at least familiar with what the steps are going to be. The more you get done before the workshop the more likely you will be to have PurpleTeam security regression testing your target Web app or API by the end of the workshop. You will need the following:

* A Linux laptop or Linux OS 
* Docker and docker-compose installed
* Either a SUT (Web app or API) on the Internet to target or a local Web app or API in a Docker container that can be added to the PurpleTeam docker network (usually via docker-compose file override)
* Git (you will be cloning or forking PurpleTeam repos)
* An AWS user with CLI access, policy, credentials configured, AWS CLI, aws-sam-cli installed and configured as per the [purpleteam-lambda README](https://github.com/purpleteam-labs/purpleteam-lambda). We don't need to access AWS with the `local` environment, but you need to have the user set-up as per the README
* (Optional) Recommend having a copy of Zap GUI ready to run on your desktop, using Zap desktop to work through some of the steps that PurpleTeam does, just makes it easier to debug and understand what PurpleTeam is doing

