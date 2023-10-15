const result = []


fetch('http://localhost:5000/users')
.then(res => { return res.json() })
.then((res)=>{
    res.result.forEach(row => {
        const markup = `<li>${row.name}</li>`;
        document.querySelector("ul").insertAdjacentHTML('afterend' , markup)
    });
})

