+++
date = 2017-10-02
lastmod = 2017-10-02
draft = false
tags = ["cloud", "security"]
title = "The Cloud Shared Responsibility Model"
math = true

# Slug is required for counting comments.
#slug = "the-cloud-shared-responsibility-model"

summary = """
The shared responsibility model is one that many have not grasped or understood well. Let’s look at the responsibilities of the parties.
"""

[header]
#image = "headers/getting-started.png"
#caption = "Image credit: [**Academic**](https://github.com/gcushen/hugo-academic/)"

+++

## Risks

The shared responsibility model is one that many have not grasped or understood well. Let’s look at the responsibilities of the parties.

#### CSP Responsibility

The CSP takes care of the infrastructure, not the customer specific configuration of it, and Due to the shear scale of what they are building, are able to build in good security controls, in contrast to the average system administrator, which just does not have the resources or ability to focus on security to the same degree.

Due to the share scale, the average CSP has a concentrated group of good security professionals vs a business who’s core business is often not closely related to security. So CSPs do provide good security mechanisms, but the customer has to know and care enough to use them.

CSPs creating the infrastructural architecture, building the components, frameworks, hardware, platform software in most cases are taking security seriously and doing a reasonable job.

#### CSP Customer Responsibility

CSP customers are expected to take care of their own security in terms of:

1. Their people working with the technology
2. [Application security](http://f1.holisticinfosecforwebdevelopers.com/chap06.html#web-applications), ultimately leading back to shortcomings in people: Lack of skills, experience, engagement, etc.
3. Configuring the infrastructure and/or platform components: Again leading back to people defects

but all to often the customers responsibility is neglected, which renders The Cloud no better for the customer in terms of security.

> The primary problem with The Cloud is: Customers have the misconception that someone else is taking care of all their security. That is not how the shared responsibility model works though. Yes the CSP is probably taking care of the infrastructure security, but other forms of security such as I just listed above, are even more important than before the shift to The Cloud, this is because these items are now the lowest hanging fruit for the attacker.

The following are a set of questions (verbatim) I have been asked recently, and that I hear similar versions of frequently:

* _As a software engineer, do I really care about physical network security and network logging?_
* _Surely “as a software engineer”, I can just use TLS and that is the end of it?_
* _Well if the machine is compromised, then we give up on security, we aren’t responsible for the network_
* _What is the difference between application security and network security? Aren’t they just two aspects of the same thing?_
* _If I have implemented TLS for communication, have I fixed all of the network security problems?_

## Countermeasures

The following responsibilities are those that you need to have a good understanding of in order to establish a good level of security when operating in The Cloud.

#### CSP Responsibility

There is not a lot you can do about this, just be aware of what you are buying into before you do so. [AWS for example](https://aws.amazon.com/compliance/shared-responsibility-model/) states: "_Customers retain control of what security they choose to implement to protect their own content, platform, applications, systems and networks, **no differently than they would for applications in an on-site** datacenter._"

#### CSP Customer Responsibility

If you leverage The Cloud, Make sure the following aspects of security are all at an excellent level:

1. People security: Discussed in Fascicle 0 under the People chapter
2. [Application security](http://f1.holisticinfosecforwebdevelopers.com/chap06.html#web-applications): Discussed in the Web Applications chapter. The move to application security was also [discussed](http://f1.holisticinfosecforwebdevelopers.com/chap03.html#vps-countermeasures-docker-application-security) in the VPS chapter as a response of using Docker containers
3. Configuring the infrastructure and/or platform components: Usually CSP specific, but I cover some aspects in this chapter

The following is in response to the set of frequently asked questions under the [risks subsection](#shared-responsibility-model-risks) of CSP Customer Responsibility:

* **(Q)**: _As a software engineer, do I really care about physical network security and network logging?_   
**(A)**: In the past, many aspects of [network security](http://f1.holisticinfosecforwebdevelopers.com/chap04.html#network) were the responsibility of the Network Administrators, with the move to The Cloud, this has to large degree changed. The networks established (intentionally or not) between the components we are leveraging and creating in The Cloud are a result of Infrastructure and Configuration Management, often (and rightly so) exp3ressed as code. Infrastructure as Code (IaC). As discussed in the [Network Security](http://f1.holisticinfosecforwebdevelopers.com/chap04.html#leanpub-auto-ssm-identify-risks-1) subsection, this is now the responsibility of the Software Engineer
* **(Q)**: _Surely “as a software engineer”, I can just use TLS and that is the end of it?_  
 **(A)**: TLS is one very small area of network security. Its implementation as HTTPS and the PKI model is effectively [broken](http://f1.holisticinfosecforwebdevelopers.com/chap04.html#network-identify-risks-tls-downgrade). If TLS is your only saviour, putting it bluntly, you are without hope. The [Network Chapter](http://f1.holisticinfosecforwebdevelopers.com/chap04.html#network) covers the tip of the network security ice berg, network security is a huge topic, and one that has many books written along with other resources that provide more in-depth coverage than I can provide as part of a holistic view of security for Software Engineers. Software Engineers must come to grips with the fact that they need to implement defence in depth
* **(Q)**: _Well if the machine is compromised, then we give up on security, we aren’t responsible for the network_  
**(A)**: For this statement, please refer to the [VPS](http://f1.holisticinfosecforwebdevelopers.com/chap03.html#vps) chapter for your responsibilities as a Software Engineer in regards to “the machine”. In regards to “the network”, please refer to the [Network Security](http://f1.holisticinfosecforwebdevelopers.com/chap04.html#leanpub-auto-ssm-identify-risks-1) subsection
* **(Q)**: _What is the difference between application security and network security? Aren’t they just two aspects of the same thing?_  
**(A)**: No, for application security, see the [Web Applications](http://f1.holisticinfosecforwebdevelopers.com/chap06.html#web-applications) chapter. For network security, see the [Network](http://f1.holisticinfosecforwebdevelopers.com/chap04.html#network) chapter. Again, as Software Engineers, you are now responsible for all aspects of information security
* **(Q)**: _If I have implemented TLS for communication, have I fixed all of the network security problems?_  
**(A)**: If you are still reading this, I’m pretty sure you know the answer, please share it with other Developers, Engineers as you receive the same questions
