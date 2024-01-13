/*
 * jQuery Clearable Input Plugin
 * Version: 1.0.0
 *
 * Enhance user interaction with grouped input fields by adding a clear button for quick content removal.
 * Ideal for scenarios like customer details where multiple inputs (e.g., name, ID, address) are grouped.
 * Users can clear the main input and define additional inputs to clear simultaneously with a single click.
 *
 * @author: Damith Nalinda Jayasinghe
 * @license: MIT
 * @repository: https://github.com/nalindaDJ/clearableInput
 */
(function ( $ ) {

    $.fn.clearableInput = function( options ) {

        const settings = $.extend({
            selector: 'input.clearable-input',
            clear_items: []
        }, options);

        return this.each(function () {
            let $clrInput = $(this);
            $clrInput.wrap('<span class="clearable-span"></span>');
            let $clearIcon = $('<div class="clearable-icon"><i class="fa fa-times"></i></div>');
            $clrInput.after($clearIcon);

            $clrInput.on('input click blur touchstart', function () {
                toggleClearIcon($clrInput, $clearIcon);
            });

            $clearIcon.on('click', function () {
                if (settings.clear_items.length === 0) {
                    clearInput($clrInput, $clearIcon);
                } else {
                    $clrInput.val('');
                    $.each(settings.clear_items,function (key, ele){
                        let $e = $('#'+ele);
                        if($e.is("input")){
                            $e.val('');
                        }
                        else if($e.is("textarea")){
                            $e.val(' ');
                        } else {
                            $e.text('');
                        }
                    });
                    toggleClearIcon($clrInput, $clearIcon);
                }
            });

            toggleClearIcon($clrInput, $clearIcon);

        });

        function toggleClearIcon($input, $clearIcon) {
            let hasValue = $input.val().trim().length;
            $clearIcon.css('display', hasValue > 0 ? 'block' : 'none');
            $clearIcon.css({'cursor':'pointer'});
        }

        function clearInput($input, $clearIcon) {
            let groupId= $input.attr('data-clrgrp');
            $("[data-clrgrp|='"+groupId+"']").each(function (){
                if($(this).is("input")){
                    $(this).val('');
                } else if ($(this).is("textarea")) {
                    $(this).val(' ');
                } else {
                    $(this).text('');
                }
            });

            toggleClearIcon($input, $clearIcon);
        }
    };

}( jQuery ));