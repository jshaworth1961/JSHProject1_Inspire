//image-controller.js
import _imageService from "../services/image-service.js";
import _store from "../store.js"

//TODO Create methods for constructor, and rendering the image to the page
//      (you may wish to set it as a background image)

function _drawImage()
{
    let bgImage = _store.State.image;
    console.log('in image-controller _drawImage', bgImage);

    console.log('bgImage.url is',bgImage.url);

    //document.getElementById("bg-image").style.backgroundImage = `"${bgImage.url}"`;
    document.body.style.backgroundImage = `url('${bgImage.url}')`;




}

export default class ImageController
{
    constructor() 
    {
        console.log("You are in the ImageController constructor");
        _store.subscribe("image",_drawImage);
        this.getImage();
        let updateImage = setInterval(this.getImage, 20000);


    }

    getImage()
    {
        _imageService.getImage();
    }






}
