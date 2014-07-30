jQuery Round Image
==================

This little plugin generates the popular clipped circle images (as example for avatar images) via javascript out of rectangle images.
It works with replacement of the image with a SVG element and a clipping mask. The src attribute inside the svg provides backwards compatibility for some older browsers. (http://lynn.ru/examples/svg/en.html) - if you need more, it should be ease to add a modernizr check and render a standard img tag for unsupported browsers.

A way to use this is to add a class to all images on your site, that you want to replace and call the script like a normal jQuery method:

<pre>
$(document).ready(function() {
    $('.img-rounded').roundImage();
});
</pre>

Please note:
- You need to include the width and height attributes for the image and they need to be consitent to the actual image size
- Checkout the included example.html
- Further chaining with other jQuery methods targets the svg element, not the original image
