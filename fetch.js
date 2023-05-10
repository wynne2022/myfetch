function myFetch(url, options) {
    return new Promise((resolve, reject) => {
        // initialization
        let xhttp = new XMLHttpRequest();
        let method = 'GET';
        if (options.method) {
            method = options.method;
        }
        
        xhttp.open(method, url);

        if (options.headers) {
            for (let key in options.headers)
                xhttp.setRequestHeader(key, options.headers[key]);
        }

        // successful
        xhttp.onload = function() {
            if (xhttp.status >= 200 && xhttp.status < 300) {
                resolve(xhttp.response);
            }
            else {
                reject(Error(xhttp.status));
            }
        }

        // fail
        xhttp.onerror = function() {
            reject(Error('fail'))
        }

        // send
        if (options.body) {
            xhttp.send(body);
        }
        else {
            xhttp.send();
        }
    });
}

myFetch('https://jsonplaceholder.typicode.com/posts/1', {
    headers: {
        'Content-Type': 'application/json'
    }
})
.then((data) => {
    console.log('get: '+data);
})
.catch((err) => {
    console.log(err);
});

const body = JSON.stringify({
    "name": "Jhon",
    "address": {
        "street": "123 St",
    }
});

myFetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: body
})
.then((data) => {
    console.log('put: '+data);
})
.catch((err) => {
    console.log(err);
});

myFetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: body
})
.then((data) => {
    console.log('post: '+data);
})
.catch((err) => {
    console.log(err);
});

myFetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json'
    },
    body: body
})
.then((data) => {
    console.log('delete: '+data);
})
.catch((err) => {
    console.log(err);
});