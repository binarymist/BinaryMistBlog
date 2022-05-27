+++
publishDate = 2022-02-20T16:00:00  # Schedule page publish date.

authors = ["admin"]
tags = ["talk", "conference", "application-security", "bdd", "blue-team", "build-pipeline", "build-tool", "cd", "ci", "cli", "cloud", "cloud-security", "continuous-deployment", "continuous-integration", "cybersecurity", "dev-sec-ops", "dev-ops", "docker", "free-and-open-source", "information-security", "infosec", "owasp", "owasp-zap", "penetration-testing", "purpleteam", "red-team", "security", "security-regression-testing", "software", "software-security", "security-testing", "terminal", "testing", "tool", "web", "web-application", "web-application-security", "web-security", "zap"]

summary = """
This talk covers: What is OWASP PurpleTeam? Why you would want it in your build pipelines. How you go about setting it up? What the work-flows look like, along with the recent donation of the cloud environment to OWASP.
"""

title = "Talk - Purple Teaming with OWASP purpleteam"
date = 2022-03-10T06:00:00
date_end = 2022-03-10T06:30:00
abstract = "PurpleTeam is a Developer focussed security regression testing CLI and SaaS targeting Web applications and APIs. The CLI is specifically targeted at sitting within your build pipelines but can also be run manually. The SaaS that does the security testing of your applications and APIs can be deployed anywhere."
event = "Conf42: Chaos Engineering"
event_url = "https://www.conf42.com/Chaos_Engineering_2022_Kim_Carter_owasp_purpleteam"
location = "Virtual Online"

# Is this a selected talk? (true/false)
selected = true

# Projects (optional).
#   Associate this talk with one or more of your projects.
#   Simply enter the filename (excluding '.md') of your project file in `content/project/`.
#projects = ["deep-learning"]

# Links (optional).
url_pdf = ""
url_slides = ""
url_video = ""
url_code = ""

# Custom links (optional).
#   Uncomment line below to enable. For multiple links, use the form `[{...}, {...}, {...}]`.
links = [
  {name = "Project", url = "project/external-project-purpleteam", icon = "project-diagram", icon_pack = "fas"},
  #{name = "Talk", url = "https://appsec.org.nz/conference/speakers.html#building-purpleteam-a-security-regression-testing-saas---from-poc-to-alpha", icon = "microphone-alt", icon_pack = "fas"},
  #{name = "Blog Post", url = "/blog/2021/02/17/purpleteam-at-alpha/", icon = "blog", icon_pack = "fas"},
  #{name = "Slides", url = "https://speakerdeck.com/binarymist/building-purpleteam-a-security-regression-testing-saas-from-poc-to-alpha", icon = "desktop", icon_pack = "fas"},
  #{name = "PDF", url = "https://files.speakerdeck.com/presentations/1784d6fdfc3d4fab8ec5a67156387bf3/reveal.js_noFragments.pdf", icon = "file-pdf", icon_pack = "fas"},
  #{name = "Conference Talk Video", url = "https://www.youtube.com/watch?v=0RFmweM7bwM", icon = "video", icon_pack = "fas"},
  {name = "Interview", url = "publication/6figuredev-purpleteam-with-kim-carter/", icon = "podcast", icon_pack = "fas"},
  {icon = "twitter", icon_pack = "fab", name = "Follow", url = "https://twitter.com/purpleteamlabs"}
]

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

This talk was also run at:

* [Blackhat Asia Arsenal](https://www.blackhat.com/asia-22/arsenal/schedule/#purpleteaming-with-owasp-purpleteam-tool-25879)
* [DevOps Pro EU](https://devopspro.lt/Kim-Carter/)

Kim will briefly discuss the four year journey that has brought PurpleTeam from a proof of concept (PoC) to a production ready Developer first security regression testing CLI and SaaS.

An overview of the NodeJS micro-services with many features allowing a Build User (DevSecOps practitioner) to customise their Test Runs without having to write any tests by simply configuring a Job file. Allowing multiple options to deal with false/true positives. Setting alert thresholds in multiple places and for multiple testers (app-tester, tls-tester, server-tester) allowing the Build User to define what constitutes a successful or failed Test Run.
<!-- Add video when done
{{< youtube ACuaP-ZToKw >}}
-->
### Why would I want it in my build pipelines?

In this section Kim will discus the problems that PurpleTeam solves, such as training the Build User with advice and tips on security defects as you fix the defects that PurpleTeam highlights. As well as the huge cost savings of finding and fixing your application and infrastructure security defects early (as you’re introducing them) as opposed to late (weeks or months later with external penetration testing) or not at all.

<!-- uncomment below when available -->
<!-- <br>

<script async class="speakerdeck-embed" data-id="1784d6fdfc3d4fab8ec5a67156387bf3" data-ratio="1.37081659973226" src="//speakerdeck.com/assets/embed.js"></script>

<br>-->

### OK, I want it, how do I set it up?

Kim will walk you through all of the components and how to get them set-up and configured.

### Great, but what do the work flows look like and how do I use it?

Let's walk through the different ways purpleteam can be run and utilised, such as:

* Running purpleteam standalone (with UI)
* Running purpleteam from within your pipelines as a spawned sub process (headless: without UI)
* Running all of the purpleteam components, including debugging each and every one of them if and when the need arises

<br>

