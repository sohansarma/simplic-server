import { formatResponse } from "./../utils/helper";
import { isEmpty } from "lodash";
import AuthDao from "../db-services/auth/auth.dao";
import { jwtDecode } from "jwt-decode";

const auth = new AuthDao();

async function authMiddleware(request: any, response: any, next: any) {
  var validateTokenResult: any;
  try {
    console.log("We are herererererer");
    validateTokenResult = jwtDecode(request.headers.authorization);
    console.log("validateTokenResult", validateTokenResult);
  } catch (err) {
    return response.status(401).json(formatResponse(401, "Invalid token"));
  }
  try {
    let loginEmail: any = validateTokenResult.email.toLowerCase();
    request.user = await auth.fetchUserByEmail(loginEmail);
    console.log("loginEmail", loginEmail);
    if (isEmpty(request.user)) {
      return response.status(404).json(formatResponse(404, "User not found"));
    }
    next();
  } catch (err) {
    next(err);
  }
}

export default authMiddleware;
