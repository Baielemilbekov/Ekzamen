export async function  GetUser(axios, cb) {
    axios.get("https://64340de21c5ed06c958dd2da.mockapi.io/:endpoint")
        .then((data) => cb(data))
        .catch((err) => cb(err))
}