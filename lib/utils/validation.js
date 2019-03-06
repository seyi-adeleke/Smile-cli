const ERR_MSG_EMPTY_INPUTS = 'Please Input a username and password';

/**
 * 
 * @param {object} programObject The commander program object
 * @returns {object} 
 */
const validator = (programObject) => {
    const validatorObject ={}
    if(!programObject.username) {
        validatorObject.status = false;
        validatorObject.message = ERR_MSG_EMPTY_INPUTS;
        return validatorObject;
    }

    validatorObject.status = true;
    validator.message = '';

    return validatorObject;
}

module.exports = validator;