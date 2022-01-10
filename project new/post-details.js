const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get('Post_Id');
console.log(postId);

let container = document.createElement('div');
container.classList.add('container');

let postInfo = document.createElement('div');
postInfo.classList.add('postInfo');
container.appendChild(postInfo);

fetch('https://jsonplaceholder.typicode.com/posts/'+ postId)
    .then(response =>  response.json())
    .then(post => {
        console.log(post)
        for (let infokey in post) {
            let infoDiv = document.createElement('div');

            if (typeof post[infokey] !== "object") {

                infoDiv.innerHTML = `<h4>${infokey}:${post[infokey]}</h4>`
            }
            postInfo.appendChild(infoDiv);

        }

        let commentDiv = document.createElement('div');
        commentDiv.classList.add('commentDiv');

        container.appendChild(commentDiv);




        fetch('https://jsonplaceholder.typicode.com/posts/' + postId + '/comments')
            .then(response => response.json())
            .then(comments => {

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
            });

    });

document.body.appendChild(container);