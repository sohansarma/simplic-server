import { isEmpty } from "lodash";
import { STATUS_CODES } from "http";

export const formatResponse = function (
  status = 500,
  err: any = "",
  data: any[] = [],
  errors: any = [],
  evOp: any = null
) {
  try {
    !status.toString().startsWith("2") &&
      !isEmpty(err) &&
      typeof err.split === "function" &&
      err.split(",").forEach((e: string) => {
        !isEmpty(e) &&
          errors &&
          typeof errors.push === "function" &&
          errors.push({
            // field: [],
            // location: '',
            messages: [e.trim()],
          });
      });
    if (evOp && evOp.errors) {
      evOp.errors.concat(...errors);
      return evOp;
    }
    return {
      status,
      statusText: STATUS_CODES[status],
      message: err && err.message ? err.message : err,
      data,
      errors,
    };
  } catch (er) {
    throw er;
  }
};
