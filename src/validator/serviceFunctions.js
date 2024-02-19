export function setFormErrors(document, errors){

    if (!errors)
        return; 

    for (const key in errors) {
        setFormError(document, errors, key);          
    }
}

export function clearMessages(document){

    const errorsLists = document.querySelectorAll('.error-list');

    for (const err of errorsLists) {
        err.innerHTML = '';  
    }

}

export function setFormError(document, errors, errName){

    const errEl = document.getElementById(errName + "Error");
    if(!errEl) return;  

    if (!errors) return; 
    
    for (const property in errors[errName]) { 
        const err = errors[errName];

        if (!err || !err[property]) continue;

        const errLiOfEl = createElementByErr(err[property]);
        errEl.appendChild(errLiOfEl);
    }  
}

export function createElementByErr(err){
    const el = document.createElement('li');
    el.textContent = err;
    //el.style.color = "red";
    return el;
}