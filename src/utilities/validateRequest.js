const validateRequest =
  (schema, failFast = true) =>
  (req, res, next) => {
    console.log(
      `Validating request params for ${req.url} request of type ${req.method}`
    );
    const validationErrors = [];
    Object.keys(schema).some((rule) => {
      let error;
      if (typeof schema[rule] !== 'function') {
        const { error: validationError } = schema[rule].validate(req[rule]);
        if (validationError) {
          error = validationError.details[0].message.toString();
        }
      } else if (schema[rule](req)) error = schema[rule](req).error;
      if (error) {
        validationErrors.push(error);
        return failFast;
      }
    });
    if (validationErrors.length > 0) {
      console.log(
        `Request validation for ${req.url} request of type ${req.method} failed with errors [${validationErrors}]`
      );
      throw new Error(validationErrors);
    }
    console.log(
      `Request validation for ${req.url} request of type ${req.method} was successful`
    );
    return next();
  };
export default validateRequest;
