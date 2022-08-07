
// function for creating images
function newItem(src, left, right, item=false) {
    let img = document.createElement('img');
    img.src = src;
    img.style.position = 'fixed';
    img.style.left = left;
    img.style.bottom = right;
    document.body.append(img);

    if (item) {
        img.addEventListener('dblclick', function() {
            img.remove();
        })
    }
}

// add background
const ROWS = Math.ceil(window.innerHeight / 100); // each tile is 100x100, round up
const COLS = Math.ceil(window.innerWidth / 100);  // for incomplete rows and cols

for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
        console.log(row, col);
        if (row < 5) {
            newItem('/assets/grass.png', `${(col * 100)}px`, `${(row * 100)}px`);
        } else {
            newItem('/assets/sky.png', `${(col * 100)}px`, `${(row * 100)}px`)
        }
    }
}

// add environment images
newItem('/assets/green-character.gif', '100px', '100px');
newItem('/assets/pine-tree.png', '450px', '200px');
newItem('/assets/tree.png', '200px', '300px');
newItem('/assets/pillar.png', '350px', '100px');
newItem('/assets/crate.png', '150px', '200px');
newItem('/assets/well.png', '500px', '425px');

// add items
newItem('/assets/sword.png', '500px', '405px', true);
newItem('/assets/sheild.png','165px', '185px', true);
newItem('/assets/staff.png', '600px', '100px', true);