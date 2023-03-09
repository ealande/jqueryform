$(document).ready(function() {

    $('#telephone').mask('(00) 00000-0000', {
        placeholder: '(41) 00000-4932'
    })

    $('#CPF').mask('000.000.000-00', {
        placeholder: '000.000.000-00'
    })

    $('#CEP').mask('00000-000', {
        placeholder: '00000-000'
    })

    $('form').validate({
        rules: {
            name:{
                required: true
            },
            email:{
                required: true,
                email: true
            },
            telephone:{
                required: true
            },
            fullAddress:{
                required: true
            },
            CEP:{
                required: true
            },
            CPF:{
                required: true
            }
        },
        submitHandler: function(form) {
            console.log (form)
        },
        invalidHandler: function(event, validate) {
            let incorrectFields = validate.numberOfInvalids();
            if (incorrectFields){
                alert (`You need to complete ${incorrectFields} form fields.`)
            }
        }
    })
})