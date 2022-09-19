

const Joi = require("joi");


const profileValidate = {

profVal : {
            body: Joi.object({

            firstName: Joi.string()
                        .min(4)
                        .max(10)
                        .required()
                        .uppercase(),

            lastName: Joi.string()
                        .min(4)
                        .max(10)
                        .required(),
             }) 
}

};


module.exports = profileValidate;