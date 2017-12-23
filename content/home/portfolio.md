+++
# Projects widget.
# This widget displays all projects from `content/project/`.
widget = "projects"
active = true
date = "2016-04-20T00:00:00"

title = "Portfolio"
subtitle = ""

# Order that this section will appear in.
weight = 60

# View.
# Customize how projects are displayed.
# Legend: 0 = list, 1 = cards.
view = 1

# Filter toolbar.

# Default filter index (e.g. 0 corresponds to the first `[[filter]]` instance below).
filter_default = 0

# Add or remove as many filters (`[[filter]]` instances) as you like.
# Use "*" tag to show all projects or an existing tag prefixed with "." to filter by specific tag.
# To remove toolbar, delete/comment all instances of `[[filter]]` below.
[[filter]]
  name = "All Partnerships"
  tag = ".portfolio"
  
[[filter]]
  name = "Architecture / Engineering"
  tag = ".architecture-engineering-portfolio"

[[filter]]
  name = "DevOps"
  tag = ".devops-portfolio"

[[filter]]
  name = "Security"
  tag = ".security-portfolio"

[[filter]]
  name = "Testimonials"
  tag = ".testimonial"


+++

