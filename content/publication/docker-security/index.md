+++
title = "Docker Security - Quick Reference"
date = "2018-01-01"

# Authors. Comma separated list, e.g. `["Bob Smith", "David Jones"]`.
authors = ["Admin"]

# Publication type.
# Kim copied the file: themes/academic/i18n/en.yaml to i18n/ , removed everything that we don't override, and changed the publication (pub) values of the associated types... found in themes/academic/data/publication_types.toml to the following: 
# Legend:
# 0 = pub_uncat: Uncategorized
# 1 = pub_conf: Conference artifact
# 2 = pub_journal: Journal article
# 3 = pub_preprint: Work in progress
# 4 = pub_report: Technical report
# 5 = pub_book: Book
# 6 = pub_book_section: Book section
# 7 = pub_thesis: Thesis
# 8 = pub_patent: Podcast
publication_types = ["5"]

# Publication name and optional abbreviated version.
publication = "Self Hosted and LeanPub"
publication_short = "Self Hosted & LeanPub"

tags = ["publication", "book", "application-security", "capabilities", "control-groups", "cybersecurity", "dev-ops", "dev-sec-ops", "docker", "information-security", "infosec", "linux", "lsm", "namespaces", "seccomp", "security", "security-weaknesses", "software-security", "web-application-security"]

summary = """
Are you looking to improve the security of your Docker deployments? Do you want to confirm you haven't missed any important security aspects in your Docker infrastructure?
"""

# Abstract and optional shortened version.
abstract = "The security defaults of Docker are established to get you up and running (\"just work\") quickly, rather than being the most secure. There are many default configurations that can be improved upon. This book will help you do just that.<br><br>Covering the risks and countermeasures of Docker security, based on Kim's own personal experience with Docker environments and [discussions](/publication/ser-podcast-docker-security) with Docker Security Team Lead Diogo Mónica."

# Featured image thumbnail (optional)
image_preview = "/img/publication/title_page_docker-security.png"

# Is this a selected publication? (true/false)
featured = false

# Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter the filename (excluding '.md') of your project file in `content/project/`.
#projects = ["example-external-project"]

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
links = [{name = "Purchase Book", url = "https://leanpub.com/dockersecurity-quickreference", icon = "docker", icon_pack = "fab"}, {name = "Kim's Other Books", url = "/publication/kims-selected-publications/", icon = "leanpub", icon_pack = "fab"}, {name = "Workshop", url = "project/service-development-team-security-training/", icon = "tools", icon_pack = "fas"}, {name = "Talk", url = "/talk/owaspnzday-2019-talk-hardening-your-docker-infrastructure/", icon = "microphone-alt", icon_pack = "fas"}, {name = "Podcast", url = "publication/ser-podcast-docker-security/", icon = "podcast", icon_pack = "fas"}, {name = "Blog Post", url = "/blog/2018/03/31/docker-security/", icon = "blog", icon_pack = "fas"}, {name = "Docker Cheat Sheet", url = "https://github.com/eon01/DockerCheatSheet", icon = "docker", icon_pack = "fab"}]

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

Check out Kim's [blog post](/blog/2018/03/31/docker-security/) which goes into some of the detail within this book, along with what [others are saying](/blog/2018/03/31/docker-security/#comments) about Docker Security.

[![Docker Security Quick Reference](/img/publication/title_page_docker-security_720.png)](https://leanpub.com/dockersecurity-quickreference)

Please note that the entire content of this book is included in The VPS chapter of [Holistic InfoSec for Web Developers F1](https://f1.holisticinfosecforwebdevelopers.com/).

<br>

##### Errata (errors, typos, etc.)

* Submit an [issue](https://github.com/binarymist/dockersecurity-quickreference/issues)
* Open [issues](https://github.com/binarymist/dockersecurity-quickreference/issues?q=is%3Aopen+is%3Aissue)
* Closed [issues](https://github.com/binarymist/dockersecurity-quickreference/issues?q=is%3Aissue+is%3Aclosed)

