/*
 * jQuery Clearable Input Plugin
 * Version: 1.1.0
 *
 * Enhance user interaction with grouped input fields by adding a clear button for quick content removal.
 * Ideal for scenarios like customer details where multiple inputs (e.g., name, ID, address) are grouped.
 * Users can clear the main input and define additional inputs to clear simultaneously with a single click.
 *
 * @author: Damith Nalinda Jayasinghe
 * @license: MIT
 * @repository: https://github.com/nalindaDJ/clearableInput
 */
(function ($) {
    $.fn.clearableInput = function (options) {
        const settings = $.extend({
            selector: 'input.clearable-input',
            clear_items: []
        }, options);

        // Helper function to clear an element's value or text
        function clearElement($element) {
            if ($element.is("input, textarea")) {
                $element.val('');
            } else {
                $element.text('');
            }
        }

        // Helper function to toggle the visibility of the clear icon
        function toggleClearIcon($input, $clearIcon) {
            const hasValue = $input.val().trim().length > 0;
            $clearIcon.toggleClass('visible', hasValue);
        }

        return this.each(function () {
            const $clrInput = $(this);

            // Wrap input with a container and add the clear icon
            $clrInput.wrap('<span class="clearable-span"></span>');
            const $clearIcon = $('<div class="clearable-icon"><span><i class="fa fa-times"></i></span></div>');
            $clrInput.after($clearIcon);

            // Handle input events to toggle the clear icon
            $clrInput.on('input', function () {
                toggleClearIcon($clrInput, $clearIcon);
            });

            // Handle clear icon click event
            $clearIcon.on('click', function () {
                // Clear the main input
                clearElement($clrInput);

                // Clear additional items if specified
                if (settings.clear_items.length > 0) {
                    $.each(settings.clear_items, function (_, ele) {
                        clearElement($('#' + ele));
                    });
                } else {
                    // Clear grouped inputs if data-clrgrp attribute is present
                    const groupId = $clrInput.attr('data-clrgrp');
                    if (groupId) {
                        $("[data-clrgrp='" + groupId + "']").each(function () {
                            clearElement($(this));
                        });
                    }
                }

                // Toggle the clear icon visibility after clearing
                toggleClearIcon($clrInput, $clearIcon);
            });

            // Initialize clear icon visibility
            toggleClearIcon($clrInput, $clearIcon);
        });
    };
}(jQuery));
