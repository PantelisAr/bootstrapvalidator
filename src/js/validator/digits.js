/**
 * digits validator
 *
 * @link        http://bootstrapvalidator.com/validators/digits/
 * @author      https://twitter.com/nghuuphuoc
 * @copyright   (c) 2013 - 2014 Nguyen Huu Phuoc
 * @license     http://bootstrapvalidator.com/license/
 */
(function($) {
    $.fn.bootstrapValidator.i18n = $.extend(true, $.fn.bootstrapValidator.i18n || {}, {
        'en_US': {
            digits: {
                'default': 'Please enter only digits'
            }
        }
    });

    $.fn.bootstrapValidator.validators.digits = {
        /**
         * Return true if the input value contains digits only
         *
         * @param {BootstrapValidator} validator Validate plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} [options]
         * @returns {Boolean}
         */
        validate: function(validator, $field, options) {
            var value = $field.val();
            if (value === '') {
                return true;
            }

            return /^\d+$/.test(value);
        }
    };
}(jQuery));
