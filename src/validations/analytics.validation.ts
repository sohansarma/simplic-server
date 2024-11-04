import { Joi, Segments, celebrate } from "celebrate";

export const validation = {
  fetch: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      social: Joi.string().valid("instagram", "youtube").required().messages({
        "any.only": "Invalid social media platform",
        "string.empty": "Social media platform is required",
      }),
    }),
  }),
};
