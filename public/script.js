const opt2 = {
    method: 'POST',
    // credentials: 'include',
    // headers: {
    //     'X-QQ-QQQ': 'QQQQQ',
    //     'X-QQ-QQQQ': 'QQQQQ',
    // }
}
fetch('http://localhost:3000/api', opt2)
    .then((r) => {
        console.log(r.headers.get("X-Powered-By"))
        return r
    })
    .then((r) => r.text())
    .then(console.log)
    .catch(console.error)