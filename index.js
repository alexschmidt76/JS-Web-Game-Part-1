function newImage(src, left, right) {
    let img = document.createElement('img');
    img.src = src;
    img.style.position = 'fixed';
    img.style.left = left;
    img.style.bottom = right;
    document.body.append(img);
}

newImage('/assets/green-character.gif', '100px', '100px');
newImage('/assets/pine-tree.png', '450px', '200px');