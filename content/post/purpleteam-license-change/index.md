+++
title = "PurpleTeam License Change"
subtitle = ""

# Add a summary to display on homepage (optional).
summary = "We have recently changed the PurpleTeam licensing model from the AGPL-3.0 for the public repositories and a completely closed source license for our IaC to a BSL for our public repositories and a PurpleTeam Cloud License for the cloud environment. Read this post to know more."

# By default the submission of new comments is enabled.
#comments = true

date = 2021-12-20T10:00:00+13:00
draft = false

# Authors. Comma separated list, e.g. `["Bob Smith", "David Jones"]`.
authors = ['Admin']

# Is this a featured post? (true/false)
featured = false

links = [
  {name = "Project", url = "https://purpleteam-labs.com", icon = "project-diagram", icon_pack = "fas"},
  {icon = "twitter", icon_pack = "fab", name = "Follow", url = "https://twitter.com/purpleteamlabs"}
]

# Tags and categories
# For example, use `tags = []` for no tags, or the form `tags = ["A Tag", "Another Tag"]` for one or more tags.
tags = ["tls", "ssl", "application-security", "bdd", "blue-team", "build-pipeline", "build-tool", "cd", "ci", "cli", "cloud", "cloud-security", "continuous-deployment", "continuous-integration", "cybersecurity", "dev-sec-ops", "dev-ops", "docker", "free-and-open-source", "information-security", "infosec", "owasp", "owasp-zap", "penetration-testing", "purpleteam", "red-team", "security", "security-regression-testing", "software", "software-security", "security-testing", "terminal", "testing", "tool", "web", "web-application", "web-application-security", "web-security", "zap", "testssl.sh", "licensing"]
categories = []

# Projects (optional).
#   Associate this post with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["deep-learning"]` references 
#   `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
#projects = [""]

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
[image]
  # Caption (optional)
  caption = ""

  # Focal point (optional)
  # Options: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight
  focal_point = ""

# Does the content use source code highlighting?
highlight = true

# Featured image
# Place your image in the `static/media/` folder and reference its filename below, e.g. `image = "example.jpg"`.
[header]
  image = "headers/PurpleTeam_landscape_rev.svg"
  caption = "PurpleTeam"
+++

To start with the:

* PurpleTeam `local` environment (AKA: OWASP PurpleTeam) was licensed with the AGPL-3.0
* PurpleTeam `cloud` environment (AKL: BinaryMist PurpleTeam) was licensed with a proprietary (non-free) license

We were never really happy with the AGPL-3.0 as it didn't really convey our intentions well. Recently we heard about the Business Source License (BSL). MariaDB, CockroachDB and Redpanda pioneered the BSL, and we thank you for creating this license. When we looked into it it actually did convey our intentions well, which are to deter other security testing service provides (DAST, SAST and IAST)(specifically offering a SaaS) from taking our work and using it in direct competition with PurpleTeam-Labs.
For the majority of PurpleTeam consumers the BSL that we've applied to the PurpleTeam `local` repositories will not limit your free usage of PurpleTeam `local` at all. We have always wanted PurpleTeam `local` to be available to Developers, DevOps Engineers, their teams, and others willing to set-up the `local` components to be able to use freely in-house providing it's not being used as a service in competition with PurpleTeam-Labs. 

For PurpleTeam `cloud`, the license (PurpleTeam Cloud License (PCL)) is basically the same as it was before. We've just made it clearer and more accessible.

The licenses are available in each source code repository at [Github](https://github.com/purpleteam-labs).
