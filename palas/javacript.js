let b = 5;  
let x = -Math.PI;
while (x < Math.PI) {
    let y = b* Math.cos(x);
    console.log(y);
    x += (Math.PI - Math.PI / 8);
}