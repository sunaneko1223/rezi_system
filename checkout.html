// 初期設定
const cartData = JSON.parse(localStorage.getItem("cart") || "{}");
const tbody = document.querySelector("#orderTable tbody");
const totalDisplay = document.getElementById("total");
const paidInput = document.getElementById("paidAmount");
const changeDisplay = document.getElementById("changeAmount");

let totalAmount = 0;

// 注文テーブル生成
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

// 合計を表示
totalDisplay.textContent = totalAmount;

// 支払額入力 → おつり計算
paidInput.addEventListener("input", () => {
  const paid = parseInt(paidInput.value) || 0;
  const change = paid - totalAmount;
  changeDisplay.textContent = change >= 0 ? change : 0;
});

// 戻る
function goBack() {
  window.location.href = "index.html";
}

// 確定処理
function confirmOrder() {
  const history = JSON.parse(localStorage.getItem("history") || "[]");
  history.push({
    timestamp: Date.now(),
    items: cartData,
    total: totalAmount
  });
  localStorage.setItem("history", JSON.stringify(history));
  localStorage.removeItem("cart");
  alert("注文を確定しました！");
  window.location.href = "history.html";
}
