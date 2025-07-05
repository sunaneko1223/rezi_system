// 履歴データを取得
const orderHistory = JSON.parse(localStorage.getItem("history") || "[]");
const historyTable = document.getElementById("historyTable");

// 最新順で表示（reverse）
orderHistory.reverse().forEach(order => {
  const date = new Date(order.timestamp).toLocaleString("ja-JP"); // 日本時間形式

  const names = [];
  const counts = [];

  // 各注文の中の全商品を処理
  Object.values(order.items).forEach(item => {
    names.push(item.name);
    counts.push(item.count);
  });

  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${names.join("<br>")}</td>
    <td>${counts.join("<br>")}</td>
    <td>${date}</td>
  `;
  historyTable.appendChild(row);
});
