+++
publishDate = 2018-02-04T09:00:00  # Schedule page publish date.

authors = ["admin"]
tags = ["workshop", "security", "physical-security", "people-security", "vps-security", "network-security", "cloud", "cloud-security", "dev-ops", "dev-sec-ops", "docker", "web-application-security", "web-security", "web-application", "holistic-info-sec-for-web-developers", "application-security", "cybersecurity", "information-security", "security-weaknesses", "software-security", "hacking", "conference", "operational-efficiencies", "owasp", "owasp-nz-day"]

title = "Workshop - Building Security Into Your Development Teams"
date = 2018-02-04T09:00:00
date_end = 2018-02-04T17:30:00
abstract = ""

event = "OWASP NZ Day 2018"
event_url = "https://www.owasp.org/index.php/OWASP_New_Zealand_Day_2018"
location = "Auckland University, New Zealand"

summary = """
Kim's flagship Software Developer focussed training, this time at OWASP New Zealand Day conference.
"""

# Is this a selected talk? (true/false)
selected = true

# Projects (optional).
#   Associate this talk with one or more of your projects.
#   Simply enter the filename (excluding '.md') of your project file in `content/project/`.
projects = [""]

# Links (optional).
url_pdf = ""
url_slides = ""
url_video = ""
url_code = ""

# Custom links (optional).
#   Uncomment line below to enable. For multiple links, use the form `[{...}, {...}, {...}]`.
links = [{name = "Project", url = "project/project-owaspnzday2018", icon = "project-diagram", icon_pack = "fas"}, {name = "PDF", url = "/files/event/BuildingSecurityIntoYourDevTeams-OWASPNZDay2018.pdf", icon = "file-pdf", icon_pack = "fas"}, {name = "Source Book Series", url = "publication/holistic-infosec-for-web-developers/", icon = "leanpub", icon_pack = "fab"}, {name = "Kim's other Workshops", url = "/tags/workshop", icon = "tools", icon_pack = "fas"}]


# Does the content use math formatting?
math = true

# Does the content use source code highlighting?
highlight = true

# Featured image
# Place your image in the `static/media/` folder and reference its filename below, e.g. `image = "example.jpg"`.
[header]
image = "headers/workshop-building-security-into-your-dev-teams.jpg"
#caption = "My caption :smile:"

+++

{{< figure src="talk/2018-owasp-workshop.jpg" caption="OWASP New Zealand Day 2018 workshop" alt="owasp new zealand day 2018 workshop" >}}

Few organisations understand the [secrets](/event/all-day-devops-2017-talk-secrets-of-a-high-performance-security-focussed-agile-team) of shifting the focus on security from late in the software development life-cycle to within the Development Team.

Not only does this significantly reduce the number of security defects being pushed to your production systems, but also significantly reduces the total cost of development.

## [Cheapest place](https://f0.holisticinfosecforwebdevelopers.com/chap06.html#leanpub-auto-cheapest-place-to-deal-with-defects) to deal with defects

There have been many studies specifically looking at the costs of finding and fixing defects early, as opposed to the planning of how to fix defects once the product is delivered, or not planning at all.

The following table shows the average cost of fixing defects based on when they were introduced versus when they are detected. Putting these practises in the right order can reduce costs of fixing security defects by up to 100 times.

[{{< figure src="project/Countermeasures-Backlog.jpg" caption="Average Cost of Fixing Defects" alt="Average Cost of Fixing Defects" >}}](https://f0.holisticinfosecforwebdevelopers.com/chap06.html#leanpub-auto-cheapest-place-to-deal-with-defects)

So... by simply shifting the security expertise from the end of the project to within the development team, thus enabling developers to find and fix their defects as they are being introduced, huge cost savings can be enjoyed.

This is not as difficult as you may think.

## On the Day

Kim will lead the class through the tools, techniques and thought processes of both red (attacking) and blue (defending) teams along with how to combine these attributes into the purple team focussing on security, productivity, and tasked with continuously delivering sustainable maintainable technical solutions to market.

Kim will explain the roles of 'T' shaped professionals, including placement of security champions to create your purple Development Teams.

We will work through how to implement the Sensible Security Model (SSM) within each and every Sprint, including:

1. Creating actionable countermeasure Product Backlog Items
2. Integrating them into the same Product Backlog that your Development Team has been pulling business focussed items from
3. Ordering them based on the risk ratings you create for each

{{< figure src="project/Countermeasures-Backlog.jpg" caption="Countermeasures Backlog" alt="Countermeasures Backlog" >}}

Kim will discuss how and where Agile Development Teams often fail, along with how to succeed with security with a [familiar anecdote](https://f0.holisticinfosecforwebdevelopers.com/chap06.html#leanpub-auto-how-and-why-many-software-development-shops-fail). Then augmenting your Scrum process within each and every Sprint, with a collection of development focussed [processes and practises](http://f0.holisticinfosecforwebdevelopers.com/chap06.html#process-and-practises-agile-development-and-practices), tools and techniques that have proven their value at drastically reducing defects before production deployment.

Kim will walk us through the SSM threat modelling process with theory and hands on exercises in areas such as Physical, People, VPS, Network, Cloud and Web Applications. Including sub topics such as [Docker](/publication/docker-security/), [Serverless](https://f1.holisticinfosecforwebdevelopers.com/chap05.html#cloud-countermeasures-serverless), [PowerShell](/event/isig-2017-workshop-windows-exploitation-and-persistence-with-ps/) and many others.

{{< figure src="project/SSM.jpg" caption="Sensible Security Model" alt="Sensible Security Model" >}}

<br>

## More Detail</h4>

Training material will be augmented with Extracts from Kim's interviews on Software Engineering Radio with security experts such as Diogo Mónica ([Docker Security](/publication/ser-podcast-docker-security/) Team Lead) and [Haroon Meer](/publication/ser-podcast-network-security) (creator of Canary tools and tokens).

{{% callout note %}}
Each student will receive **free** copies of the first two parts of Kim's book series "[Holistic Info-Sec for Web Developers](/publication/holistic-infosec-for-web-developers/)" (weighing in at approximately 700 pages) which this training is based on, as companion course material to accompany the training, to assist with ongoing self learning, and as a valuable reference resource long after the training has finished.
{{% /callout %}}

### Learnings

Coverage of topic chapters:

* [Physical](http://f0.holisticinfosecforwebdevelopers.com/chap07.html#physical)
* [People](http://f0.holisticinfosecforwebdevelopers.com/chap08.html#people)
* [VPS](http://f1.holisticinfosecforwebdevelopers.com/chap03.html#vps)
* [Network](http://f1.holisticinfosecforwebdevelopers.com/chap04.html#network)
* [Cloud](http://f1.holisticinfosecforwebdevelopers.com/chap05.html#cloud)
* [Web Applications](http://f1.holisticinfosecforwebdevelopers.com/chap06.html#web-applications)

<br>

## What others have said


{{< tweet 923342793405165569 >}}

<br>


