(function ($) {
    $.fn.roundImage = function() {
        return this.each(function() {
            var image = $(this),
                svgWidth = image.width(),
                svgHeight = image.height(),
                imgSrc = image.attr('src'),
                uniqId = function() {
                    return Math.round(new Date().getTime() + (Math.random() * 100));
                },
                svgClipPathId = uniqId();
                image.replaceWith('<svg width="' + svgWidth + '" height="' + svgHeight + '"><clipPath id="' + svgClipPathId + '"><circle r="' + svgWidth/2 + '" cx="' + svgWidth/2 + '" cy="' + svgHeight/2 + '"/></clipPath><!-- the following separated src attribute acts as a browser fallback --><image clip-path="url(#' + svgClipPathId + ')" xlink:href="' + imgSrc + '" src="' + imgSrc + '" width="' + svgWidth + '" height="' + svgHeight + '"></image></svg>');
        });
    };
}(jQuery));
