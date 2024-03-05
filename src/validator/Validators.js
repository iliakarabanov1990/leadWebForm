export const requiredText = (value) =>{
    return value.trim().length ? null : {requiredText: "required field"};
}

export const validEmail = (value) =>{
    return /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i.test(value) ? null : {requiredText: "e-mail is filled in incorrectly"};
}

export const validPhone = (value) =>{
    return /^[\d\+][\d\(\)\ -]{4,14}\d$/.test(value) ? null : {requiredText: "phone number is filled in incorrectly"};
} 

export const validProduct = (value) =>{
    return value === '--choose product--' ? {requiredText: "product is filled incorrectly"} : null;
}


















