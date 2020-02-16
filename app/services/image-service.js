// @ts-ignore
import Image from "../models/image.js"
import _store from "../store.js"

const _imageApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/images",
  timeout: 8000
});

//TODO create methods to retrieve data trigger the update window when it is complete
class ImageService {

  constructor() 
  {
    console.log("You are in the ImageServiceConstructor")
  }

  getImage()
  {
    _imageApi
    .get("")
    .then(res =>
    {
      let bgImage = new Image(res.data);
      console.log('in ImageService getImage()',bgImage);
      _store.commit("image",bgImage);
    })
    .catch(error =>
    {
      console.error(error);
    });

  }



}

const imageService = new ImageService();
export default imageService;
