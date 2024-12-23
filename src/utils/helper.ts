import { isEmpty } from "lodash";
import { STATUS_CODES } from "http";

interface ErrorObject {
  messages: string[];
}

export const formatResponse = function (
  status = 500,
  err: any = {},
  data = [],
  errors: ErrorObject[] = [],
  evOp = null
) {
  try {
    !status.toString().startsWith("2") &&
      !isEmpty(err) &&
      typeof err.split === "function" &&
      err.split(",").forEach((e: any) => {
        !isEmpty(e) &&
          errors &&
          typeof errors.push === "function" &&
          errors.push({
            messages: [e.trim()],
          });
      });
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
