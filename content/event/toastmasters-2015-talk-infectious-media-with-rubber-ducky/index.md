+++
publishDate = 2015-11-27T07:30:00  # Schedule page publish date.

tags = ["talk", "hacking", "cybersecurity", "holistic-info-sec-for-web-developers", "information-security", "infosec", "people-security", "physical-security", "security", "security-weaknesses", ]

summary = """
Kim talks with his fellow Toastmasters about the risks and countermeasures of luring targets to execute infectious media on their devices.
"""

title = "Talk - Infectious Media with Rubber Ducky"
date = 2015-11-27T07:30:00
date_end = 2015-11-27T07:37:00
abstract = "This talk is based on the Infectious Media section in the People chapter of Kims new book [Holistic Infosec for Web Developers](https://f0.holisticinfosecforwebdevelopers.com/) and also demonstrated in Kim's [Kiwicon training](../kiwicon-2015-workshop-holistic-info-sec-for-web-developers)."

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
links = [{name = "Risks", url = "https://f0.holisticinfosecforwebdevelopers.com/chap08.html#leanpub-auto-usb-rubber-duckyhttpusbrubberduckycom", icon = "bomb", icon_pack = "fas"}, {name = "Countermeasures", url = "https://f0.holisticinfosecforwebdevelopers.com/chap08.html#leanpub-auto-infectious-media", icon = "band-aid", icon_pack = "fas"}, {name = "Slides", url = "https://speakerdeck.com/binarymist/infectious-media-with-rubber-ducky", icon = "desktop", icon_pack = "fas"}]


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

In this talk Kim walks through the psychology of why humans succumb to infectious media attacks and how the attacker is easily able to leverage the human weaknesses to do their bidding. This is a very useful and effective approach at getting inside a target organisation with no physical or network access.

<script async class="speakerdeck-embed" data-id="5db7a57971e34ec4a6fda48182a1bda1" data-ratio="1.33333333333333" src="//speakerdeck.com/assets/embed.js"></script>
<br>

When the human weaknesses are coupled with the inherent trust of Human Interface Devices (HID) we have a recipe for success, or disaster depending on which side of the equation you are on.

Kim walks through:

1. Ducky Script
2. Encoding the payload
3. Loading the SD card and card into the device
4. Distributing the devices
5. Launching attacks

The community contributed attacks are also discussed and how to extend them.

Finally mitigation techniques are explored. Including using the device of compromise to train potential targets how not to be targets.



