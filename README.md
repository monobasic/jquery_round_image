jQuery Round Image
==================

This little plugin generates the popular clipped circle images (as example for avatar images) via javascript out of rectangle images.
This works via a generated SVG Element and a Clipping Mask. The src attribute inside the svg provides backwards compatibility. (http://lynn.ru/examples/svg/en.html)

A way to use this is to add a class to all images on your site, that you want to replace with round ones and then call the script like a normal jQuery method like that:

<pre>
$(document).ready(function() {
    $('.img-rounded').roundImage();
});
</pre>
