const joi = require("joi");

const createCategoryValidation = (payload) => {
    const schema = joi.object({
        name: joi.string().required(),    
    });
    return schema.validate(payload);
};

const updateCategoryValidation = (payload) => {
    const schema = joi.object({
        name: joi.string(),    
    }).min(1);
    return schema.validate(payload);
};

// Ekspor menggunakan CommonJS
module.exports = {
    createCategoryValidation,
    updateCategoryValidation
};
