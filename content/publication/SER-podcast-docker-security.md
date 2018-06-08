+++
title = "Diogo Mónica on Docker Security"
date = "2017-05-09"

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
publication = "*Software Engineering Radio (SER)* Episode 290, IEEE."
publication_short = "SER Podcast 290"

# Abstract and optional shortened version.
abstract = "Docker Security Team lead Diogo Mónica talks with SE Radio’s Kim Carter about Docker Security aspects. Simple Application Security, which hasn’t changed much over the past 15 years, is still considered the most effective way to [improve security](/publication/docker-security/) around Docker containers and infrastructure. The discussion explores characteristics such as Immutability, the copy-on-write filesystem, as well as orchestration principles that are baked into Docker Swarm, such as mutual TLS/PKI by default, secrets distribution, least privilege, content scanning, image signatures, and secure/trusted build pipelines. Diogo also shares his thoughts around the attack surface of the Linux kernel; networking, USB, and driver APIs; and the fact that application security remains more important to focus our attention on and get right."
abstract_short = ""

tags = ["publication", "podcast", "cybersecurity", "dev-ops", "dev-sec-ops", "security", "information-security", "infosec", "docker", "application-security", "software-security"]

summary = """
Diogo Mónica talks with Kim Carter about Docker Security on Software Engineering Radio.
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
url_custom = [{name = "Podcast", url = "http://www.se-radio.net/2017/05/se-radio-episode-290-diogo-monica-on-docker-security/"}, {name = "Direct Download", url = "http://traffic.libsyn.com/seradio/SE-Radio_Episode_290_Diogo_Monica_on_Docker_Security.mp3"}, {name = "Kim's Docker Security Book", url = "publication/docker-security/"}, {name = "Risks", url = "https://f1.holisticinfosecforwebdevelopers.com/chap03.html#vps-identify-risks-docker"}, {name = "Countermeasures", url = "https://f1.holisticinfosecforwebdevelopers.com/chap03.html#vps-countermeasures-docker"}, {name = "Docker Security Blog Post", url = "/blog/2018/03/31/docker-security/"}, {name = "Docker Cheat Sheet", url = "https://github.com/eon01/DockerCheatSheet"}]

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

# Show Outline

## Basic Questions

Can you give a quick explanation of how Docker containers work for our listeners?

If you were an attacker looking to compromise Docker, knowing what the weakest areas are, where would you start and what would be your first targets in terms of the surrounding technologies?

&nbsp;

I’m going to address each of the areas in turn, you mentioned a while ago, that we should address.

## Application security more important than isolation


One of the things you mentioned was that “application security is so much more important than container/VM isolation”, such as:

1. [Namespaces](https://f1.holisticinfosecforwebdevelopers.com/chap03.html#vps-identify-risks-docker-docker-host-engine-and-containers-namespaces)
2. [Control Groups](https://f1.holisticinfosecforwebdevelopers.com/chap03.html#leanpub-auto-control-groups)
3. [Linux Security Modules (SELinux and AppArmor)](https://f1.holisticinfosecforwebdevelopers.com/chap03.html#vps-identify-risks-docker-docker-host-engine-and-containers-linux-security-modules)
4. [Capabilities](https://f1.holisticinfosecforwebdevelopers.com/chap03.html#leanpub-auto-capabilities)
5. Secure Computing Mode ([Seccomp](https://f1.holisticinfosecforwebdevelopers.com/chap03.html#vps-identify-risks-docker-docker-engine-and-containers-seccomp))
6. [Filesystem mounts](https://f1.holisticinfosecforwebdevelopers.com/chap03.html#vps-countermeasures-disable-remove-services-harden-what-is-left-lock-down-the-mounting-of-partitions)

Can you give us some more detail around what you mean by this?

In your blog post [Increasing Attacker Cost using Immutable Infrastructure](https://diogomonica.com/2016/11/19/increasing-attacker-cost-using-immutable-infrastructure/), the overarching theme is that application security is still the lowest hanging fruit for an attacker. Near the end of your blog post you have a link to [Docker Security Features](https://www.delve-labs.com/articles/docker-security-production-2/), which seems to be mostly focussed on the isolation features I just mentioned. Why is Docker isolation much less important than appsec?

Our applications over the past 15 years in general are not getting any more secure. We’ve been trying to educate developers around the issues, but it doesn’t seem to be working, any ideas on how we can improve this situation? 

## Inspect app behaviour inside containers, but not VMs

In our pre show discussions, you mentioned that:
“You can inspect behaviour of an app inside of a container, but you can’t inside of a VM”. My thoughts around that comment, were that in VMs or [VPS](https://f1.holisticinfosecforwebdevelopers.com/chap03.html#vps)s in general we have:

* Application [logging](https://f1.holisticinfosecforwebdevelopers.com/chap03.html#vps-countermeasures-lack-of-visibility-logging-and-alerting)
* Instrumenting from within: [statsd](https://f1.holisticinfosecforwebdevelopers.com/chap06.html#web-applications-countermeasures-lack-of-visibility-insufficient-Monitoring-statistics-graphing), [collectd](https://f1.holisticinfosecforwebdevelopers.com/chap03.html#leanpub-auto-collectdhttpscollectdorg), [graphite](https://f1.holisticinfosecforwebdevelopers.com/chap03.html#leanpub-auto-graphitehttpgraphiteapporg) … & others
* Instrumentation externally: Monit & various other PaaS offerings

Is there any reason why we shouldn’t use the same tools, or are there offerings more specific to containers that we can use to inspect app behaviour & if so, what are they?

## Immutability

One of your other pre show comments was that “Containers win due to observation and immutability”. Can you explain the immutable copy-on-write filesystem, how it helps us, and how we can take maximum advantage from this?

## Read-only

You also mentioned pre show that… “You can’t run a VM with --read-only, but with Docker it’s trivial”. My thoughts around those comments, were that…
you can run anything that has a filesystem that has to be mounted,  as read-only. Can you explain the fundamental difference of running a container as read only vs running a VM or any VPS with granular read only filesystem mounts?

