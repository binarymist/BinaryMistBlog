+++
date = 2013-09-12T09:50:00  # Schedule page publish date.

tags = ["talk", "application-security", "csrf", "cybersecurity", "filtering", "information-security", "infosec", "owasp-nz-day", "owasp-top-10", "owasp-zap", "sanitisation", "security", "software-security", "validation", "web", "web-application", "web-application-security", "web-security", "xss", "zap"]

summary = """
At OWASP NZ Day: What are we doing with all the characters that get shoved into our applications? Have we considered every potential execution context?
"""

title = "Talk - What's Our Software Doing With All That User Input"
time_start = 2013-09-12T09:50:00
time_end = 2013-09-12T10:30:00
abstract = "What are we doing with all the characters that get shoved into our applications? Have we considered every potential execution context? It’s often interesting and surprising to see what sort of concoction of characters can be executed in different places… and linking multiple attack vectors together which the builders haven’t thought about. What are we trusting? Why are we trusting it? What, where and how should we be sanitising?"
abstract_short = ""
event = "OWASP NZ Day 2013"
event_url = "https://www.owasp.org/index.php/OWASP_New_Zealand_Day_2013#tab=Presentations"
location = "Auckland, New Zealand"

# Is this a selected talk? (true/false)
selected = false

# Projects (optional).
#   Associate this talk with one or more of your projects.
#   Simply enter the filename (excluding '.md') of your project file in `content/project/`.
#projects = ["deep-learning"]

# Links (optional).
url_pdf = ""
url_slides = "https://speakerdeck.com/binarymist/whats-our-software-doing-with-all-that-user-input"
url_video = ""
url_code = ""

# Custom links (optional).
#   Uncomment line below to enable. For multiple links, use the form `[{...}, {...}, {...}]`.
url_custom = [{name = "Risks", url = "https://f1.holisticinfosecforwebdevelopers.com/chap06.html#web-applications-identify-risks-lack-of-input-validation-and-sanitisation"}, {name = "Countermeasures", url = "https://f1.holisticinfosecforwebdevelopers.com/chap06.html#web-applications-countermeasures-lack-of-input-validation-filtering-and-sanitisation"}]

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

We have a vast collection of libraries, techniques, cheat sheets, tutorials, guides and tools at our disposal. I often find myself thinking… how can we commoditise the sanitisation of user input and I keep coming up with the same answer. It’s not easy. Every application has a completely different set of concerns.

In order for our software to be shielded from an attack, the builders must think like attackers.

In this talk I’ll attempt to:

* Increase our knowledge and awareness
* Discuss practical techniques and approaches that increase our defences
* Break some software

{{< speakerdeck bd7eb04bff6147bbaa67911e2e48d45c >}}
<br>


