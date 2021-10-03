class ImageHandler {
  constructor(Utils) {
    this.Utils = Utils;
  }

  handleUpload = async (req, res, next) => {
    try {
      const { files } = req;
      const { tempFilePath } = files.photo;
      const { url, public_id } = await this.Utils.Image.upload(tempFilePath);

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
