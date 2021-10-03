class AuthMiddlewares {
  constructor(utils, models) {
    this.Utils = utils;
    this.Services = models;
  }

  protect = async (req, res, next) => {
    try {
      const token = req.headers.authorization.split('Bearer ')[1];
      if (!token)
        return this.Utils.Response.error(res, 401, null, 'Invalid token');

      const { email } = this.Utils.verifyToken(token);

      const user = await this.Services.user.findOne({ where: {email}, include: {model: this.Services.userProfile, as: 'profile'}});
      req.user = user.dataValues;
      req.user.profile = req.user.profile.dataValues;

      return next();
    } catch (error) {
      if (error.message === 'jwt expired')
        return this.Utils.Response.error(res, 401, null, 'Session ended!');
      if (error.message === 'jwt malformed')
        return this.Utils.Response.error(res, 401, null, 'Please login!');
      if (error.message === "Cannot read property 'split' of undefined")
        return this.Utils.Response.error(res, 403, null, 'Token is required!');

      return this.Utils.Response.error(res);
    }
  };
}

export default AuthMiddlewares;
