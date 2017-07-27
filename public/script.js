const opt = {
    method: 'GET',
    headers: {
        'X-Api-Key': 'sdfsdhfskdkgjfkgjk',
        'X-Api-Key2': 'sdfsdhfskdkgjfkgjk',
        'Origin': 'http://localhost:3009'
    },
    credentials: 'include'
}
fetch('http://localhost:3000/api', opt)
    .then((r) => r.text())
    .then((data) => {
        document.querySelector('body').innerHTML += data
    })
    .catch((err) => {
        console.log(err)
        document.querySelector('body').innerHTML += err
    })
