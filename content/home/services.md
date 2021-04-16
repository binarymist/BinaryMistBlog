+++
# Projects widget.
# This widget displays all projects from `content/project/`.
widget = "portfolio"
headless = true  # This file represents a page section.
active = true

title = "Services"
subtitle = ""

# Order that this section will appear in.
weight = 20

[content]
  # Page type to display. E.g. project.
  page_type = "project"
  
  # Filter toolbar (optional).
  # Add or remove as many filters (`[[content.filter_button]]` instances) as you like.
  # To show all items, set `tag` to "*".
  # To filter by a specific tag, set `tag` to an existing tag name.
  # To remove toolbar, delete/comment all instances of `[[content.filter_button]]` below.
  
  # Default filter index (e.g. 0 corresponds to the first `[[filter_button]]` instance below).
  filter_default = 0
  
  [[content.filter_button]]
    name = "Productised Services"
    tag = ".js-id-productised-service"
  
  [[content.filter_button]]
    name = "Development Team Security"
    tag = ".js-id-development-team-security-service"

  [[content.filter_button]]
    name = "Organisational Security"
    tag = ".js-id-organisational-security-service"

  [[content.filter_button]]
    name = "All"
    tag = ".js-id-service"

[design]
  # Choose how many columns the section has. Valid values: 1 or 2.
  columns = "2"

  # Toggle between the various page layout types.
  #   1 = List
  #   3 = Card
  #   5 = Showcase
  view = 3

  # For Showcase view, flip alternate rows?
  flip_alt_rows = false

[design.background]
  # Apply a background color, gradient, or image.
  #   Uncomment (by removing `#`) an option to apply it.
  #   Choose a light or dark text color by setting `text_color_light`.
  #   Any HTML color name or Hex value is valid.
  
  # Background color.
  # color = "navy"
  
  # Background gradient.
  # gradient_start = "DeepSkyBlue"
  # gradient_end = "SkyBlue"
  
  # Background image.
  # image = "background.jpg"  # Name of image in `static/media/`.
  # image_darken = 0.6  # Darken the image? Range 0-1 where 0 is transparent and 1 is opaque.

  # Text color (true=light or false=dark).
  # text_color_light = true  
  
[advanced]
 # Custom CSS. 
 css_style = ""
 
 # CSS class.
 css_class = ""

+++

## What Differentiates Us

If you are looking to reduce the number of security defects produced by your development team(s), and increase their productivity, BinaryMist can work with you to achieve this.
We are focussed on helping you create value rather than trading time for money. Read what our customers [say about us](#portfolio).

### Bug Free Guarantee

For development work, we stand behind the software we produce. In-fact, we are so confident, that if you find a bug in the software we produce for you within six months (sometimes longer), we will fix it for free.
