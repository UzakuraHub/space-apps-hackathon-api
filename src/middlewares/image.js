import cloudinary from '../config/cloudinary';

class ImageHandler {
  constructor(Utils) {
    this.Utils = Utils;
  }

  handleUpload = async (req, res, next) => {
    try {
      const { files } = req;
      if (!files || !files.image) return next();

      const { tempFilePath } = files.image;
      const { url, public_id } = await cloudinary.upload(tempFilePath);

      req.photo = url;
      req.photoPublicId = public_id;

      return next();
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
  };
}

export default ImageHandler;
