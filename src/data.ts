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

class Commentt {

    constructor(private id: number, private postId: number, private email: string, private body: string){

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
comments.push(new Commentt(50, posts[1].Id, "bibendum@email.com", "Fusce ipsum mi, molestie at ante nec, viverra egestas purus. In eu lectus at augue consectetur venenatis sit amet sed mauris."));
comments.push(new Commentt(60, posts[1].Id, "maximus@email.com", "Fusce ipsum mi, molestie at ante nec, viverra egestas purus. In eu lectus at augue consectetur venenatis sit amet sed mauris."));
comments.push(new Commentt(70, posts[1].Id, "consectetur@email.com", "Fusce ipsum mi, molestie at ante nec, viverra egestas purus. In eu lectus at augue consectetur venenatis sit amet sed mauris."));
comments.push(new Commentt(80, posts[1].Id, "vulputate@email.com", "Fusce ipsum mi, molestie at ante nec, viverra egestas purus. In eu lectus at augue consectetur venenatis sit amet sed mauris."));
comments.push(new Commentt(90, posts[2].Id, "bibendum@email.com", "Fusce ipsum mi, molestie at ante nec, viverra egestas purus. In eu lectus at augue consectetur venenatis sit amet sed mauris."));
comments.push(new Commentt(100, posts[2].Id, "maximus@email.com", "Fusce ipsum mi, molestie at ante nec, viverra egestas purus. In eu lectus at augue consectetur venenatis sit amet sed mauris."));
comments.push(new Commentt(110, posts[2].Id, "consectetur@email.com", "Fusce ipsum mi, molestie at ante nec, viverra egestas purus. In eu lectus at augue consectetur venenatis sit amet sed mauris."));
comments.push(new Commentt(120, posts[2].Id, "vulputate@email.com", "Fusce ipsum mi, molestie at ante nec, viverra egestas purus. In eu lectus at augue consectetur venenatis sit amet sed mauris."));
comments.push(new Commentt(130, posts[3].Id, "bibendum@email.com", "Fusce ipsum mi, molestie at ante nec, viverra egestas purus. In eu lectus at augue consectetur venenatis sit amet sed mauris."));
comments.push(new Commentt(140, posts[3].Id, "maximus@email.com", "Fusce ipsum mi, molestie at ante nec, viverra egestas purus. In eu lectus at augue consectetur venenatis sit amet sed mauris."));
comments.push(new Commentt(150, posts[3].Id, "consectetur@email.com", "Fusce ipsum mi, molestie at ante nec, viverra egestas purus. In eu lectus at augue consectetur venenatis sit amet sed mauris."));
comments.push(new Commentt(160, posts[3].Id, "vulputate@email.com", "Fusce ipsum mi, molestie at ante nec, viverra egestas purus. In eu lectus at augue consectetur venenatis sit amet sed mauris."));

let title;

let aux: string;
let count: number;
aux = "";
count = 0;

for(var i = 0; i < 4; i++){
    if(i == 0)
        aux = "first-title";
    else if(i == 1)
        aux = "second-title";
    else if(i == 2)
        aux = "third-title";
    else if(i == 3)
        aux = "fourth-title";
    
    title = document.getElementById(aux);

    if(title)
        title.innerHTML = posts[i].Title;
}


let image;

aux = "";
count = 0;

for(var i = 0; i < 4; i++){
    if(i == 0)
        aux = "first-img";
    else if(i == 1)
        aux = "second-img";
    else if(i == 2)
        aux = "third-img";
    else if(i == 3)
        aux = "fourth-img";
    
    image = document.getElementById(aux) as HTMLImageElement;

    if(image)
        image.src = posts[i].ImageURL;
}

let body;

aux = "";
count = 0;

for(var i = 0; i < 4; i++){
    if(i == 0)
        aux = "first-body";
    else if(i == 1)
        aux = "second-body";
    else if(i == 2)
        aux = "third-body";
    else if(i == 3)
        aux = "fourth-body";
    
    body = document.getElementById(aux);

    if(body)
        body.innerHTML = posts[i].Body;
}

let email;

aux = "";
count = 0;

for(var i = 0; i < 4; i++){
    for(var j = 1; j <= 4; j++){
        if(i == 0)
            aux = "first-email" + j;
        else if(i == 1)
            aux = "second-email" + j;
        else if(i == 2)
            aux = "third-email" + j;
        else if(i == 3)
            aux = "fourth-email" + j;
        
        email = document.getElementById(aux);

        if(email)
            email.innerHTML = comments[count].Email;
        
        count++;
    }
}

let comment;

aux = "";
count = 0;

for(var i = 0; i < 4; i++){
    for(var j = 1; j <= 4; j++){
        if(i == 0)
            aux = "first-ID" + j;
        else if(i == 1)
            aux = "second-ID" + j;
        else if(i == 2)
            aux = "third-ID" + j;
        else if(i == 3)
            aux = "fourth-ID" + j;
        
        comment = document.getElementById(aux);

        if(comment)
            comment.innerHTML = "Comment " + comments[count].Id + " From Post " + comments[count].PostId;
        
        count++;
    }
}

let bodyComment;

aux = "";
count = 0;

for(var i = 0; i < 4; i++){
    for(var j = 1; j <= 4; j++){
        if(i == 0)
            aux = "first-body" + j;
        else if(i == 1)
            aux = "second-body" + j;
        else if(i == 2)
            aux = "third-body" + j;
        else if(i == 3)
            aux = "fourth-body" + j;
        
        bodyComment = document.getElementById(aux);

        if(bodyComment)
            bodyComment.innerHTML = comments[count].Body;
        
        count++;
    }
}
