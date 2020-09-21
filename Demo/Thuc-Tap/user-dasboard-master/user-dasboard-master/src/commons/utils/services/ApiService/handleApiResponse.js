import i18next from "i18next";

function isSuccessResponse(response) {
  const { status } = response;
  return status === 200 || status === 201;
}

function handleSuccessResponse(response) {
  const { data } = response;
  return { data };
}

function handleErrorResponse(response) {
  const { status } = response;

  if (status === 401 || status === 403) {
    /**
     * Handle Unauhtorization
     */
    const { message } = response;

    return { errors: [message] };
  }

  if (status === 400) {
    /**
     * Handle Validation Errors
     */
    const { errors } = response;

    return { errors: errors };
  }

  if (status === 404) {
    /**
     * Handle update failure: not found"
     */
    const { errors } = response;

    return { errors };
  }

  if (status === 500) {
    /**
     * Handle server is down or some thing is broken"
     */
    const { message } = response;
    return { errors: [i18next.t("errors.error_500")] };
  }

  if (status === 503) {
    /**
     * Handle overloaded with requests"
     */
    const { message } = response;
    return { errors: [message] };
  }
}

/**
 * Handle response
 */
function handleApiResponse(response) {
  console.log("oje", response);
  if (isSuccessResponse(response)) return handleSuccessResponse(response);
  else return handleErrorResponse(response);
}

export default handleApiResponse;
