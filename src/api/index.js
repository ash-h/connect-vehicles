
export const loadVehicleData = () => {
    return new Promise(function (resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://localhost:9988/api/vehicle');
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                    //console.log(xhr.responseText);
            }
        };
        xhr.send();
        xhr.onerror = reject;
    });
};


export const getVehicles = (ids) => {
    return new Promise(function (resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://localhost:9988/api/vehicle/' , true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));

            }
        };
        const params = 'ids[]='+JSON.stringify(ids);

        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send(params);
        xhr.onerror = reject;
    });
};

