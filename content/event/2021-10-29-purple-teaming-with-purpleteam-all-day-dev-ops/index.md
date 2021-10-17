+++
publishDate = 2021-09-06T16:00:00  # Schedule page publish date.

authors = ["admin"]
tags = ["talk", "conference", "application-security", "bdd", "blue-team", "build-pipeline", "build-tool", "cd", "ci", "cli", "cloud", "cloud-security", "continuous-deployment", "continuous-integration", "cybersecurity", "dev-sec-ops", "dev-ops", "docker", "free-and-open-source", "information-security", "infosec", "owasp", "owasp-zap", "penetration-testing", "purpleteam", "red-team", "security", "security-regression-testing", "software", "software-security", "security-testing", "terminal", "testing", "tool", "web", "web-application", "web-application-security", "web-security", "zap"]

summary = """
This talk covers: What is OWASP PurpleTeam? Why you would want it in your build pipelines. How you go about setting it up? What the work-flows look like.
"""

title = "Talk - Purple Teaming with OWASP purpleteam"
date = 2021-10-29T16:00:00
date_end = 2021-10-29T16:30:00
abstract = "PurpleTeam is a security regression testing CLI and SaaS targeting Web applications and APIs. The CLI is specifically targeted at sitting within your build pipelines but can also be run manually. The SaaS that does the security testing of your applications and/or APIs can be deployed anywhere."
event = "All Day DevOps"
event_url = "https://www.alldaydevops.com/"
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
  {name = "Interview", url = "publication/ser-podcast-owasp-purpleteam/", icon = "podcast", icon_pack = "fas"},
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

{{< figure src="KimCarter-Horizontal720w-min.png"alt="Kim Carter" width="720" >}}

Kim will briefly discuss the three year journey that has brought purpleteam from a proof of concept (PoC) to where it is now.

An overview of the NodeJS micro-services with a pluggable tester architecture will be provided.

<!-- uncomment below when available -->
<!-- {{< youtube 0RFmweM7bwM >}}

<br>-->

### Why would I want it in my build pipelines?

In this section Kim will discus the problem that purpleteam solves,
along with the cost savings of finding and fixing your application security defects early (as you're introducing them) as opposed to late (weeks months later with external penetration testing) or not at all.

<!-- uncomment below when available -->
<!-- <br>

<script async class="speakerdeck-embed" data-id="1784d6fdfc3d4fab8ec5a67156387bf3" data-ratio="1.37081659973226" src="//speakerdeck.com/assets/embed.js"></script>

<br>-->

### OK, I want it, how do I set it up?

Kim will walk you through all of the components and how to get them set-up and configured

### Great, but what do the work flows look like?

<br>

{{< youtube nJNAbGLCGNY >}}

<br>

Let's walk through the different ways purpleteam can be run and utilised, such as:

* Running purpleteam standalone (with UI)
* Running purpleteam from within your pipelines as a spawned sub process (headless: without UI)
* Running all of the purpleteam components, including debugging each and every one of them if and when the need arises

<br>

