






function calculateTriangleArea() {
    // triangle base value
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseText);
    console.log(base)





    // triangle height value


    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightText = triangleHeightInput.value;

    const height = parseFloat(triangleHeightText);
    console.log(height);

    const area = 0.5 * base * height;
    console.log('This is total', area);



    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = area;


}



function calculateRectangleArea() {
    const rectangleBaseInput = document.getElementById('rectangle-base');
    const rectangleBaseText = rectangleBaseInput.value;
    const width = parseFloat(rectangleBaseText);

    console.log(width);


const rectainglelengthInput = document.getElementById('rectangle-length');
const rectanglelengthText = rectainglelengthInput.value;
const length2 = parseFloat(rectanglelengthText);
console.log(length2);


const area2 = width * length2
console.log('This is rectanglearea total', area2)


const rectangleAreaSpan = document.getElementById('rectangle-area')
rectangleAreaSpan.innerText = area2;

}




