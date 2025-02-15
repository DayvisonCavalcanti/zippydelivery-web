import { useState, useEffect } from 'react';
import axios from 'axios';
import utilService from "../utilService";


export default function useCompanyId() {
  const [empresaId, setEmpresaId] = useState(null);
  const apiUrl = utilService.getURlAPI();

  useEffect(() => {
    const userId = localStorage.getItem("id");
    console.log("User ID do localStorage:", userId);

    axios.get(`${apiUrl}/empresa`)
      .then(response => {
        const empresas = response.data; 

        const empresa = empresas.find(empresa => empresa.usuario.id === parseInt(userId));
        
        if (empresa) {
          console.log("Empresa encontrada:", empresa);
          console.log("ID da empresa encontrada:", empresa.id); // Adicionado este log
          setEmpresaId(empresa.id); 
        } else {        
          console.error("Usuário não tem permissão para acessar essa empresa");
        }
      })
      .catch(error => {
        console.error('Erro ao buscar os dados da empresa:', error);
      });
  }, []);

  return empresaId;
}
