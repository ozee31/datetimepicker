(function($) {

    var init = (function () {
        init_events();

        // Default datetimepicker : don't use class datepicker
        $('#datetimepicker_ozee_default').datetimepicker();

        new OZEE.Datepicker('datetimepicker_ozee_us_to_fr');
        new OZEE.Datepicker('datetimepicker_ozee_time_to_fr', {formatBDD:'timestamp'});
        new OZEE.Datepicker('datetimepicker_ozee_us_to_fr_no_time', {
                formatBDD: 'Y-m-d',
                format: 'd/m/Y',
                timepicker: false,
            });
    });

    /**
     * Envents
     */
    var init_events = (function () {
        $('body')
            .on('submit', 'form', form_submit)
    });

    /**
     * Display post date when submit form
     */
    var form_submit = (function () {
        var $this        = $(this);
        var $input       = $this.find('input');
        var $inputPosted = ( $input.attr('id') === 'datetimepicker_ozee_default' ) ? $input : $this.find('#'+$input.attr('id')+"_bdd");

        $this.find('.response').html( "Date envoyée : "+$inputPosted.val() );

        return false;
    });

    window.addEventListener('load', init, true);
})(jQuery);