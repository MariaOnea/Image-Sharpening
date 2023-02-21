let startTime, endTime;
function sharpenImage(imageData) {
    // Start measuring performance time
    startTime = performance.now();
    // Set the convolution mask to be used
    var convolutionMask = [        0, -1, 0,        -1, 5, -1,        0, -1, 0    ];
    // Get the width and height of the image
    var width = imageData.width;
    var height = imageData.height;
    // Get the data of the image
    var data = imageData.data;
    // Create a new ImageData object
    var newImageData = new ImageData(width, height);
    // Get the data of the new ImageData object
    var newData = newImageData.data;
    // Set the convolution mask size
    var n = 1;
    // Initialize the offset
    var offset = 0;
    for (var y = 0; y < height; y++) {
        for (var x = 0; x < width; x++) {
            // Initialize the color values
            var r = 0, g = 0, b = 0;
            // Loop through the convolution mask
            for (var i = -n; i <= n; i++) {
                for (var j = -n; j <= n; j++) {
                    // Get the pixel data
                    var pixel = getPixel(x + j, y + i);
                    // Get the value of the convolution mask
                    var maskValue = convolutionMask[n + j + (n + i) * 3];
                    // Calculate the new color values
                    r += pixel[0] * maskValue;
                    g += pixel[1] * maskValue;
                    b += pixel[2] * maskValue;
                }
            }
            // Set the new color values
            newData[offset++] = Math.min(255, Math.max(r, 0));
            newData[offset++] = Math.min(255, Math.max(g, 0));
            newData[offset++] = Math.min(255, Math.max(b, 0));
            newData[offset++] = 255;
        }
    }
   
    return newImageData;
    // Get pixel data for a specific x and y coordinate
    function getPixel(x, y) {
        // Check if coordinates are out of bounds
        if (x < 0 || x >= width || y < 0 || y >= height) {
            return [0, 0, 0];
        }
        // Calculate the offset
        var offset = (y * width + x) * 4;
        // Return the color values
        return [data[offset], data[offset + 1], data[offset + 2]];
    }
    

}

async function procesareImagine() {
    startTime = performance.now();
    // Get image data from API
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const json = await response.json();
    const imageUrl = json.message;

    // Convert JSON object to string
    const jsonString = JSON.stringify(json);

    // Create a div element
    const div = document.createElement('div');

    // Insert the JSON string into the div's innerHTML
    div.innerHTML = jsonString;

    // Add the div to the body
    document.body.appendChild(div);
    endTime = performance.now();
    var results = document.createElement('p');
    results.innerHTML = 'Preluarea imaginii din JSON...' + (endTime - startTime).toFixed(0) + ' ms.';
    document.body.appendChild(results);

    startTime = performance.now();
    // Create image element and set source
    const image = new Image();
    image.src = imageUrl;
    image.crossOrigin = "anonymous";

    // Add the image to the body
    document.body.appendChild(image);

    // Wait for image to load
    await new Promise((resolve, reject) => {
        image.onload = resolve;
        image.onerror = reject;
    });

    // Create canvas and context
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    // Set canvas dimensions to match image
    canvas.width = image.width;
    canvas.height = image.height;

    // Draw image on canvas
    ctx.drawImage(image, 0, 0);
    // Append canvas to body
    document.body.appendChild(canvas);
    endTime = performance.now();
    var results = document.createElement('p');
    results.innerHTML = 'Punerea pozei in canvas...' + (endTime - startTime).toFixed(0) + ' ms.';
    document.body.appendChild(results);
    

    startTime = performance.now();
    // Mirror image by swapping pixels
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    for (let x = 0; x < canvas.width / 2; x++) {
        for (let y = 0; y < canvas.height; y++) {
            const leftPixelIndex = (x + y * canvas.width) * 4;
            const rightPixelIndex = (canvas.width - x - 1 + y * canvas.width) * 4;
            for (let i = 0; i < 4; i++) {
                const leftPixelValue = imageData.data[leftPixelIndex + i];
                imageData.data[leftPixelIndex + i] = imageData.data[rightPixelIndex + i];
                imageData.data[rightPixelIndex + i] = leftPixelValue;
            }
        }
    }
    endTime = performance.now();
    var results = document.createElement('p');
    results.innerHTML = 'Oglindirea imaginii...' + (endTime - startTime).toFixed(0) + ' ms.';
    document.body.appendChild(results);

    //set startTime and endTime for showing the execution time
    startTime = performance.now();
    // Sharpen the image
    const sharpenedImageData = sharpenImage(imageData);
    endTime = performance.now();
    var results = document.createElement('p');
    results.innerHTML = 'Aplicam efectul de sharpening...' + (endTime - startTime).toFixed(0) + ' ms.';
    document.body.appendChild(results);

    // Put the sharpened image data back on canvas
    ctx.putImageData(sharpenedImageData, 0, 0);

    // Append canvas to body
    document.body.appendChild(canvas);
}
setTimeout(procesareImagine, 2000);

