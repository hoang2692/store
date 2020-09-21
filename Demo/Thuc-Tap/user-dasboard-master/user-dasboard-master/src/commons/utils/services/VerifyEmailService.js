import userApiService from "./ApiService/UserApiService";
import handleApiResponse from "./ApiService/handleApiResponse";

/**
 * Define enum login type
 */

async function verifyEmail({ email, emailVerifycode }) {
    try {
        const response = await userApiService.verifyEmail({ email, emailVerifycode });
        const { data, errors } = handleApiResponse(response);

        return { data, errors };
    } catch (e) {
        return { errors: [e.toString()] };
    }
}

const verifyEmailService = { verifyEmail };

export default verifyEmailService;
