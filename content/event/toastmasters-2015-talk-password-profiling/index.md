+++
publishDate = 2015-12-04T07:00:00  # Schedule page publish date.

authors = ["admin"]
tags = ["talk", "hacking", "cracking", "application-security", "cybersecurity", "dev-ops", "dev-sec-ops", "holistic-info-sec-for-web-developers", "information-security", "infosec", "networking", "network-security", "owasp", "people-security", "physical-security", "sanitisation", "security", "security-weaknesses", "software-security", "sql-injection", "ssh", "vps", "vps-security", "web", "xss", "kdf", "md5"]

summary = """
Kim talks with his fellow Toastmasters about profiling peoples passwords and then brute forcing web applications with the shortlist of guessed passwords..
"""

title = "Talk - Password Profiling, Brute Forcing"
date = 2015-12-04T07:00:00
date_end = 2015-12-04T07:07:00
abstract = "Following on from Passwords 101, in this talk and demonstration Kim covers how attackers take targeted open-source intelligence (OSINT) and use it to formulate short password lists using both tools and manual techniques."

event = "Toastmasters (Boaters)"
event_url = ""
location = "Speight’s Ale House, Function Room, 263 Bealey Avenue, Christchurch"

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
links = [{name = "Risks", url = "https://f0.holisticinfosecforwebdevelopers.com/chap08.html#people-identify-risks-weak-password-strategies", icon = "bomb", icon_pack = "fas"}, {name = "Countermeasures", url = "https://f0.holisticinfosecforwebdevelopers.com/chap08.html#people-countermeasures-weak-password-strategies", icon = "band-aid", icon_pack = "fas"}, {name = "Book Play", url = "https://f0.holisticinfosecforwebdevelopers.com/chap08.html#people-identify-risks-weak-password-strategies-brute-forcing-hydra", icon = "leanpub", icon_pack = "fab"}, {name = "Video", url = "https://www.youtube.com/watch?v=zevpMvQwWOU", icon = "video", icon_pack = "fas"}]


# Does the content use math formatting?
math = true

# Does the content use source code highlighting?
highlight = true

# Featured image
# Place your image in the `static/media/` folder and reference its filename below, e.g. `image = "example.jpg"`.
[header]
image = ""
#caption = "My caption :smile:"

+++

Kim then takes the word-lists and analysis of failed and successful login attempts to a web application and educates a collection of brute-forcing tools what an unsuccessful and successful login looks like. Then run the brute-forcing tools until the credentials have been discovered. This demonstrates that common password strategies are no longer sufficient to stop full account compromise and worse.

This is followed up with some tips on how to make this process a lot harder for attackers. Content can be found in Kims Holistic Infosec for Web Developers book.

{{< youtube zevpMvQwWOU >}}
<br>
<br>

