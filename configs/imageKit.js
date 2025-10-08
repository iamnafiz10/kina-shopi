import ImageKit from 'imagekit';

var imageKit = new ImageKit({
    publicKey: process.env.IMAGEKIT_PUBLIC_KIT,
    privateKey: process.env.IMAGEKIT_PRIVATE_KIT,
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT
});

export default imageKit;