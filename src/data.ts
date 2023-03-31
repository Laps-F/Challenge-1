class Post {

    constructor(public id: number, public title: string, public imageUrl: string, public body: string) {

    }

    get Id(){
        return this.id;
    }

    get Title(){
        return this.title;
    }

    get ImageURL(){
        return this.imageUrl;
    }

    get Body(){
        return this.body;
    }
}

class Commentt {

    constructor(public id: number, public postId: number, public email: string, public body: string){

    }

    get Id(){
        return this.id;
    }

    get PostId(){
        return this.postId;;
    }

    get Email(){
        return this.email;
    }

    get Body(){
        return this.body;
    }
}

let posts: Post[];
posts = [new Post(1,"Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "https://picsum.photos/id/42/3456/2304", "Etiam massa massa, laoreet ac neque vel, condimentum eleifend nunc. In luctus, metus nec consequat malesuada, odio nisi dapibus enim.")];
posts.push(new Post(2,"Curabitur et nibh id arcu posuere fermentum.", "https://picsum.photos/id/41/1280/805", "Donec quam metus, lacinia sit amet elit eget, laoreet ultrices ante. Nulla ornare pulvinar magna, eu finibus ante iaculis a."));
posts.push(new Post(3,"Morbi posuere lacus eu dolor dignissim sollicitudin.", "https://picsum.photos/id/122/4147/2756", "Curabitur sit amet dignissim dui. Morbi nec ultrices erat, ut pharetra risus. Quisque sed sem vehicula, maximus leo in, vehicula mi."));
posts.push(new Post(4,"Phasellus malesuada mi at imperdiet consectetur.", "https://picsum.photos/id/18/2500/1666", "Aenean aliquet, ex ut mollis egestas, neque felis porttitor felis, at cursus risus enim eget dolor. In hac habitasse platea dictumst."));

let comments: Commentt[];
comments = [new Commentt(10, posts[0].Id, "bibendum@email.com", "Fusce ipsum mi, molestie at ante nec, viverra egestas purus. In eu lectus at augue consectetur venenatis sit amet sed mauris.")];
comments.push(new Commentt(20, posts[0].Id, "maximus@email.com", "Fusce ipsum mi, molestie at ante nec, viverra egestas purus. In eu lectus at augue consectetur venenatis sit amet sed mauris."));
comments.push(new Commentt(30, posts[0].Id, "consectetur@email.com", "Fusce ipsum mi, molestie at ante nec, viverra egestas purus. In eu lectus at augue consectetur venenatis sit amet sed mauris."));
comments.push(new Commentt(40, posts[0].Id, "vulputate@email.com", "Fusce ipsum mi, molestie at ante nec, viverra egestas purus. In eu lectus at augue consectetur venenatis sit amet sed mauris."));
comments.push(new Commentt(50, posts[1].Id, "bibendum@email.com", "Nulla sit amet semper orci. Suspendisse vitae arcu in nibh pharetra posuere. Nam eu elit sed dui malesuada pellentesque."));
comments.push(new Commentt(60, posts[1].Id, "maximus@email.com", "Nulla sit amet semper orci. Suspendisse vitae arcu in nibh pharetra posuere. Nam eu elit sed dui malesuada pellentesque."));
comments.push(new Commentt(70, posts[1].Id, "consectetur@email.com", "Nulla sit amet semper orci. Suspendisse vitae arcu in nibh pharetra posuere. Nam eu elit sed dui malesuada pellentesque."));
comments.push(new Commentt(80, posts[1].Id, "vulputate@email.com", "Nulla sit amet semper orci. Suspendisse vitae arcu in nibh pharetra posuere. Nam eu elit sed dui malesuada pellentesque."));
comments.push(new Commentt(90, posts[2].Id, "bibendum@email.com", "Sed bibendum ante a augue sagittis imperdiet. Suspendisse justo libero, vehicula sit amet semper vitae, tempus sed mauris."));
comments.push(new Commentt(100, posts[2].Id, "maximus@email.com", "Sed bibendum ante a augue sagittis imperdiet. Suspendisse justo libero, vehicula sit amet semper vitae, tempus sed mauris."));
comments.push(new Commentt(110, posts[2].Id, "consectetur@email.com", "Sed bibendum ante a augue sagittis imperdiet. Suspendisse justo libero, vehicula sit amet semper vitae, tempus sed mauris."));
comments.push(new Commentt(120, posts[2].Id, "vulputate@email.com", "Sed bibendum ante a augue sagittis imperdiet. Suspendisse justo libero, vehicula sit amet semper vitae, tempus sed mauris."));
comments.push(new Commentt(130, posts[3].Id, "bibendum@email.com", "Maecenas nec tincidunt ipsum. Sed viverra lacus ante, id ornare felis condimentum nec. Aliquam erat volutpat.Quisque malesuada risus mi."));
comments.push(new Commentt(140, posts[3].Id, "maximus@email.com", "Maecenas nec tincidunt ipsum. Sed viverra lacus ante, id ornare felis condimentum nec. Aliquam erat volutpat.Quisque malesuada risus mi."));
comments.push(new Commentt(150, posts[3].Id, "consectetur@email.com", "Maecenas nec tincidunt ipsum. Sed viverra lacus ante, id ornare felis condimentum nec. Aliquam erat volutpat.Quisque malesuada risus mi."));
comments.push(new Commentt(160, posts[3].Id, "vulputate@email.com", "Maecenas nec tincidunt ipsum. Sed viverra lacus ante, id ornare felis condimentum nec. Aliquam erat volutpat.Quisque malesuada risus mi."));

let aux: string;
let count: number;

const postCard = ({ id, title, imageUrl, body}: {id: number, title: string, imageUrl: string, body: string}) => `
    <button type="button" class="post-btn" id="${id}">
        <session class="mySlides fade">
            <div class="numbertext"> ${id} / 4</div>
            <img src="${imageUrl}" class="image">
            <h3 class="text">${title}</h3>
            <div class="text">${body}</div>
        </session>
    </button>
`;

const commentCard = ({id, postId, email, body}: {id: number, postId: number, email: string, body: string}) => `
    <session class="comment">
        <h3 class="text-details">Comment</h3>
        <p class="text-details">Comment ${id} from Post ${postId}</p>
        <p class="text-details">${email}</p>
        <p class="text-details"">${body}</p>
    </session>
`;

var postsList: HTMLElement | null;
let postsDataToHTML = '';

showPosts();

function showPosts() {
    postsList = document.getElementById("posts-list");
    if(postsList){
        postsDataToHTML = '';
        for(const postData of posts){
            postsDataToHTML += postCard(postData);
        }

        postsDataToHTML += `<a class="prev" onclick="plusSlides(-1)">&#10094;</a>
                            <a class="next" onclick="plusSlides(1)">&#10095;</a>
                            `;

        postsList.innerHTML = postsDataToHTML;

        const postButtons = document.querySelectorAll('.post-btn');
        postButtons.forEach((button) => {
            button.addEventListener('click', function (this: Post) {
            showPostDetails(+this.id);
            });
        });
    }
}

function showPostDetails(postId: number){

    const post = posts.filter(p => p.id === postId);
    const commentts = comments.filter(c => c.postId === postId);

    postsDataToHTML = '';
    for(const postData of post){
        postsDataToHTML += postCard(postData);
    }

    for(const commentData of commentts){
        postsDataToHTML += commentCard(commentData);
    }

    postsDataToHTML += `<div class="center"><button type="button" class="home-page text-details button">Back to List of Posts</button></div>`;

    if(postsList)
        postsList.innerHTML = postsDataToHTML;

    const homePageButton = document.querySelectorAll('.home-page');
    homePageButton.forEach((button) => {
        button.addEventListener('click', function () {
        showPosts();
        showSlides(slideIndex);
        });
    });
}
