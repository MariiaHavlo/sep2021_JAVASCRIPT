let button = document.getElementsByClassName('userDetails');

let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
console.log( favorites);


let container = document.createElement('div');
container.classList.add('container');


for (let userKey in favorites) {
    let userDiv = document.createElement('div');
    userDiv.classList.add('user_main_info');
    if (typeof favorites[userKey] !== 'object') {
        userDiv.innerHTML = `<h4>${userKey}:${favorites[userKey]}</h4>`

    } else if (userKey === 'address') {
        for (let addressKey in favorites.address) {
            let addressDiv = document.createElement('div');
            if (typeof favorites.address[addressKey] !== 'object') {
                addressDiv.innerText = `${addressKey}:${favorites.address[addressKey]}`
            } else {
                for (let geo in favorites.address.geo) {
                    addressDiv.innerText = `${geo}:${favorites.address.geo[geo]}`;
                }
            }
            userDiv.appendChild(addressDiv);
        }

    } else if (userKey === 'company') {
        for (let companyKey in favorites.company) {
            let companyDiv = document.createElement('div');
            if (typeof favorites.company[companyKey] !== 'object') {
                companyDiv.innerText = `${companyKey}:${favorites.company[companyKey]}`
            }

            userDiv.appendChild(companyDiv);
        }
    }

    container.appendChild(userDiv)


}

let btnDiv = document.createElement('div');
btnDiv.classList.add('btnDiv');
container.appendChild(btnDiv);

let btnPost = document.createElement('button');
btnPost.classList.add('button_post');
btnPost.innerText = 'post of current user';
btnDiv.appendChild(btnPost);

btnPost.onclick = function () {

    fetch('https://jsonplaceholder.typicode.com/users/'+favorites.id+'/posts')
        .then(response => {
            return response.json();
        })
        .then(posts => {
            let postDiv = document.createElement('div')
            postDiv.classList.add('postDiv');

            for (const post of posts) {

                let postInfo = document.createElement('div');
                postInfo.classList.add('postInfo');
                postDiv.appendChild(postInfo);

                let postTitle = document.createElement('div');
                postTitle.classList.add('postTitle');
                postTitle.innerText = `${post.title}`


                let btnPostInfo = document.createElement('button');
                btnPostInfo.classList.add('btnPostInfo');
                btnPostInfo.innerText = 'Post Details';
                postInfo.append(postTitle);
                postInfo.appendChild(btnPostInfo);

                container.appendChild(postDiv);

                btnPostInfo.onclick = function () {

                    localStorage.setItem('post', JSON.stringify(post));
                    window.location = 'post-details.html'
                }
            }
        })

}

document.body.appendChild(container);