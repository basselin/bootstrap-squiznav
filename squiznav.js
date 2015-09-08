/*!
 * squiznav.js v0.1.2
 * (c) 2015, Benoit Asselin benoit(at)161.io
 * MIT License
 */

;(function($, window, undefined) {

    $.fn.squizNav = function(options) {
        options = $.extend({
            // defaults
            dropdown: '<li class="pull-right dropdown"><a href="#" data-toggle="dropdown"><span class="glyphicon glyphicon-triangle-bottom"></span></a><ul class="dropdown-menu"></ul></li>', // string
            attribut: 'data-index', // String
            delta: 0 // Number
        }, options);

        var optAttr = options.attribut;

        return this.each(function() {
            var $nav = $(this),
                $children = $nav.children();
            var lastIndex = -1;
            var optDelta = options.delta;
            var dataSquiznav = $nav.attr('data-squiznav');
            if (dataSquiznav && $.isNumeric(dataSquiznav)) {
                optDelta = parseFloat(dataSquiznav);
            }

            $children.each(function() {
                var $elt = $(this);
                lastIndex = $elt.index();
                $elt.attr(optAttr, lastIndex);
            });

            // Generate dropdown
            $nav.prepend(options.dropdown);
            var $dropdown = $nav.find('.dropdown').first(),
                $dropdownMenu = $dropdown.children('.dropdown-menu').first();

            function elementIsInDropdown($elt) {
                return !! $dropdownMenu.has($elt).length;
            }

            function moveElement($elt, addOrRemove) {
                if (addOrRemove && !elementIsInDropdown($elt)) {
                    var index = parseInt($elt.attr(optAttr));
                    var $nextElt = $children.filter('[' + optAttr + '="' + (index + 1) + '"]');
                    if ($nextElt.length && elementIsInDropdown($nextElt)) {
                        $elt.insertBefore($nextElt);
                        return;
                    }

                    var $prevElt = $children.filter('[' + optAttr + '="' + (index - 1) + '"]');
                    if ($prevElt.length && elementIsInDropdown($prevElt)) {
                        $elt.insertAfter($prevElt);
                        return;
                    }

                    $dropdownMenu.prepend($elt);
                } else if (!addOrRemove && elementIsInDropdown($elt)) {
                    $nav.append($elt);
                }
            }

            function gotoDropdown() {
                var $elt;
                var maxWidth = $nav.innerWidth() - optDelta;
                var childrenWidth = 0;
                var navFull = false;

                $dropdown.removeClass('hidden');
                var dpWidth = $dropdown.outerWidth(true);
                $children.each(function() {
                    $elt = $(this);
                    if (!navFull) {
                        if (elementIsInDropdown($elt)) {
                            $nav.append($elt); // Try!
                        }
                        childrenWidth += $elt.outerWidth(true);
                        navFull = childrenWidth >= (maxWidth - dpWidth);
                        if (navFull && $elt.attr(optAttr) == lastIndex) {
                            // Try without Dropdown
                            navFull = childrenWidth >= maxWidth;
                        }
                    }
                    moveElement($elt, navFull);
                });

                if (!$dropdownMenu.children().length) {
                    // Dropdown empty
                    $dropdown.addClass('hidden');
                }
            }

            // Events
            $(window).on('load resize orientationchange', gotoDropdown);
            gotoDropdown();
        });
    };

    // Ready
    $(function() {
        $('.nav[data-squiznav]').squizNav();
    });

})(jQuery, window);
