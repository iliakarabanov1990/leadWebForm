export function composeValidators(validators){
    return (value) => {
        for(const validator of validators){
            const result = validator(value);

            if (result){
                return result;
            }
        }

        return null;
    }
}