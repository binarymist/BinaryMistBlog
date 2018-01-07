+++
date = 2018-01-31
lastmod = 2018-01-31
draft = false
tags = ["hugo", "free-and-open-source", "git", "web", "web-application", "deployment", "nodejs"]
title = "BinaryMist Web Migration"
math = true

# Slug is required for counting comments.
slug = "bm-web-migration"

summary = """
In this post we discuss the move from the legacy BinaryMist blog on Wordpress.com, along with the BinaryMist website, to a single static site on the Hugo platform hosted on Github Pages.
"""

[header]
#image = "headers/getting-started.png"
#caption = "Image credit: [**Academic**](https://github.com/gcushen/hugo-academic/)"

+++

## Synopsis

Over the last four to five years I've been researching alternative bloggnig platforms in order to move from the Wordpress.com platform I've been blogging from.

In this post I'll discuss the migration and consolidation of both the BinaryMist blog, and business site.

## From:

#### Business Site

Full custom Nodejs/Express in Docker container on AWS EC2, behind Cloudflare, using my [aws-docker-host](https://github.com/binarymist/aws-docker-host).

#### Blog

Wordpress.com

## To:

#### All in one: Business Site with Blog (you're looking at it now)

* Hugo with customised Academic theme
* Staticman for blog commenting (See the [bottom of this post](#comments) for the working example), as we will discuss in the next post, along with sign-up for receiving new post notifications as they are published (See the [post list](/blog) for the working example)
* Hosted directly from Github ([gh-pages](https://github.com/binarymist/BinaryMistBlog/tree/gh-pages))
* Sitting behind Cloudflare. Cloudflare handles DNS, TLS, caching and expiration, minification, pretty much everything anyone would need for a static and in many cases dynamic website. When Github goes down, Cloudflare continues to serve your cached site

## Why?

Wordpress.com has so many issues that really bugged me. One of my goals was to do everything for no monetary cost.

Some of the issues I had with The free Wordpress.com platform, unless I paid them money, and even if I did, most of these issues remain:

* Inflexibility
* Non-extensibility
* Buggy (especially for dealing with source code)
* Archaic workflow (logging in, admin interface, no source control)
* Very limited customisation
* Unable to apply styling
* Always felt like I was fighting the platform to do just about anything
* Multiple view ports were not well supported
* No control over improving performance
* Backups were a pain, I used [`wget` scripts](https://binarymist.wordpress.com/2011/07/28/shell-script-to-provide-monthly-backup-of-your-blog/)
* Charged for domain masking. All Github requires is a [`CNAME`](https://github.com/binarymist/BinaryMistBlog/blob/gh-pages/CNAME) file
* So many other issues.

## Requirements

* Industry standard markdown instead of some flaky Wordpress editor that always tries to help your formatting, but ends up just getting in your way and doing it wrong. The code highlighting was a prime example of this
* Ideally I wanted to be able to easily display Github gists
* Work in source control, stay in the terminal and a text editor
* Vibrant community. With 104 posts over 8 years on Wordpress.com, it's easy to understand that I take blogging seriously, so I need a platform that is going to be supported for a long time
* Have complete control of the entire system
* Easily share blog posts to social media platforms
* Ability to add tags and categories
* `id` attributes added to headings in posts (ideally automatically)
* Email notification of new blog posts
* Reader commenting and subscription to comment threads
* Ability to label posts with the author (Hugo is [working](https://github.com/gcushen/hugo-academic/issues/220) on this). Not a show stopper for me
* Search: Wordpress.com has good search, and I find it really useful to find content that I know I've written about but can't remember where it is

## Platforms Investigated

The following platforms are listed in order of least interesting to me -> to most. I have a bias toward Nodejs, but as you'll see, the platform I chose wasn't based on Nodejs. A lot of the information I used leading up to the final decision wasn't recorded, as many of the reviews were carried out over the four to five year period, but I did keep an ordered list which was quite fluid, and this is what it looked like, from lowest scoring to highest.

#### Wheat

Built on Nodejs. No longer actively maintained.  
[howtonode.org](https://howtonode.org/) was running on Wheat. Browsing to now yields `Internal Server Error`.  
`wheat2` used to be at https://github.com/c9/nog but now yields `404`.  
All the other resources I had links to are now dead.  
I think we can safely say Wheat is dead. Please correct me if you know something I don't on Wheat?

* Github: https://github.com/creationix/wheat

#### Used to be a React blog ([jlongster.com](https://github.com/jlongster/blog))

Cool! I like React. Community, docs, activity? Ah... no.

#### Kerouac

Built on Nodejs/Express. Allows you to add dynamic functionality as you have full access to express.

* Github: https://github.com/jaredhanson/kerouac

Github stars: 84  
Github contributors: 1

#### Jekyll

I had a play with this Ruby platform about four years ago, along with [octopress](http://octopress.org/) and at that point it didn't score very high for me. Don't ask me to much about it now... it was four years ago. :fearful:

[Hugo vs Jekyll](https://georgecushen.com/create-your-website-with-hugo/#hugo-vs-jekyll) points (From George Cushen (Hugo theme Academic creator))

* Home: https://jekyllrb.com
* Github: https://github.com/jekyll/jekyll

Github stars: 32618  
Github contributors: 750

#### Wintersmith

Built on Nodejs with coffee script

* Home: http://wintersmith.io
* Github https://github.com/jnordberg/wintersmith
* Good examples: https://github.com/jnordberg/wintersmith/wiki/Showcase

Github stars: 3286  
Github contributors: 41

#### KeystoneJS

Built on Nodejs/Express and MongoDB

* Home: http://keystonejs.com
* Github: https://github.com/keystonejs/keystone

Github stars: 11707  
Github contributors: 196

#### DocPad

Built on Nodejs/Express. Completely file based. No databases, but can use one if you want.

* Home: http://docpad.org
* Github: https://github.com/docpad/docpad

Github stars: 2945  
Github contributors: 43

#### Ghost

Built on Nodejs/Express. I know a few people that have had good success with Ghost.

* Home: https://ghost.org/
* Github: https://github.com/TryGhost/Ghost

Github stars: 24681  
Github contributors: 278

#### Harp

Built on Nodejs.

* Home: http://harpjs.com
* Github: https://github.com/sintaxi/harp

Github stars: 4571  
Github contributors: 23

#### Hugo

Written in Go, Hugo has been around since June 2013, and is reaching maturity quickly. Has a very large base of consumers and committers. Excellent documentation, both official and community provided. Has hundreds of customisable themes produced by many contributors. Builds your pages of markdown in < 1 ms per page. There is no such thing as waiting for your site to build. I've spent about four weeks on the BinaryMist site and it's a dream to work with. Instant live reload out of the box also makes working with Hugo frictionless.

All the content you will need to create can be done so in markdown, in your file-system, in source control, in the terminal. Backups are no longer an issue.

Any of the theme aspects you can override, simply by copying the specific template or partial from your chosen theme layout directory to the same structure within your sites root directory and making your desired modifications. If you make large changes, consider submitting them back to the theme repository by way of Pull Request (go-on, give back), which is what I did with my Staticman additions to the Academic theme.

Hugo has [shortcodes](https://gohugo.io/content-management/shortcodes/) for many things. such as embedding [speakerdeck](https://gohugo.io/content-management/shortcodes/#speakerdeck) presentations, different video formats, (examples [here](http://localhost:1313/talk/js-remote-conf-2017-the-art-of-exploitation/)) [tweets](https://gohugo.io/content-management/shortcodes/#tweet), ([example](/project/service-development-team-security-training/#what-others-are-saying)), plus you can create your own custom shortcodes. Gists are easily pulled in with the Hugo [gist shortcode](https://gohugo.io/content-management/shortcodes/#gist)

The Hugo [`highlight`](https://gohugo.io/content-management/syntax-highlighting/) shortcode is powerful, flexible, and just seems to work well. Many languages and styles are supported out of the box (code examples below are using it). If for some reason, it doesn't give you enough power, then just use something else. You're not locked into anything.

[Search](https://gohugo.io/tools/search/), although I haven't got [this](https://github.com/aerobatic/hugo-search-demo) set-up yet. Let me know if you would find this helpful. Either [contact me](http://localhost:1313/#contact), leave a [comment](#comments), or [submit an issue](https://github.com/binarymist/BinaryMistBlog/issues), as I'm generally lazy and may not get a round to it unless someone puts some pressure on me.

The biggest problem for me was migrating existing Wordpress.com posts. I ended up just creating a collection of redirects to the legacy posts. In saying that, some appear to have had better success, but I just gave up on migrating.

[Exitwp](https://github.com/thomasf/exitwp) seems to be the main tool for (WP ->) Immigrants.

* Abhishek Pandey [Migration](http://abhipandey.com/2015/09/moving-to-hugo/)
* Venkatt Guhesan [Migration](https://mythinkpond.com/post/2017-09-23-converting-wordpress-hosted-blog-to-hugo/)

[wp2hugo](https://eklausmeier.wordpress.com/2017/04/24/converting-wordpress-export-file-to-hugo/) is another.

Then there is Hugo [migration docs](https://gohugo.io/tools/migrations/).

<br>

* Home: https://gohugo.io
* Github: https://github.com/gohugoio/hugo

Github stars: 22219  
Github contributors: 521

##### Hugo Themes

Knock yourself out: https://themes.gohugo.io/

I chose [Academic](https://themes.gohugo.io/academic/), as it was the closest fit for when I realised I could combine both blog and business site.

At this point, I was still thinking I'd have to host the website in a Docker container using my [aws-docker-host](https://github.com/binarymist/aws-docker-host) which works flawlessly and costs nothing, but as Docker is completely unnecessary if you have Github with a decent CDN in front of it, like Cloudflare, I'll skip the process I took to work out how that would be done. If you are interested, just ask in the [comments section](#comments) bellow.

## The Process

I needed to move the legacy BinaryMist blog, which was long over due for this, from Wordpress.com to Github. I've added redirect stubs to the [list of posts](/blog), that lead to many of the legacy posts on the Wordpress.com platform which haven't been migrated to the new platform. Going forward, all posts will be published from [binarymist.io/blog](/blog).

Once I found the theme for Hugo that would work best for my needs, I realised, I'd be able to not only migrate the blog, but also the BinaryMist business site, both to a really flexible platform.

I can work on blog posts on a specific branch without pushing to Github until finished, or just mark them as `draft = true`, or put the `date` to sometime in the future in the post's front-matter. This allows one to work on other content and merge reader comments (if you have them set-up, which [I do](#comments)) which are issued as pull requests directly into this Github repo by Staticman.

### Setting up Hugo

As I was playing with the Academic theme, and reading a blog post from the Academic creator, the version of Hugo in the Ubuntu Software Sources was very old, so I installed Hugo (.deb binary) on my machines, starting with the directions [here](https://georgecushen.com/create-your-website-with-hugo/#installing-hugo), which linked to [Hugo Releases](https://github.com/gohugoio/hugo/releases). 

{{< highlight bash >}}
cd ~
wget https://github.com/gohugoio/hugo/releases/download/v0.31/hugo_0.31_Linux-64bit.deb # or what ever the latest version is.

# This is where you should check the checksum... Then:
sudo dpkg -i hugo*.deb
{{< /highlight >}}

Once I had Hugo installed, I Worked through step 2 and 3 of the [quick start guide](https://gohugo.io/getting-started/quick-start/) to create the site, committing each change as I went:

From my local Source directory:

{{< highlight bash >}}
hugo new site BinaryMistBlog
cd BinaryMistBlog
git init
# As I had decided to use the academic theme:
git submodule add https://github.com/gcushen/hugo-academic.git themes/academic
{{< /highlight >}}

Now from step 3, 4 and 5 of the Installation section of the [Getting Started](https://themes.gohugo.io/theme/academic/post/getting-started/#installation) post from the [Demo](https://themes.gohugo.io/theme/academic/)/[`exampleSite`](https://github.com/gcushen/hugo-academic/tree/master/exampleSite) 

{{< highlight bash >}}
# Copy the example site to that which will become your personal site
cp -av themes/academic/exampleSite/* .
# Start hugo
hugo server
{{< /highlight >}}

By the way, `hugo server` is about the only command I use when working on my site. There is one other script that gets used to make my site live, but I'll cover that in a bit.

Once you've done any customisations you may want to do to your new site (of course you can do this latter instead if you like), it's  time to set-up how you are going to deploy your static site. For me, hosting directly from where your source control is is a no-brainer. Once this is set-up, there is one script to run every time you want to deploy, which as I said, I'll cover soon.

I chose to have my source on the [master](https://github.com/binarymist/BinaryMistBlog/tree/master) branch, and my generated site (which is generated to the public directory of my local sites root directory, on the [gh-pages](https://github.com/binarymist/BinaryMistBlog/tree/gh-pages) branch.

Before the following steps, I needed to install the latest git as there was a bug in the current version in the Ubuntu Software Sources that affects the git `worktree` feature. The resources I used for this:

* https://github.com/gohugoio/hugo/issues/3232
* https://discourse.gohugo.io/t/github-deployment-using-worktrees-failing/5918/7
* https://discourse.gohugo.io/t/simple-deployment-to-gh-pages/5003  
which led to:
* https://unix.stackexchange.com/questions/33617/how-can-i-update-to-a-newer-version-of-git-using-apt-get

To get your new git:

{{< highlight bash >}}
sudo add-apt-repository ppa:git-core/ppa
sudo apt-get update
sudo apt-get install git
{{< /highlight >}}

Now... for the next steps, head on over to: [Preparations for `gh-pages` Branch](https://gohugo.io/hosting-and-deployment/hosting-on-github/#deployment-from-your-gh-pages-branch).

Then add the commands to a script as the documentation [suggests](https://gohugo.io/hosting-and-deployment/hosting-on-github/#put-it-into-a-script). There is a script that you can take and customise. My script looks like [this](https://github.com/binarymist/BinaryMistBlog/blob/master/publish-to-gh-pages.sh):

{{< highlight bash >}}
#!/bin/bash
# Run from public

if [[ $(git status -s) ]]
then
    echo "The working directory is dirty. Please commit any pending changes."
    exit 1;
fi

cd ..

echo "Deleting old publication"
rm -rf public
mkdir public
git worktree prune
rm -rf .git/worktrees/public/

echo "Checking out gh-pages branch into public"
git worktree add -B gh-pages public origin/gh-pages

echo "Removing existing files"
rm -rf public/*

echo "Generating site"
hugo

echo "Updating gh-pages branch"
echo "cd'ing into public"
cd public

echo "Adding back the CNAME after deletion"
echo binarymist.io > CNAME

echo "git add'ing all to staging"
git add --all
echo "git commit'ing"
git commit -m "Publishing to gh-pages (publish.sh)"

echo "Do you wish to push this commit?"
select yn in "Yes" "No"; do
    case $yn in
        Yes ) git push origin gh-pages; break;;
        No ) exit;;
    esac
done
{{< /highlight >}}

<br>

## My Hugo Workflow

OK, so we're ready to start [customising](https://gohugo.io/themes/customizing/) our site and blogging. My workflow involves one console ([`terminator`](/blog/2013/01/19/a-decent-console-for-windows/), that's on Linux of course) split into four terminals:

1. Terminal 1 runs `hugo server`, I leave this running, it tells me if I introduce any errors, as I introduce them, and tells me what they are, as Hugo uses live reload, everything is instant, so you know as soon as you make any change if there is an issue
2. Terminal 2 runs my diffing tool (currently `diffuse`) as in, from within the root directory of my source, I just \[up-arrow\] -> \[Enter\] (which gives me `diffuse -m`) any time I want to check my changes
3. Terminal 3 Stays on my master branch. This is where I `git status`, `git commit`, `git push` from, etc. What happens in master in no way affects what is being pushed to gh-pages (live) though. `hugo` generates the static site from what ever is in the working directory, see next terminal
4. All that happens in the forth terminal, is I run `../`[`publish-to-gh-pages.sh`](https://github.com/binarymist/BinaryMistBlog/blob/master/publish-to-gh-pages.sh) from the sites root directory, which makes the site live. That's right, one script to make your site live

Now this is frictionless blogging :laughing:

If you are interested in getting a similar site set-up and are struggling, [let me know](/#contact) and I'll be happy to help.

In the next post we will discuss how commenting and blog subscription was set-up... Introducing dynamic behaviour to a static website...
