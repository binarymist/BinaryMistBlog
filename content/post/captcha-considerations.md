+++
date = 2015-12-31
lastmod = 2015-12-31
draft = false
tags = ["application-security", "book", "captcha", "css", "cybersecurity", "holistic-info-sec-for-web-developers", "infosec", "javascript", "nodejs", "npm", "security", "software-security", "web-application", "web-security"]
title = "Captcha Considerations"
math = true

# Slug is required for counting comments.
slug = "captcha-considerations"

summary = """
Lack of captchas are a risk, but so are captchas themselves...
"""

[header]
#image = "headers/getting-started.png"
#caption = "Image credit: [**Academic**](https://github.com/gcushen/hugo-academic/)"

+++

This post is taken from the content of the Web Applications chapter of Kim's book [Holistic Info-Sec for Web Developers F1](https://f1.holisticinfosecforwebdevelopers.com/)

## Risks

![Exploiting Captcha](/img/post/2015/12/easy-verywidespread-easy-low.png)

Lack of captchas are a risk, but so are captchas themselves...

Let's look at the problem here? What are we trying to stop with captchas?

Bots submitting. What ever it is, whether:

* Advertising
* Creating an unfair advantage over real humans
* Link creation in attempt to increase SEO
* Malicious code insertion

You are more than likely not interested in accepting it.

What do we not want to block?

People submitting genuinely innocent input. If a person is prepared to fill out a form manually, even if it is spam, then a person can view the submission and very quickly delete the validated, filtered and possibly sanitised message.

## Countermeasures

![PreventionVERYEASY](/img/post/2015/12/preventionveryeasy.png)

### Types

#### Text Recognition

recaptcha uses this technique. See below for details.

#### Image Recognition

Uses images which users have to perform certain operations on, like dragging them to another image. For example: "Please drag all cat images to the cat mat.", or "Please select all images of things that dogs eat." sweetcaptcha is an example of this type of captcha. This type completely rules out the visually impaired users.

#### Friend Recognition

Pioneered by... you guessed it. Facebook. This type of captcha focusses on human hackers, the idea being that they will not know who your friends are.

"_Instead of showing you a traditional captcha on Facebook, one of the ways we may help verify your identity is through_ [_social authentication_](https://m.facebook.com/story.php?story_fbid=191422450875446&id=121897834504447). _We will show you a few pictures of your friends and ask you to name the person in those photos. Hackers halfway across the world might know your password, but they don't know who your friends are._"

I disagree with that statement. A determined hacker will usually be able to find out who your friends are. There is another problem, do you know who all of your friends are? Every acquaintance? I am terrible with names and so are many people. This is supposed to be used to authenticate you. So you have to be able to answer the questions before you can log in.

#### Logic Questions

This is what textcaptcha uses. Simple logic questions designed for the intelligence of a seven year old child. These are more accessible than image and textual image recognition, but they can take longer than image recognition to answer, unless the user is visually impared. The questions are usually language specific also, usually targeting the English language.

#### User Interaction

This is a little like image recognition. Users have to perform actions that virtual intelligence can not work out... yet. Like dragging a slider a certain number of notches. If an offering gets popular, creating some code to perform the action may not be that hard and would definitely be worth the effort for bot creators. This is obviously not going to work for the visually impaired or for people with handicapped motor skills.

In NPM land, as usual there are many options to choose from. The following were the offerings I evaluated. None of which really felt like a good fit:

### Offerings

* total-captcha. Depends on node-canvas. Have to install cairo first, but why? No explanation. Very little of anything here. Move on. How does this work? Do not know. What type is it? Presume text recognition.
* [easy-captcha](https://www.npmjs.com/package/easy-captcha) is a text recognition offering generating images
* [simple-captcha](https://www.npmjs.com/package/simple-captcha) looks like another text recognition offering. I really do not want to be writing image files to my server.
* [node-captcha](https://www.npmjs.com/package/node-captcha) Depends on canvas. By the look of the package this is another text recognition in a generated image.
* [re-captcha](https://www.npmjs.com/package/re-captcha) was one of the first captcha offerings, created at the Carnegie Mellon University by Luis von Ahn, Ben Maurer, Colin McMillen, David Abraham and Manuel Blum who invented the term captcha. Google later acquired it in September 2009\. recaptcha is a text recognition captcha that uses scanned text that optical character recognition (OCR) technology has failed to interpret, which has the added benefit of [helping to digitise text](https://en.wikipedia.org/wiki/ReCAPTCHA) for The New York Times and Google Books. ![recaptcha](/img/post/2015/12/recaptcha.jpg)
* [sweetcaptcha](https://www.npmjs.com/package/sweetcaptcha) uses the sweetcaptcha cloud service of which you must abide by their terms and conditions, requires another node package, and requires some integration work. sweetcaptcha is an image recognition type of captcha. ![sweetcaptcha](/img/post/2015/12/sweetcaptcha.jpg)
* [textcaptcha](http://textcaptcha.com/) is a logic question captcha relying on an external service for the questions and md5 hashes of the correct lower cased answers. This looks pretty simple to set up, but again expects your users to use their brain on things they should not have to.

After some additional research I worked out why the above types and offerings didn't feel like a good fit. It pretty much came down to user experience.

> Why should genuine users/customers of your web application be disadvantaged by having to jump through hoops because you have decided you want to stop bots spamming you? Would it not make more sense to make life harder for the bots rather than for your genuine users?

Some other considerations I had. Ideally I wanted a simple solution requiring few or ideally no external dependencies, no JavaScript required, no reliance on the browser or anything out of my control, no images and it definitely should not cost any money.

### Alternative Approaches

* Services like Disqus can be good for commenting. Obviously the comments are all stored somewhere in the cloud out of your control and this is an external dependency. For simple text input, this is probably not what you want. Similar services such as all the social media authentication services can take things a bit too far I think. They remove freedoms from your users. Why should your users be disadvantaged by leaving a comment or posting a message on your web application? [Disqus tracks users activities](http://perltricks.com/article/104/2014/7/29/Your-users-deserve-better-than-Disqus) from hosting website to website whether you have an account, are logged in or not. [Any information they collect](https://en.wikipedia.org/wiki/Disqus#Criticism_and_privacy_concerns) such as IP address, web browser details, installed add-ons, referring pages and exit links may be disclosed to any third party. When this data is aggregated it is useful for de-anonymising users. If users choose to block the Disqus script, the comments are not visible. Disqus has also published its registered users entire commenting histories, along with a list of connected blogs and services on publicly viewable user profile pages. Disqus also engage in add targeting and blackhat SEO techniques from the websites in which their script is installed.
* Services like Akismet and Mollom which take user input and analyse for spam signatures. Mollom sometimes presents a captcha if it is unsure. These two services learn from their mistakes if they mark something as spam and you unmark it, but of course you are going to have to be watching for that. Matt Mullenweg created Akismet so that his mother could blog in safety. "_[His first attempt](https://en.wikipedia.org/wiki/Akismet) was a JavaScript plugin which modified the comment form and hid fields, but within hours of launching it, spammers downloaded it, figured out how it worked, and bypassed it. This is a common pitfall for anti-spam plugins: once they get traction_". My advice to this is not to use a common plugin, but to create something custom. I discuss this soon.

The above solutions are excellent targets for creating exploits that will have a large pay off due to the fact that so many websites are using them. There are exploits discovered for these services regularly.

### [Still not cutting it](http://www.smashingmagazine.com/2011/03/in-search-of-the-perfect-captcha/)

"_Given the fact that many clients count on conversions to make money, not receiving 3.2% of those conversions could put a dent in sales. Personally, I would rather sort through a few SPAM conversions instead of losing out on possible income._"

> Casey Henry: [Captchas' Effect on Conversion Rates](https://moz.com/blog/captchas-affect-on-conversion-rates)

"_Spam is not the user’s problem; it is the problem of the business that is providing the website. It is arrogant and lazy to try and push the problem onto a website’s visitors._"

> Tim Kadlec: [Death to Captchas](http://timkadlec.com/2011/01/death-to-captchas/)

### User Time Expenditure

Recording how long it takes from fetch to submit. This is another technique, in which the time is measured from fetch to submit. For example if the time span is under five seconds it is more than likely a bot, so handle the message accordingly.

### Bot Pot

Spamming bots operating on custom mechanisms will in most cases just try, then move on. If you decide to use one of the common offerings from above, exploits will be more common, depending on how wide spread the offering is. This is one of the cases where going custom is a better option. Worse case is you get some spam and you can modify your technique, but you get to keep things simple, tailored to your web application, your users needs, no external dependencies and no monthly fees. This is also the simplest technique and requires very little work to implement.

#### Spam bots:

* Love to populate form fields
* Usually ignore CSS. For example, if you have some [CSS that hides](http://haacked.com/archive/2007/09/11/honeypot-captcha.aspx/) a form field and especially if the CSS is not inline on the same page, they will usually fail at realising that the field is not supposed to be visible.

So what we do is create a field that is not visible to humans and is supposed to be kept empty. On the server once the form is submitted, we check that it is still empty. If it is not, then we assume a bot has been at it.

This is so simple, does not get in the way of your users, yet very effective at filtering bot spam.

#### Client side:

###### CSS
{{< highlight css >}}
form .bot-pot {
   display: none;
}
{{< /highlight >}}

###### HTML
{{< highlight html >}}
<form>
   <!--...-->
   <div>
      <input type="text" name="bot-pot" class="bot-pot">
   </div>
   <!--...-->
</form>
{{< /highlight >}}

#### Server side:

I show the validation code middleware of the route on line 30 of `routes/home.js` below.

The validation is performed on line 16 of `routes/home.js` below.

###### `routes/home.js`
{{< highlight javascript "linenos=inline,hl_lines=16 30" >}}
var form = require('express-form');
var fieldToValidate = form.field;
//...

function home(req, res) {
   res.redirect('/');
}

function index(req, res) {
   res.render('home', { title: 'Home', id: 'home', brand: 'your brand' });
}

function validate() {
   return form(
      // Bots love to populate everything.
      fieldToValidate('bot-pot').maxLength(0)
   );
}

function contact(req, res) {

   if(req.form.isValid)
      // We know the bot-pot is of zero length. So no bots.
   //...
}

module.exports = function (app) {
   app.get('/', index);
   app.get('/home', home);
   app.post('/contact', validate(), contact);
};
{{< /highlight >}}

So as you can see, a very simple solution. You could even consider combining the above two techniques.
