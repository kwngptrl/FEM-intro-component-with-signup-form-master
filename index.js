/*  Adapted from https://github.com/codebubb/javascript-form-validation-tutorial by James Bubb   */
/*  Youtube tutorial by codebubb: https://www.youtube.com/watch?v=iyngFd6f8ko                    */
/*  I kept most names, conventions so others can look at it                                      */

const validateForm = formSelector => {
    const formElement = document.querySelector(formSelector);
    console.log(formElement);

        const validationOptions = [
            {
                attribute: 'pattern',
                isValid: input => {
                    const patternRegex = new RegExp(input.pattern);
                    return patternRegex.test(input.value);
                },
                errorMessage: (input, label) => 
                    `Looks like this is not an email`,
            },        
            {
                attribute: 'required',
                isValid: input => input.value.trim() !== '',
                errorMessage: (input, label) => `${label.textContent} cannot be empty`,
            },    
        ];

        const validateSingleFormGroup = formGroup => {
            const label = formGroup.querySelector('label');
            const input = formGroup.querySelector('input');
            const errorContainer = formGroup.querySelector('.errmsg');
            const errorIcon = formGroup.querySelector('.icon-error');
            
            let formGroupError = false;
            for (const option of validationOptions) {
                if (input.hasAttribute(option.attribute) && !option.isValid(input)) {
                    errorContainer.textContent = option.errorMessage(input, label);
                    errorContainer.classList.remove('hidden');  /* show error message */
                    input.classList.add('error');               /* erroneous input? add red color on border and text */
                    input.classList.remove('valid');            /* remove green border if any */
                    errorIcon.classList.remove('hidden');       /* shows error icon */
                    formGroupError = true;
                }
            }
            if (!formGroupError) {
                errorContainer.textContent = '';    /* if there was an error before and was corrected, error message is set to '' */
                input.classList.add('valid');       /* add green border */
                input.classList.remove('error');    /* remove error class i.e., red border*/
                errorIcon.classList.add('hidden');  /* hide error icon */                
            }
        };

    const validateAllFormGroups = formToValidate => {
        const formGroups = Array.from(formToValidate.querySelectorAll('.formGroup'));

        formGroups.forEach(formGroup => {
            validateSingleFormGroup(formGroup);
        });
    };

    formElement.setAttribute('novalidate', '');

    formElement.addEventListener('submit', event => {
        event.preventDefault();
        validateAllFormGroups(formElement);
    });

};


validateForm('#claim-trial');