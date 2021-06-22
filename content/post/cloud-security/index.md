+++
date = 2018-04-28
lastmod = 2018-04-28
draft = false
tags = ["application-security", "book", "cloud", "cloud-security", "cybersecurity", "dev-ops", "dev-sec-ops", "information-security", "infosec", "networking", "network-security", "security", "security-weaknesses", "serverless", "software-security"]
title = "Cloud Security"
math = true
# By default the submission of new comments is enabled.
#comments = true

summary = """
Discussion about Kim's new book on Cloud Security, some of the content, and links to other useful resources around securing your Cloud environments.
"""

# Authors. Comma separated list, e.g. `["Bob Smith", "David Jones"]`.
authors = ["Admin"]

links = [{icon = "twitter", icon_pack = "fab", name = "Follow", url = "https://twitter.com/binarymist"}]

[header]
#image = "headers/getting-started.png"
#caption = "Image credit: [**Academic**](https://github.com/gcushen/hugo-academic/)"

+++

Following on from last months news of my new [Docker Security - Quick Reference](/blog/2018/03/31/docker-security/) book, I bring you [Cloud Security - Quick Reference](/publication/cloud-security/).

This book is purposed to help Software Developers/DevOps Engineers, and also the likes of Product Owner and Product Manager types gain a good understanding of the risks and countermeasures when dealing with Cloud Service Providers (CSPs) and your environments within.

There are quite a few anecdotes based on my own experience consulting for organisations navigating the perils of the many Cloud environments available today, along with tips, tricks, tools, advice, and implementation details from many client lessons learnt the hard way.

Also be sure to have a listen to the show on [Cloud Security](/publication/ser-podcast-cloud-security/) I recorded with Scott Piper (AWS Cloud Specialist) as guest for [Software Engineering Radio](http://www.se-radio.net/team/kim-carter/).

The following is a snapshot of what you can expect inside of the book, laid out in the Sensible Security Model (SSM) threat modelling approach:

1. Asset Identification
2. Identify Risks
3. Countermeasures
4. Risks that Solution Causes
5. Costs and Trade-offs

[{{< figure src="publication/title_page_cloud-security_720.jpg" alt="Cloud Security - Quick Reference" >}}](/publication/cloud-security/)

<div style="display: table;">

1      | Asset Identification
-------|--------
       | Productivity
       | Competitive Advantage
       | Control
       | Data
**2**  | **Identify Risks**
       | **[Shared Responsibility Model](#cloud-identify-risks-shared-responsibility-model) :star:**
       | --- **[CSP Responsibility](#cloud-identify-risks-shared-responsibility-model-csp-responsibility) :star:**
       | --- **[CSP Customer Responsibility](#cloud-identify-risks-shared-responsibility-model-csp-customer-responsibility) :star:**
       | **[CSP Evaluation](#cloud-identify-risks-csp-evaluation) :star:**
       | Cloud Service Provider vs In-house
       | --- Skills
       | --- EULA
       | --- Giving up Secrets
       | --- Location of Data
       | --- Vendor lock-in
       | --- Possible Single Points of Failure
       | Review Other Chapters
       | People
       | Application Security
       | Network Security
       | Violations of Least Privilege
       | --- Machine Instance Single User Root
       | --- CSP Account Single User Root
       | Storage of Secrets
       | --- Private Key Abuse
       | ------ **[SSH](#cloud-identify-risks-storage-of-secrets-private-key-abuse-ssh) :star:**
       | ------ **[TLS](#cloud-identify-risks-storage-of-secrets-private-key-abuse-tls) :star:**
       | --- Credentials and Other Secrets
       | ------ Entered by People (manually)
       | ------ Entered by Software (automatically)
       | Serverless
       | --- Third Party Services
       | --- Perimeterless
       | --- Functions
       | --- DoS of Lambda Functions
       | Infrastructure and Configuration Management
       | AWS
       | --- Password-less sudo
**3**  | **Countermeasures**
       | Shared Responsibility Model
       | --- CSP Responsibility
       | --- CSP Customer Responsibility
       | CSP Evaluation (Includes Answers)
       | Cloud Service Provider vs In-house
       | --- Skills
       | --- EULA
       | --- Giving up Secrets
       | --- Location of Data
       | --- Vendor lock-in
       | --- Possible Single Points of Failure
       | Review Other Chapters
       | People
       | Application Security
       | Network Security
       | **[Violations of Least Privilege](#cloud-countermeasures-violations-of-least-privilege) :star:**
       | --- **[Machine Instance Single User Root](#cloud-countermeasures-violations-of-least-privilege-machine-instance-single-user-root) :star:**
       | --- **[CSP Account Single User Root](#cloud-countermeasures-violations-of-least-privilege-csp-account-single-user-root) :star:**
       | Storage of Secrets
       | --- Private Key Abuse
       | ------ **[SSH](#cloud-countermeasures-storage-of-secrets-private-key-abuse-ssh) :star:**
       | ------ **[TLS](#cloud-countermeasures-storage-of-secrets-private-key-abuse-tls) :star:**
       | --- Credentials and Other Secrets
       | ------ **[Entered by People (manually)](#cloud-countermeasures-storage-of-secrets-credentials-and-other-secrets-entered-by-people-manually) :star:**
       | ------ **[Entered by Software (automatically)](#cloud-countermeasures-storage-of-secrets-credentials-and-other-secrets-entered-by-software) :star:**
       | Serverless
       | --- Third Party Services
       | --- Perimeterless
       | --- Functions
       | --- DoS of Lambda Functions
       | --- Centralised logging of AWS Lambda Functions
       | --- Frameworks
       | Infrastructure and Configuration Management
       | AWS
       | --- Password-less sudo
       | --- **[Additional Tooling](#cloud-countermeasures-aws-additional-tooling) :star:**
**4**  | **Risks that Solution Causes**
       | Shared Responsibility Model
       | CSP Evaluation
       | Cloud Service Provider vs In-house
       | People
       | Application Security
       | Network Security
       | Violations of Least Privilege
       | Storage of Secrets
       | --- Private Key Abuse
       | ------ SSH
       | ------ TLS
       | --- Credentials and Other Secrets
       | ------ Entered by People (manually)
       | ------ Entered by Software (automatically)
       | Serverless
       | --- Functions
       | --- DoS of Lambda Functions
       | --- Frameworks
       | Infrastructure and Configuration Management
       | AWS
       | --- Password-less sudo
**5**  | **Costs and Trade-offs**
       | Shared Responsibility Model
       | CSP Evaluation
       | Cloud Service Provider vs In-house
       | People
       | Application Security
       | Network Security
       | **[Violations of Least Privilege](#cloud-costs-and-trade-offs-violations-of-least-privilege) :star:**
       | Storage of Secrets
       | --- Private Key Abuse
       | ------ SSH
       | ------ TLS
       | --- Credentials and Other Secrets
       | ------ Entered by People (manually)
       | ------ Entered by Software (automatically)
       | Serverless
       | --- Functions
       | --- DoS of Lambda Functions
       | --- Frameworks
       | Infrastructure and Configuration Management
       | AWS
       | --- Password-less sudo

</div>

<br>

**:star:** I've provided a few of the sections from the book below, and linked to from the book contents above. Enjoy :smiley:

---

_Oh, and for less than the cost of a lunch you can own the complete book_

<a class="btn btn-outline-primary" href="https://leanpub.com/cloudsecurity-quickreference" target="_blank"><i class="fab fa-leanpub"></i> <b>Own The Book</b></a>

<br>

---

# Shared Responsibility Model {#cloud-identify-risks-shared-responsibility-model}

The shared responsibility model is one that many have not grasped or understood well. Let's look at the responsibilities of the parties involved.

## CSP Responsibility {#cloud-identify-risks-shared-responsibility-model-csp-responsibility}

The CSP takes care of the infrastructure, not the customer specific configuration of it. Due to the sheer scale of what they are building, the CSP is often able to build in good security controls, in contrast to the average system administrator, who has limited resources or ability to focus on security to the same degree.

Again, due to sheer scale, the average CSP has a concentrated group of good security professionals versus a business who's core focus is often not security related. CSPs provide good security mechanisms, but the customer has to know and care enough to use them.

CSPs who architect infrastructure, build components, frameworks, hardware, and platform software in most cases take security seriously and are doing a reasonable job.

## CSP Customer Responsibility {#cloud-identify-risks-shared-responsibility-model-csp-customer-responsibility}

CSP customers are expected to be responsible for their own security as it pertains to:

1. Their people working with the technology
2. [Application security](https://binarymist.io/tags/application-security/), specific to shortcomings in people: lack of skills, experience, engagement, etc.
3. Configuring the infrastructure and/or platform components, again referencing people defects

All too often the customer's responsibility is neglected, which renders the Cloud no better for the customer in terms of security.

> The primary problem with the Cloud is this: customers have the misconception that someone else is taking care of all their security. That is not how the shared responsibility model works though. Yes, the CSP is probably taking care of infrastructure security, but other forms of security as listed above are even more important than before the shift to the Cloud. These items are now the lowest hanging fruit for the attacker.

The following are a set of questions (verbatim) I have been asked recently, and that I hear similar versions of frequently:

* _As a software engineer, do I really care about physical network security and network logging?_
* _Surely "as a software engineer", I can just use TLS and that is the end of it?_
* _If the machine is compromised, do we give up on security because we aren't responsible for the network?_
* _What is the difference between application security and network security? Aren't they just two aspects of the same thing?_
* _If I have implemented TLS for communication, have I fixed all of the network security problems?_

# CSP Evaluation {#cloud-identify-risks-csp-evaluation}

CSPs are constantly changing their terms and conditions, as well as many other components and aspects of what they offer. I have compiled a set of must-answer questions to quiz your CSP with as part of your threat modelling before (or even after) you sign their service agreement.  
Most of these questions were already part of my [Cloud vs In-house talk](/event/saturn-2015-talk-does-your-cloud-solution-look-like-a-mushroom/) at the Saturn Architects conference I spoke at. I recommend using these as a basis for identifying risks that are important for you to consider. This should make you well armed to come up with countermeasures and think of any additional risks.

1. Do you keep a signed audit log of what actions users performed, and when, via UIs and APIs?  

    Both authorised and unauthorised users are more careful about the actions they take, or do not take, when they know their actions are being recorded and are potentially being watched  
   
2. How do you enact the shared responsibility model between CSPs and their customers? Please explain your role and my role in the protection of my and my customers data.  

    You will almost certainly not have complete control over the data you entrust to your CSP, but they will also not assume responsibility over the data you entrust to them, or how it is accessed. One example of this might be, how do you preserve secrecy for data at rest? For example, are you using the most suitable Key Derivation Function (KDF) as I discuss in depth in the [Web Applications chapter](https://f1.holisticinfosecforwebdevelopers.com/chap06.html#web-applications-countermeasures-data-store-compromise-which-kdf-to-use) of [Holistic Info-Sec for Web Developers, Fascicle 1](http://f1.holisticinfosecforwebdevelopers.com) and adjusting the number of iterations applied each year (as discussed in the [MembershipReboot](https://f1.holisticinfosecforwebdevelopers.com/chap06.html#web-applications-countermeasures-lack-of-authentication-authorisation-session-management-technology-and-design-decisions-membershipreboot) subsection of the [Web Applications chapter](https://f1.holisticinfosecforwebdevelopers.com/chap06.html#web-applications) of Holistic Info-Sec for Web Developers Fascicle 1) to the secrets stored in your data stores? The data you hand over to your CSP is no more secure than I discuss in the Management of Application Secrets subsections of the Web Applications chapter of Holistic Info-Sec for Web Developers Fascicle 1, and in many cases has the potential to be less secure for some of the following reasons:  
   
   * An often encountered false assumption is that somehow the data you provide is safer by default on your CSP's network
   * Your CSP can be forced by governing authorities to give up the data you entrust to them, as we discuss in the [Giving up Secrets](#cloud-identify-risks-cloud-service-provider-vs-in-house-giving-up-secrets) subsection  
   
3. Do you encrypt all communications between servers within your data centres as well as your service providers?  

    How is your data encrypted in transit (as discussed in the Management of Application Secrets subsections of the Web Applications chapter)? In reality, you have no idea what paths it will take once in your CSPs possession, and could very well be intercepted without your knowledge.  
   
   * You have little to no control over the network path that the data you provide will travel on
   * There are more parties involved in your CSPs infrastructure than on your own network  
   
4. Do you provide access to logs, if so, what sort of access, and to what sort of logs?  

    Hopefully you will have easy access to any and all logs, just as you would if it was your own network. That includes hosts, routing, firewall, and any other service logs  
   
5. What is your process around terminating my contract with you and/or moving to another CSP?  

    No CSP is going to last forever, termination or migration is inevitable, it is just a matter of when  
   
6. Where do your servers, processes and data reside physically?  

    As we discuss a little later in the Cloud Services Provider vs In-house subsection of Countermeasures, your data is governed by different people and jurisdictions depending on where it physically resides. CSPs have data centres in different countries and jurisdictions, each having different data security laws


7. Who can view the data I store in the Cloud?  

    Who has access to view this data? What checks and controls are in place to make sure that this data cannot be exfiltrated?  
   
8. What is your Service Level Agreement (SLA) for uptime?  

    Make sure you are aware of what the uptime promises mean in terms of real time. Some CSPs will allow 99.95% uptime if you are running on a single availability zone, but closer to 100% if you run on multiple availability zones. Some CSPs do not have a SLA at all.  

    CSPs will often provide credits for the downtime, but these credits in many cases may not cover the losses you encounter during high traffic events  
   
9. Are you ISO/IEC 27001:2013 Certified? If so, what is within its scope?  

    If the CSP can answer this with a "everything" and prove it, they have done a lot of work to make this possible. This shows a certain level of commitment to their security posture. Just be aware, as with any certification, it is just that, it doesn't necessarily prove sound security  
   
10. Do you allow your customers to carry out regular penetration testing of production and/or test environments, and allow the network to be in-scope?  
    
    CSPs that allow penetration testing of their environments demonstrate that they embrace transparency and openness. If their networks stand up to penetration tests they obviously take security seriously. Ideally, this is what you are looking for. CSPs that do not permit penetration testing of their environments are usually trying to hide something. It may be that they know they have major insecurities, or a skills shortage in terms of security professionals. Worse, they may be unaware of where their security stature lies and are not willing to have their faults demonstrated  
   
11. Do you have bug bounty programmes running, if so, what do they look like?  
    
    This is another example if their programme is run well, it conveys that the CSP is open and transparent about their security faults and are willing to mitigate them as soon as possible

&nbsp;

### SSH {#cloud-identify-risks-storage-of-secrets-private-key-abuse-ssh}

[SSH](https://f1.holisticinfosecforwebdevelopers.com/chap03.html#vps-countermeasures-disable-remove-services-harden-what-is-left-ssh) key-pair auth is no better than password auth if it is abused in the following way, in-fact it may even be worse. I have seen some organisations who store a single private key with no pass-phrase for all of their EC2 instances in their developer wiki. All or many of the developers have access to this, with the idea being that they just copy the key from the wiki to their local `~/.ssh/`. There are a number of things wrong with this. 

* Private key is not private if it is shared amongst the team
* No pass-phrase, means no second factor of authentication
* Because there is only one user (single key-pair) being used on the VPSs, there is also no audit trail
* The weakest link is the weakest wiki password of all the developers, and we all know how weak that is likely to be, with a bit of reconnaissance, probably guessable in a few attempts without any password profiling tools. I have discussed this and demonstrated a collection of password profiling tools in the "Weak Password Strategies" subsection of the People chapter of [Fascicle 0](https://f0.holisticinfosecforwebdevelopers.com). Once the attacker has the weakest password, then they own all of the EC2 (if on AWS) instances, or any resource that is using key-pair authentication. If the organisation is failing this badly, then they almost certainly will not have any password complexity constraints on their wiki either

Most developers will also blindly accept what they think are the server key fingerprints without verifying them, which opens them up to a MItM attack, as discussed in the VPS chapter under the [SSH subsection](https://f1.holisticinfosecforwebdevelopers.com/chap03.html#vps-countermeasures-disable-remove-services-harden-what-is-left-ssh-establishing-your-ssh-servers-key-fingerprint). This quickly moves from just being a technical issue to a cultural one, where people are trained to accept that the server is who it says it is. The fact that they have to verify the fingerprint is essentially a step that gets in their way.

### TLS {#cloud-identify-risks-storage-of-secrets-private-key-abuse-tls}

When Docker reads the instructions in the following `Dockerfile`, an image is created that copies your certificate, private key, and any other secrets you have declared, and adds them to an additional layer and forms the resulting image. Both `COPY` and `ADD` will bake what ever you are copying or adding into an additional layer or delta, as discussed in the Consumption from Registries subsection in my [Docker Security book](https://binarymist.io/publication/docker-security/). Whoever can access this image from a public or less public registry now has access to your certificate and even worse your private key.

Anyone can see how these images were built using the following tools:

* [dockerfile-from-image](https://github.com/CenturyLinkLabs/dockerfile-from-image)
* [ImageLayers](https://imagelayers.io/)

The `ENV` command similarly adds the `dirty little secret` value as the `mySecret` key into the image layer.

###### Private key abuse with Dockerfile
{{< highlight bash >}}
FROM nginx

# ...
COPY /host-path/star.mydomain.com.cert /etc/nginx/certs/my.cert
COPY /host-path/star.mydomain.com.key /etc/nginx/certs/my.key
ENV mySecret="dirty little secret"
COPY /host-path/nginx.conf /etc/nginx/nginx.conf 
# ...
{{< /highlight >}}

&nbsp;

# Violations of [Least Privilege](https://f1.holisticinfosecforwebdevelopers.com/chap06.html#web-applications-countermeasures-management-of-application-secrets-least-privilege) {#cloud-countermeasures-violations-of-least-privilege}

When you create IAM policies, grant only the permissions required to perform the task(s) necessary for given users. If the user needs additional permissions, then they can be added, rather than adding everything up front and potentially having to remove again at some stage. Adding as required, rather than removing as required, will cause much less friction technically and socially.

**For example, [in AWS](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html#grant-least-privilege)**, you need to keep a close watch on which [permissions](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_permissions.html) are assigned to [policies](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html) that your groups and roles have applied, and subsequently, which groups and roles your users are in or part of.

This is the recommended sequence for granting least privilege in AWS, other CSPs will be similar:

1. First, work out which permissions a given user requires
2. Create or select an existing group or role
3. Attach policy to the group or role that has the permissions that your given user requires. You can select existing policies or create new ones
4. Add the given user to the group or role

Regularly review all of the IAM policies you are using, making sure only the required permissions (Services, Access Levels, and Resources) are available to the users and/or groups attached to the specific policies.

Enable [Multi Factor Authentication](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html#enable-mfa-for-privileged-users) (MFA) on the root user, and all IAM users with console access, especially privileged users at a minimum. AWS provides the ability to mandate that users use MFA, you can do this by creating a new managed policy based on the AWS guidance to [Enable Your Users to Configure Their Own Credentials and MFA Settings](https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_users-self-manage-mfa-and-creds.html). Attach the new policy to a group that you have created and add users that must use MFA to that group.  
This process was pointed out to me by Scott Piper during our [Cloud Security interview](https://binarymist.io/publication/ser-podcast-cloud-security/) by way of his [blog post](https://duo.com/blog/potential-gaps-in-suggested-amazon-web-services-security-policies-for-mfa) and generous Github pull request.

The [Access Advisor](https://aws.amazon.com/blogs/security/remove-unnecessary-permissions-in-your-iam-policies-by-using-service-last-accessed-data/) tab, is visible on the IAM console details page for Users, Groups, Roles, or Policies after you select a list item. This provides information about which services are accessible for any of your users, groups, or roles. This can also be helpful for auditing permissions that should not be available to any of your users who are part of the group, role or policy you selected.

The [IAM Policy Simulator](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_testing-policies.html) is accessible from the IAM console. This is good for granular reporting on the permissions of your specific Users, Groups and Roles, filtered by service and actions.

[AWS Trusted Advisor](https://aws.amazon.com/premiumsupport/trustedadvisor/) should be run periodically to check for security issues. It is accessible from the [Console](https://console.aws.amazon.com/trustedadvisor/), CLI and API. Trusted Advisor has a collection of core checks and recommendations which are free to use. These include security groups, specific ports unrestricted, IAM use, MFA on root user, EBS and RDS public snapshots.

* **Running services as root**: Make sure that Docker containers are not running under the root account. There are full details in my [Docker Security book](https://binarymist.io/publication/docker-security/)
* **Configuration Settings Changed Ad Hoc**: One option is to have solid change control in place. [AWS Config](https://aws.amazon.com/config/) can assist with this. [AWS Config](https://docs.aws.amazon.com/config/latest/developerguide/) continuously monitors and records how the AWS resources were configured and how they have changed, including how they are related to each other. This enables you to assess, audit, and evaluate the configurations of your AWS resources, and have notifications sent to you when AWS Config detects a violation, including created, modified or deleted rules changes.  
    
    AWS Config records IAM policies assigned to users, groups, or roles, and EC2 security groups, including port rules. Changes to your configuration settings can trigger Amazon Simple Notification Service (SNS) notifications, which you can have sent to your personnel tasked with controlling changes to your configurations.  
    
    Your custom rules can be codified and therefore source controlled. AWS calls this Compliance as Code. I discussed AWS CloudTrail briefly in item 1 of the [CSP Evaluation](#cloud-countermeasures-csp-evaluation) countermeasures subsection. AWS Config is integrated with CloudTrail, which captures all API calls from AWS Config console or API, SDKs, CLI tools, and other AWS services. The information collected by CloudTrail provides insight on what request was made, from which IP address, by who, and when  
* **Machine Instance Access To Open**: Reduce your attack surface by disabling access to your machine instances from *any* source IP address

There are also a collection of IAM specific items that you should review in the Identity and Access Management subsection of the [CIS AWS Foundations document](https://d0.awsstatic.com/whitepapers/compliance/AWS_CIS_Foundations_Benchmark.pdf).

## Machine Instance Single User Root {#cloud-countermeasures-violations-of-least-privilege-machine-instance-single-user-root}

As part of the VPS and container builds, there should be [specific users created](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/managing-users.html) for specific jobs, every user within your organisation that needs VPS access should have their own user account on every VPS, including [SSH access](#cloud-countermeasures-storage-of-secrets-private-key-abuse-ssh) if required (ideally this should be automated). With Docker, I discussed how this is done in the `Dockerfile` in my [Docker Security book](https://binarymist.io/publication/docker-security/) and [blog post](https://binarymist.io/blog/2018/03/31/docker-security/#the-default-user-is-root).

Drive a [least privilege policy](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html#grant-least-privilege) around this, configuring a strong [password policy](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html#configure-strong-password-policy) for your users, and implement [multi-factor authentication](https://aws.amazon.com/iam/details/mfa/), which will help with poor password selection. I discuss this in more depth in the [Storage of Secrets](#cloud-countermeasures-storage-of-secrets) subsection.

## CSP Account Single User Root {#cloud-countermeasures-violations-of-least-privilege-csp-account-single-user-root}

As I discuss in the [Credentials and Other Secrets](#cloud-countermeasures-storage-of-secrets-credentials-and-other-secrets) Countermeasures subsection of this chapter, create multiple accounts with least privileges required for each; the root user should hardly ever be used. Create groups and attach restricted policies to them, then add the specific users to them.

Also as discussed in the [Credentials and Other Secrets](#cloud-countermeasures-storage-of-secrets-credentials-and-other-secrets-entered-by-people-manually) countermeasures subsection, there should be almost no reason to generate key(s) for the AWS Command Line Tools for the AWS account root user. But if you do, consider setting up notifications for when they are used. As usual, AWS has plenty of [documentation](https://aws.amazon.com/blogs/security/how-to-receive-notifications-when-your-aws-accounts-root-access-keys-are-used/)
on the topic.

Another idea is to set-up monitoring and notifications on activity of your AWS account root user. AWS [documentation](https://aws.amazon.com/blogs/mt/monitor-and-notify-on-aws-account-root-user-activity/) explains how to do this.

There are also a collection of monitoring specific items that you should review in the Monitoring subsection of the [CIS AWS Foundations document](https://d0.awsstatic.com/whitepapers/compliance/AWS_CIS_Foundations_Benchmark.pdf).

Another great idea is to generate an AWS key [Canarytoken](https://canarytokens.org/) from canarytokens.org, and put it somewhere more obvious than your real AWS key(s). When someone uses it, you will be automatically notified. I discussed these with Haroon Meer on the Software Engineering Radio [Network Security](https://binarymist.io/publication/ser-podcast-network-security/) podcast. [Jay](https://twitter.com/HeyJayza) also wrote a [blog post](http://blog.thinkst.com/2017/09/canarytokens-new-member-aws-api-key.html) on the thinkst blog on how you can set this up, and what the inner workings look like.

Also consider rotating your IAM access keys for your CSP services. AWS EC2, for example, provides [auto-expire, auto-renew](https://aws.amazon.com/blogs/security/how-to-rotate-access-keys-for-iam-users/) access keys when using roles.

&nbsp;

### SSH {#cloud-countermeasures-storage-of-secrets-private-key-abuse-ssh}

There are many ways to harden SSH as we discussed in the [SSH](https://f1.holisticinfosecforwebdevelopers.com/chap03.html#vps-countermeasures-disable-remove-services-harden-what-is-left-ssh) subsection of the VPS chapter of Holistic Info-Sec for Web Developers, Fascicle 1. Usually the issue will be specific to lack of knowledge, desire and a dysfunctional [culture](https://blog.binarymist.net/2014/04/26/culture-in-the-work-place/) in the work place. You will need to address the people issues before looking at basic SSH hardening techniques.

Ideally, SSH access should be reduced to a selected few. Most of the work we do now by SSHing should be automated. If you review the commands in history on most VPSs, the majority of the commands are either deployment or monitoring which should all be [automated](https://github.com/binarymist/aws-docker-host).

When you create an AWS EC2 instance you can create a key pair [using EC2](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html#having-ec2-create-your-key-pair) or you can [provide your own](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html#how-to-generate-your-own-key-and-import-it-to-aws). Either way, to be able to log-in to your instance, you need to have provided EC2 with the public key of your key pair and specified it by name. 

Every user should have their [own key-pair](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html), the private part should always be private, kept in the users local `~/.ssh/` directory (not the server) with permissions `600` or more restrictive, and not shared on your developer wiki, or anywhere else for that matter. The public part can be put on every server that the user needs access to. There is no excuse for users not to have their own key pair, you can have up to five thousand key pairs per AWS region. AWS has [clear directions](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html) on how to create additional users and provide SSH access with their own key pairs.

For generic confirmation of the host's SSH key fingerprint when prompted before establishing the SSH connection, follow the procedure I laid out for [Establishing your SSH Servers Key Fingerprint](https://f1.holisticinfosecforwebdevelopers.com/chap03.html#vps-countermeasures-disable-remove-services-harden-what-is-left-ssh-establishing-your-ssh-servers-key-fingerprint) in the VPS chapter of Holistic Info-Sec for Web Developers, Fascicle 1, and make it organisational policy. We should never blindly accept key fingerprints. The key fingerprints should be stored in a relatively secure place, so that only trusted parties can modify them. I would like to see, as part of the server creation process, the entity (probably the wiki) that specifies the key fingerprints is automatically updated by something on the VPS that keeps watch of the key fingerprints. Something like [Monit](https://f1.holisticinfosecforwebdevelopers.com/chap03.html#vps-countermeasures-lack-of-visibility-proactive-monitoring-getting-started-with-monit), would be capable of the monitoring and executing a script to do this.

To SSH to an EC2 instance, you will have to view the console output of the keys being generated. You can see this **only for the first run** of the instance when it is being created, this can be seen by first fetching https://console.aws.amazon.com, then:

1. Click the "EC2" link
2. Click "Instances" in the left column
3. Click the instance name you want
4. Click the select button "Actions" and choose "Get System Log" (a.k.a. "Console Output")
5. In the console output, you should see the keys being generated. Record them

Then, to SSH to your EC2 instance, the command to use can be seen by fetching  
https://console.aws.amazon.com, then:

1. EC2
2. Instances
3. Select your instance
4. Click the Connect button for details

### TLS {#cloud-countermeasures-storage-of-secrets-private-key-abuse-tls}

So, how do we stop baking secrets into our Docker images?

The easiest way is to avoid adding secrets to the process of building your images. You can add them at run time in several ways. If you have a look at Namespaces in my [Docker Security book](https://binarymist.io/publication/docker-security/), also discussed in my [Docker Security blog post](https://binarymist.io/blog/2018/03/31/docker-security/#namespaces-risks), we used volumes. This allows us to keep the secrets entirely out of the image and only include in the container as mounted host directories, rather than adding those secrets to the `Dockerfile`:

###### Mitigate private key abuse via terminal
{{< highlight bash >}}
docker run -d -p 443:443 -v /host-path/star.mydomain.com.cert:/etc/nginx/certs/my.cert -v /host-path/star.mydomain.com.key:/etc/nginx/certs/my.key -e "mySecret=dirty little secret" nginx
{{< /highlight >}}

An even easier technique is to just implement adding of secrets in the `docker-compose.yml` file, thus saving time when you run the container:

###### Mitigate private key abuse using docker-compose.yml
{{< highlight bash >}}
nginx:
    build: .
    ports:
        - "443:443"
    volumes:
        - /host-path/star.mydomain.com.key:/etc/nginx/ssl/nginx.key
        - /host-path/star.mydomain.com.cert:/etc/nginx/ssl/nginx.crt
        - /host-path/nginx.conf:/etc/nginx/nginx.conf
    env_file:
        - /host-path/secrets.env
{{< /highlight >}}

Using the `env_file` we can hide our environment variables in the `.env` file.  
Our `Dockerfile` would now look like the following, even our config is volume mounted and will no longer reside in our image:

###### Mitigate private key abuse using Dockerfile
{{< highlight bash >}}
FROM nginx

# ...
# ...
{{< /highlight >}}

&nbsp;

### Entered by People (manually) {#cloud-countermeasures-storage-of-secrets-credentials-and-other-secrets-entered-by-people-manually}

**Protecting against outsiders**

The most effective alternative to storing user-names and passwords in an insecure manner is to use a group or team password manager. There are quite a few offerings available with all sorts of different attributes. The following are some of the points you will need to consider as part of your selection process:

* Cost in terms of money
* Cost in terms of set-up and maintenance
* Closed or open source. If you care about security, which you must if you are considering a team password manager, it is important to see how secrets are handled. I need to be able to see how the code is written, and which [Key Derivation Functions](https://f1.holisticinfosecforwebdevelopers.com/chap06.html#web-applications-countermeasures-data-store-compromise-which-kdf-to-use) (KDFs) and [cyphers](https://f1.holisticinfosecforwebdevelopers.com/chap06.html#web-applications-identify-risks-cryptography-on-the-client) are used. If it is of high quality, we can have more confidence that our precious sensitive pieces of information are, in fact, going to be private
* Do you need a web client?
* Do you need a mobile client (iOS, Android)?
* What platforms does it need to support?
* Does it need to be able to manage secrets of multiple customers?
* Auditing of user actions? Who is accessing and changing what?
* Ability to be able to lock out users, when they leave the organisation, for example?
* Multi-factor authentication
* Options: Does it have all the features you need?
* Who is behind the offering? Are they well known for creating solid, reliable, secure solutions?

The following are my personal top three, with the first being my preference, based on research I performed for one of my customers recently. All the points above were considered for a collection of about ten team password managers that I reviewed:

1. [Pleasant Password Server](http://pleasantsolutions.com/PasswordServer/) (KeePass backed)
2. [Password Manager Pro](https://www.manageengine.com/products/passwordmanagerpro/msp/features.html)
3. [LastPass](https://www.lastpass.com/teams)

**Protecting against insiders**

The above alone is not going to stop an account take over if you are sharing the likes of the AWS account root user email and password, even if it is in a group password manager. As AWS has [already stated](https://docs.aws.amazon.com/IAM/latest/UserGuide/getting-started_create-admin-group.html), only use the root user for what is absolutely essential (remember: least privilege). This is usually just to create an Administrators group to which you attach the `AdministratorAccess` managed policy, then add any new IAM users to that group who require administrative access.

Once you have created IAM users within an Administrators group as mentioned above, these users should set up groups to which you attach further restricted managed policies such as a group for `PowerUserAccess`, a group for `ReadOnlyAccess`, a group for `IAMFullAccess`, progressively becoming more restrictive. Use the most restrictive group possible in order to achieve specific tasks, simply assigning users to the groups you have created.

Be sure to use multi-factor authentication.

&nbsp;

Your AWS users are not assigned access keys to use for programmatic access by default, do not create these unless you actually need them, and again consider least privilege. There should be almost no reason to create an [access key](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html#lock-away-credentials) for the root user.

Configure [strong password policies](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html#configure-strong-password-policy) for your users, make sure they are using personal password managers and know how to generate long complex passwords.

### Entered by Software (automatically) {#cloud-countermeasures-storage-of-secrets-credentials-and-other-secrets-entered-by-software}

There are many places in software that require access to secrets, to communicate with services, APIs, datastores. Configuration and infrastructure management systems have a problem storing and accessing these secrets in a secure manner.

**HashiCorp [Vault](https://www.vaultproject.io/)**. The most fully featured of these tools, has the following attributes/features:

* [Open Source](https://github.com/hashicorp/vault) written in Go-Lang
* Deployable to any environment, including development machines
* Arbitrary key/value secrets can be stored of any type of data
* Supports cryptographic operations of the secrets
* Supports dynamic secrets, generating credentials on-demand for fine-grained security controls
* Auditing: Vault forces a mandatory lease contract with clients, which allows the rolling of keys, automatic revocation, along with multiple revocation mechanisms providing operators a break-glass for security incidents
* Non-repudiation
* Secrets protected in transit and at rest
* Not coupled to any specific configuration or infrastructure management system
* Can read secrets from configuration, infrastructure management systems and applications via its API
* Applications can query Vault for secrets to connect to services such as datastores, thus removing the need for these secrets to reside in configuration files (See the [Risks that Solution Causes](#cloud-risks-that-solution-causes-storage-of-secrets-credentials-and-other-secrets-entered-by-software) for the caveat)
* Requires multiple keys generally distributed to multiple individuals to read its encrypted secrets
* Check the [Secret Backends](https://www.vaultproject.io/docs/secrets/index.html) for integrations

**[Docker secrets](https://docs.docker.com/engine/swarm/secrets/)**

* Manages any sensitive data (including generic string or binary content up to 500 kb in size) that a [container needs at runtime](#cloud-countermeasures-storage-of-secrets-private-key-abuse-tls), but you do not want to [store in the image](#cloud-identify-risks-storage-of-secrets-private-key-abuse-tls), source control, or the host systems file-system as we did in the TLS section above
* Only available to Docker containers managed by Swarm (services). Swarm manages the secrets
* Secrets are stored in the Raft log, which is encrypted if using Docker 1.13 and higher
* Any given secret is only accessibly to services (Swarm managed container) that have been granted explicit access to the secret
* Secrets are decrypted and mounted into the container in an in-memory filesystem which defaults to `/run/secrets/<secret_name>` in Linux, `C:\ProgramData\Docker\secrets` in Windows

**[Ansible Vault](https://docs.ansible.com/ansible/latest/playbooks_vault.html)**

Ansible is an [Open Source](https://github.com/ansible/ansible/blob/devel/docs/docsite/) configuration management tool, and has a simple secrets management feature.

* Ansible tasks and handlers can be encrypted
* Arbitrary files, including binary data can be encrypted
* From version 2.3 can encrypt single values inside YAML files
* Suggested workflow is to check the encrypted files into source control for auditing purposes

AWS **[Key Management Service](https://aws.amazon.com/kms/)** (KMS) 

* Encrypt up to 4 KB of arbitrary data (passwords, keys)
* Supports cryptographic operations of the secrets: encrypt and decrypt
* Uses Hardware Security Modules (HSM)
* Integrated with AWS CloudTrail to provide auditing of all key usage
* AWS managed service
* Create, import and rotate keys
* Usage via AWS Management Console, SDK and CLI

AWS offers **[Parameter Store](https://aws.amazon.com/ec2/systems-manager/parameter-store/)**

* Centralised store on AWS to manage configuration data, plain text, or encrypted secrets via AWS KMS
* All calls to the parameter store are recorded with AWS CloudTrail, supports access controls.

Also see the [Additional Resources](#additional-resources) section for other similar tools and resources.

&nbsp;

## Additional Tooling {#cloud-countermeasures-aws-additional-tooling} 

* [Security Monkey](https://github.com/Netflix/security_monkey/): Monitors AWS and GCP accounts for policy changes, and alerts on insecure configurations, conceptually similar to AWS Config, as discussed in the [Violations of Least Privilege](#cloud-countermeasures-violations-of-least-privilege) countermeasures subsection. Security Monkey is free and open source. Although not strictly security related, the [Simian Army](https://github.com/Netflix/SimianArmy/wiki) tools from Netflix are also well worth mentioning if you are serious about doing things the right way in AWS. They include:
  * [Chaos Monkey](https://github.com/Netflix/SimianArmy/wiki/Chaos-Monkey)
  * [Janitor Monkey](https://github.com/Netflix/SimianArmy/wiki/Janitor-Home)
  * [Conformity Monkey](https://github.com/Netflix/SimianArmy/wiki/Conformity-Home)
* [CloudSploit](https://cloudsploit.com/): Aims to solve the problem of misconfigured AWS accounts with background scanning through hundreds of resources, settings, and activity logs looking for potential issues. Their blog also has some good resources on it. Scan reports include in-depth remediation steps. Has a free and paid hosted tiers. Auto scanning scheduling for the paid plans. Is open source on [github](https://github.com/cloudsploit/scans)
* [Amazon Inspector](https://console.aws.amazon.com/inspector/): At this time only targets EC2 instances. Inspector agent needs to be installed on all target EC2 instances
* [CloudMapper](https://github.com/duo-labs/cloudmapper) by Scott Piper for visualising your AWS environments. Along with his blog post at [duo.com](https://duo.com/blog/introducing-cloudmapper-an-aws-visualization-tool)
* [Awesome AWS](https://github.com/donnemartin/awesome-aws) has many useful resources

&nbsp;

# Violations of Least Privilege {#cloud-costs-and-trade-offs-violations-of-least-privilege}

It is worth investing the effort to make sure only the required user permissions are granted. As discussed, there are tools you can use to help speed this process up and make it more accurate.

* **Running services as root**: Always start with the minimum permissions possible and add if necessary, it is far easier to add than to remove
* **Configuration Settings Changed Ad Hoc**: Remember detection works where prevention fails. Where your change control fails, because it is decided not to use it, you need something to detect changes and notify someone who cares. For this, there are also other options specifically designed to perform this function. For a collection of such tools, review the [Tooling](#cloud-countermeasures-aws-additional-tooling) sections.  
    
    You need to have these tools set up so that they are [continually auditing](https://blog.cloudsploit.com/the-importance-of-continual-auditing-in-the-cloud-8d22e0554639) your infrastructure and notifying the person(s) responsible for issues resolution, rather than having people continually manually reviewing settings, permissions, and so forth
* **Machine Instance Access To Open**: Set-up a bastion host and lock the source IP address down to the public facing IP address of your bastion host required to access your machine instances. I discussed locking the source IP address down in the [Hardening SSH subsection](https://f1.holisticinfosecforwebdevelopers.com/chap03.html#vps-countermeasures-disable-remove-services-harden-what-is-left-ssh) of the VPS chapter of Holistic Info-Sec for Web Developers, Fascicle 1.  
    
    Your bastion host will be hardened as discussed throughout the VPS chapter. All authorised workers can VPN to the bastion host and SSH from there, or just SSH tunnel from wherever they are through the bastion host via port forwarding to any given machine instances.  
    
    If you have Windows boxes you need to reach, you can tunnel RDP through your SSH tunnel, see my [blog post about this](https://binarymist.io/blog/2010/08/26/installation-of-ssh-on-64bit-windows-7-to-tunnel-rdp/).  
    
    Rather than tunnelling, another option SSH gives us (using the `-A` option) is to hop from the bastion host to your machine instances by forwarding the private key. This does include the risk that someone could gain access to your forwarded SSH agent connection, thus being able to use your private key while you have an SSH connection established. `ssh-add -c` can provide some protection with this.  
    
    If you do decide to use the `-A` option, then you are essentially considering your bastion host as a trusted machine. I commented on the `-A` option in the [Tunnelling SSH](https://f1.holisticinfosecforwebdevelopers.com/chap03.html#vps-countermeasures-disable-remove-services-harden-what-is-left-ssh-tunneling-ssh) subsection of the VPS chapter of Holistic Info-Sec for Web Developers, Fascicle 1. There is plenty of good [documentation](https://cloudacademy.com/blog/aws-bastion-host-nat-instances-vpc-peering-security/) on setting up the bastion host in AWS. AWS provides some [Best Practices](https://docs.aws.amazon.com/quickstart/latest/linux-bastion/architecture.html#best-practices) for security on bastion hosts, and also [discusses](https://aws.amazon.com/blogs/security/how-to-record-ssh-sessions-established-through-a-bastion-host/) recording the SSH sessions that your users establish through a bastion host for auditing purposes


---

_If you're invested in the Cloud, and let's face it, who isn't now days, this book will provide visibility into what you may currently be doing wrong and how to secure your Cloud environments._

<a class="btn btn-outline-primary" href="https://leanpub.com/cloudsecurity-quickreference" target="_blank"><i class="fab fa-leanpub"></i> <b>Get The Full Book</b></a>

At this stage, it's only $12 NZ, do not procrastinate with your organisations assets at risk, get your self a copy now.

<br>

As always, [let me know](#comments) if there's anything you don't understand, or submit a [pull request](https://github.com/binarymist/BinaryMistBlog/pulls) or open an [issue](https://github.com/binarymist/BinaryMistBlog/issues) if you find any errors. :smiley:

# Additional Resources {#additional-resources}

{{% callout note %}}
My latest podcast for Software Engineering Radio was with guest "Head of Cryptography Engineering at Tresorit, Péter Budai" on [End to End Encryption](/publication/ser-podcast-end-to-end-encryption/).

Next up for guests on my interview schedule is [Natalie Silvanovich](https://twitter.com/natashenka) of the Google [Project Zero](https://googleprojectzero.blogspot.co.nz/2015/08/attacking-ecmascript-engines-with.html) team on the topic of Attack Surface Reduction. This should be released in a couple of months. Keep your eye on my [Publications](/publication/#8) if this interests you, or even leave a comment [below](#comments) and I'll let you know when it's available.
{{% /callout %}}

The following are the additional resources in the [Cloud Security](/publication/cloud-security/) book.


**Interview I hosted with Scott Piper on Cloud Security**  
[https://binarymist.io/publication/ser-podcast-cloud-security/](https://binarymist.io/publication/ser-podcast-cloud-security/)

**Secrets out of Docker images**  
[https://www.ctl.io/developers/blog/post/tutorial-protecting-sensitive-info-docker](https://www.ctl.io/developers/blog/post/tutorial-protecting-sensitive-info-docker)

**Darkreading: 10 Password Managers For Business Use**  
https://www.darkreading.com/endpoint/10-password-managers-for-business-use/d/d-id/1322326

**Using Vault with MySQL**  
[https://dzone.com/articles/using-vault-with-mysql](https://dzone.com/articles/using-vault-with-mysql)

**Infrastructure Secret Management Overview**  
[https://gist.github.com/binarymist/66206419df712bd738c3d664542157d8](https://gist.github.com/binarymist/66206419df712bd738c3d664542157d8)  
Forked from maxvt.

**Secrets Management** show on Software Engineering Radio  
[http://www.se-radio.net/2017/12/se-radio-episode-311-armon-dadgar-on-secrets-management/](http://www.se-radio.net/2017/12/se-radio-episode-311-armon-dadgar-on-secrets-management/)

**flaws.cloud** AWS CTF by Scott Piper  
[http://flaws.cloud/](http://flaws.cloud/)
