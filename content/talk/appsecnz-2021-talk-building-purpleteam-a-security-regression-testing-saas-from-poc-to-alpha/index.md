+++
publishDate = 2021-02-13T16:00:00  # Schedule page publish date.

tags = ["talk", "conference", "agile", "application-security", "bdd", "blue-team", "build-pipeline", "build-tool", "cd", "ci", "cli", "cloud", "cloud-security", "continuous-deployment", "continuous-integration", "cybersecurity", "dev-sec-ops", "dev-ops", "docker", "free-and-open-source", "information-security", "infosec", "owasp", "owasp-zap", "penetration-testing", "purpleteam", "red-team", "security", "security-regression-testing", "software", "software-security", "security-testing", "terminal", "testing", "tool", "web", "web-application", "web-application-security", "web-security", "zap"]

summary = """
Developers / Engineers know that a build pipeline is an essential part of creating robust and reliable software, but what to put in it? This talk covers the creation of purpleteam from PoC to Alpha release, and why it’s an ideal fit for the security regression testing slot of your build pipeline.
"""

title = "Talk - Building purpleteam (a Security Regression Testing SaaS) - From PoC to Alpha"
date = 2021-02-12T14:25:00
date_end = 2021-02-12T14:55:00
abstract = "Let me take you on the journey of trials, errors, and lessons learnt from getting a web app/API security regression testing proof of concept (PoC) to the next stage (alpha release)."
event = "AppSec NZ"
event_url = "https://appsec.org.nz/conference/"
location = "Auckland University, New Zealand"

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
  {name = "Talk", url = "https://appsec.org.nz/conference/speakers.html#building-purpleteam-a-security-regression-testing-saas---from-poc-to-alpha", icon = "microphone-alt", icon_pack = "fas"},
  {name = "Blog Post", url = "/blog/2021/02/nn/purpleteam-at-alpha/", icon = "blog", icon_pack = "fas"},
  {name = "Slides", url = "https://speakerdeck.com/binarymist/building-purpleteam-a-security-regression-testing-saas-from-poc-to-alpha", icon = "desktop", icon_pack = "fas"},
  {name = "Conference Talk Video", url = "https://www.youtube.com/watch?v=AddHashHere", icon = "video", icon_pack = "fas"}
]

# Does the content use math formatting?
math = true

# Does the content use source code highlighting?
highlight = true

# Featured image
# Place your image in the `static/img/` folder and reference its filename below, e.g. `image = "example.jpg"`.
[header]
image = "headers/2021/purple-team-logo_1280w_noBM.png"
#caption = "My caption :smile:"

+++

In 2019, I gave a talk at OWASP New Zealand Day on a security regression testing PoC I had developed based on developer feedback. Since then, on top of a normal day job, I’ve been working on this project with every spare minute of time.

{{< youtube Todo >}}

Let’s walk through the: Architecture; Environments; Technologies; and Pressures.

<script async class="speakerdeck-embed" data-id="1784d6fdfc3d4fab8ec5a67156387bf3" data-ratio="1.37081659973226" src="//speakerdeck.com/assets/embed.js"></script>

We will then discuss the next steps for purpleteam, and how you can start using - and contributing to it if it’s missing something you need.

<br>
