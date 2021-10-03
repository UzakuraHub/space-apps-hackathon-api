import { user as User, userProfile } from '../db/models';
import { signToken } from '../utils/token';

class UserController {

  async updateProfile (req, res) {
    const user = await userProfile.update({ where: {userId: req.user.id}, returning: true, plain: true   },req.body);
    if (!user) return res.status(404).json({ status: 404, error: 'unable to update user profile!'});

    return res.status(200).json({ status: 200, message: 'Successfully update user profile!', data: { profile: user.dataValues }})
  }

  async login (req, res) {
    const user = await User.findOne({ where: {email: req.body.email} , include: {model: userProfile, as: 'profile' }});
    if (!user) return res.status(401).json({ status: 401, error: 'unable to login user!' });
    if (user.password !== req.body.password) return res.status(401).json({ status: 401, error: 'unable to login user!'});

    const token = signToken({ id: user.id, email: user.email, language: user.profile.language, location: user.profile.location })
    return res.status(200).json({ status: 200, message: 'Successfully logged in!', data: { user: {...user.dataValues, password: null}, token }})
  }

  async register (req, res) {
    const user = await User.create(req.body);
    if (!user) return res.status(400).json({ status: 400, error: 'unable to create user!'});
    const profile = await userProfile.create({ userId: user.id, ...req.body })

    const token = signToken({ id: user.id, email: user.email, language: profile.language, location: profile.location })
    return res.status(201).json({ status: 201, message: 'Successfully registered', data: { user: {...user.dataValues, password: null}, token }})
  }
}

export default UserController;