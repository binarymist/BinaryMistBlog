+++
date = 2017-12-31
lastmod = 2017-12-31
draft = true
tags = ["", ""]
title = "BinaryMist Web Migration"
math = true

# Slug is required for counting comments.
slug = "bm-web-migration"

summary = """
Todo.
"""

[header]
#image = "headers/getting-started.png"
#caption = "Image credit: [**Academic**](https://github.com/gcushen/hugo-academic/)"

+++

From:
Business site: AWS, Docker, Node
Blog: Wordpress.com

To:
Business site and blog: Hugo, Github pages, Staticman

Why:
I needed to move my legacy blog, which was long over due for this, from Wordpress.com to Github.

Once I found the right theme for Hugo, I realised, I'd be able to not only migrate the blog, but also the BinaryMist business site, both to a really flexible platform.

Wordpress.com had so many issues that really bugged me. One of my goals was to do everything for no monetary cost.

The free Wordpress.com platform is inflexible, non-extensible, buggy (especially for showing source code), always felt like I was fighting the platform to do just about anything, multiple view ports were not well supported, no control over speeding up loadtime, backups were a pain, I used a wget scripts, so many other issues.






I can work on blog posts on a specific branch without pushing to github until finished. This allows one to work on other content, merge reader comments which are issued as pull requests by staticman.



Used the CSS from staticman creators [own website](https://eduardoboucas.com/blog/2017/11/14/static-api-generator.html) ([source](https://github.com/eduardoboucas/eduardoboucas.github.io)) for the notify me of new comments checkbox






#### Reader comments

Hugos default is [to use Disqus](https://gohugo.io/content-management/comments/), as Disqus is evil, I decided to use staticman

Staticman docs are [here](https://staticman.net/docs/)

Other [sites using Staticman](https://github.com/eduardoboucas/staticman#sites-using-staticman)

##### Decision on commenting systems

Todo: Discuss the offerings, pro's and con's.


Now that I had decided to go the Staticman route, I needed to consolidate on the documentation and examples.

* The Beautifulhugo theme [appear(es|ed) to support](https://themes.gohugo.io/beautifulhugo#staticman-support) Staticman, but there was no relevant config in the [config.toml](https://github.com/halogenica/beautifulhugo/blob/ebfb6b87803f906382775ba90efdd9e1ebf31280/exampleSite/config.toml) or [staticman.yml](https://github.com/halogenica/beautifulhugo/tree/ebfb6b87803f906382775ba90efdd9e1ebf31280/exampleSite). The [single.html](https://github.com/halogenica/beautifulhugo/blob/ebfb6b87803f906382775ba90efdd9e1ebf31280/layouts/_default/single.html) layout and [staticman-comments.html](https://github.com/halogenica/beautifulhugo/blob/ebfb6b87803f906382775ba90efdd9e1ebf31280/layouts/partials/staticman-comments.html) was marginally helpful
* The gohugohq [howto](https://gohugohq.com/howto/staticman-hugo-comment-system/) was also marginally helpful.

If I had to do this again I'd ignore both of the above examples.




##### Setting up Hugo with Staticman

Work through the [docs](https://staticman.net/docs/)








The creator of Staticman was nice enough to create a model Hugo site to demo Staticman working with Hugo.

* The site: https://hugo.staticman.net/post/my-entry/
* The config file: https://github.com/eduardoboucas/hugo-plus-staticman/blob/master/staticman.yml
* The layout partial that handles the markup for the comment display and posting: https://github.com/eduardoboucas/hugo-plus-staticman/blob/master/themes/hugo-type-theme/layouts/partials/post-comments.html
* 






##### Setup to delete branches that static man creates




##### Setup mailgun account

Sign up for a free mailgun account.

From the [staticman.sample.yml](https://github.com/eduardoboucas/staticman/blob/master/staticman.sample.yml) which you copied to your sites root directory and modified, you'll need to uncomment the `#notifications:`, `#enabled: true` and add your `apiKey` and `domain`.





Still not working: https://github.com/eduardoboucas/staticman/issues/42



##### Contributing back to the Hugo Academic theme

https://github.com/gcushen/hugo-academic/issues/427




