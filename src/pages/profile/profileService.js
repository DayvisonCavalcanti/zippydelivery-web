import utilService from "../../utilService";
import axios from "axios";

const apiUrl = utilService.getURlAPI();
const token = localStorage.getItem('token');

const profileService = {

  createEmpresa: async function (body, id) { 
    try {
        if (!id) {
            throw new Error("O ID da empresa é obrigatório.");
        }
        if (!body || typeof body !== "object") {
            throw new Error("O corpo da requisição é obrigatório e deve ser um objeto.");
        }

        console.log("ID DA REQUISIÇÃO:", id)
        console.log("BODY DA REQUISIÇÃO:", body)

        const response = await axios.put(`${apiUrl}/empresa/${id}`, body, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        console.error("Erro ao fazer a requisição:", error.message || error);
        throw error;
    }
},


  getEmpresa: async function (id) { 
    try {
      const response = await axios.get(`${apiUrl}/empresa/usuario/${id}`);
      return response.data; 
    } catch (error) {
      console.error("Erro ao obter empresa:", error);
      throw error; 
    }
  },

  getAll: async function () {
    try {
      const response = await axios.get(`${apiUrl}/empresa`);
      return response.data;
    } catch (error) {
      console.error("Erro ao obter todas as empresas:", error);
      throw error;
    }
  },

  deleteEmpresa: async function(id) {
    try {
      const response = await axios.delete(`${apiUrl}/empresa/${id}`);
      return response.data;
    } catch (error) {
      console.error("Erro ao deletar empresa:", error);
      throw error;
    }
  }
};

export default profileService;