when using the new_filter.js:

html style must exactly match the main.html styling:

1. form select option part:

option texts must match exactly with the tags given to each card.

2. cards class part:

Must be exactly in this order (from parentNode to childNode)

div class="cards"
|- a
 |- div class="card-tags"
  |- ul class="tags"
   |- li class="service" (the order is interchangeable with industry)
   |- li class="industry" (vice versa)

3. Supported for multiple service tags and/or industry tags
