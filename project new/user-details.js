const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('User_Id');
console.log(myParam);

let container = document.createElement('div');
container.classList.add('container');

fetch('https://jsonplaceholder.typicode.com/users/'+ myParam)
    .then(response => {
        return response.json();
    })
    .then(user => {

        for (let userKey in user) {
            let userDiv = document.createElement('div');
            userDiv.classList.add('user_main_info');
            if (typeof user[userKey] !== 'object') {
                userDiv.innerHTML = `<h4>${userKey}:${user[userKey]}</h4>`

            } else if (userKey === 'address') {
                for (let addressKey in user.address) {
                    let addressDiv = document.createElement('div');
                    if (typeof user.address[addressKey] !== 'object') {
                        addressDiv.innerText = `${addressKey}:${user.address[addressKey]}`
                    } else {
                        for (let geo in user.address.geo) {
                            addressDiv.innerText = `${geo}:${user.address.geo[geo]}`;
                        }
                    }
                    userDiv.appendChild(addressDiv);
                }

            } else if (userKey === 'company') {
                for (let companyKey in user.company) {
                    let companyDiv = document.createElement('div');
                    if (typeof user.company[companyKey] !== 'object') {
                        companyDiv.innerText = `${companyKey}:${user.company[companyKey]}`
                    }

                    userDiv.appendChild(companyDiv);
                }
            }

            container.appendChild(userDiv);


        }

        let btnDiv = document.createElement('div');
        btnDiv.classList.add('btnDiv');
        container.appendChild(btnDiv);

        let btnPost = document.createElement('button');
        btnPost.classList.add('button_post');
        btnPost.innerText = 'post of current user';
        btnDiv.appendChild(btnPost);

        btnPost.onclick = function () {

            fetch('https://jsonplaceholder.typicode.com/users/'+ myParam +'/posts')
                .then(response => {
                    return response.json();
                })
                .then(posts => {
                    let postDiv = document.createElement('div');
                    postDiv.classList.add('postDiv');

                    for (const post of posts) {

                        let postInfo = document.createElement('div');
                        postInfo.classList.add('postInfo');
                        postDiv.appendChild(postInfo);

                        let postTitle = document.createElement('div');
                        postTitle.classList.add('postTitle');
                        postTitle.innerText = `${post.title}`;


                        let btnPostInfo = document.createElement('button');
                        btnPostInfo.classList.add('btnPostInfo');
                        btnPostInfo.innerText = 'Post Details';
                        postInfo.append(postTitle);
                        postInfo.appendChild(btnPostInfo);

                        container.appendChild(postDiv);

                        btnPostInfo.onclick = function () {
                            let postId = post.id;
                            console.log(postId);

                            window.location = `post-details.html?Post_Id=${postId}`;

                        }
                    }
                })

        }

        document.body.appendChild(container);
    })

document.body.appendChild(container);
