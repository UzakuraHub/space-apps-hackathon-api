import UserController from "./users";
import DashboardController from "./dashboard";

const User = new UserController();
const Dashboard = new DashboardController();

export {
  User,
  Dashboard,
}