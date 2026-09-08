import ImageKit from '@imagekit/nodejs';
import config from '../config/config.js';

const client = new ImageKit({
  privateKey: config.IMAGEKIT_PRIVATE_KEY, // This is the default and can be omitted
});


export async function uploadFile(file,fileName){
    const response=await client.files.upload({
        file,
        fileName,
        folder:"/snitch-2"
    })

    return response.url
}
