//image.js
export default class Image {
    constructor(data) {
        console.log('[ImageData]', data);

        this.id = data.id;
        this.url = data.large_url;


        if (data.large_url == null || data.large_url == "") {
            this.url = "http://2.bp.blogspot.com/-R-peX4VsSwQ/UfjcNjtorDI/AAAAAAAAA08/5bpD3hTX9Zc/s1600/Tazmania-Cartoon-Characters-Wallpaper.jpg"
        }


    }



    get ImageTemplate() {

        return `${this.url}`

    }
}

