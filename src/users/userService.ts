import UserModel from "../model/userModel";
import UserDTO from "./user_dto/userDTO";
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
//delete User By Id
export const deleteUserById = async (id: string) => {
  return new Promise((resolve, rejects) => {
    UserModel.findByIdAndDelete(id)
      .then((user) => {
        resolve(user);
      })
      .catch((err) => {
        rejects(err);
      });
  });
};
//update user by Id
export const updateUserById = (userId: string, body: UserDTO) => {
  return new Promise((resolve, rejects) =>
    UserModel.findByIdAndUpdate(userId, body)
      .then((user) => {
        console.log(user);
        resolve(user);
      })
      .catch((err) => {
        rejects(err);
      })
  );
};
