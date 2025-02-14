const joi = require("joi");

const createClassValidation = (payload) => {
    const schema = joi.object({
        name: joi.string().required(),
        categoryId: joi.string().required(),
        code: joi.string().required(),
        type: joi.string().valid("Premium", "Free").required(),
        level: joi.string().required(),
        price: joi.number().required(),
        content: joi.string().required(),
    });
    return schema.validate(payload);
};

const updateClassValidation = (payload) => {
    const schema = joi.object({
        name: joi.string(),
        categoryId: joi.string(),
        code: joi.string(),
        type: joi.string().valid("Premium", "Free"),
        level: joi.string(),
        price: joi.number(),
        content: joi.string(),
    }).min(1);
    return schema.validate(payload);
};

// Ekspor menggunakan CommonJS
module.exports = {
    createClassValidation,
    updateClassValidation
};
