/*
    A hacked plugin that allows to create round images using SVG. 
    The original source was not able to draw a border and hover.
    See below for original source;
    https://github.com/monobasic/jquery_round_image
*/
(function ($) {
    $.fn.roundImage = function (borderHover) {
        var radius, imageWidth, imageHeight, bgColor, borderColor, borderWidth, uniqId, image, imgSrc, svg;
        
        function drawHover() {
            if (typeof borderHover !== 'undefined' && borderHover !== null && borderHover.replace(/^\s+|\s+$/g, '') != "") {
                svg += '<style>/* <![CDATA[ */' +
                                    'circle#circle_' + uniqId + ':hover {' +
                                        'stroke: ' + borderHover + ';' +
                                    '}' +
                                '/* ]]> */</style>';
            }
        }

        function drawBgColor() {
            if (bgColor != 'transparent') {
                svg += '<circle r="' + (radius - borderWidth) + '" cx="' + imageWidth / 2 + '" cy="' + imageHeight / 2 + '" fill="' + bgColor + '" />';
            }
        }

        function drawBorder() {
            if (borderWidth != 0) {
                svg += '<circle id="circle_' + uniqId + '" r="' + (radius - borderWidth) + '" cx="' + imageWidth / 2 + '" cy="' + imageHeight / 2 +
                       '" stroke="' + borderColor + '" stroke-width="' + borderWidth + '" fill="transparent" />';
            }
        }

        function drawImage() {
            svg += '<image clip-path="url(#clippath_' + uniqId + ')" xlink:href="' + imgSrc + '" src="' + imgSrc +
                   '" width="' + imageWidth + '" height="' + imageHeight + '" class="' + image.attr('class') + '"';

            if (typeof borderHover !== 'undefined' && borderHover !== null && borderHover.replace(/^\s+|\s+$/g, '') != "") {
                svg += ' onmouseover="this.style.borderColor=\'' + borderHover + '\';" onmouseout="this.style.borderColor=\'' + borderColor + '\';"';
            }

            svg += '></image>';
        }

        function drawClipPath() {
            svg += '<clipPath id="clippath_' + uniqId + '">' +
                        '<circle r="' + (radius - borderWidth) + '" cx="' + imageWidth / 2 + '" cy="' + imageHeight / 2 + '"  />' +
                   '</clipPath>';
        }

        return this.each(function () {
            image = $(this);
            bgColor = image.css("background-color");
            borderColor = image.css("border-left-color");
            borderWidth = parseInt(image.css("border-left-width"));
            imageWidth = image.width() + borderWidth * 2;
            imageHeight = image.height() + borderWidth * 2;
            imgSrc = image.attr('src');
            radius = Math.min(imageWidth, imageHeight) / 2;
            svg = '<svg width="' + imageWidth + '" height="' + imageHeight + '">';
            uniqId = Math.round(new Date().getTime() + (Math.random() * 100));

            drawHover();
            drawBgColor();
            drawClipPath();
            drawImage();
            drawBorder();

            image.replaceWith(svg + '</svg>');
        });
    };
}(jQuery));