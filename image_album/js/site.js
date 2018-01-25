let myPicturesArray = [
    {
        "albumId": 1
        , "id": 1
        , "title": "accusamus beatae ad facilis cum similique qui sunt"
        , "url": "http://placehold.it/600/92c952"
        , "thumbnailUrl": "http://placehold.it/150/92c952"
}
    , {
        "albumId": 1
        , "id": 2
        , "title": "reprehenderit est deserunt velit ipsam"
        , "url": "http://placehold.it/600/771796"
        , "thumbnailUrl": "http://placehold.it/150/771796"
}
    , {
        "albumId": 2
        , "id": 51
        , "title": "non sunt voluptatem placeat consequuntur rem incidunt"
        , "url": "http://placehold.it/600/8e973b"
        , "thumbnailUrl": "http://placehold.it/150/8e973b"
}
    , {
        "albumId": 2
        , "id": 52
        , "title": "eveniet pariatur quia nobis reiciendis laboriosam ea"
        , "url": "http://placehold.it/600/121fa4"
        , "thumbnailUrl": "img/child.jpg"
}
    , {
        "albumId": 3
        , "id": 127
        , "title": "magnam quia sed aspernatur"
        , "url": "http://placehold.it/600/74456b"
        , "thumbnailUrl": "img/child.jpg"
}
    , {
        "albumId": 3
        , "id": 128
        , "title": "est facere ut nam repellat numquam quia quia eos"
        , "url": "http://placehold.it/600/b0931d"
        , "thumbnailUrl": "img/child.jpg"
}
];
// Display picures
myPicturesArray.forEach(function (currentImage) {
    let image = document.createElement("img");
    image.src = currentImage.thumbnailUrl;
    image.alt = currentImage.title;
    image.style.margin = "5px";
    image.style.boxShadow = "5px 5px 5px #000000";
    image.style.border = "2px solid grey"; 
    image.style.height = "150px";
    image.style.width = "150px";
    image.setAttribute("id", currentImage.id);
    document.body.append(image);
    image.addEventListener('click', getBiggerImg);
});


function getBiggerImg(evt) {
    let m = document.querySelector("#biggerImg");
    m.style.height = "200px";
    m.style.width = "200px";
    m.style.backgroundColor = "#000000";
    m.innerHTML = "<img src=' " + evt.target.getAttribute("src") + "' height='200' />";
}