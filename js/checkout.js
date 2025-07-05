// カートデータ取得
const cartData = JSON.parse(localStorage.getItem("cart") || "{}");
const tbody = document.querySelector("#orderTable tbody");
let totalAmount = 0;

// 注文テーブルを生成
Object.values(cartData).forEach(item => {
  const subtotal = item.price * item.count;
  totalAmount += subtotal;

  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${item.name}</td>
    <td>¥${item.price}</td>
    <td>${item.count}</td>
    <td>¥${subtotal}</td>
  `;
  tbody.appendChild(row);
});

// 合計金額を表示
document.getElementById("total").textContent = totalAmount;

// 戻るボタン
function goBack() {
  window.location.href = "index.html";
}

// 確定ボタン → 履歴へ保存
function confirmOrder() {
  const history = JSON.parse(localStorage.getItem("history") || "[]");

  history.push({
    timestamp: Date.now(),  // 時間記録
    items: cartData,        // 注文内容
    total: totalAmount      // 合計金額
  });

  localStorage.setItem("history", JSON.stringify(history)); // 保存
  localStorage.removeItem("cart"); // カートクリア

  alert("注文を確定しました！");
  window.location.href = "history.html"; // 履歴ページへ
}
