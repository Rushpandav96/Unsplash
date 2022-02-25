async function makeAPICall(url){
    try{
        let res = await fetch(url);
        let data = await res.json();

        return data;

    }catch(err){
        console.log("err:", err);
    }
}


function appendPictures(data,parent){
    data.forEach(elem => {
        let div = document.createElement("div");

        let image = document.createElement("img");
        image.src = elem.urls.small;

        let p = document.createElement("P");
        p.innerText = elem.user.name;

        div.append(image, p);
        parent.append(div);
    });
}

export {makeAPICall, appendPictures };