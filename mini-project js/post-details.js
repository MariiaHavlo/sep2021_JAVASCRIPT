let infoPost = JSON.parse(localStorage.getItem('post')) || [];
console.log(typeof infoPost)

let container = document.createElement('div');
container.classList.add('container');

let postInfo = document.createElement('div');
postInfo.classList.add('postInfo');
container.appendChild(postInfo);


for (let infokey in infoPost) {
    let infoDiv = document.createElement('div');

    if (typeof infoPost[infokey] !== "object") {

        infoDiv.innerHTML = `<h4>${infokey}:${infoPost[infokey]}</h4>`
    }
    postInfo.appendChild(infoDiv);

}

let commentDiv = document.createElement('div');
commentDiv.classList.add('commentDiv');




fetch('https://jsonplaceholder.typicode.com/posts/' + infoPost.id + '/comments')
    .then(response => response.json())
    .then(comments => {
        console.log(comments)

        for (const comment of comments) {
            let commentsInfo = document.createElement('div');
            commentsInfo.classList.add('comentsInfo');

            commentsInfo.innerHTML = `
                                            <h2>Id:${comment.id}</h2>
                                            <h1>Name:${comment.name}</h1>
                                            <p>Email:${comment.email}</p>
                                            <p>Body:${comment.body}</p>
                                            `;

            commentDiv.appendChild(commentsInfo);
        }
    })


container.appendChild(commentDiv);
document.body.appendChild(container);