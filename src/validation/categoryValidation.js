import joi from "joi";

export const createCategoryValidation = (payload) => {
    const schema = joi.object({
        name: joi.string().required(),    
    });
    return schema.validate(payload);
}
export const updateCategoryValidation = (payload) => {
    const schema = joi.object({
        name: joi.string(),    
    }).min(1);
    return schema.validate(payload);
}
