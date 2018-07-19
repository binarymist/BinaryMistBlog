+++
title = "Natalie Silvanovich on Attack Surface Reduction"
date = "2018-07-17"
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
publication = "*Software Engineering Radio (SER)* Episode 330, IEEE."
publication_short = "SER Podcast 330"

# Abstract and optional shortened version.
abstract = "[Natalie Silvanovich](https://twitter.com/natashenka) from Google [Project Zero](https://googleprojectzero.blogspot.co.nz/) talks with Kim Carter about what attack surface is in regards to software, how to identify risks and reduce the attack surface of the software you as a Software Engineer are creating. Natalie found over a hundred zero day security defects in [Flash](https://www.blackhat.com/docs/us-16/materials/us-16-Silvanovich-The-Year-In-Flash.pdf) in her first year at Google, and discusses the risks and countermeasures around code sharing, third-party code, and techniques for identifying code libraries that are more likely to have security defects. Along with Developer workflow, post mortems are also carried out on a collection of zero day bugs in well known software."
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
url_custom = [{name = "Podcast", url = "http://www.se-radio.net/2018/07/se-radio-episode-330-natalie-silvanovich-on-attack-surface-reduction/"}, {name = "Direct Download", url = "http://traffic.libsyn.com/seradio/SE-Radio-Episode-330-Natalie-Silvanovich-on-Attack-Surface-Reduction.mp3"}]

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

## Developers - Current State

* Can you explain how you are “significantly reducing the number of people harmed by targeted attacks” when any number of bugs that the [Project Zero](https://bugs.chromium.org/p/project-zero/issues/list?can=1&redir=1) team identifies appear to be completely swamped by the continual onslaught of Developers continuing to create security defects in just about everything produced?  
(Because you focus on the most heavily used software)
* There was a post on the [NPM blog](http://blog.npmjs.org/post/172774747080/attitudes-to-security-in-the-javascript-community) recently called: “Attitudes to security in the JavaScript community” in which 87% of respondents said they were concerned with the security of the code they wrote themselves, compared to only 77% saying the same about open source. This to me sounds like the wakeup call the security community has been pushing for years is starting to be heard.
  * What are your thoughts on these statistics, do they sound realistic, are you noticing a similar trend in Developers taking security more seriously?
  * What’s your experience and/or thoughts on where the level of security defects are in JavaScript compared to other languages and their environments?  
  What are your thoughts on these statistics and how can we continue to improve them?
* How do we go about considering the security impact of features at design time? Do we need a Red Teamer as part of the Development Team to help drive out defects before we introduce them?

## Code Sharing

* You mentioned in your “Small is Beautiful” talk that using the same code for multiple purposes can expose it to new and unnecessary attack vectors. While I believe this to be true, code sharing can be a good thing in terms of productivity. High fan in on pieces of code has been an aim of the Development community for a long time. What are your thoughts on rather than telling Developers not to re-use code, we should be trying to help them create more secure pieces of code that can be consumed?
* You also mentioned that multiple copies of the same code can be difficult to maintain. I’ve noticed with microservices becoming more popular, this seems to be happening more. Do you have any advice other than pulling the common code out into a separate package and consuming as a library?
* Can you tell us about the Android WebView issues where several Android features contained their own version of WebView, bugs were fixed in one version but not another, then they unified WebView?

## Third-party Code

I discuss this in depth in the [Web Applications](https://f1.holisticinfosecforwebdevelopers.com/chap06.html#web-applications) chapter of my book [Fascicle 1](https://f1.holisticinfosecforwebdevelopers.com/) of [Holistic Info-Sec for Web Developers](https://holisticinfosecforwebdevelopers.com/)  
([risks](https://f1.holisticinfosecforwebdevelopers.com/chap06.html#web-applications-identify-risks-consuming-free-and-open-source), [countermeasures](https://f1.holisticinfosecforwebdevelopers.com/chap06.html#web-applications-countermeasures-consuming-free-and-open-source))

* In your “Small is Beautiful” talk, you mention:
  1. That we should “make sure each attack surface only supports needed features”
  2. “Avoid multiple copies of the same library”  
  
    These are both concepts that the Node Package Management ecosystem at least violates. Developers consume vast numbers of packages, even in small projects, often consuming a package to use only one of many features consumed. Firstly, for our listeners, explain what the problem is here?

<p>

* Where is the point where you would write something yourself as opposed to consume?
* You’ve also mentioned tracking third-party software use and having an internal process for use, which I’ve also discussed in my previously mentioned book. Can you explain how you would do this?
* As we’re on the topic of third-party code management, can you tell us about the example of CVE-2916-4117, that’s the remote code execution in the FireEye Malware Protection System?
* Are there tools that you would like to see automated as part of our DevSecOps process that you think would help the third-party code problems?
* Are smaller packages the answer? If so, do we have the package management systems capable of managing very small packages? I mean, how would discoverability work, it’s hard enough now trying to find the most suitable package out of 10 that all do the same thing right?
* I’m thinking of your “a puppy is forever slide” in your Small is Beautiful talk... Currently if we depend on a package that the maintainer isn’t keeping patched, we need to fork and maintain it ourselves. Where do you see this ending up?
* a) Node Security Project (NSP) was acquired by NPM on April 10  
b) Github is now providing visibility into the dependencies of their users repos and alerting on known security issues if they have a Common Vulnerability Exposure (CVE)  
c) Snyke Provides something similar, but they’ve been doing this for much longer than Github and know of many more issues.
  * What are your thoughts on how the open source ecosystem is progressing in terms of creating visibility around defective code?
  * How can we do better?

## Developer Workflow

* In your “Small is Beautiful” talk you mentioned that excessive SKUs and branching:
  1. Make it harder to push security updates
  2. Can introduce bugs
  3. Can cause incomplete patching  
  
    While I think few would disagree with this, a well defined and sometimes elaborate branching scheme is necessary for large groups of Software Engineers all collaborating on the same code base. Can you define excessive in this context?

<p>

* Can you talk a bit about CVE-2017-0528, that’s the merge error in Android reducing ASLR bits, what happened with this and what were the lessons that were learnt?
* Before the show you mentioned you also had some anonymised examples of bugs:
  * Where a vendor failed to patch a security issue due to a complex branching and build system, and their patches were also taking a long time due to this?
* How would you propose minimal SKUs and branches in a large project where say 100 Engineers are working on the same project?
* You’ve talked a bit about:
  * Pruning trees regularly
  * Making sure all code has an owner  
  
    Can you explain what you mean by this?
* What recommendations do you have for reducing the chances of introducing defects due to branching and merging?

## Defects

* Can you tell us a bit about the Samsung image processing defect (CVE-2015-7894), that’s the one where the very old QJpeg library was added to parse the android splash images, but it was somehow added to the Android image subsystem, so that all images from a low privileged user are parsed?
* Let’s talk about CVE-2017-3558, that’s the Memory corruption issue in VirtualBox, allowing guest-to-host escalation. You mentioned this was due to old code not being fully removed? It was fixed upstream, but not downstream? Can you talk a bit about this?
* What could have been done so that this never happened?
* CVE-2015-7894, that’s the 7 memory corruption issues in Samsung S6 Edge image processing. This was due to old / no longer used code being left in the system? Can you talk a bit about this one?
  * What could have been done so that this never happened?

You mentioned that the following bugs were in the JavaScript engines, not the language JavaScript:

* Can you tell us about the [Array.species](https://www.blackhat.com/docs/us-17/thursday/us-17-Silvanovich-The-Origin-Of-Array-Symbol-Species.pdf) bug (CVE-2016-7200), the issue with Array.filter in MS Edge?
* What was the Array index accessor bug (CVE-2017-2447) in Safari’s Function.bind?
* What about the TypedArray.sort defect in MS Edge (CVE-2016-7288)
* You mentioned in one of your talks that standards can lead to security issues, can you explain what you meant by that?

