import { jsPDF } from "jspdf";

export const exportToPDF = (data) => {
  const doc = new jsPDF();
  doc.text("Payout Report", 20, 20);
  data.forEach((item, index) => {
    doc.text(
      `${index + 1}. ${item.author}: ${item.payout}`,
      20,
      30 + index * 10
    );
  });
  doc.save("payouts.pdf");
};
