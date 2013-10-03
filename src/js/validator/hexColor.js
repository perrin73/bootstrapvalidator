(function($) {
    $.extend($.bootstrapValidator.validator, {
        hexColor: {
            /**
             * Return true if the input value is a valid hex color
             *
             * @param {bootstrapValidator} validateInstance Validate plugin instance
             * @param {HTMLElement} element
             * @param {Object} options Can consist of the following keys:
             * - message: The invalid message
             * @returns {boolean}
             */
            validate: function(validateInstance, element, options) {
                var value = $(element).val();
                return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(value);
            }
        }
    });
}(window.jQuery));
