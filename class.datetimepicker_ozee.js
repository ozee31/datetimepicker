OZEE = {}; /* NAMESPACE */
    
(function($){ 

    /**
     * Constructor
     * @param  string id : input id
     * @param  object options : datetimepicker options
     */
    OZEE.Datepicker = function(id, options) {

        this.id      = id;
        this.idBDD   = id + '_bdd';
        this.options = $.extend({}, self.defaults, options);    

        this.create(id, this.options);
    };

    // Public : instance
    OZEE.Datepicker.prototype = {

        options: {},
        $input:  false,
        id:      null,
        idBDD:   null,

        /**
         * Create and initialize datepicker
         * @param  string id : input id
         * @param  object options : datetimepicker options
         */
        create: function(id, options) {

            this.generate();
            this.options.onClose    = this.callback_change_date;

            $('#'+id).datetimepicker(options);
        },

        /**
         * Prepare datepicker : convert date and clone input
         */
        generate: function() {

            this.$input = $('#'+this.id);
            this.$input.data('format', this.options.format);
            this.$input.data('formatBDD', this.options.formatBDD);
            this.$input.data('idBDD', this.idBDD);

            var input_val = this.$input.val();
            var date      =  ( this.options.formatBDD === 'timestamp' ) 
                                ? new Date(input_val*1000) /* ms */
                                : Date.parseDate(input_val, this.options.formatBDD);

            this.generate_create_input_bdd(this);

            if ( date ) {
                this.$input.val( date.dateFormat(this.options.format) );
            }
        },

        /**
         * Clone input date for convertion
         */
        generate_create_input_bdd: function() {

            var $inputBDD = this.$input.clone();

            $inputBDD.val(this.$input.val());
            $inputBDD.attr({
                id: this.idBDD,
            });
            $inputBDD.hide();

            this.$input.after($inputBDD);
        },

        /**
         * Call by datetimepicker when it's close : convert date format to formatBDD and update $inputBDD 
         * @param  dp  : _xdsoft_datetime.currentTime
         * @param  dom $input : input 
         */
        callback_change_date: function(dp,$input) {

            var date = Date.parseDate($input.val(), $input.data('format') );

            if ( date ) {
                var dateConvert =  ( $input.data('formatBDD') === 'timestamp' ) 
                                    ? date.getTime() / 1000 /* ms */
                                    : date.dateFormat($input.data('formatBDD'));

                $( '#' + $input.data('idBDD') ).val( dateConvert );
            }
        }
    };


    // Static
    OZEE.Datepicker.defaults = {
            lang:       'fr',
            format:     'd/m/Y H:i',
            formatBDD:  'Y-m-d H:i:s',
        };

    // Private for all instances
    var self = OZEE.Datepicker;

})(jQuery);

