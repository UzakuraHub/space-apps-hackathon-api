import uploader from 'express-fileupload';
import * as Utils from '../utils';
import models from '../db/models';
import ImageHandler from './image';
import AuthMiddlewares from './auth';

const Auth = new AuthMiddlewares(Utils, models);
const Image = new ImageHandler(Utils, models);

export const setupUploader = (app) => app.use(uploader({ useTempFiles: true }));
export { Auth, Image };
