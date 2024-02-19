import { composeValidators } from "./composeValidators";

export class FormValidator{

    #validationMap;

    constructor(configuration){

        this.#validationMap = new Map();
        for(const [key, value] of Object.entries(configuration) ){
            this.#validationMap.set(key, composeValidators(...value));
        }
    }

    validate(data){

        const errors = [];

        for (const [propertyName, value] of Object.entries(data)){
            const validator = this.#validationMap.get(propertyName);

            if(validator){
                const result = validator(value);
                if (result){
                    errors.push({[propertyName]: result});
                }
            }
        }

        return errors.length ? Object.assign({}, ...errors) : null;
    }
}