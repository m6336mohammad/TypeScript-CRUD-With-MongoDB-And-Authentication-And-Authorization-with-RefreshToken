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