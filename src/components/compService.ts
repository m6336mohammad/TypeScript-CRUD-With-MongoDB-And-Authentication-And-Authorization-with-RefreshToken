import ServerError from "../errors/serverError";
import ComponentModel from "../model/ComponentModel";
import CreateProductsDTO from "./../components/dto/componentCreateDTO"
import UpdateComponentDTO from "./../components/dto/componentsUpdateDTO";
import GetAllComponentDTO from "./../components/dto/getAllComponentDTO";

export const getAllComponents = async (filter:GetAllComponentDTO) => {
    const {topic,title,page,page_size}=filter

    let query = {}
    if(topic){
        query={topic:topic}
    }

    if(title){
        query={title:title}
    }
    const resalt = await ComponentModel.find(query,{},{skip:page_size*(page-1),limit:page_size})
    return resalt;
};

export const getOneComponents = async (id: string) => {
  const resalt = await ComponentModel.findById(id);
  if(!resalt){
    throw new ServerError(404,"Not fond device")
  }
  return resalt
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
