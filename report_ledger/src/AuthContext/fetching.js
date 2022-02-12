import { retrieve } from "../utils/crypt";

const getData = async (ipfsHash, secretkey, contract) => {
  let ipfsData, certData;
  if (!!ipfsHash & !!secretkey) {
    await contract.methods
      .verify(ipfsHash)
      .call()
      .then((res) => (certData = res))
      .catch((error) => console.log(error));
    ipfsData = JSON.parse(await retrieve(ipfsHash, secretkey));
  }
  return {
    ...certData,
    ...ipfsData,
  };
};
const fetchreportdata = (ipfsHash, secretkey, contract) => {
  return wrapPromise(getData(ipfsHash, secretkey, contract));
};
function wrapPromise(promise) {
  let status = "pending";
  let result;
  let suspender = promise.then(
    (r) => {
      status = "success";
      result = r;
    },
    (e) => {
      status = "error";
      result = e;
    }
  );
  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result;
      }
    },
  };
}

export default fetchreportdata;
