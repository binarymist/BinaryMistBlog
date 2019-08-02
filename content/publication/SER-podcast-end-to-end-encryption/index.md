+++
title = "Péter Budai on End to End Encryption"
date = "2018-03-13"

# Authors. Comma separated list, e.g. `["Bob Smith", "David Jones"]`.
authors = ["Admin"]

# Publication type.
# Kim copied the file: themes/academic/i18n/en.yaml to i18n/ , removed everything that we don't override, and changed the publication (pub) values of the associated types... found in themes/academic/data/publication_types.toml to the following: 
# Legend:
# 0 = pub_uncat: Uncategorized
# 1 = pub_conf: Conference artifact
# 2 = pub_journal: Journal article
# 3 = pub_preprint: Work in progress
# 4 = pub_report: Technical report
# 5 = pub_book: Book
# 6 = pub_book_section: Book section
# 7 = pub_thesis: Thesis
# 8 = pub_patent: Podcast
publication_types = ["8"]

# Publication name and optional abbreviated version.
publication = "*Software Engineering Radio (SER)* Episode 321, IEEE."
publication_short = "SER Podcast 321"

# Abstract and optional shortened version.
abstract = "Head of Cryptography Engineering at [Tresorit](https://tresorit.com/security), Péter Budai talks with Kim Carter about End to End Encryption (E2EE), backdoors, the scenarios where E2EE can be and should be used. IM, Voice over IP, Email scenarios, as well as interservice communication scenarios such as securing data in use with full memory encryption, CPU-based key storage, enclaves, cryptographic protocols (Secure multi-party computation and Homomorphic encryption). Péter and Kim discuss encrypting communications between microservices in the Cloud. Which ciphers to avoid and which to use along with how to find the right crypto library for your next software project."

tags = ["publication", "podcast", "application-security", "cipher", "cloud", "cloud-security", "crypto", "cryptography", "cybersecurity", "encryption", "information-security", "infosec", "gpg", "pgp", "security", "web-security"]

summary = """
Head of Cryptography Engineering at Tresorit, Péter Budai talks with Kim Carter about End to End Encryption.
"""

# Featured image thumbnail (optional)
image_preview = ""

# Is this a selected publication? (true/false)
featured = false

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
links = [{name = "Podcast", url = "http://www.se-radio.net/2018/04/se-radio-episode-321-peter-budai-on-end-to-end-encryption/", icon = "podcast", icon_pack = "fas"}, {name = "Direct Download", url = "http://traffic.libsyn.com/seradio/SE-Radio-Episode-321-Peter-Budai-on-End-to-End-Encryption.mp3", icon = "download", icon_pack = "fas"}]

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

* What is end-to-end encryption?  
(plain text -> cipher text. If there are intermediaries, they can not make sense of the data)
* Why do we need end-to-end encryption, what’s the goal here?  
(One example would be a European organisation which stores its archived data off-site in the USA. Under the terms of the [USA PATRIOT Act](https://en.wikipedia.org/wiki/USA_PATRIOT_Act), American authorities can demand access to all data physically stored within its boundaries, even if it includes personal information on European citizens with no connections to the USA. If the data is E2EE, it’s impossible to yield to the authorities)
* What are we trying to protect?
* Who are we trying to protect it from  
(who are the threat actors)?
* What are your thoughts around adding backdoors for the authorities, but somehow stopping the attackers from using them?  
(Examples where this has happened)
* For our listeners, can you explain [symmetric](https://f1.holisticinfosecforwebdevelopers.com/chap03.html#leanpub-auto-symmetric-cryptosystems) and [asymmetric](https://f1.holisticinfosecforwebdevelopers.com/chap03.html#leanpub-auto-asymmetric-cryptosystems) encryption?
* What types of systems can we apply end-to-end encryption to?
* What types of systems should we apply end-to-end encryption to?

## Scenarios

We’re going to discuss IM, Voice, and Email scenarios briefly,
then move into Inter-service communication scenarios.

### IM Scenario

We apply end-to-end encryption to Instant Messaging. Some of these offerings are:

* Signal  
(free & open source. Retain your ph number and last login date, nothing else)
* [Wire](https://wire.com/en/security/)  
(open source, swiss headquarters, EU servers, [Proteus](https://github.com/wireapp/proteus) is an implementation of the axolotl protocol (later renamed to Double Ratchet Algorithm))
* Facebook messenger if you opt-in  
(Signal protocol, collect lots of metadata from users)
* WhatsApp  
([Signal protocol](https://signal.org/blog/whatsapp-complete/), but collect conversation and a lot of other metadata, owned by FaceBook, and users data [goes to FaceBook](https://www.theverge.com/2017/12/18/16792448/whatsapp-facebook-data-sharing-no-user-consent))
* Telegram  
(controversies around their hand rolled MTProto, store lots of metadata)
* Viber  
(hand rolled closed source signal protocol)
* iMessage  
(iOS, end-to-end encrypted, closed source, possibly has a back door)

What are your thoughts around these offerings and their ethics?

### Voice Scenario

We’ve got Voice calls with offerings such as:

* Signal has voice and video over IP
* SilentCircle offerings such as Silent Phone  
(source open [for review](https://support.silentcircle.com/kb/article/121-is-silent-phone-open-source), but not free)
* FaceTime  
(iOS, end-to-end encrypted, closed source, possibly has a back door)
* WhatsApp  
(as with IM)
* Skype  
([spy-ware](https://cointelegraph.com/news/3-alternatives-to-skype-surveillance-with-end-to-end-encrypted-calls))

What are your thoughts around these offerings and their ethics?

### Email Scenario

Not end-to-end encrypted, unless using [GPG/PGP](/blog/2015/01/31/gnupg-key-pair-with-sub-keys/), which is a pain. TLS provides encryption to the server, STARTTLS can provide encryption between the servers.

Google made [various announcements](https://www.theverge.com/2013/10/30/5046958/nsa-secretly-taps-into-google-yahoo-networks-to-collect-information) from [late 2013](https://arstechnica.com/information-technology/2013/11/googlers-say-f-you-to-nsa-company-encrypts-internal-network/) through to about [March 2014](https://www.theverge.com/2014/3/20/5530072/google-encrypts-gmail-between-data-centers-to-keep-out-nsa) that they now provide not only mandatory TLS encryption between clients and their servers, but also [between their own data centres](https://cloud.google.com/security/security-design/).

This is good, but it’s not necessarily E2EE, there are transitional seams at each server when the data goes from resting to in-transit. The NSA and GCHQ more than likely have backdoors into Google servers.

I think it’s safe to say, if we want email or any cloud privacy for that matter, we need to take the responsibility ourselves.

* Is there any hope here, how can we improve the email situation?

### Inter-Service Communication Scenarios

As Software Engineers, we’re building complex and distributed systems to run on servers we know very little about (AKA the Cloud), this is untrusted territory.

* Why do we need encryption between these components?  
* Why does it need to be end to end?  
(Stop attackers intercepting, both hackers and nation states)  
(How could an attacker leverage the seam?)
* Securing data at rest and in transit is generally a solved problem, but securing data in use is harder. If we can achieve this, then we can achieve E2EE. If we have to decrypt in order to process, then we have a seam, and this is where attackers will focus their efforts.  
Rather than creating a seam in our E2EE by decrypting to perform processing, let’s look at some techniques for securing [data in use](https://en.wikipedia.org/wiki/Data_in_use), thus providing E2EE...

#### Full memory encryption (E2EE data in use techniques)

The system provides both confidentiality and integrity protections of code and data which are encrypted everywhere outside the CPU boundary

* Can you explain how this works, and how Software Engineers can take advantage of it?

#### CPU-based Key Storage (E2EE data in use techniques)

This is where a kernel patch provides CPU-only based encryption to defend against [cold boot attacks](https://en.wikipedia.org/wiki/Cold_boot_attack), allowing RAM to be treated as untrusted. Can you tell us a bit about this and whether Software Engineers could be, and should be making use of it in our systems?  
(Implementations: [TRESOR](https://en.wikipedia.org/wiki/TRESOR), Loop-Amnesia)

#### Enclaves (E2EE data in use techniques)

We touched on Intel Software Guard Extensions (SGX) in the show on [Docker Security (#290)](/publication/ser-podcast-docker-security/)
Data in enclaves is encrypted in RAM, but clear text within the CPU and its cache.
Intel introduced the concept of enclaves as part of its SGX, providing a set of new SGX-enabled CPU instructions (18) allowing user-level code to allocate private regions of memory known as enclaves.  
Intel has the concept of the symmetrical provisioning key which resides in both the SGX-enabled chip and in Intel servers.  
To establish an enclave, the software needs to offer its provisioning key to Intel, and if there's a match in their database, Intel will issue an attestation key that lets SGX set up the enclave.  
The SGX patents disclose in no uncertain terms that the Launch Enclave was introduced to ensure that each enclave’s author has a business relationship with Intel, and implements a software licensing system

* SGX has been [heavily criticised](https://www.theregister.co.uk/2016/02/01/sgx_secure_until_you_look_at_the_detail/) by [security researches](https://eprint.iacr.org/2016/086.pdf) (Victor Costan and Srinivas Devadas of MIT). As far as I can tell, by using SGX, we’re just shifting our trust from untrusted clouds to Intel?
* Can you explain how enclaves work, what theoretical and real benefit this provides us if any?

#### Cryptographic Protocols (E2EE data in use techniques)

* [Secure multi-party computation](https://en.wikipedia.org/wiki/Secure_multi-party_computation) (AKA secure computation or privacy-preserving computation), the idea here is to create methods for parties to jointly compute a function over their inputs while keeping those inputs private
* [Homomorphic encryption](https://en.wikipedia.org/wiki/Homomorphic_encryption) allows us to perform computations on ciphertext, the result being the result of the operations as though they had been performed on plaintext but still encrypted
  * Can you explain a bit about “Secure multi-party computation” and “Homomorphic encryption” and how they differ?
  * How can your average Software Engineer utilise these within their solutions?

* Now that we’ve talked about securing data in use, what are the best options for todays Software Engineers to perform processing on encrypted data?

#### Transition from E2EE to Encryption between points of communication

We touched on what CSPs are doing to encrypt our comms between data centres, services and components in the [Cloud Security show](https://binarymist.io/publication/ser-podcast-cloud-security/) with AWS security specialist Scott Piper (#314). It basically comes down to: we don’t really know what they’re doing, so this is the Developer’s responsibility.

* Can you add anything to this?
* We can setup mutual TLS authentication between our components. What other options, tools and techniques do we have available to us as Software Engineers, when performing computation on encrypted data isn’t an option?

## Libraries, Ciphers and Tools

* There is a huge amount of poor advice on the internet, stackoverflow, etc. Let’s get some solid advice for our Engineers
* Which ciphers and modes should we be avoiding, and which should we be using for which purpose?  
([Avoid: AES-CBC](https://f1.holisticinfosecforwebdevelopers.com/chap06.html#web-applications-identify-risks-cryptography-on-the-client). Use: AES256 block cipher with the [GCM cipher mode](https://f1.holisticinfosecforwebdevelopers.com/chap06.html#web-applications-risks-that-solution-causes-cryptography-on-the-client))
* Which Libraries (native and others) should we avoid, and which should we be using?
* It can be hard for Software Engineers to know [which ciphers and KDFs they should use](https://f1.holisticinfosecforwebdevelopers.com/chap06.html#web-applications-countermeasures-data-store-compromise-which-kdf-to-use). What do we need to look for in a library?  
(Created by cryptographers, few options, only tried and tested ciphers, if in doubt, ask an expert not stackoverflow)

### Tresorit Non-convergent Crypto

Tresorit uses non-convergent crypto to store users data, can you talk a bit about what this means and how this works?

