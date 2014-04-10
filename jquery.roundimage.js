/* jQuery Rounded Image by www.andre-abt.com */
$.fn.roundImage = function() {
    var element = $(this),
        svgWidth = element.width(),
        svgHeight = element.height(),
        imgUrl = element.attr('src');

        element.replaceWith('<svg width="' + svgWidth + '" height="' + svgHeight + '"><clipPath id="clipCircle"><circle r="50" cx="50" cy="50"/></clipPath><!-- the following separated src attribute acts as a browser fallback --><image clip-path="url(#clipCircle)" xlink:href="' + imgUrl + '" src="' + imgUrl + '" width="' + svgWidth + '" height="' + svgHeight + '"></image></svg>');
};
