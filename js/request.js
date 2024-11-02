//const url = "http://localhost:5000/api/" Esta era para el servidor local
const url = "https://backend256-jf2c.onrender.com/api/" //Esta para la nube

function sendRequest(endPoint, method, data) {
    let request = new XMLHttpRequest();
    request.open(method, url+endPoint);
    request.responseType = "json";
    request.setRequestHeader("Content-Type", "application/json");
    request.send(data ? JSON.stringify(data): data);
    return request
}