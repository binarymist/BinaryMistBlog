+++
title = "Haroon Meer on Network Security"
date = "2017-09-12"

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
publication = "*Software Engineering Radio (SER)* Episode 302, IEEE."
publication_short = "SER Podcast 302"

# Abstract and optional shortened version.
abstract = "Founder of Thinkst, Haroon Meer talks with Kim Carter about network security. Topics include how attackers are gaining footholds into our networks, moving laterally, infilling malware and exfilling our precious data; why we care; and clear advice on what we software engineers can do about it. Areas of information security are merging, network security is now the responsibility of the software engineer, as we create networks via Infrastructure as Code (IaC). Attackers are still using the simplest strategies to gain footholds, such as social engineering and password reuse. Kim and Haroon discuss how most attacks still leverage people inside an organization — whether intentionally or inadvertently assisting – and techniques of post exploitation, and how software engineers can help slow down such attacks."
abstract_short = ""

tags = ["publication", "podcast", "application-security", "hacking", "cybersecurity", "arp-poisoning", "arp-spoof", "security", "information-security", "infosec", "hids", "hips", "ips", "networking", "network-security", "nids", "nips", "penetration-testing", "software-security", "sql-injection", "web-application-security", "web-security"]

summary = """
Haroon Meer talks with Kim Carter about network security on Software Engineering Radio.
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
url_custom = [{name = "Podcast", url = "http://www.se-radio.net/2017/09/se-radio-episode-302-haroon-meer-on-network-security/"}, {name = "Direct Download", url = "http://traffic.libsyn.com/seradio/SE-Radio-Episode-302-Haroon-Meer-on-Network-Security.mp3?_=1"}, {name = "Source Chapter", url = "https://f1.holisticinfosecforwebdevelopers.com/chap04.html#network"}]

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

* What is [network security](https://f1.holisticinfosecforwebdevelopers.com/chap04.html#network)? What is application security?
* Just as with any other form of security, the first thing we need to think about is, what’s valuable to us in regards to network security, what are we attempting to protect and why?
* One of the comments I received recently was “[as a software engineer, do I really care about physical network security](https://f1.holisticinfosecforwebdevelopers.com/chap05.html#cloud-countermeasures-shared-responsibility-model-csp-customer-responsibility)” Why should Software Engineers care?
* What’s changed with computer network security over the last five to ten years?
* Has this shifted the reliance that your average attacker used to have on network security exploitation skills to other areas such as cloud services, application security, and of course people, and how so?
* According to FBI investigators, the likely avenue of infiltration of the Yahoo internal network was with a spear phishing email to a semi-privileged unsuspecting/inadvertent Yahoo employee.
The successful spear phish allowed the attackers direct access to Yahoo's internal network…
What are your thoughts about the fact that the attacker just about always still needs a network in order to access their target, whether the initial foothold be [physical](https://f0.holisticinfosecforwebdevelopers.com/chap07.html#physical), [people](https://f0.holisticinfosecforwebdevelopers.com/chap08.html#people), [VPS](https://f1.holisticinfosecforwebdevelopers.com/chap03.html#vps)s, [network](https://f1.holisticinfosecforwebdevelopers.com/chap04.html#network) components, [cloud](/publication/cloud-security/) resources, [mobile or IoT](https://f2.holisticinfosecforwebdevelopers.com/) devices?
* In high security environments, unlike Yahoo, what I’ve found is that many of the common application security defects and attacks don’t work, and the attacker has to resort to attacking hosts, networks, physical premises and of course people, as in social engineering them. Can you explain your experience around how high security environments differ from the average or low security environments?
* What do Software Engineers now need to understanding about computer network technologies in order to mitigate attackers using them as a channel to assist exploiting areas of a business and gaining access to their assets?

## [Risks](https://f1.holisticinfosecforwebdevelopers.com/chap04.html#leanpub-auto-ssm-identify-risks-1)

Let’s talk about some of the ways an attacker can get access to an organisation’s prized possessions.

### [Fortress / Candy Bar Mentality](https://f1.holisticinfosecforwebdevelopers.com/chap04.html#network-identify-risks-fortress-mentality)

Let’s discuss the Fortress or Candy Bar mentality.

* This is where organisations believe that all of their attackers are on the outside of the organisation, and those on the inside are trustworthy. What are your thoughts around this?

> IBM X-Force - Cyber Security Intelligence Index researches a large number of organisations each year, and they’ve extracted some interesting data:
> 
> 2014
> 
> * 55% of all attacks were carried out by insiders
> * 31.5% were malicious inside actors
> * 23.5% were inadvertent inside actors
> 
> 2015
> 
> * 60% of all attacks were carried out by insiders
> * 44.5% were malicious inside actors
> * 15.5% were inadvertent inside actors
> 
> 2016
> 
> * 30% of all attacks were carried out by insiders
> * 7% were malicious inside actors
> * 23% were inadvertent inside actors

* The Yahoo data breach and many others every day confirm that a large percentage of all security breaches come from within the organisations walls…  
  Do you think that this is an indicator that our workers are succumbing to an increased number of social engineering attacks by outside attackers attempting to get their payloads inside the organisation’s networks?
* What are your thoughts around establishing a [perimeterless network](https://www.theregister.co.uk/2016/04/06/googles_beyondcorp_security_policy/) culture, where all components are treated as though they are directly accessible from the Internet?
* How do we go about achieving this
* For our listeners, can you define what command and control is?
* How do we stop insiders and outsiders connecting to our network access points and proliferating malware, C2 (define C2) clients, etc onto our corporate networks?
* How can we stop our transient staff from picking up malware at home or on the road and then propagating it on our corporate networks?

### [Segmentation](https://f1.holisticinfosecforwebdevelopers.com/chap04.html#network-identify-risks-lack-of-segmentation)

Creating perimeterless networks can be evolutionary. Until we get to that point, segmentation can help us by allowing us to harden sections of our networks at a time. It also provides us with levels of isolation for critical services.

* Can you explain what network segmentation is, and what are some of the risks likely to occur if well thought out segmentation is not implemented?
* Apparently most of our IoT devices need to have internet access, one of the problems here is that there is little to no thought to building security into the components and the devices as a whole. How would we apply network segmentation to these devices, would it improve the security issues we have with IoT, if so, how?

### Visibility

* If you don’t have visibility as to what’s happening on your network at all levels, then chances are things are happening that you don’t want happening. There are known attacks that target each of the network layers. What are some of the attacks that we need visibility on?
* What are some of the techniques and practises for creating visibility on the different levels?
* Where aboustwhere can we set-up network logging?
* How do we make sure those logs are reliable and have not been tampered with?
* What are [NIDS](https://f1.holisticinfosecforwebdevelopers.com/chap04.html#leanpub-auto-lack-of-network-intrusion-detection-systems-nids), how do they work, [what do they give](https://f1.holisticinfosecforwebdevelopers.com/chap04.html#network-countermeasures-lack-of-visibility-nids) us in terms of visibility?
* Can you give an explanation of the differences between the signature-based and anomaly-based detection techniques? Maybe with some pros and cons of each?
* What are some of the well known NIDS?
* Where would I set a NIDS up?

### Spoofing

* Can you explain what spoofing is and how it works?
* What are the different types of spoofing attacks?  
  (IP, ARP, DNS, Referrer, EMail Address, Website)
* Often spoofing is used as a component to a larger attack, can you explain how it might fit into a larger attack?  
  (website spoof as part of a phish)
(ARP and DNS often combined with other spoofs)
* What are some of the countermeasures we could put in place to mitigate the different types of spoofing attacks?

### [Data Exfiltration, Infiltration](https://f1.holisticinfosecforwebdevelopers.com/chap04.html#network-identify-risks-data-exfiltration-infiltration)

What is data infiltration, exfiltration?

* What are some of the infiltration, exfiltration techniques and tools commonly used?  
  (Dropbox, physical, mobile phone data, DNS/SSH) 
* Let’s say you’re hired as a penetration tester to hack a security conscious organisation and steal their data, a bank for example. The organisation has no public internet facing application that has access to the internal organisations data. The only means of egress is via a very restrictive proxy. Assuming we know where the data is, how would we go about exfiltrating the data?  
  (DNS tunnelling)
* What are some of the countermeasures we could put in place to mitigate the different techniques for infiltration and exfiltration?
* What could Yahoo have done to:
  1. Slow down the exfiltration of 1 billion user accounts in 2013 & 500 million user accounts in 2014?
  2. Protect the secrets, namely MD5 passwords that were exfiltrated in 2013?

### [Trusting the Loading of Untrusted Web Resources](https://f1.holisticinfosecforwebdevelopers.com/chap04.html#network-identify-risks-wrongfully-trusting-the-loading-of-untrusted-web-resources)

* A very common technique for attackers wishing to get their malicious scripts into the end users browser is by intercepting the request and swapping parts of the response with their malicious scripts. What are some of the evils an attacker may be able to have executed in the end user’s browser?
* What are some countermeasures to help [stop the loading of untrusted web resources](https://f1.holisticinfosecforwebdevelopers.com/chap04.html#network-countermeasures-wrongfully-trusting-the-loading-of-untrusted-web-resources) and how do they work?  
  ([CSP](https://f1.holisticinfosecforwebdevelopers.com/chap04.html#network-countermeasures-wrongfully-trusting-the-loading-of-untrusted-web-resources-csp), [SRI](https://f1.holisticinfosecforwebdevelopers.com/chap04.html#network-countermeasures-wrongfully-trusting-the-loading-of-untrusted-web-resources-sri))

### [TLS Downgrade](https://f1.holisticinfosecforwebdevelopers.com/chap04.html#network-identify-risks-tls-downgrade)

* A fairly common attack with TLS is to attempt a downgrade, what is a TLS downgrade and how does it work?
* What are some of the mitigations available to help [stopping a downgrade](https://f1.holisticinfosecforwebdevelopers.com/chap04.html#network-countermeasures-tls-downgrade)?  
  ([HSTS](https://f1.holisticinfosecforwebdevelopers.com/chap04.html#network-countermeasures-tls-downgrade-hsts), [HSTS Preload](https://f1.holisticinfosecforwebdevelopers.com/chap04.html#network-countermeasures-tls-downgrade-hsts-preload))

### Shift from NetSec to [AppSec](https://f1.holisticinfosecforwebdevelopers.com/chap06.html#web-applications), CloudSec, SocEng

* The most effective targeted attack techniques today are still the simple [password stealing](https://f0.holisticinfosecforwebdevelopers.com/chap08.html#people-identify-risks-weak-password-strategies), [spear phishing](https://f0.holisticinfosecforwebdevelopers.com/chap08.html#people-identify-risks-spear-phishing) (as with Yahoo), web shells, social media and [weaponised documents](https://f1.holisticinfosecforwebdevelopers.com/chap03.html#vps-identify-risks-powershell-exploitation-via-office-documents-co-nishang). Most of which have a reliance on network vulnerabilities somewhere. What are the network security vulnerabilities that allow these types of attacks?
* Another incident that affected Yahoo involved the attackers forging cookies, rather than requiring passwords as a way to break into user accounts, 32 million user accounts were affected using this technique. This was due to the fact that the attacker had the cookie creation code that didn't even need a password, so this sounds like defective code? Application security?
* What other types of networks do you think we as Software Engineers should be concerned about in order to mitigate attacks via these mediums?

