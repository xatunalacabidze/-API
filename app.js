alert("saklaso davaleba");
fetch('https://apiv1.biblusi.ge/api/author?book=1&random=1')
.then(response => response.json())
.then(data =>{
    console.log(data)
    let container = document.getElementById("container");
    data.data.forEach(book => {
        container.innerHTML +=`
        <div class ="card">
        <hr>
        <img src="${book.imageUrl}">
        <hr>
        <h1>${book.id}
        <hr>
        <h3>${book.fullname}
        <hr>
        <h4>${book.locale}
        <hr>
        <h4>${book.country}`
        
    });
})