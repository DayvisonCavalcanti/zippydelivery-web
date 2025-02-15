import { jsPDF } from 'jspdf';
import Chart from 'chart.js/auto';

const formatDate = (date) => {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); 
  const year = String(date.getFullYear()).slice(2); 
  return `${day}/${month}/${year}`;
};

const getLast7Days = () => {
  const today = new Date();
  const days = [];
  
  for (let i = 6; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);
    days.push(formatDate(date));
  }

  return days;
};

const GenerateReport = async ({ pedidosPorPagamento, faturamentoUltimos7Dias, pedidosUltimos7Dias }) => {
  const last7Days = getLast7Days(); 

  const ctx1 = document.createElement('canvas');
  const ctx2 = document.createElement('canvas');
  const ctx3 = document.createElement('canvas');
  ctx1.width = 800;
  ctx1.height = 400;
  ctx2.width = 800;
  ctx2.height = 400;
  ctx3.width = 800;
  ctx3.height = 400;

  const chart1 = new Chart(ctx1, {
    type: 'bar',
    data: {
      labels: ['PIX', 'Cartão de Crédito', 'Cartão de Débito', 'Vale Alimentação', 'Dinheiro', 'Outros'],
      datasets: [{
        label: 'Pedidos por Tipo de Pagamento',
        data: Object.values(pedidosPorPagamento),
        backgroundColor: '#FF8C42',
      }]
    },
    options: {
      responsive: false,
      plugins: {
        legend: { display: false }
      }
    }
  });

  const chart2 = new Chart(ctx2, {
    type: 'line',
    data: {
      labels: last7Days.reverse(), 
      datasets: [{
        label: 'Faturamento (R$)',
        data: faturamentoUltimos7Dias.reverse(),
        borderColor: '#FF8C42', 
        fill: false
      }]
    },
    options: {
      responsive: false,
      plugins: {
        legend: { position: 'top' }
      }
    }
  });

  const chart3 = new Chart(ctx3, {
    type: 'bar',
    data: {
      labels: last7Days.reverse(), 
      datasets: [{
        label: 'Número de Pedidos',
        data: pedidosUltimos7Dias.reverse(), 
        backgroundColor: '#FF8C42',
      }]
    },
    options: {
      responsive: false,
      plugins: {
        legend: { position: 'top' }
      }
    }
  });

  chart1.update();
  chart2.update();
  chart3.update();

  setTimeout(() => {
    try {
      const imgData1 = ctx1.toDataURL('image/png');
      const imgData2 = ctx2.toDataURL('image/png');
      const imgData3 = ctx3.toDataURL('image/png');

      const doc = new jsPDF();

      doc.setFillColor("#FF8C42");
      doc.rect(0, 0, 210, 30, "F");
      doc.setFont("helvetica", "bold");
      doc.setFontSize(24);
      doc.setTextColor("#FFFFFF");
      doc.text("Relatório de Pedidos", 105, 20, null, null, "center");

      doc.setFontSize(14);
      doc.setTextColor("#333333");
      let yPosition = 100; 

      doc.addImage(imgData1, 'PNG', 10, yPosition, 190, 100);
      yPosition += 110;
      if (yPosition + 100 > 280) { doc.addPage(); yPosition = 20; }
      doc.addImage(imgData2, 'PNG', 10, yPosition, 190, 100);
      yPosition += 110;
      if (yPosition + 100 > 280) { doc.addPage(); yPosition = 20; }
      doc.addImage(imgData3, 'PNG', 10, yPosition, 190, 100);

      doc.setFontSize(10);
      doc.setTextColor("#666666");
      const pageCount = doc.internal.getNumberOfPages();
      for (let i = 1; i <= pageCount; i++) {
        doc.setPage(i);
        doc.text(`Página ${i} de ${pageCount}`, 180, 290);
      }

      const pdfBlob = doc.output('blob');
      const pdfUrl = URL.createObjectURL(pdfBlob);

      const link = document.createElement('a');
      link.href = pdfUrl;
      link.download = 'Relatório.pdf';
      link.click();
      URL.revokeObjectURL(pdfUrl);
    } catch (error) {
      console.error("Erro ao gerar o PDF:", error);
    }
  }, 2000);
};

export default GenerateReport;
