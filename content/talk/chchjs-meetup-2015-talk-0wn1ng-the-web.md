+++
date = 2015-07-30T19:00:00  # Schedule page publish date.

tags = ["talk", "hacking", "cybersecurity", "holistic-info-sec-for-web-developers", "information-security", "infosec", "people-security", "physical-security", "security", "security-weaknesses", ]

summary = """
At CHCH.js Christchurch, due to popular demand. Taking the perspective of the penetration tester hired in by the target to find the defects in their security defences before the cyber criminals do.
"""

title = "Talk - 0wn1ng The Web"
time_start = 2015-07-30T19:00:00
time_end = 2015-07-30T22:00:00
abstract = "JavaScript is an incredibly powerful tool for good. With great power comes great responsibility. Are we taking our responsibility seriously? JavaScript is also an incredibly powerful tool for evil. As a developer it's time to empower your tech sense and see how easy it is for those hiding in the shadows to own not only you, but your friends, family, clients, customers... Anyone that uses a browser. New advances in technology look shiny... until we stop believing the hype, open our minds and start poking at them. Let me show you what happens when we start poking."
abstract_short = ""
event = "CHCH.js Meetup"
event_url = "https://www.meetup.com/CHCH-JS/events/223979590/"
location = "Christchurch, NZ"

# Is this a selected talk? (true/false)
selected = false

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
url_custom = [{name = "Demos on YouTube", url = "https://www.youtube.com/playlist?list=PLfv6teOacMItMRSdRvXRMpc5n9Oi_bqOF"}, {name = "Slides", url = "https://speakerdeck.com/binarymist/0wn1ng-the-web-at-www-dot-wdcnz-dot-com"}, {name = "Sourced from Kim's Book", url = "https://f0.holisticinfosecforwebdevelopers.com/chap06.html#process-and-practises-penetration-testing"}]


# Does the content use math formatting?
math = true

# Does the content use source code highlighting?
highlight = true

# Featured image
# Place your image in the `static/img/` folder and reference its filename below, e.g. `image = "example.jpg"`.
[header]
image = ""
#caption = "My caption :smile:"

+++

{{% alert note %}}
Due to popular demand, this presentation is running again. This time at Chch.js Christchurch.
{{% /alert %}}

<br>

{{< speakerdeck 8d03e8bd71154a2c94b6b8a33e9e2436 >}}
<br>

The presentation is basically the process I take to carry out a small client penetration testing assignment, but with a focus on why and how web developers should be doing the same within their teams. It goes through:

Why we even care about breaking our or a clients code and/or system(s)

1. Reconnaissance (information gathering), tools and tips
2. Vulnerability scanning, tools and tips
3. Vulnerability searching, tools and tips
4. Exploitation, where to start, how to start, tools (and why) and tips

<br>

1. Demo 1: Exploiting an XSS vulnerable web app and what you can get from it. The whole reason being here is to be able to show your employer / boss / client and why they need to do something about it. After seeing how easy it is and what you can do, few will deny that it just needs to be fixed.
  
    {{< youtube 92AWyUfJDUw >}}
  
  * Discuss countermeasures
2. Demo 2: Exploiting people with spear phishing, obtaining their credentials by cloning, spoofing a website they frequently login at with the Social Engineer Toolkit's (SET) Credential Harvester.
  
    {{< youtube tb4o5UCHzSA >}}

  * Discuss countermeasures
  * doppelganger domains (domains that look like the real thing but are fakes)
3. Demo 3: Add ARP and DNS spoofing to the mix. Now when a victim browsers to a website that they like to spend time at, they will be visiting our spoofed website. We add the Browser Exploitation Framework (BeEF) hook.js to the cloned website. This hook converts the victims browser into a zombie that continually polls the BeEF comms server requesting commands to execute on the victims machine. This is the window of time we use to install a root-kit and pwn the victims machine.
  
    {{< youtube ymnqTrnF85M >}}

  * Discuss countermeasures
  * Discuss what we can do with BeEF
4. Demo 4: Again we clone and host a website we know the victim likes to visit with SET. We use a couple of Metasploit attack methods and exploit memory injection. Then select a collection of payloads to deliver via shell code injection. Encrypt the payloads and configure the reverse shells. launch Metasploit and watch the reverse shells connect. Attempt to escalate privileges to system account. anti-virus (AV) stops us.
  
    {{< youtube WSwqNb_94No >}}

5. Demo 5: We use Veil-Evasion to get around AV by creating our payload. We encrypt the payload with Hyperion using a weak 128-bit AES key, which decrypts itself by brute force at the time of execution on the victims machine. We use Metasploit to deliver our psexec exploit that we created with Veil-Evasion and Hyperion. We watch the attackers reverse shell connect straight to the system account.
  
    {{< youtube 1EvwwYiMrV4 >}}
  
  * Discuss countermeasures

<br>

## What others have said


[![What others say about kims talk](/img/talk/what-others-say-2015-chch.js.png.png)](https://www.meetup.com/CHCH-JS/events/223979590/)

<br>
