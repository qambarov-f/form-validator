const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const repassword = document.getElementById('repassword');


    function error(input, message) {
        input.className = ('form-control is-invalid');
        const div = input.nextElementSibling;
        div.innerText = message;
        div.className = 'invalid-feedback';
    };
    function sucses(input) {
        input.className = ('form-control is-valid');
    };
    
    const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };

      function checkLength (input, min, max) {
        if(input.value.length < min) {
            error(input, `${input.id} must be at least ${min} letters `);
        } else if(input.value.length > max){
            error(input, `${input.id} must not be more than ${max} letters`);
        } else{
            sucses(input);
        }
      };

      function checkPasspords (input1, input2){
        if(input1.value !== input2.value) {
            error(input2, 'Passwords is not same.');
        }
      };

      function checkPhone(input){
        var exp = /^\d{10}$/;
        if(!exp.test(input.value))
            error(input, "Phone must be at leats 10 number.")
      }


form.addEventListener('submit', function(e) {
    e.preventDefault();

    if(username.value === '') {
        error(username, 'You have to write Username');
    } else{
       sucses(username);
    }

    
    if(email.value === '') {
        error(email,'You have to write Email' );
    } else if(!validateEmail(email.value)){
        error(email, 'Email fromat is not correct');
    }
     else{
       sucses(email);
    }

    if(phone.value === '') {
        error(phone, 'You have to write Phone Number');
    } else{
       sucses(phone);
    }
    
    if(password.value === '') {
        error(password, 'You have to write Password');
    } else{
       sucses(password);
    }

    
    if(repassword.value === '') {
        error(repassword,'You have to write Repassword');
    } else{
       sucses(repassword);
    }

    checkLength(username,6,15);
    checkLength(password, 6, 12);
    checkLength(repassword, 6, 12);
    checkPasspords(password,repassword);
    checkPhone(phone);
});
