+++
title = "Natalie Silvanovich on Attack Surface Reduction"
date = "2018-05-16"
draft = false
# Authors. Comma separated list, e.g. `["Bob Smith", "David Jones"]`.
authors = ["Kim Carter"]

# Publication type.
# Legend:
# 0 = Uncategorized
# 1 = Conference proceedings
# 2 = Journal
# 3 = Work in progress
# 4 = Technical report - Changed to Podcast in config.toml
# 5 = Book
# 6 = Book chapter
publication_types = ["4"]

# Publication name and optional abbreviated version.
publication = "*Software Engineering Radio (SER)* Episode ###, IEEE."
publication_short = "SER Podcast ###"

# Abstract and optional shortened version.
abstract = "Natalie Silvanovich from Google Project Zero talks with Kim Carter about what attack surface is in regards to software, how to identify risks and reduce the attack surface of the software you as a Software Engineer are creating. Natalie found over 100 0 day security defects in flash in her first year at Google, and discusses the risks and countermeasures around code sharing, third-party code, and techniques for identifying code libraries that are more likely to have security defects. Along with Developer workflow, post mortems are also carried out on a collection of 0 day bugs in well known software."
abstract_short = ""

tags = ["publication", "podcast", "application-security", "cybersecurity", "javascript", "information-security", "infosec", "security", "webassembly", "web-security"]

summary = """
Natalie Silvanovich from Google Project Zero talks with Kim Carter about what attack surface reduction is about.
"""

# Featured image thumbnail (optional)
image_preview = ""

# Is this a selected publication? (true/false)
selected = false

# Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter the filename (excluding '.md') of your project file in `content/project/`.
#projects = ["deep-learning"]
 

# Links (optional).
url_pdf = ""
url_preprint = ""
url_code = ""
url_dataset = ""
url_project = ""
url_slides = ""
url_video = ""
url_poster = ""
url_source = ""

# Custom links (optional).
#   Uncomment line below to enable. For multiple links, use the form `[{...}, {...}, {...}]`.
url_custom = [{name = "Podcast", url = "http://www.se-radio.net/"}, {name = "Direct Download", url = "#"}]

# Does the content use math formatting?
math = true

# Does the content use source code highlighting?
highlight = true

# Featured image
# Place your image in the `static/img/` folder and reference its filename below, e.g. `image = "example.jpg"`.
[header]
image = ""
caption = ""

+++

[![Software Engineering Radio](/img/publication/se-radio-logo.png)](http://www.se-radio.net/team/kim-carter/)

{{% alert note %}}
This is has been recorded, but is yet to be relealsed.
{{% /alert %}}

# Show Outline

## Basic Questions

* Can you explain what attack surface is?
* If we are to reduce attack surface, we need to be able to measure it. How would you go about quantifying the attack surface before and after defects have been found and fixed?
* How does your threat modelling approach take into consideration the severity as well as number of defects?
* I’m working on a project. I’ve measured my attack surface, found and fixed some defects, measured again, and the attack surface is now 10% smaller. Is my project now 10% more secure?
* You mentioned in your “Small is Beautiful” talk that we should:
  * Base features on user need
  * Track feature use in beta or production
  * Be willing/able to disable features
  This is great advice, is this assuming we have zero users consuming a specific feature?
* Can you go into a little more depth on this?  
  (concrete examples of how you do this?)
* You also mentioned that all code has risk, and that adding a feature is a trade-off. I’d go much further than this, by saying all features are trade-offs, including physical, people, vps, networks, cloud, mobile and IoT. We need to consider the attack surface of everything.  
Can we apply the previous question and your answer to all of these areas, and if so, how so?


