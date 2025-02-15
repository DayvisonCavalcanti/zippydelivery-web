import { useState, useEffect } from "react";
import { get, ref } from "firebase/database";
import { db } from "../firebase";
import useCompanyId from "./UseCompanyId";

const useDashboardMetrics = () => {
  const [vendasTotais, setVendasTotais] = useState(0);
  const [faturamentoTotal, setFaturamentoTotal] = useState(0);
  const [vendaHoje, setVendaHoje] = useState(0);
  const [faturamentoMedio, setFaturamentoMedio] = useState(0);
  const [pedidosPorPagamento, setPedidosPorPagamento] = useState({
    "Cartão de Crédito": 0,
    "Cartão de Débito": 0,
    PIX: 0,
    "Vale Alimentação": 0,
    Dinheiro: 0,
    Outros: 0,
  });
  const [faturamentoUltimos7Dias, setFaturamentoUltimos7Dias] = useState([]);
  const [pedidosUltimos7Dias, setPedidosUltimos7Dias] = useState([]);

  const empresaId = useCompanyId();
  const firebaseUrl = "pedidos";

  useEffect(() => {
    if (!empresaId) return;

    const calcularMétricas = async () => {
      try {
        const pedidosRef = ref(db, firebaseUrl);
        const snapshot = await get(pedidosRef);

        if (snapshot.exists()) {
          const pedidos = snapshot.val();

          let totalPedidos = 0;
          let totalFaturamento = 0;
          let pedidosHoje = 0;
          let faturamentoHoje = 0;
          let pedidosPorTipoPagamento = {
            "Cartão de Crédito": 0,
            "Cartão de Débito": 0,
            PIX: 0,
            "Vale Alimentação": 0,
            Dinheiro: 0,
            Outros: 0,
          };
          let faturamentoUltimos7Dias = Array(7).fill(0);
          let pedidosUltimos7Dias = Array(7).fill(0);

          const hoje = new Date().toISOString().split("T")[0];
          const seteDiasAtras = new Date();
          seteDiasAtras.setDate(seteDiasAtras.getDate() - 7);
          const dataSeteDiasAtras = seteDiasAtras.toISOString().split("T")[0];

          Object.entries(pedidos).forEach(([id, pedido]) => {
            if (pedido.empresa?.id === empresaId) {
              totalPedidos += 1;
              totalFaturamento += pedido.valorTotal || 0;

              if (pedido.formaPagamento) {
                pedidosPorTipoPagamento[pedido.formaPagamento] =
                  (pedidosPorTipoPagamento[pedido.formaPagamento] || 0) + 1;
              }

              const dataPedido = pedido.dataHora.split("T")[0];
              if (dataPedido === hoje) {
                pedidosHoje += 1;
                faturamentoHoje += pedido.valorTotal || 0;
              }

              const diasAtras = Math.floor(
                (new Date(hoje) - new Date(dataPedido)) / (1000 * 60 * 60 * 24)
              );

              if (diasAtras >= 0 && diasAtras < 7) {
                pedidosUltimos7Dias[diasAtras] += 1;
                faturamentoUltimos7Dias[diasAtras] += pedido.valorTotal || 0;
              }
            }
          });

          setVendasTotais(totalPedidos);
          setFaturamentoTotal(totalFaturamento);
          setVendaHoje(pedidosHoje);
          setFaturamentoMedio(
            pedidosHoje > 0 ? faturamentoHoje / pedidosHoje : 0
          );
          setPedidosPorPagamento(pedidosPorTipoPagamento);
          setFaturamentoUltimos7Dias(faturamentoUltimos7Dias);
          setPedidosUltimos7Dias(pedidosUltimos7Dias);
        } else {
          console.log("Nenhum dado encontrado no Firebase.");
        }
      } catch (error) {
        console.error("Erro ao buscar pedidos:", error);
      }
    };

    calcularMétricas();
  }, [empresaId]);

  return {
    vendasTotais,
    faturamentoTotal,
    vendaHoje,
    faturamentoMedio,
    pedidosPorPagamento,
    faturamentoUltimos7Dias,
    pedidosUltimos7Dias,
  };
};

export default useDashboardMetrics;
