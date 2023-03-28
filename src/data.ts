class Post {

    constructor(private id: number, private title: string, private imageURL: string, private body: string) {

    }

    get Id(){
        return this.id;
    }

    get Title(){
        return this.title;
    }

    get ImageURL(){
        return this.imageURL;
    }

    get Body(){
        return this.body;
    }
}

class ListOfComments {

    constructor(private post: Post, private postId: number, private email: string, private body: string){

    }

    get Post(){
        return this.post;
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

const first_post = new Post(1,"Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "https://picsum.photos/200/300", "Etiam massa massa, laoreet ac neque vel, condimentum eleifend nunc. In luctus, metus nec consequat malesuada, odio nisi dapibus enim, rutrum aliquet ante quam vitae tortor.");
const second_post = new Post(2,"Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "https://picsum.photos/200/300", "Etiam massa massa, laoreet ac neque vel, condimentum eleifend nunc. In luctus, metus nec consequat malesuada, odio nisi dapibus enim, rutrum aliquet ante quam vitae tortor.");
const third_post = new Post(3,"Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "https://picsum.photos/200/300", "Etiam massa massa, laoreet ac neque vel, condimentum eleifend nunc. In luctus, metus nec consequat malesuada, odio nisi dapibus enim, rutrum aliquet ante quam vitae tortor.");
const fourth_post = new Post(4,"Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "https://picsum.photos/200/300", "Etiam massa massa, laoreet ac neque vel, condimentum eleifend nunc. In luctus, metus nec consequat malesuada, odio nisi dapibus enim, rutrum aliquet ante quam vitae tortor.");

const first_comment = new ListOfComments(first_post, 10, "bibendum@email.com", "Fusce ipsum mi, molestie at ante nec, viverra egestas purus. In eu lectus at augue consectetur venenatis sit amet sed mauris.");
const second_comment = new ListOfComments(first_post, 20, "maximus@email.com", "Fusce ipsum mi, molestie at ante nec, viverra egestas purus. In eu lectus at augue consectetur venenatis sit amet sed mauris.");
const third_comment = new ListOfComments(first_post, 30, "consectetur@email.com", "Fusce ipsum mi, molestie at ante nec, viverra egestas purus. In eu lectus at augue consectetur venenatis sit amet sed mauris.");
const fourth_comment = new ListOfComments(first_post, 40, "vulputate@email.com", "Fusce ipsum mi, molestie at ante nec, viverra egestas purus. In eu lectus at augue consectetur venenatis sit amet sed mauris.");

document.getElementById("first-title")!.innerHTML = first_post.Title;
document.getElementById("second-title")!.innerHTML = second_post.Title;
document.getElementById("third-title")!.innerHTML = third_post.Title;
document.getElementById("fourth-title")!.innerHTML = fourth_post.Title;

(document.getElementById("first-img")! as HTMLImageElement).src = first_post.ImageURL;
(document.getElementById("second-img")! as HTMLImageElement).src = second_post.ImageURL;
(document.getElementById("third-img")! as HTMLImageElement).src = second_post.ImageURL;
(document.getElementById("fourth-img")! as HTMLImageElement).src = second_post.ImageURL;


document.getElementById("first-body")!.innerHTML = first_post.Body;
document.getElementById("second-body")!.innerHTML = second_post.Body;
document.getElementById("third-body")!.innerHTML = third_post.Body;
document.getElementById("fourth-body")!.innerHTML = fourth_post.Body;



