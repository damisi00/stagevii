//To getItems from localStorage

var getCard = localStorage.getItem('uniqueId')

    fetch(`https://jsonplaceholder.typicode.com/posts/${getCard}`)
    .then((response) => response.json())
    .then((data) => {
        
        const postLayoutTwo = document.getElementById('layout-two');
       
        const htmlBodyTwo = `
                <div class="col-md-6 mb-3 mx-auto">
                    <a href="post_display.html" class=" text-black text-decoration-none"><div class="card h-100">
                    <div class="card-header">
                    ${data.id}
                    </div>
                    <div class="card-body ">
                        <h5 class="card-title text-info text-capitalize my-2">${data.title}</h5>
                        <p class="card-text pb-5">${data.body}</p>
                        <a href="index.html" class="btn btn-danger">Back</a>
                    </div>
                    </div></a>
                </div>
            `
            postLayoutTwo.innerHTML = htmlBodyTwo 
    })
    


