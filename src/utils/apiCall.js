const makeApiCall = async (method, url) => {
  try {
    const res = await fetch(
      `https://constitutional-yellow.cmd.outerbase.io/${url}`,
      {
        method: method,
        headers: {
          "content-type": "application/json",
        },
        body: '{"id":"1"}',
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
  }
};

export default makeApiCall;
