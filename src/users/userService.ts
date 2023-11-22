import UserModel from "../model/userModel";

//get AllUsers
export const getAllUsers = () => {
  return new Promise((resolve, rejects) => {
    UserModel.find()
      .then((users) => {
        resolve(users);
      })
      .catch((err) => {
        rejects(err);
      });
  });

};

//get User By Id
export const getUserByID = async (id: string) => {
  return new Promise((resolve, rejects) => {
    UserModel.findById(id)
      .then((user) => {
        resolve(user);
      })
      .catch((err) => {
        rejects(err);
      });
  });
};
