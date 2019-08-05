+++
date = 2018-02-24
lastmod = 2018-02-24
draft = false
tags = ["hugo", "free-and-open-source", "web", "web-application", "css", "go", "captcha", "mta"]
title = "Hugo with Staticman Commenting and Subscriptions"
math = true
# By default the submission of new comments is enabled.
comments = false

summary = """
Adding Staticman commenting system to BinaryMist blog and Hugo Academic
"""

[header]
#image = "headers/getting-started.png"
#caption = "Image credit: [**Academic**](https://github.com/gcushen/hugo-academic/)"

+++

Continuing on from the [last post](/blog/2018/01/27/binarymist-web-migration/), in which we set-up the BinaryMist blog and business site on Hugo, it was now time to provide some functionality for you to be able to:

1. [Leave comments on posts](#leave-comments-on-posts)
2. [Subscribe to comments on specific blog posts](#subscribe-to-comments-on-specific-blog-posts)
2. [Subscribe to notification by email as new blog posts are published](#subscribe-to-notification-by-email-as-new-blog-posts-are-published)

Hugo [uses Disqus](https://gohugo.io/content-management/comments/) as it's default reader commenting system which is a shame, as [Disqus is evil](https://f1.holisticinfosecforwebdevelopers.com/chap06.html#leanpub-auto-alternative-approaches), but never fear, I've gone ahead and got a commenting system set-up for the Academic theme that won't abuse you. Your comments are actually hosted from the same place as this website is running from, your email address is md5 hashed, so it's not visible to the public in clear text anywhere. For example, this is the hash of my email address:  
`01486cfc6aa638a6f8e85142c645fcd7`

## What's on Offer?

I reviewed the [other offerings](https://gohugo.io/content-management/comments/#comments-alternatives) promoted by Hugo:

* Disqus: As discussed, No thanks!
* Texpen: Their site doesn't respond for me
* IntenseDebate: Closed source (I think). Looks like they want to sign the consumer up, I'm guessing this costs money. What ever their deal is, they're not up-front enough about it for me
* GraphComment: Closed source
* Mutt: Closed source, costs money
* isso: Python and open (great), but the consumer has to self host, may not be a show stopper, but we can do better

This leaves the free and open [Staticman](https://staticman.net/). You can see some of the other sites that use Staticman [here](https://github.com/eduardoboucas/staticman#sites-using-staticman). Staticman ticked all of my boxes, apart from the fact I'd like to see some more contributors to the project, but hay, if that is honestly a problem, then I should be contributing, and I guess I am in a small way. In saying that, Worst case scenario, is that the project becomes dormant, and one of the consumers, will need to become a producer, and/or we have to self host it. Big ups to [@eduardoboucas](https://github.com/eduardoboucas) for running this project for free, and in his spare time. It's people like this that make the open source world what it is.

## Staticman it is, Let's move on

If you subscribe to [comments](#comments) on any of the BinaryMist blog posts, your email address will be stored in a mailing list that I control. You can unsubscribe at any time, and I will not spam you. You can also tell me to remove you at any time and I will make sure your request is honoured. If you check the "_Notify me of new comments on this post_" (on this or any other post), your email will go into my private mailing list, and will also only be visible as a hash in a Github pull request. That's right, they look like this (`01486cfc6aa638a6f8e85142c645fcd7`) remember? You can also see what these look like [here](https://github.com/binarymist/BinaryMistBlog/pulls?q=is%3Apr+is%3Aclosed).

Now that I had decided to go the Staticman route, I needed to consolidate on the documentation, examples, and start to build a picture of how this was going to work.

* The Beautifulhugo theme [appear(es|ed) to support](https://themes.gohugo.io/beautifulhugo#staticman-support) Staticman, but there was no relevant config in the [`config.toml`](https://github.com/halogenica/beautifulhugo/blob/ebfb6b87803f906382775ba90efdd9e1ebf31280/exampleSite/config.toml) or [`staticman.yml`](https://github.com/halogenica/beautifulhugo/tree/ebfb6b87803f906382775ba90efdd9e1ebf31280/exampleSite). Let me know if I have missed some of their documentation that explains the required config? The [`single.html`](https://github.com/halogenica/beautifulhugo/blob/ebfb6b87803f906382775ba90efdd9e1ebf31280/layouts/_default/single.html) layout and [`staticman-comments.html`](https://github.com/halogenica/beautifulhugo/blob/ebfb6b87803f906382775ba90efdd9e1ebf31280/layouts/partials/staticman-comments.html) was marginally helpful
* The gohugohq [howto](https://gohugohq.com/howto/staticman-hugo-comment-system/) was also marginally helpful.

If I had to do this again I would ignore both of the above Beautifulhugo and gohugohq examples.

The Staticman [official documentation](https://staticman.net/docs/) is good, but will be even better with a little more time, the info is there, just that some of it is not as clear as it could be, but I know it's being improved as we speak.

## Leave Comments on Posts

The creator of Staticman was nice enough to create a model Hugo site to demo Staticman working with Hugo. The following were the most helpful examples to set this up with Hugo:

* Demo site: https://hugo.staticman.net/post/my-entry/
* Config file: https://github.com/eduardoboucas/hugo-plus-staticman/blob/master/staticman.yml
* The layout partial that handles the markup for the comment display and posting: https://github.com/eduardoboucas/hugo-plus-staticman/blob/master/themes/hugo-type-theme/layouts/partials/post-comments.html
* I used the style-sheet from the Staticman creators [own website](https://eduardoboucas.com/blog/2017/11/14/static-api-generator.html#post-new-comment) ([source](https://github.com/eduardoboucas/eduardoboucas.github.io)) for the "_Notify me of new comments on this post_" checkbox as a starting point

In order for the comment count to be displayed in the `article_metadata.html` (That's at the top of each post and listed under each posts title in the [list](/blog)), the blog posts `slug` needs to be in the front matter of each post:

{{< highlight md >}}
# Slug is required for counting comments.
slug = "blog-post-file-name-without-md"
{{< /highlight >}}

If you decide to have Staticman issue a pull request for each reader comment (see [step 4](https://staticman.net/docs/index.html#step-4-approve-entries-optional) of the getting started guide), you can also [set-up a webhook](https://staticman.net/docs/webhooks) to have Static man delete the branch once you have accepted or closed the pull request.

## Subscribe to Comments on Specific Blog Posts

This is where you set-up a Mailgun account and your domain within it. Go ahead and sign up for a free Mailgun account.

The most useful piece of documentation for this was an [issue thread](https://github.com/eduardoboucas/staticman/issues/42) in which @eduardoboucas explained how this should work. Some of the following comments on the thread were also useful.

From the [`staticman.sample.yml`](https://github.com/eduardoboucas/staticman/blob/master/staticman.sample.yml) which you copied to your sites root directory and modified, based on the directions in the official [documentation](https://staticman.net/docs/), you will need to uncomment the `#notifications:`, `#enabled: true` and add your encrypted `apiKey` and `domain` that Staticman [encrypts](https://staticman.net/docs/encryption) for you (also discussed in the issue thread mentioned above) if you use the API.

## Subscribe to notification by email as new blog posts are published

Once I had the above set-up and working, this step only took an afternoon. What was involved:

* Added the `blogSubscribers` section to `staticman.yml`, I will discus this when we look at the code in the next section
* Added the `post.html` (shown below). This will `POST` your subscription, and display a confirmation screen
* Some more styling added to `override.css`
* On first `POST` the mailing list will be created in your Mailgun account. I then just gave it a sensible name, so I can see what the purpose of the list is at a glance, as Staticman provides a "[_MD5 hash of the Github username, repository, and entry id concatenated together_](https://github.com/eduardoboucas/staticman/issues/42#issuecomment-283981036)" which is prefixed to the Alias Address of the new Mailgun mailing list that you can send notifications to. If you have `moderation: true` in your `staticman.yml` under the section responsible for this (`blogSubscribers` in my case), you will receive a pull request each time someone subscribes.  

    If you are like me and would like to address notifications to a name/handle, the following is currently required:  

    Once I receive the Github pull request from Staticman for blog subscription, if it looks legitimate, I need to `md5sum` the email address in the new Mailgun record:  
{{< highlight bash >}}
echo -n [the-email-address-from-mailgun-record] | md5sum
{{< /highlight >}}  
and compare the result with the hashed email in the pull request. Then take the name from that pull request and apply it to the Mailgun entry. This is a small piece of manual work that would be nice if Staticman could send the name as well and have it added to the email records `name` variable.  

    The pull request can be closed, unless for some reason you want it merged.

#### Sending Email to Subscribers

Once you have the above set-up, sending the email is as simple as:

{{< highlight bash >}}
curl -s --user 'api:key-[key-hash-goes-here]' \
   https://api.mailgun.net/v3/mailgun.binarymist.io/messages \
   -F from='<your-name> <email-address-that-subscribers-can-reply-to>' \
   -F to=<your-mailgun-email-address> \
   -F subject='New Blog Post from You' \
   --form-string html='<html>Hi %recipient.name%.<br><br>This is a link to the new post: <a href="https://<your-domain>/<post-slug>"><name-of-your-post></a><br><br> Enjoy!<br><br>-You.<br><br><br>If at any point you would like to unsubscribe from this mailing list, click <a href="%mailing_list_unsubscribe_url%">Unsubscribe</a></html>'
{{< /highlight >}}

## Show me the Code

Firstly, all of this is up and running on the blog you are reading now.

You may also notice the `botpot` `input` field on both forms. This is from a mitigations [section](https://f1.holisticinfosecforwebdevelopers.com/chap06.html#web-applications-countermeasures-captcha) in the Web Applications chapter of my second book around captchas, and how they place the website owners problem on the end uers. Bots are not the end users problem, so why should they have to jump through hoops to submit a simple form? Check out my research on the topic.

* [The problem](https://f1.holisticinfosecforwebdevelopers.com/chap06.html#leanpub-auto-captcha)
* [The solution(s)](https://f1.holisticinfosecforwebdevelopers.com/chap06.html#web-applications-countermeasures-captcha)

Enough ranting... The following are the new parts I added to `config.toml`:

###### Modified File: [`config.toml`](https://github.com/binarymist/BinaryMistBlog/blob/master/config.toml)
{{< highlight toml >}}
# Comment out disqusShortname Key/Value pair
#disqusShortname = ""

# Add the following new Table somewhere under the params table
  [params.staticman]
  endpoint = "https://api.staticman.net/v2/entry"
  username = "binarymist"
  repository = "BinaryMistBlog"
  branch = "master"
{{< /highlight >}}

###### New File: [`staticman.yml`](https://github.com/binarymist/BinaryMistBlog/blob/master/staticman.yml)

This is required by Staticman. You'll notice I have a `comments` section and a `blogSubscribers` section. The former is used by Staticman when you submit a comment on a specific post, you can see this in action [below](#comments). The latter is used by Staticman when you subscribe to be notified of a new blog post, you can see this in action [here](/blog). If all you need is blog comments, you only need the `comments` section.

###### New Override: [`/layouts/partials/comments.html`](https://github.com/binarymist/BinaryMistBlog/blob/master/layouts/partials/comments.html)

`comments.html` is used for posting and subscribing to each specific blog post comment thread, and was copied from `/themes/academic/layouts/partials/` and modified extensively. The first lines diff:

{{< highlight diff >}}
- {{ if and .Site.DisqusShortname (not (or .Site.Params.disable_comments .Params.disable_comments)) }}
+ {{ if and (or .Site.DisqusShortname .Site.Params.staticman) (not (or .Site.Params.disable_comments .Params.disable_comments)) }}
{{< /highlight >}}

Lines 3 - 4 and 6 - 71 are brand new lines:

{{< highlight html "linenos=inline,hl_lines=3-4 6-71">}}
{{ if and (or .Site.DisqusShortname .Site.Params.staticman) (not (or .Site.Params.disable_comments .Params.disable_comments)) }}
  <section id="comments">
    {{ if .Site.DisqusShortname }}
      <div class="disqus-comments">
        {{ template "_internal/disqus.html" . }}
      </div>
    {{ end }}
    {{ if .Site.Params.staticman }}
      <section class="staticman-comments post-comments">
        <h3>Comments</h3>

        {{ $comments := readDir "data/comments" }}
        {{ $.Scratch.Add "hasComments" 0 }}
        {{ $postSlug := .Source.BaseFileName }}

        {{ range $comments }}
          {{ if eq .Name $postSlug }}
            {{ $.Scratch.Add "hasComments" 1 }}
            {{ range $index, $comments := (index $.Site.Data.comments $postSlug ) }}            
              <div id="commentid-{{ ._id }}" class="post-comment">
                <div class="post-comment-header">
                  <img class="post-comment-avatar" src="https://www.gravatar.com/avatar/{{ .email }}?s=70&r=pg&d=identicon">
                  <p class="post-comment-info">
                    <span class="post-comment-name">{{ .name }}</span>
                    <br>
                    <a href="#commentid-{{ ._id }}" title="Permalink to this comment">
                      <time class="post-time">{{ dateFormat "Monday, Jan 2, 2006 at 15:04 MST" .date }}</time>
                    </a>
                  </p>
                </div>
                {{ .comment | markdownify }}
              </div>
            {{ end }}       
          {{ end }}
        {{ end }}

        {{ if eq ($.Scratch.Get "hasComments") 0 }}
          <p>Be the first to leave a comment.</p>
        {{ end }}
        
        <h3>Say something</h3>
        Your email is used for <a href="https://gravatar.com" target="_blank">Gravatar</a> image and reply notifications only.
        
        
        <form class="post-new-comment" method="post" action="{{ .Site.Params.staticman.endpoint }}/{{ .Site.Params.staticman.username }}/{{ .Site.Params.staticman.repository }}/{{ .Site.Params.staticman.branch }}/comments">
          <input type="hidden" name="options[redirect]" value="{{ .Permalink }}#comment-submitted">
          <input type="hidden" name="options[slug]" value="{{ .Source.BaseFileName }}">
          <input type="hidden" name="fields[postName]" value="{{ .Source.BaseFileName }}"/>          
          <input type="text" name="fields[name]" class="post-comment-field" placeholder="Name *" required/>
          <input type="email" name="fields[email]" class="post-comment-field" placeholder="Email address (will not be public) *" required/>          
          <input type="address" name="fields[botpot]" placeholder="botpot (do not fill!)" style="display: none"></textarea>          
          <textarea name="fields[comment]" class="post-comment-field" placeholder="Comment (markdown is accepted) *" required rows="10"></textarea>
          <!-- Following fields used for subscribing to comments -->
          <input type="hidden" name="options[origin]" value="{{ $.Permalink }}#comments">
          <input type="hidden" name="options[parent]" value="{{ .Source.BaseFileName }}">
          <input id="form-submit" type="checkbox" name="options[subscribe]" class="checkbox post-comment-field" value="email">
          <label for="form-submit" class="post-comment-field checkbox-label"> &nbsp Notify me of new comments on this post</label>
          <!-- End following fields used for subscribing to comments -->
          <input type="submit" class="post-comment-field btn btn-primary comment-buttons" value="Submit">
        </form>
      </section>

      <div id="comment-submitted" class="dialog">
        <h3>Thank you</h3>
        <p>Your comment has been submitted and will be published once it has been approved.</p>
        <p><a href="https://github.com/{{ .Site.Params.staticman.username }}/{{ .Site.Params.staticman.repository }}/pulls">Click here</a> to see the pull request you generated.</p>
        
        <p><a href="#" class="btn btn-primary comment-buttons ok">OK</a></p>
      </div>

    {{ end }}
  </section>
{{ end }}
{{< /highlight >}}

###### New Override: [`/layouts/partials/article_metadata.html`](https://github.com/binarymist/BinaryMistBlog/blob/master/layouts/partials/article_metadata.html)

`article_metadata.html` is used for displaying the comment count directly under the title of each blog post in the [post list](/blog) and at the top of each post. You won't see the count unless there are actually comments on the post. `article_metadata.html` was copied from `/themes/academic/layouts/partials/` and modified.

Line 21 diff:

{{< highlight diff >}}
-   {{ $comments_enabled := and $.Site.DisqusShortname (not (or $.Site.Params.disable_comments $.Params.disable_comments)) }}
+   {{ $comments_enabled := and (or $.Site.DisqusShortname $.Site.Params.staticman) (not (or $.Site.Params.disable_comments $.Params.disable_comments)) }}
{{< /highlight >}}

Lines 23 and 27 - 43 are brand new lines:

{{< highlight html "linenos=inline,hl_lines=23 27-43">}}
{{ $is_list := .is_list }}
{{ $ := .content }}
<div class="article-metadata">

  <span class="article-date">
    {{ if ne $.Params.Lastmod $.Params.Date }}
        {{ i18n "last_updated" }}
    {{ end }}
    <time datetime="{{ $.Date }}" itemprop="datePublished">
      {{ $.Lastmod.Format $.Site.Params.date_format }}
    </time>
  </span>

  {{ if ne $.Site.Params.reading_time false }}
  <span class="middot-divider"></span>
  <span class="article-reading-time">
    {{ $.ReadingTime }} {{ i18n "minute_read" }}
  </span>
  {{ end }}

  {{ $comments_enabled := and (or $.Site.DisqusShortname $.Site.Params.staticman) (not (or $.Site.Params.disable_comments $.Params.disable_comments)) }}
  {{ if and $comments_enabled ($.Site.Params.comment_count | default true) }}
    {{ if $.Site.DisqusShortname }}
      <span class="middot-divider"></span>
      <a href="{{ $.Permalink }}#disqus_thread"><!-- Count will be inserted here --></a>
    {{ end }}
    {{ if $.Site.Params.staticman }}
      {{ $.Scratch.Set "commentCountPerPost" 0 }}
      {{ if $.Slug }} <!-- Can't count comments without slug -->
        {{ if fileExists (printf "data/comments/%s" $.Slug) }} <!-- If the comment dir exists, we can count comments -->
          {{ $comments := readDir (printf "data/comments/%s" $.Slug) }}
          {{ $.Scratch.Set "commentCountPerPost" (len $comments) }}
        {{ end }}        
      {{ end }}
      {{ if gt ( $.Scratch.Get "commentCountPerPost" ) 1 }}
        <span class="middot-divider"></span>
        <a href="{{ $.Permalink }}#comments">{{ $.Scratch.Get "commentCountPerPost" }} Comments</a>
      {{ else if eq ( $.Scratch.Get "commentCountPerPost" ) 1 }}
        <span class="middot-divider"></span>
        <a href="{{ $.Permalink }}#comments">1 Comment</a>
      {{ end }}
    {{ end }}
  {{ end}}

  {{ if isset $.Params "categories" }}
  {{ $categoriesLen := len $.Params.categories }}
  {{ if gt $categoriesLen 0 }}
  <span class="middot-divider"></span>
  <span class="article-categories">
    <i class="fa fa-folder"></i>
    {{ range $k, $v := $.Params.categories }}
    <a href="{{ "/categories/" | relLangURL }}{{ . | urlize | lower }}">{{ . }}</a
    >{{ if lt $k (sub $categoriesLen 1) }}, {{ end }}
    {{ end }}
  </span>
  {{ end }}
  {{ end }}

  {{ if ne $is_list 1 }}
  {{ partial "share.html" $ }}
  {{ end }}

</div>
{{< /highlight >}}

###### New Override: [layouts/section/post.html](https://github.com/binarymist/BinaryMistBlog/blob/master/layouts/section/post.html)

`post.html` is used for [subscribing](/blog) to new blog posts, and was copied from `/themes/academic/layouts/section/` and modified. Lines 14 - 40 are brand new lines.

{{< highlight html "linenos=inline,hl_lines=14-40">}}
{{ partial "header.html" . }}
{{ partial "navbar.html" . }}

{{ partial "header_image.html" . }}

<div class="universal-wrapper">

  <h1>{{ .Title | default (i18n "posts") }}</h1>

  {{ with .Content }}
  <div class="article-style" itemprop="articleBody">{{ . }}</div>
  {{ end }}
  {{ $paginator := .Paginate .Data.Pages }}
  {{ if eq ( $paginator.PageNumber ) 1 }}
    {{ .Scratch.Set "redirectUrl" (print .Permalink "#blogsubscription-submitted") }}
  {{ else }}
    {{ .Scratch.Set "redirectUrl" (print .Permalink "page/" $paginator.PageNumber "/#blogsubscription-submitted") }}
  {{ end }}
  <section class="subscribe-to-blog">
    <form class="post-blogsubscribe" method="post" action="{{ .Site.Params.staticman.endpoint }}/{{ .Site.Params.staticman.username }}/{{ .Site.Params.staticman.repository }}/{{ .Site.Params.staticman.branch }}/blogSubscribers">
      <input type="hidden" name="options[redirect]" value="{{ .Scratch.Get "redirectUrl" }}">
      <input type="hidden" name="options[slug]" value="post-collection">
      <input type="text" name="fields[name]" class="post-blogsubscriber-field left" placeholder="Name *" required/>
      <input type="email" name="fields[email]" class="post-blogsubscriber-field right" placeholder="Email address (not publicised) *" required/>          
      <input type="address" name="fields[botpot]" placeholder="botpot (do not fill!)" style="display: none"></textarea>          
      <!-- Following fields used for subscription -->
      <input type="hidden" name="options[origin]" value="{{ $.Permalink }}">
      <input type="hidden" name="options[parent]" value="post-collection">
      <input type="hidden" name="options[subscribe]" value="email">
      <!-- End following fields used for subscription -->
      <input type="submit" class="btn btn-primary comment-buttons post-blogsubscriber-btn" value="Subscribe to new posts &nbsp &nbsp -- &nbsp &nbsp Unsubscribe at any time">
    </form>
  </section>
  <div id="blogsubscription-submitted" class="dialog">
    <h3>Thank you</h3>
    <p>Your subscription request has been submitted.</p>
    <p>You will receive a notification email of new posts when they are published.</p>
    <p>There will be an unsubscribe link in the notification emails if you wish to unsubscribe.</p>
    <p><a href="#" class="btn btn-primary comment-buttons ok">OK</a></p>
  </div>
  {{ range $paginator.Pages }}
    {{ $params := dict "post" . }}
    {{ partial "post_li" $params }}
  {{ end }}

  {{ partial "pagination" . }}

</div>
{{ partial "footer_container.html" . }}
{{ partial "footer.html" . }}
{{< /highlight >}}

###### Modified File: [`override.css`](https://github.com/binarymist/BinaryMistBlog/blob/3eb7dbb1531fc1f6bd1c42d033c2b8acea454b47/static/css/override.css#L122-L286)

In the `config.toml`, you can provide style overrides:

{{< highlight toml >}}
custom_css = ["override.css"]
{{< /highlight >}}

The relevant styling is all commented and looks like the following:

{{< highlight css "linenos=inline,linenostart=122">}}
/* Staticman comment section and form */

.post-comments {
   margin-top: 60px;
}

.post-comment {
   background-color: rgb(247, 247, 247);
   padding: 20px;
   margin-top: 20px;
}

.post-comment-header {
   margin-bottom: 20px;
}

.post-comment-avatar {
   display: inline-block;
   vertical-align: middle;
   border-radius: 50%;
}

.post-comment-info {
   display: inline-block;
   margin-left: 20px;
   margin-bottom: 0;
   vertical-align: middle;
}

/* Part of blog subscription also */
.post-comment-field, .post-blogsubscriber-btn {
   display: block;
   font: inherit;
   padding: 10px;
   margin-top: 20px;
   outline-color: #9b6bcc;
   width: 100%;
}

.btn-primary.comment-buttons {
   background: #9b6bcc !important;
   border-color: #9b6bcc !important;
   font-size: 0.9rem;
   padding: 10px 14px 9px;
   border-radius: 6px;
}

.btn-primary.comment-buttons:hover {
   background: #53237f !important;
}

.post-comment-info .post-comment-name {
   font-size: 1.4rem;
   font-weight: 500;

}

.post-comment-info .post-time {
   font-size: 14px;
   font-weight: normal;
   letter-spacing: 0.03em;
   color: #888;

}

.post-comment-info .post-time:hover {
   color: #9b6bcc;
}


/* End staticman comment section and form */

/* Staticman comment submission confirmation dialog */

.dialog {
   display: none;
   position: fixed;
   background-color: rgb(247, 247, 247);
   padding: 25px;
   padding-top: 20%;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   text-align: center;
}

.dialog:target {
   display: block;
}

.dialog .btn-primary.comment-buttons.ok {
   width: 7rem;
}

/* End staticman comment submission confirmation dialog */

/* Notify me of new comments checkbox */

input[type=checkbox].checkbox {
   display: none;
}

.checkbox-label {
   position: relative;
   padding-left: 0px;
   padding-bottom: 0px;
   margin-top: 10px;
   margin-bottom: 15px;
   float: left;
}

.checkbox-label:before {
   content: ' ';
   display: inline-block;
   width: 25px;
   height: 25px;
   border-width: 1px;
   border-style: solid;
   vertical-align: middle;
   position: relative;
   bottom: 2px;color: rgb(169, 169, 169);    
}

.checkbox:checked+.checkbox-label:after {
   content: 'x';
   display: inline-block;
   position: absolute;
   width: 25px;
   height: 25px;
   border-width: 2px;
   line-height: 25px;
   top: 11px;
   left: 1px;
   font-family: sans-serif;
   text-align: center;
}

/* End notify me of new comments checkbox */

/* Subscribe to blog posts */

.post-blogsubscriber-field.left {
   clear: left;
   float: left;
   font: inherit;
   padding: 10px;
   margin-top: 20px;
   margin-bottom: 20px;
   outline-color: #9b6bcc;
   width: 48%;  
}

.post-blogsubscriber-field.right {
   clear: none;
   float: right;
   font: inherit;
   padding: 10px;
   margin-top: 20px;
   margin-bottom: 20px;
   outline-color: #9b6bcc;
   width: 48%;  
}

/* End subscribe to blog posts */
{{< /highlight >}}

<br>

## Contributing back to the Hugo Academic theme

The changes we've just been discussing have now been submitted back to mainline Hugo Academic theme.

* [Issue](https://github.com/gcushen/hugo-academic/issues/427)
* [Pull Request](https://github.com/gcushen/hugo-academic/pull/438)

