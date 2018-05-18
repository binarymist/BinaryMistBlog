+++
title = "Scott Piper on Cloud Security"
date = "2018-01-16"

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
publication = "*Software Engineering Radio (SER)* Episode 314, IEEE."
publication_short = "SER Podcast 314"

# Abstract and optional shortened version.
abstract = "Founder of Summit Route / creator of [FLAWS,](http://flaws.cloud/) [Scott Piper](https://twitter.com/0xdabbad00) talks with Kim Carter about [Cloud Security](/tags/cloud-security/). Covering the often misunderstood [Shared Responsibility Model](https://f1.holisticinfosecforwebdevelopers.com/chap05.html#cloud-identify-risks-shared-responsibility-model). Kim and Scott discuss how our assets have changed, and what the risks and countermeasures are with the exodus to the Cloud. A selection of techniques are discussed on how we can evaluate the security stature of the different CSPs, along with tips for those evaluating whether to leverage in-house clouds or external Cloud services. Kim and Scott discuss the pros and cons of Cloud vs in-house Cloud and how to leverage CSPs security expertise. Scott walks us through his FLAWS CTF engine which helps Engineers understand the risks and how to apply mitigations to their AWS configuration. Coverage of tools such as Security Monkey and StreamAlert is also provided, to help Cloud customers quickly discover their own misconfigurations."
abstract_short = ""

tags = ["publication", "podcast", "cloud", "cloud-security", "information-security", "infosec", "security", "cybersecurity"]

summary = """
Founder of Summit Route / creator of FLAWS, Scott Piper talks with Kim Carter about Cloud Security on Software Engineering Radio.
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
url_custom = [{name = "Podcast", url = "http://www.se-radio.net/2018/01/se-radio-episode-314-scott-piper-on-cloud-security/"}, {name = "Direct Download", url = "http://traffic.libsyn.com/seradio/SE-Radio-Episode-314-Scott-Piper-on-Cloud-Security.mp3"}, {name = "Kim's Cloud Security Book", url = "publication/cloud-security/"}]

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
This show made it into the [VertitechIT list of Best IT Podcasts for 2018](https://www.vertitechit.com/best-it-podcasts/).  
This is the second show Kim has hosted that's made it into this list.
{{% /alert %}}

&nbsp;

# Show Outline

## Basic Questions

* When moving to the Cloud, our servers/compute, storage, and many other physical aspects have now become abstract concepts. As a Software Engineer, what thoughts do you have on how we need to change our approach to security when moving to the cloud?
* Can you explain what the [Shared Responsibility Model](https://f1.holisticinfosecforwebdevelopers.com/chap05.html#leanpub-auto-shared-responsibility-model) is, how it is supposed to work, and what sort of misconceptions are around it?
* In terms of the Shared Responsibility model, what aspects of security is the CSP (Cloud Service Provider) [responsible for](https://f1.holisticinfosecforwebdevelopers.com/chap05.html#leanpub-auto-csp-responsibility-1)?  
(CSP takes care of infrastructure, not customer specific config of it)  
(Due to scale of large CSPs, they should have good security resources)
* In terms of the Shared Responsibility model, what is the [customer responsible for](https://f1.holisticinfosecforwebdevelopers.com/chap05.html#cloud-countermeasures-shared-responsibility-model-csp-customer-responsibility)?  
(Their people -> AppSec -> configuring their infrastructure, using CSPs security features, concrete example of which security features we can use?)
* What do you see as our highest risks in handing everything over to CSPs?
(fully understanding the Shared Responsibility Mode, people security (ignorance), application security ([appsec with Zane Lackey #309](/publication/ser-podcast-application-security/)), misconfiguration)

## [Assets](https://f1.holisticinfosecforwebdevelopers.com/chap05.html#leanpub-auto-ssm-asset-identification-1)

* Has what we are trying to protect as Software Engineers and the organisations we work for changed much from the exodus of on-premise to The Cloud and how so?
* How do we need to adjust our thinking so that our security focus is in the right areas, and how should our focus have changed?
* What are the benefits of cloud computing, what are our assets we need to consider when threat modelling The Cloud and the suitability of various providers?  
(productivity, competitive advantage, control, customer data, reputation)

## [Risks](https://f1.holisticinfosecforwebdevelopers.com/chap05.html#cloud-identify-risks) & [Countermeasures](https://f1.holisticinfosecforwebdevelopers.com/chap05.html#leanpub-auto-ssm-countermeasures)

* I often receive questions from Software Engineers like “[As a software engineer, do I really care about network security](https://f1.holisticinfosecforwebdevelopers.com/chap05.html#cloud-countermeasures-shared-responsibility-model-csp-customer-responsibility)”. Network security used to be slightly less of an issue for Software Engineers than it is now, network security used to be primarily the Network Administrator's responsibility. Now that our infrastructure and networks are expressed by code, with infrastructure and configuration management tools such as: [Terraform](https://github.com/binarymist/aws-docker-host) (which we’ve had a show on #289 with James Turnbull)), Ansible, Docker and others. What are your thoughts around the responsibility of [network security](https://f1.holisticinfosecforwebdevelopers.com/chap04.html#network) now falling in the laps of Software Engineers?
* I work a lot with AWS, which provides a security abstraction model. We can create objects like:
  * VPC
  * Security groups and roles
  * Ingress and egress rules
  * Access control lists (ACLs)
  * Security roles attached to instances
  * Roles consisting of a set of profiles, etc
  

    Then we have another abstraction layer with tools such as terraform, which allow us to build these resources declaratively, rather than imperatively. This allows us to conceptualize and build what we want without understanding low level constructs such as firewalls (iptables), how to configure Cisco appliances, etc, and where to put these in our network topology. This dumbs down the skill set Software Engineers need. It also allows programmers to become network engineers in a sense. Do you see this as a step forward, or a step backward, or both?
    
<p>

* As customers of The Cloud, we have little visibility of the internal workings or implementations of the infrastructural abstractions provided to us. Trust is a core concept that we are yielding to our providers. All software has bugs, How can we be sure that our chosen CSP is fixing their bugs quickly and not exposing us to undue risk?
* Is catastrophic data loss more of an issue in the cloud than it was on-prem due to CSP customers just believing the CSP will take care of it and occasionally failing?

### [Evaluating CSPs](https://f1.holisticinfosecforwebdevelopers.com/chap05.html#cloud-identify-risks-csp-evaluation)

I want to talk a bit about how we can evaluate if using any given CSP is going to provide a high enough level of security for us and our customers...
We’re going to discuss techniques we can use to compare different CSPs offerings, and whether or not they’re fit for our purpose. Feel free to mention any you can think of as we work through the [following list](https://f1.holisticinfosecforwebdevelopers.com/chap05.html#cloud-countermeasures-csp-evaluation)...

* What are your thoughts on keeping signed audit logs on UIs and APIs  
(AWS has CloudTrail)?
* How many CSPs are [encrypting all comms](/publication/ser-podcast-end-to-end-encryption/) between servers and CSP components within their data centres and also their service providers?
* [What can we do](https://f1.holisticinfosecforwebdevelopers.com/chap05.html#cloud-countermeasures-csp-evaluation) to improve this situation?
* Are CSPs providing customers access to infrastructural logs, what does that access look like, and how much is filtered before we get our hands on them?
* What happens with our data when we terminate our accounts with our provider or migrate to other providers?
* Do we know where our services and data physically reside, In many cases CSPs are outsourcing their outsourced services to several providers deep. They do not even have visibility themselves. Often the data is hosted in other jurisdictions. What can we do about this? More crypto, then it doesn’t matter?
* Do we know who can view the data we store in the cloud (CSP employees), What checks and controls do the major CSPs have in place to make sure that this data can not be read or [exfiltrated](https://f1.holisticinfosecforwebdevelopers.com/chap04.html#network-identify-risks-data-exfiltration-infiltration)?
* How many CSPs allow customers to carry out regular [penetration testing](https://f0.holisticinfosecforwebdevelopers.com/chap06.html#process-and-practises-penetration-testing) of production and/or test environments?
* What are your thoughts on whether CSPs should run bug bounty programs?
* Are any CSPs standing out that you think are doing a decent job of their responsibilities, and helping potential customers understand where the lines of separation are in terms of the Shared Responsibility Model?

### [CSP vs In-house](https://f1.holisticinfosecforwebdevelopers.com/chap05.html#cloud-identify-risks-cloud-service-provider-vs-in-house)

* What are some of the aspects that are more secure in The Cloud than In-House?
* CSPs are tasked with taking care of aspects such as:
  * General infrastructure
  * Hardware
  * Hosting
  * Continuously hardening components and infrastructure
  * Patching components only visible to the CSP
  * Network firewall routes and rules of the CSPs core infrastructure
  * [Network component logging](https://f1.holisticinfosecforwebdevelopers.com/chap04.html#network-countermeasures-lack-of-visibility-insufficient-logging)
  * [NIDS](https://f1.holisticinfosecforwebdevelopers.com/chap04.html#network-countermeasures-lack-of-visibility-nids)
  * Regular penetration testing
  
  
    Do those organisations contemplating In-house Cloud solutions need to consider all of these aspects?

<p>

* Any thoughts on how we can raise awareness on how the security dynamics change from self-hosting to all in “the Cloud”? What else do people need to think about, evaluate?
* How can we be better prepared for CSPs being [forced to give up](https://f1.holisticinfosecforwebdevelopers.com/chap05.html#leanpub-auto-giving-up-secrets) our and our customers data to governing authorities and others without our permission or even knowledge in many cases? Does this just come down to using more crypto? What else can we do?
* On the topic of crypto, where do you see the government crusade against end-to-end encryption leading?
* What are your thoughts, as in costs and benefits around vendor lock-in in regards to leveraging the proprietary services and offerings of individual CSPs?

### Other Risks

* CSPs provide many security enhancing services and features, most of which I see Software Developers and people above them in the org chart think of as inconveniences. How can we encourage Developers and others to use the security features? More security by default? Other ideas?  
(culprits: [single user root](https://f1.holisticinfosecforwebdevelopers.com/chap05.html#leanpub-auto-machine-instance-single-user-root), [least privilege violations](https://f1.holisticinfosecforwebdevelopers.com/chap05.html#cloud-countermeasures-violations-of-least-privilege), [storage of secrets](https://f1.holisticinfosecforwebdevelopers.com/chap05.html#cloud-countermeasures-storage-of-secrets) - [private key abuse](https://f1.holisticinfosecforwebdevelopers.com/chap05.html#leanpub-auto-private-key-abuse-1) - [credential sharing](https://f1.holisticinfosecforwebdevelopers.com/chap05.html#cloud-countermeasures-storage-of-secrets-credentials-and-other-secrets))
* Any thoughts or security concerns around [Serverless technologies](https://f1.holisticinfosecforwebdevelopers.com/chap05.html#cloud-countermeasures-serverless) that “look” new, or that as Software Engineers we need to be thinking about?

## Countermeasures - Take Aways

* You created [FLAWS.cloud](http://flaws.cloud/) as a free online CTF/tutorial to help recognise common misconfigurations and gotchas in AWS. Can you talk a little bit about this?
* You were on the Purple Squad Security podcast recently discussing “Detecting Intruders on AWS”. Can you give us a bit of a rundown on what was discussed?
* You also wrote an article recently on “Potential Gaps in Suggested Amazon Web Services’ Security Policies for MFA” What goodness do you have to share with our listeners from this?
* I know of and documented [Security Monkey](https://f1.holisticinfosecforwebdevelopers.com/chap05.html#cloud-countermeasures-aws-additional-tooling) in the cloud chapter of my second book, for the listeners, can you talk a bit about this and also Airbnb’s StreamAlert?
* How can Software Engineers help to educate the C levels of the perils often not realised with the exodus to The Cloud, along with the considerations and countermeasures to establish a somewhat secure working environment, other than listening to today's show?
* If there was only one piece of advice you could offer our Software Engineers today to help lift the security bar within their personal lives and the organisations they work within, what would it be?
