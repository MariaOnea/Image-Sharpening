# Image-Sharpening
 The purpose of this project is to give a sharpened effect on a given image that is contained in a JSON obtained from API DOG. While working on this application, I practiced both my JavaScript and analytical skills, since the project had constraints that had to be respected. These conditions can be found below in order to better grasp the process of creating this application:
 
For this project, the source image is contained in a JSON obtained from API DOG (https://
https://dog.ceo/dog-api/)

The components of the obtained JSON are displayed in the browser. The image in JSON is processed in canvas. For image processing there were the following options:

Option 1: A mirror (so that the right pixels go to the left and vice versa). followed by processing the resulting image according to the distributed processing basis

Option 2: Application of processing on the left half of the image followed by processing the resulting image according to the distributed processing basis

I HAVE CHOSEN THE FIRST OPTION IN MY IMPLEMENTATION

Writing in canvas is done after a preset time by using setTimeout.
For processing, only algorithms and/or low-level code sequences are used. 
Fetching JSON is done asynchronous (async, await)
The image processing from the canvas is done asynchronously dividing the processing action into 4. slices of execution (with a time between them 1s)
Etapele de executie ale aplicatiei sunt:
- Showing JSON components in browser. 
- Image processing. 
- Record execution time for each stage.
- Display results processing time for each step
