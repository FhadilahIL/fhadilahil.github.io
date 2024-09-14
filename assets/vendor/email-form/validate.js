/**
* PHP Email Form Validation - v3.9
* URL: https://bootstrapmade.com/php-email-form/
* Author: BootstrapMade.com
*/
(function () {
    "use strict";

    let forms = document.querySelectorAll('.email-form');

    const fields = {
        'contact_name': 'Name column cannot be empty. Please enter your Name.',
        'contact_email': 'Email column cannot be empty. Please enter your Email.',
        'contact_subject': 'Subject column cannot be empty. Please enter the Subject.',
        'contact_message': 'Message column cannot be empty. Please enter your Message.'
    };

    forms.forEach( function(e) {
        e.addEventListener('submit', function(event) {
            event.preventDefault();

            document.querySelector('.loading').classList.add('d-block');
            document.querySelector('.error-message').classList.remove('d-block');
            document.querySelector('.sent-message').classList.remove('d-block')

            if (validateForm()) {
                const data = prepareFormData();
                // Proceed with form submission or further processing
                php_email_form_submit('service_n33u1y1', 'template_kit3p7u', data);
            }
        });
    });

    // Function to get the value from a field and trim it
    function getFieldValue(fieldId) {
        return document.getElementById(fieldId).value.trim();
    }

    // Function to validate fields and display errors
    function validateForm() {
        let isValid = true; // Assume form is valid unless proven otherwise

        // Iterate through fields and validate
        for (const [fieldId, errorMessage] of Object.entries(fields)) {
            const value = getFieldValue(fieldId);
            if (value === '') {
                displayError(errorMessage);
                isValid = false; // Form is invalid
            }
        }

        return isValid;
    }

    function prepareFormData() {
        return {
            name_from: getFieldValue('contact_name'),
            email_from: getFieldValue('contact_email'),
            subject: getFieldValue('contact_subject'),
            message: getFieldValue('contact_message')
        };
    }

    function php_email_form_submit(serviceID, emailTemplateID, params) {
        emailjs.init({
            publicKey: "40kXNvjqoNOR1O8Fh",
        });
        
        emailjs.send(serviceID, emailTemplateID, params)
        .then(response => {
            console.log(response)
            if( response.status == 200 ) {
                return response.text;
            } else {
                throw new Error(`${response.status} | ${response.text}`);
            }
        })
        .then(data => {
            document.querySelector('.loading').classList.remove('d-block');
            if (data == 'OK') {
                document.getElementById('contact_name').value = ''
                document.getElementById('contact_email').value = ''
                document.getElementById('contact_subject').value = ''
                document.getElementById('contact_message').value = ''
                document.querySelector('.sent-message').classList.add('d-block');
            } else {
                throw new Error(data ? data : 'Form submission failed and no error message returned from: ' + action); 
            }
        })
        .then(() => {
            setTimeout(() => {
                document.querySelector('.sent-message').classList.remove('d-block');
            }, 7000)
        })
        .catch((error) => {
            displayError(error);
        });
    }

    function displayError(error) {
        document.querySelector('.loading').classList.remove('d-block');
        document.querySelector('.error-message').innerHTML = error;
        document.querySelector('.error-message').classList.add('d-block');
    }

})();
