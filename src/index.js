import "./styles/style.scss";
import { FormValidator } from "./validator/FormValidator";
import {requiredText, validEmail, validPhone, validProduct} from "./validator/Validators";
import { clearMessages, setFormErrors } from "./validator/serviceFunctions";

const idInt = setInterval(timestamp, 500);
const formLead = document.forms.namedItem("form-lead");
const userDataValidator = new FormValidator({
    company: [requiredText],
    first_name: [requiredText],
    last_name: [requiredText],
    email: [validEmail],
    phone: [validPhone],
    '00NF900000776WP': [requiredText, validProduct],
  });

 formLead.addEventListener("submit", (event) => {
    event.preventDefault();
    const userData = {
        company: String(new FormData(formLead).get("company")).trim(),
        first_name: String(new FormData(formLead).get("first_name")).trim(),
        last_name: String(new FormData(formLead).get("last_name")).trim(),
        email: String(new FormData(formLead).get("email")).trim(),  
        phone: String(new FormData(formLead).get("phone")).trim(),
        '00NF900000776WP': String(new FormData(formLead).get("00NF900000776WP")).trim(),
      };
  
      const errors = userDataValidator.validate(userData);
      clearMessages(document);
      setFormErrors(document, errors);
  
      if(!errors){
        formLead.submit();
      }

  });

  function timestamp() { 
    var response = document.getElementById('g-recaptcha-response'); 
    if (response == null || response.value.trim() == "") {
        var elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value);
        elems['ts'] = JSON.stringify(new Date().getTime());
        document.getElementsByName('captcha_settings')[0].value = JSON.stringify(elems); 
        document.querySelector('.submit-button').disabled = true;
    } 
    else{
        document.querySelector('.submit-button').disabled = false;
        //clearInterval(idInt);
    }
} 