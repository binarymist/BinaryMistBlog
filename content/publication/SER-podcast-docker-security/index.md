+++
title = "Diogo Mónica on Docker Security"
date = "2017-05-09"

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
publication_types = ["8"]

# Publication name and optional abbreviated version.
publication = "*Software Engineering Radio (SER)* Episode 290, IEEE."
publication_short = "SER Podcast 290"

# Abstract and optional shortened version.
abstract = "Docker Security Team lead Diogo Mónica talks with SE Radio’s Kim Carter about Docker Security aspects. Simple Application Security, which hasn’t changed much over the past 15 years, is still considered the most effective way to [improve security](/publication/docker-security/) around Docker containers and infrastructure. The discussion explores characteristics such as Immutability, the copy-on-write filesystem, as well as orchestration principles that are baked into Docker Swarm, such as mutual TLS/PKI by default, secrets distribution, least privilege, content scanning, image signatures, and secure/trusted build pipelines. Diogo also shares his thoughts around the attack surface of the Linux kernel; networking, USB, and driver APIs; and the fact that application security remains more important to focus our attention on and get right."

tags = ["publication", "podcast", "cybersecurity", "dev-ops", "dev-sec-ops", "security", "information-security", "infosec", "docker", "application-security", "software-security"]

summary = """
Diogo Mónica talks with Kim Carter about Docker Security on Software Engineering Radio.
"""

# Featured image thumbnail (optional)
image_preview = ""

# Is this a selected publication? (true/false)
featured = false

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
links = [{name = "Podcast", url = "http://www.se-radio.net/2017/05/se-radio-episode-290-diogo-monica-on-docker-security/"}, {name = "Direct Download", url = "http://traffic.libsyn.com/seradio/SE-Radio_Episode_290_Diogo_Monica_on_Docker_Security.mp3"}, {name = "Kim's Docker Security Book", url = "publication/docker-security/"}, {name = "Risks", url = "https://f1.holisticinfosecforwebdevelopers.com/chap03.html#vps-identify-risks-docker"}, {name = "Countermeasures", url = "https://f1.holisticinfosecforwebdevelopers.com/chap03.html#vps-countermeasures-docker"}, {name = "Docker Security Blog Post", url = "/blog/2018/03/31/docker-security/"}, {name = "Docker Cheat Sheet", url = "https://github.com/eon01/DockerCheatSheet"}]

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

I’m going to address each of the areas in turn, you mentioned a while ago, that we should address...

## [Application security more important than isolation](https://f1.holisticinfosecforwebdevelopers.com/chap03.html#vps-countermeasures-docker-application-security)


One of the things you mentioned was that “application security is so much more important than container/VM isolation”, such as:

1. [Namespaces](https://f1.holisticinfosecforwebdevelopers.com/chap03.html#vps-identify-risks-docker-docker-host-engine-and-containers-namespaces)
2. [Control Groups](https://f1.holisticinfosecforwebdevelopers.com/chap03.html#leanpub-auto-control-groups)
3. [Linux Security Modules (SELinux and AppArmor)](https://f1.holisticinfosecforwebdevelopers.com/chap03.html#vps-identify-risks-docker-docker-host-engine-and-containers-linux-security-modules)
4. [Capabilities](https://f1.holisticinfosecforwebdevelopers.com/chap03.html#leanpub-auto-capabilities)
5. Secure Computing Mode ([Seccomp](https://f1.holisticinfosecforwebdevelopers.com/chap03.html#vps-identify-risks-docker-docker-engine-and-containers-seccomp))
6. [Filesystem mounts](https://f1.holisticinfosecforwebdevelopers.com/chap03.html#vps-countermeasures-disable-remove-services-harden-what-is-left-lock-down-the-mounting-of-partitions)

Can you give us some more detail around what you mean by this?

In your blog post [Increasing Attacker Cost using Immutable Infrastructure](https://diogomonica.com/2016/11/19/increasing-attacker-cost-using-immutable-infrastructure/), the overarching theme is that application security is still the lowest hanging fruit for an attacker. Near the end of your blog post you have a link to [Docker Security Features](https://www.delve-labs.com/articles/docker-security-production-2/), which seems to be mostly focussed on the isolation features I just mentioned. Why is Docker isolation much less important than appsec?

Our applications over the past 15 years in general are not getting any more secure. We’ve been trying to educate developers around the issues, but I'm not convinced that it's working, any ideas on how we can improve this situation? 

## Inspect app behaviour inside containers, but not VMs

In our pre show discussions, you mentioned that:
“You can inspect behaviour of an app inside of a container, but you can’t inside of a VM”. My thoughts around that comment, were that in VMs or [VPS](https://f1.holisticinfosecforwebdevelopers.com/chap03.html#vps)s in general we have:

* Application [logging](https://f1.holisticinfosecforwebdevelopers.com/chap03.html#vps-countermeasures-lack-of-visibility-logging-and-alerting)
* Instrumenting from within: [statsd](https://f1.holisticinfosecforwebdevelopers.com/chap06.html#web-applications-countermeasures-lack-of-visibility-insufficient-Monitoring-statistics-graphing), [collectd](https://f1.holisticinfosecforwebdevelopers.com/chap03.html#leanpub-auto-collectdhttpscollectdorg), [graphite](https://f1.holisticinfosecforwebdevelopers.com/chap03.html#leanpub-auto-graphitehttpgraphiteapporg) ... and others
* Instrumentation externally: [Monit](https://f1.holisticinfosecforwebdevelopers.com/chap03.html#vps-countermeasures-lack-of-visibility-proactive-monitoring-getting-started-with-monit) and various other PaaS offerings

Is there any reason why we shouldn’t use the same tools, or are there offerings more specific to containers that we can use to inspect app behaviour and if so, what are they?

## Immutability

One of your other pre show comments was that “Containers win due to observation and immutability”. Can you explain the immutable copy-on-write filesystem, how it helps us, and how we can take maximum advantage of this?

## Read-only

You also mentioned pre show that... “You can’t run a VM with `--read-only`, but with Docker it is trivial”. My thoughts around those comments, were that...  
you can run anything that has a filesystem that has to be mounted, as read-only. Can you explain the fundamental difference of running a container as read only vs running a VM or any VPS with granular read only filesystem mounts?

 How does your logging strategy look when running a container as `--read-only`?

## Orchestration

You mentioned in our pre show discussions that you thought the orchestration layers where a lot more interesting and impactful to companies security than isolation concepts, layers such as:

* [Mutual TLS/PKI by default](https://www.youtube.com/watch?v=apma_C24W58)
* [Secrets distribution](https://medium.com/on-docker/secrets-and-lie-abilities-the-state-of-modern-secret-management-2017-c82ec9136a3d#.f6yba66ti)
* [Least privilege orchestration](https://www.youtube.com/watch?v=xpGNAiA3XW8)
* Content scanning
* Image signatures, Also discussed below under [Consumption from Registries](#Consumption-from-Registries)
* Secure/trusted build pipelines

Can you elaborate a bit on each of these in turn?

## [SGX](https://www.theregister.co.uk/2016/02/01/sgx_secure_until_you_look_at_the_detail/), [SCONE](https://www.usenix.org/system/files/conference/osdi16/osdi16-arnautov.pdf)

In our previous discussion, you also mentioned how “Intel Software Guard Extensions (SGX)” along with “Secure CONtainer Environment (SCONE)” was going to make an impact  on how we employ security in our Docker environments. SCONE depends on Intels SGX, which itself has come under some [heavy criticism from security researchers at MIT](https://eprint.iacr.org/2016/086.pdf).

* Explain Intel Software Guard Extensions (SGX)
* Explain SCONE

## Arguments against SGX

The startup configuration file (SCF) has to be sent once the container (enclave) is initialised.
So the container owner has to trust the enclave in the untrusted remote cloud system.
SGX solves this conundrum with a mechanism known as attestation which relies on a train of trust to Intel verifying the hardware 
(https://blog.acolyer.org/2016/12/14/scone-secure-linux-containers-with-intel-sgx/).
Intel intends the symmetrical provisioning key to reside both in the SGX-enabled chip and in Intel servers. To establish an enclave, the software will offer its provisioning key to Intel, and if there's a match in the database, Intel will issue the attestation key that lets SGX set up the enclave. The SGX patents disclose in no uncertain terms that the Launch Enclave was introduced to ensure that each enclave’s author has a business relationship with Intel, and implements a software licensing system.
So we’re effectively trusting Intel as author and owner of our destiny?
(http://www.theregister.co.uk/2016/02/01/sgx_secure_until_you_look_at_the_detail/)

What is to stop Intel selling our information to the highest bidder?

## General isolation

A monolithic kernel containing tens of millions of lines of code which are reachable from untrusted applications via all sorts of networking, USB and driver APIs Has a huge attack surface. It seems that adding Docker into the mix exposes all these vulnerabilities to each and every running container, thus making the attack surface grow exponentially.  
Can you explain how the security of libcontainer which is now the default Container Format layer works, and what is to stop attackers by-passing it and attacking the underlying huge attack surface of the shared kernel?

In terms of performance, containers outperform VMs because they share the same host kernel and operating system resources, would you say that in terms of isolating malware, VMs do a better job?

From the Docker overview, it says: [Docker provides the ability to package and run an application in a loosely isolated environment](https://docs.docker.com/engine/docker-overview/). Initially this doesn’t install a lot of confidence that malware can’t easily spread, or an attacker can’t traverse environments.  
From the Docker overview, it says: [Encapsulate your applications (and supporting components](https://docs.docker.com/engine/understanding-docker/) into Docker containers”. The meaning of encapsulate is to enclose, but If we’re only loosely isolating, then we’re not really enclosing are we? Can you shed some light on this seemingly set of contradictory statements?

What are your thoughts around the recent (Jan 10 Fix) container escape 0day ([CVE-2016-9962](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2016-9962)) reported by Aleksa Sarai to Nathan McCauley that affects Docker <1.12.6?

(http://seclists.org/fulldisclosure/2017/Jan/21) It allows additional container processes via `runc exec` to be `ptrac`ed by `pid` 1 of the container, allowing the main processes of the container, if [running as `root`](https://f1.holisticinfosecforwebdevelopers.com/chap03.html#vps-identify-risks-docker-the-default-user-is-root), to gain access to file-descriptors of these new processes during the initialization and can lead to container escapes or modification of runC state before the process is fully placed inside the container.

## Major Subtopics

### [Consumption from Registries](https://f1.holisticinfosecforwebdevelopers.com/chap03.html#vps-countermeasures-docker-consumption-from-registries) {#Consumption-from-Registries}

You’ve got the Docker Registry which is an open-source server side application that lets you store and distribute Docker images. Some of the instances of the registry are:

* Docker Hub
* EC2 Container Registry
* Google Container Registry
* CoreOS quay.io
* Other Private instances

It’s up to the person consuming images from docker hub to assess whether or not they have vulnerabilities in them. I’ve [read](https://www.blackhat.com/docs/eu-15/materials/eu-15-Bettini-Vulnerability-Exploitation-In-Docker-Container-Environments.pdf) that [No security inspection](https://www.banyanops.com/blog/analyzing-docker-hub/) by Docker is performed on docker hub images whether un-official or official. How true is this?

There are a number of good tooling options coming available to help with the finding and mitigation of security vulnerabilities. Can you talk through some of the better ones and how they help?  

I’ve seen a good number of reports stating high numbers of security vulnerabilities within images on Docker Hub, even [upto 90% of official images](https://www.blackhat.com/docs/eu-15/materials/eu-15-Bettini-Vulnerability-Exploitation-In-Docker-Container-Environments.pdf). Can you talk about a case where a registry consumer was compromised due to a vulnerability in the image that they pulled down and spun up?

What guarantees do Docker Hub consumers have around the integrity of images?

Covering:

1. Where an image originated from
2. Who created it
3. [Image Provenance](http://blogs.oregonstate.edu/developer/2016/03/28/current-solutions-for-docker-security/): Is Docker fetching the image we think it is? With this point, can you go into:
  1. How [Docker uses](https://f1.holisticinfosecforwebdevelopers.com/chap03.html#vps-countermeasures-docker-consumption-from-registries) secure [hash’s or the digest](https://f1.holisticinfosecforwebdevelopers.com/chap03.html#leanpub-auto-hashing)
  2. Secure signing and where [notary](https://github.com/theupdateframework/notary) fits in
  3. The `Dockerfile` producing different images over time, specifying a tag in the `FROM` instruction, and using the digest to pull the same image each time

### Security Defaults

Many of Dockers defaults seem to be designed to allow dev-ops to get up and running with the least amount of friction and in minimal time. In adopting Docker are we trading off security for the other benefits of containerization?

Images derived from other images inherit the same user defined in the parent image explicitly or implicitly, so in most cases this will default to `root`.  
Dockers default is to run containers, and all commands / processes within a container as `root`. Was this a decision made with the aim of “making things just work”?

Is it possible to [run Docker as a low privileged user](https://f1.holisticinfosecforwebdevelopers.com/chap03.html#vps-countermeasures-docker-the-default-user-is-root), does this break anything?

Often I find within my `Dockerfile` that I perform an action such as copy a bunch of files as a non-`root` user and Docker applies `root` ownership to the copied files. Why is Docker not copying files according to the user I am set to run commands as?

### [Hardening Docker Engine and containers](https://f1.holisticinfosecforwebdevelopers.com/chap03.html#vps-countermeasures-docker-hardening-docker-host-engine-and-containers)

The thing that bugs me the most about Docker is that there is so much that needs to be known in order to establish a somewhat secure environment for running Docker containers, but that’s not well understood - it has been sold as a simple, easy solution.  
In terms of how to go about providing least privileges to any process within a container to only the syscalls, APIs, sections of memory, etc that it needs, and nothing else, let’s look at:

1. [Namespaces](https://f1.holisticinfosecforwebdevelopers.com/chap03.html#vps-countermeasures-docker-hardening-docker-host-engine-and-containers-namespaces)
2. [Control Groups](https://f1.holisticinfosecforwebdevelopers.com/chap03.html#vps-countermeasures-docker-hardening-docker-host-engine-and-containers-control-groups)
3. [Linux Security Modules](https://f1.holisticinfosecforwebdevelopers.com/chap03.html#leanpub-auto-linux-security-modules-lsm) (SELinux and AppArmor)
4. [Capabilities](https://f1.holisticinfosecforwebdevelopers.com/chap03.html#vps-countermeasures-docker-hardening-docker-host-engine-and-containers-capabilities)
5. Secure Computing Mode ([Seccomp](https://f1.holisticinfosecforwebdevelopers.com/chap03.html#vps-countermeasures-docker-hardening-docker-host-engine-and-containers-seccomp))
6. [Filesystem mounts](https://f1.holisticinfosecforwebdevelopers.com/chap03.html#vps-countermeasures-disable-remove-services-harden-what-is-left-lock-down-the-mounting-of-partitions)

#### Namespaces

* What are Linux Namespaces?
* Which component of Docker creates and manages the namespaces and how does Docker use them?
* How can Engineers leverage Namespaces to improve their security?

Can you explain a bit about the new User Namespaces, how they help us and how to use them?

1. `mnt` (manages filesystems and mount points)
2. `PID` (process isolation)
3. `net` (manages the network stack and interfaces)
4. `UTS` (Unix Timesharing System, isolating kernel and version identifiers)
5. `IPC` (manages access to InterProcess Comms)
6. `user`

#### Control Groups

What are Control Groups, and how can they be used to help secure containers?

#### Linux Security Modules

Linux Security Modules (LSM) such as AppArmor and SELinux are a framework that’s been part of the Linux kernel since 2.6, that supports security models implementing Mandatory Access Control (MAC).  
Can you briefly explain Linux Security Modules and how they implement mandatory Access Control?

AppArmor and SELinux are the two most common LSM’s accepted in the Linux kernel. Docker provides a usable interface to these LSMs.

Can you explain what this interface looks like, and how Docker users should go about using it?

#### Capabilities

Can you briefly explain what capabilities are in the context of computer science, what they do to the `root` user, and how can we set them up for a Docker container to apply least privilege?

#### Seccomp

Can you give us a bit of an idea of what Secure Computing Mode (SecComp) is and does for us, and then explain how Docker takes advantage of it?

How can we increase the number of disabled System calls available in a Docker container?

{{< highlight bash>}}
docker [run|create] --security-opt seccomp=/path/to/seccomp/profile.json hello-world
{{< /highlight >}}

#### Filesystem Mounts

On a physical server or VPS, we can control the mount attributes of our many file systems with the `/etc/fstab`. What are the best ways to apply the same attributes to the file systems of our Docker containers, is it just adding the `--read-only` flag on container start?

What else do we need to be aware of around applying least privilege to our file system mounts and how can we go about doing this?

#### [runC](https://f1.holisticinfosecforwebdevelopers.com/chap03.html#vps-countermeasures-docker-runc-and-where-it-fits-in)

Can you explain what runC is, what it gives engineers, and how we should use it?

Should we be using runC commands now instead of Docker commands?

Should engineers run `run spec` to generate the host independent `config.json` and host specific `runtime.json` specification files, which they then need to edit and apply sensible security settings around the previously discussed:

1. Namespaces
2. Control Groups
3. Linux Security Modules (SELinux and AppArmor)
4. Capabilities
5. Seccomp
6. Filesystem mounts 

Docker has many security enhancing capabilities, but which are actually on by default?

#### What about Docker Engine

Can you explain what the Docker engine components are, and are there any risks to each of these components that we haven't discussed and really should?

The Docker engine is comprised of:

* The server or daemon process.
* The REST API which specifies interfaces that programs can use to talk to the daemon and tell it what to do.
* A command line interface (CLI) client

What can we do to harden each of these components?

#### Best Practises

Are there any other publicly available best practices for Docker security available besides the Centre for Internet Security [Docker Benchmark](https://benchmarks.cisecurity.org/tools2/docker/CIS_Docker_1.12.0_Benchmark_v1.0.0.pdf)?

Where abouts can we find sample codes and configurations that will help listeners improve the security of their Docker containers and infrastructure?
