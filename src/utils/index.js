import asyncHandler from './asyncHandler';
import ErrorResponse from './errorRespones';
import { signToken, verifyToken } from './token';
import { encryptPassword, decryptPassword } from './password';

const Response = {
  error: (res, status=500,data=null, error= 'Server Error') => res.status(status).json({ status, error, data }),
  success: (res, status=200,data={}, message= 'Successful') => res.status(status).json({ status, message, data })
}

export {
  Response,
  signToken,
  verifyToken,
  asyncHandler,
  ErrorResponse,
  encryptPassword,
  decryptPassword,
};
