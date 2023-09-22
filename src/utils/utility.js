import makeApiCall from "./apiCall";

function checkifUserExists(email) {
  makeApiCall("POST", "geta/student", { id: email }).then((data) => {
    // console.log(data.response.count);
    if (data?.success) {
      if (data.response.count > 0) {
        return true;
      }
    }
    return false;
  });
}
export default checkifUserExists;
