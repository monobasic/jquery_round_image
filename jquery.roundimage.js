(function ($) {
    $.fn.roundImage = function () {
        var drawHover = function (borderHover, uniqId) {
            var returnValue = '';

            if (typeof borderHover !== 'undefined' && borderHover !== null && borderHover.replace(/^\s+|\s+$/g, '') != "") {
                returnValue = '<style>/* <![CDATA[ */' +
                                    'circle#circle_' + uniqId + ':hover {' +
                                        'stroke: ' + borderHover + ';' +
                                    '}' +
                                '/* ]]> */</style>';
            }

            return returnValue;
        };

        var drawBgColor = function (radius, imageWidth, imageHeight, bgColor) {
            var returnValue = '';

            if (typeof bgColor !== 'undefined' && bgColor !== null && bgColor.replace(/^\s+|\s+$/g, '') != "") {
                returnValue = '<circle r="' + (radius - 2) + '" cx="' + imageWidth / 2 + '" cy="' + imageHeight / 2 + '" fill="' + bgColor + '" />';
            }

            return returnValue;
        };

        var drawBorder = function (radius, imageWidth, imageHeight, borderColor, borderWidth, uniqId) {
            var returnValue = '';

            if (typeof borderColor !== 'undefined' && borderColor !== null && borderColor.replace(/^\s+|\s+$/g, '') != "" &&
                typeof borderWidth !== 'undefined' && borderWidth !== null && borderWidth.toString().replace(/^\s+|\s+$/g, '') != "") {
                returnValue = '<circle id="circle_' + uniqId + '" r="' + (radius - 2) + '" cx="' + imageWidth / 2 + '" cy="' + imageHeight / 2 + '" stroke="' + borderColor + '" stroke-width="' + borderWidth + '" fill="transparent" />';
            }

            return returnValue;
        };

        var drawImage = function (radius, imageWidth, imageHeight, borderColor, borderWidth, borderHover, uniqId, imgSrc) {
            var returnValue = '<image clip-path="url(#clippath_' + uniqId + ')" xlink:href="' + imgSrc + '" src="' + imgSrc + '" width="' + imageWidth + '" height="' + imageHeight + '" ';

            if (typeof borderColor !== 'undefined' && borderColor !== null && borderColor.replace(/^\s+|\s+$/g, '') != "" &&
                typeof borderWidth !== 'undefined' && borderWidth !== null && borderWidth.toString().replace(/^\s+|\s+$/g, '') != "") {
                returnValue += 'style="border:' + borderWidth + 'px solid ' + borderColor + '" ';
            }
            if (typeof borderHover !== 'undefined' && borderHover !== null && borderHover.replace(/^\s+|\s+$/g, '') != "") {
                returnValue += ' onmouseover="this.style.borderColor=\'' + borderHover + '\';" onmouseout="this.style.borderColor=\'' + borderColor + '\';"';
            }

            return returnValue + '></image>';
        };

        var drawClipPath = function (radius, imageWidth, imageHeight, uniqId) {
            return '<clipPath id="clippath_' + uniqId + '">' +
                        '<circle r="' + (radius - 2) + '" cx="' + imageWidth / 2 + '" cy="' + imageHeight / 2 + '" />' +
                   '</clipPath>';
        };

        return this.each(function () {
            var image = $(this),
                imageWidth = image.width(),
                imageHeight = image.height(),
                imgSrc = image.attr('src'),
                radius = Math.min(imageWidth, imageHeight) / 2,
                bgColor = image.data("bg-color"),
                borderColor = image.data("stroke"),
                borderWidth = image.data("stroke-width"),
                borderHover = image.data("stroke-hover"),
                svg = '<svg width="' + imageWidth + '" height="' + imageHeight + '">',
                uniqId = Math.round(new Date().getTime() + (Math.random() * 100));

            svg += drawHover(borderHover, uniqId) + drawBgColor(radius, imageWidth, imageHeight, bgColor) +
                   drawClipPath(radius, imageWidth, imageHeight, uniqId) +
                   drawImage(radius, imageWidth, imageHeight, borderColor, borderWidth, borderHover, uniqId, imgSrc) +
                   drawBorder(radius, imageWidth, imageHeight, borderColor, borderWidth, uniqId);

            image.replaceWith(svg + '</svg>');
        });
    };
}(jQuery));