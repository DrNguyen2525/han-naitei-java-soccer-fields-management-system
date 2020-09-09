$(document).ready(() => {
    $('#fromDate').datetimepicker({
        step: 15,
        minTime: '9:00',
        maxTime: '21:15'
    });
    $('#toDate').datetimepicker({
        step: 15,
        minTime: '9:00',
        maxTime: '21:15'
    });

    $.validator.addMethod("greaterThan",
        function (value, element, param) {
            var $min = $(param);
            if (this.settings.onfocusout) {
                $min.off(".validate-greaterThan").on("blur.validate-greaterThan", function () {
                    $(element).valid();
                });
            }
            return parseInt(value) > parseInt($min.val());
        }, "To Date must be greater than From Date");

    $('#bookingRequestForm').validate({
        rules: {
            fromDate: {
                required: true,
            },
            toDate: {
                required: true,
                greaterThan: "#fromDate"
            },

        },
    })

});
