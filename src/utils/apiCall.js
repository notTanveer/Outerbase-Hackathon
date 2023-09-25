const makeApiCall = async (method, url, body) => {
  try {
    const res = await fetch(
      `https://constitutional-yellow.cmd.outerbase.io/${url}`,
      {
        method,
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );
    const data = await res.json();
    if (data.success) {
      return data;
    } else {
      console.log(data);
      return JSON.stringify({
        err: true,
      });
    }
  } catch (e) {
    console.log(e);
    alert("No internet connetion " + e);
  }
};

export default makeApiCall;
