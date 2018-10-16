+++
title = "Michael Hausenblas on Container Networking"
date = "2018-10-10"
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
publication = "*Software Engineering Radio (SER)* Episode 341, IEEE."
publication_short = "SER Podcast 341"

# Abstract and optional shortened version.
abstract = "[Michael Hausenblas](https://twitter.com/mhausenblas) talks with Host Kim Carter about topics covered in Michael’s ebook “[Container Networking](https://www.nginx.com/resources/library/container-networking-docker-kubernetes/)”, such as single vs multi-host container networking, orchestration, Kubernetes, service discovery and many more. Michael and Kim also discuss the roles that IPTables plays, how the allocation of IP addresses is handled, along with the assignment of ports. Overlay networks are covered along with topics such as the open Container Network Interface (CNI)"
abstract_short = ""

tags = ["publication", "podcast", "dev-ops", "docker", "networking", "kubernetes"]

summary = """
Michael Hausenblas and Kim Carter discuss container networking concepts from Michael’s book Container Networking. Covering Kubernetes, service discovery, orchestration, and many other related topics.
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
url_custom = [{name = "Podcast", url = "http://www.se-radio.net/2018/10/se-radio-episode-341-michael-hausenblas-on-container-networking/"}, {name = "Direct Download", url = "http://traffic.libsyn.com/seradio/342-hausenblas-final.mp3"}]

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

## Container Networking Stack

* What is container networking, and why do we need to network containers?
* Let’s talk a bit about what the networking stack is comprised of when it comes to containers. Can you explain briefly the three layers:
  * Low-level networking
  * Container networking
  * Container orchestration
* We talked a bit about how most networks today are becoming the responsibility of Software Engineers in show [#302 Network Security with Haroon Meer](/publication/ser-podcast-network-security). I also cover this in my book “[Cloud Security](/publication/cloud-security)”. Can you explain what Software-Defined Networking (SDN) is, and why Software Engineers need to understand it?

## Single-Host Container Networking

* There are four single host networking modes based on the four Linux kernel network namespace drivers.
  1. bridge
  2. host (faster, less secure)
  3. container
  4. none  
  Can you give us a description of these modes, what they give us, how they work, and where we would use each one?
* In terms of allocating IP addresses, the bridge mode mostly takes care of this, what about the other modes?
* In terms of managing ports, we have fixed and dynamic port allocation. How do each of these work, and in which cases would we use each one?
* There are quite a few things to consider in terms of network security with Docker containers. By default, containers on the same host can communicate with each other due to `--icc=true` which means comms work by default, but there are risks that need to be considered. What are these risks, and how do Engineers mitigate them?
* If one container gets compromised, it could potentially access other containers on the host and compromise them also. What else do we need to be thinking about in order to provide solid configuration and mitigation?

## Multi-Host Container Networking

* We’re going to dive into the section within your book on Multi-Host Container Networking now, just before we do, can you give a quick explanation of what IpTables is?
* According to the Docker networking communication docs:
  * With the section on _Communicating to the outside world_ stating _Docker’s forward rules permit all external source IPs by default_. So by default, any interface outside of the host can access the hosts container
  * Then the section on _Container communication between hosts_ states _Docker sets the default policy of the iptables FORWARD chain to DROP_, so a host receiving comms from the outside does not by default forward them on to the hosts container  
  Can you explain what actually happens here? What are the actual defaults with inter-host comms of containers, how when and why should Engineers go about changing this?
* What is an overlay network?
* What does Dockers support for overlay networks look like?
* How do you go about creating an overlay network?
* What’s the difference between an overlay network and a swarm?
* How do we encrypt traffic between all containers on an overlay network?
`docker network create --opt encrypted --driver overlay`
* What are some of the network plugins Docker provides, and how do you use them?
* Can you give us a run-down on the following multi-host container networking options, along with their pros and cons:
  * Flannel by CoreOS
  * WeaveNet by Weaveworks
  * Project Calico by Metaswitch
  * Open vSwitch from the OpenStack project
  * OpenVpn
* What sort of issues arise out of IP address management and how are these addressed?

## Orchestration

* What is container orchestration, tell us a bit about the different roles involved?
  * organisational primitives
  * Scheduling
  * Automated health checks
  * Autoscaling
  * upgrade strategies
  * service discovery
* What are the main players/products in container orchestration, and what platforms do they run on?
* What are the organisational primitives that exist, what are they used for and responsible for?

### Kubernetes Networking

* Give us a rundown on what Kubernetes is, and what the problem is that it’s trying to solve?
* What are the main components in Kubernetes, and what are they responsible for?
* Give us a bit of an overview of Kubernetes networking?
Containers can communicate with all other containers without NAT
Nodes can communicate with all containers (and vice versa) without NAT
The IP a container sees itself is the same IP as others see it
* Tell us a bit about how Kubernetes does:  
Intra-pod networking (container mode networking (all containers share the same IP), isn’t this a security flaw?)  
Inter-pod networking  
Ingress and egress
* What are the different options for service discovery in Kubernetes?
* Tell us a bit about how service meshes work in Kubernetes?

## Service Discovery

* In terms of registering a container, what happens when the scheduler dies and the registered containers keep running, essentially the containers are now running rogue?
* There are a few service discovery tools listed in your book Container Networking, such as ZooKeeper, etcd, Consul and a couple of others. Do the orchestrator solutions not have their own service discovery tools?
* Tell us a bit about the service discovery solutions available, where they shine, and not so much?
* You also mention a collection of load balancing tools in your book, do the orchestration solutions not have their own integrated load balancers, and if not, how do you go about integrating a load balancer?

## Container Network Interface

* Tell us a bit about the Container Network Interface (CNI), Docker’s libnetwork and how they differ?
* What are some of the CNI plugins and what are they responsible for?
