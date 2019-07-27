+++
date = 2012-03-11
lastmod = 2012-03-11
draft = false
tags = ["architecture", "c-sharp", "design-pattern", "dot-net"]
title = "Keeping your events thread safe"
math = true
summary = """
Redirects to legacy blog post.

An area I’ve noticed where engineers often forget to think about synchronization is when firing events. It seems to be a common misconception, that all that is needed to keep synchronisation, is to check the delegate (technically a `MulticastDelegate`, or in architectural terms the publisher of the publish-subscribe pattern (more commonly known as the observer pattern)) for null.
"""

disable_comments = true

[header]
#image = "headers/getting-started.png"
#caption = "Image credit: [**Academic**](https://github.com/gcushen/hugo-academic/)"

+++

<html>
  <head>
    <title>Keeping your events thread safe</title>
    <link rel="canonical" href="https://binarymist.wordpress.com/2012/03/11/keeping-your-events-thread-safe/"/>
    <meta http-equiv="content-type" content="text/html; charset=utf-8"/>
    <meta http-equiv="refresh" content="2; url=https://binarymist.wordpress.com/2012/03/11/keeping-your-events-thread-safe/"/>
  </head>
</html>
