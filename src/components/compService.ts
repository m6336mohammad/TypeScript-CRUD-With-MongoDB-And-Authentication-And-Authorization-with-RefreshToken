import ServerError from "../errors/serverError";
import ComponentModel from "../model/ComponentModel";
import CreateProductsDTO from "./../components/dto/componentCreateDTO"
import UpdateComponentDTO from "./../components/dto/componentsUpdateDTO";
import GetAllComponentDTO from "./../components/dto/getAllComponentDTO";
export const getAllComponents = async (filtter:GetAllComponentDTO) => {
    const {topic,title,page,page_size}=filtter

    let query = {}
    if(topic){
        query={topic:topic}
    }

    if(title){
        query={title:title}
    }
    const result = await ComponentModel.find(query,{},{skip:page_size*(page-1),limit:page_size})
    return result;
};

export const getOneComponents = async (id: string) => {
  const result = await ComponentModel.findById(id);
  if(!result){
    throw new ServerError(404,"Not fond device")
  }
  return result
};

export const createNewComponents = async (data:CreateProductsDTO) => {
    const result = await ComponentModel.create(data)
    return result
};

export const updateComponents = async (id: string, data:UpdateComponentDTO) => {
  const component = await ComponentModel.findOne({"_id":id, user:data.user})
  if(!component){
    throw new ServerError(404,"Not fond devices")
  }
  const updateComp = await ComponentModel.findOneAndUpdate({"_id":id},{$set:data})
  return updateComp
};

export const deleteComponents = async (id: string, user:string) => {
    const component = await ComponentModel.findOne({"_id":id,user})
    console.log(component)
    if(!component){
        throw new ServerError(404,"Not fond device")
    }
    const deleteComp = await ComponentModel.deleteOne({"_id":id})
    return deleteComp
};
