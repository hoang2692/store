import paymentApiService from "../../../commons/utils/services/ApiService/PaymentApiService";

async function sendCoin({ method, toAddress, amount }) {
  try {
    const response = await paymentApiService.sendCoin({
      method,
      toAddress,
      amount
    });
    const { data, errors } = response;
    return { data, errors };
  } catch (e) {
    return { errors: [e.message] };
  }
}

async function request({ method }) {
  try {
    const response = await paymentApiService.request({
      method
    });

    const { data, errors } = response;
    return { data, errors };
  } catch (e) {
    return { errors: [e.message] };
  }
}

const sendAndRequestRepository = {
  sendCoin,
  request
};

export default sendAndRequestRepository;
