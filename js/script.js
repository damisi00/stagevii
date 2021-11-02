
// To get post
function displayItem (item) {
    localStorage.setItem('uniqueId', item);
}
function getPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        let postLayout = document.getElementById('layout');
        let htmlBody = "";
        for (const eachItem of data) {
            htmlBody += `
                <div class="col-md-4 mb-3">
                    <a href="post_display.html" class=" text-black text-decoration-none"onclick="displayItem(${eachItem.id})" ><div class="card h-100">
                    <div class="card-header">
                    ${eachItem.id}
                    </div>
                    <div class="card-body">
                        <h5 class="card-title text-info text-capitalize my-2">${eachItem.title}</h5>
                        <p class="card-text pb-5">${eachItem.body}</p>
                        <a href="post_display.html" class="btn btn-danger ">View</a>
                    </div>
                    </div></a>
                </div>
            `
            var cardpost = localStorage.setItem('card-data', data); 
            postLayout.innerHTML = htmlBody 
            
        };
    })
}


getPosts();

