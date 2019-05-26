+++
date = 2019-02-22T13:30:00  # Schedule page publish date.

tags = ["talk", "dev-ops", "dev-sec-ops", "atdd", "cybersecurity", "holistic-info-sec-for-web-developers", "information-security", "infosec", "javascript", "nodejs", "owasp", "owasp-nz-day", "owasp-zap", "stdd", "security", "selenium", "software-security", "web-application", "web-application-security", "web-security", "zap"]

title = "Talk - Security Regression Testing on OWASP Zap Node API"
time_start = 2019-02-22T13:30:00
time_end = 2019-02-22T14:25:00
abstract = "There is this problem that we (Development Teams and their businesses) are still struggling with after adding all the security bolt-ons and improvements. It’s called application security (AppSec)."
abstract_short = ""
event = "OWASP New Zealand Day"
event_url = "https://www.owasp.org/index.php/OWASP_New_Zealand_Day_2019#tab=Conference_-_22_Feb"
location = "Auckland, New Zealand"

summary = """
The OWASP ZAP HTTP intercepting proxy is useful for manually attacking your Web apps and APIs. Now, we have the official Node API to programatically drive ZAP to regression test our creations. Kim will show you how to build a <a href="https://gitlab.com/purpleteam-labs" target="_blank">fully featured security regression testing CLI</a>, consumable by your CI/nightly builds.
"""

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
url_custom = [{name = "Talk", url = "https://www.owasp.org/index.php/OWASP_New_Zealand_Day_2019#Abstracts_and_Bios"}]


# Does the content use math formatting?
math = true

# Does the content use source code highlighting?
highlight = true

# Featured image
# Place your image in the `static/img/` folder and reference its filename below, e.g. `image = "example.jpg"`.
[header]
image = ""
#caption = "My caption :smile:"

+++

As Developers, we’re still creating defective code. There are many areas we’ve been able to configure and automate to help improve security, but the very human aspect of creating secure code is still a dark art, and in many cases our single point of failure.

We’re going to discuss traditional approaches of addressing security in our software, and why they’re just not cutting it any more. A red teaming engagement can be very expensive, is too late in the SDLC to be finding then fixing bugs. In many cases we’re pushing code to production continuously,
the traditional approaches and security checks are no longer viable.

In this session, Kim will attempt to demystify how security can become less of a disabler/blocker and more of an enabler/selling point, allowing you to create and deliver robust software with security baked in as frequently and confidently as your business demands.<br>We’re going to unlock the secrets of building and running a Development Team with security super powers (the <a href="https://purpleteam-labs.com/" target="_blank">purpleteam</a>), finding and fixing defects at the very point that they’re introduced.

One of the tools often used is the OWASP ZAP API, now we have an officially supported <a href="https://github.com/zaproxy/zap-api-nodejs/" target="_blank">Node API</a>.
In this talk we build on the Node API to create a <a href="https://gitlab.com/purpleteam-labs" target="_blank">fully featured security regression testing CLI</a> that can be consumed by your CI/nightly builds.

<br>

