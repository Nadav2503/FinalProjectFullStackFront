import Joi from "joi";

// Exhibit schema
const exhibitSchema = Joi.object({
    name: Joi.string().min(3).max(256).required(), // Name, required and with min/max length
    description: Joi.string().min(10).max(1024).required(), // Description, required with min/max length
    location: Joi.string()
        .valid('Africa', 'Asia', 'Europe', 'North America', 'South America', 'Australia', 'Antarctica')
        .required(), // Location, restricted to valid geographic locations
    animals: Joi.array().items(Joi.string().required()).allow([]), // Animals, array of ObjectIds, can be empty but not null
    status: Joi.string()
        .valid('open', 'closed', 'under maintenance')
        .default('open') // Status, required with a default of 'open'
        .required(),
    capacity: Joi.number().min(0).max(100).required(), // Capacity, required with min/max values
});

export default exhibitSchema;
