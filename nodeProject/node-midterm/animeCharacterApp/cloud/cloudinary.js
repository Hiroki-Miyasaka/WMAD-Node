import * as cloudinary from 'cloudinary/v2';
import dotenv from "dotenv";

dotenv.config();

const cloudName = CLOUD_NAME;
const apiKey = API_KEY;
const apiSecret = API_SECRET;

cloudinary.config({
  cloud_name: cloudName,
  api_key: apiKey,
  api_secret: apiSecret
});

cloudinary.uploader.upload(file_path, function(error, result) {
    console.log(result);
});

const imageUrl = result.url; // this will give you the url

export default imageUrl;