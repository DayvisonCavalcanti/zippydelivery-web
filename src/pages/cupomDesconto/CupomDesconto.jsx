import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Table } from "semantic-ui-react";
import utilService from "../../utilService";
import useNewPedidoNotification from "../../hooks/UseNewPedidoNotification";

export default function CupomDesconto() {
  let navigate = useNavigate();

  const { state } = useLocation();
  const [lista, setLista] = useState([]);
  const [setOpenModal] = useState(false);
  const [idRemover] = useState();

  useEffect(() => {
    carregarLista();
  });

  async function carregarLista() {
    axios.get(`${utilService.getURlAPI()}/cupom`).then((response) => {
      setLista(response.data);
    });
  }

  function formatarData(dataParam) {
    if (!dataParam) {
      return "";
    }
    const [ano, mes, dia] = dataParam.split("-");
    return `${dia}/${mes}/${ano}`;
  }

  useNewPedidoNotification();

  return (
    <div className="h-fit justify-center p-44 bg-light-300">
      <div className="flex w-full justify-end">
        <button
          onClick={() => {
            navigate("/cadastro-cupom-desconto");
          }}
          className="flex items-center primary-button font-semibold rounded-md px-3 min-w-max max-h-9 text"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
              clipRule="evenodd"
            />
          </svg>
          Novo Cupom
        </button>
      </div>
      <div className="flex flex-col gap-5 mx-auto max-w-5xl pb-12">
        <div className="flex justify-between">
          <div className="flex flex-col gap-10">
            <span className="text-5xl font-bold text-gray-800">
              Cupons de Desconto
            </span>
            <span className="text-secondary max-w-xl">
              Ofereça descontos exclusivos e incentive novas compras! Gere,
              gerencie e acompanhe cupons promocionais para atrair e fidelizar
              clientes no Zippy.
            </span>
          </div>
        </div>
      </div>
      <div className="relative overflow-x-auto bg-white border-gray-200 border-y mb-24">
        <table className="w-full text-center text-sm text-gray-500">
          <thead className="text-xs text-gray-700 bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                Código
              </th>
              <th scope="col" className="px-6 py-3">
                Percentual de Desconto
              </th>
              <th scope="col" className="px-6 py-3">
                Valor de Desconto
              </th>
              <th scope="col" className="px-6 py-3">
                Valor Mínimo do Pedido
              </th>
              <th scope="col" className="px-6 py-3">
                Uso Máximo
              </th>
              <th scope="col" className="px-6 py-3">
                Início
              </th>
              <th scope="col" className="px-6 py-3">
                Fim
              </th>
            </tr>
          </thead>
          <tbody>
            {lista.map((cupomDesconto) => (
              <tr key={cupomDesconto.id} className="border-b">
                <td className="px-6 py-3">{cupomDesconto.codigo}</td>
                <td className="px-6 py-3">
                  {cupomDesconto.percentualDesconto}%
                </td>
                <td className="px-6 py-3">R$ {cupomDesconto.valorDesconto}</td>
                <td className="px-6 py-3">
                  R$ {cupomDesconto.valorMinimoPedidoPermitido}
                </td>
                <td className="px-6 py-3">
                  {cupomDesconto.quantidadeMaximaUso}
                </td>
                <td className="px-6 py-3">
                  {formatarData(cupomDesconto.inicioVigencia)}
                </td>
                <td className="px-6 py-3">
                  {formatarData(cupomDesconto.fimVigencia)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
