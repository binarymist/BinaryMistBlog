+++
date = 2019-02-22T16:00:00  # Schedule page publish date.

tags = ["talk", "application-security", "book", "capabilities", "control-groups", "cybersecurity", "dev-ops", "dev-sec-ops", "docker", "conference", "application-security", "holistic-info-sec-for-web-developers", "information-security", "infosec", "namespaces", "networking", "owasp-nz-day", "seccomp", "security", "software-security", "web-application-security"]

summary = """
The security defaults of Docker are designed to get you up and running (“just work”) quickly, rather than being the most secure. There are many default configurations that can be improved upon. In this talk Kim will walk through improving the security of Docker hosts, containers, networking and deployments.
"""

title = "Talk - Hardening Your Docker Infrastructure"
time_start = 2019-02-22T16:00:00
time_end = 2019-02-22T16:50:00
abstract = "The security defaults of Docker are designed to get you up and running (“just work”) quickly, rather than being the most secure. There are many default configurations that can be improved upon. In this talk Kim will walk through improving the security of Docker hosts, containers, networking and deployments."
event = "OWASP New Zealand Day"
event_url = "https://www.owasp.org/index.php/OWASP_New_Zealand_Day_2019#tab=Conference_-_22_Feb"
location = "Auckland, New Zealand"

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
url_custom = [{name = "Talk", url = "https://www.owasp.org/index.php/OWASP_New_Zealand_Day_2019#Abstracts_and_Bios"}, {name = "Purchase Book", url = "https://leanpub.com/dockersecurity-quickreference"}, {name = "book", url = "/publication/docker-security/"}, {name = "Kim's Other Books", url = "/publication/kims-selected-publications/"}, {name = "Related Workshop", url = "project/service-development-team-security-training/"}, {name = "Podcast", url = "publication/ser-podcast-docker-security/"}, {name = "Blog Post", url = "/blog/2018/03/31/docker-security/"}, {name = "Docker Cheat Sheet", url = "https://github.com/eon01/DockerCheatSheet"}]

# Does the content use math formatting?
math = true

# Does the content use source code highlighting?
highlight = true

# Featured image
# Place your image in the `static/img/` folder and reference its filename below, e.g. `image = "example.jpg"`.
[header]
image = "headers/docker-security.png"
#caption = "My caption :smile:"

+++

Reports state very high numbers of security vulnerabilities in official images on Docker Hub. Host kernels contain 20+ M LoC, reachable from untrusted applications via many kernel APIs, providing huge attack surface. Dockers default is to run containers and all commands/processes within a container as root.

Kim will discuss:

* Tooling options around significantly improving visibility of vulnerabilities in Docker components and containers
* Safe consumption of Docker images from public registries. Addressing origin, authorship with identification using digests and integrity with opt-in Docker Content Trust

Based on Kim's:

* Experience building a full dynamically Dockerised [security regression testing SaaS](https://gitlab.com/purpleteam-labs)
* Writing and publishing the [Docker Security - Quick Reference](https://binarymist.io/publication/docker-security/) book
* Interviews with experts such as [Docker Security Team Lead Diogo Mónica](https://binarymist.io/publication/ser-podcast-docker-security/), and Michael Hausenblas of Red Hat (author of the book Container Networking) on [Container Networking](https://binarymist.io/publication/ser-podcast-container-networking/)

Docker host, engine, container, networking and deployment security will be covered with many examples. We will cover:

* Namespaces
* Controlling system resources accessible to containers with CGrouups
* LSMs
* Reducing default Capabilities of the Container root user
* Reducing default syscalls to only the essentials with Seccomp
* Filesystem Mounts
* Coverage of good security practises in Dockerfiles and docker-compose

<br>
