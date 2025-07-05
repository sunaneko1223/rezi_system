// 商品一覧（ここをJSONから読み込むようにも変更可）
const products = [
  { id: 1, name: "たこやき", price: 300 },
  { id: 2, name: "ジュース", price: 150 },
  { id: 3, name: "フライドポテト", price: 250 }
];

const grid = document.getElementById("productsGrid");
const cartList = document.getElementById("cartList");
const totalDisplay = document.getElementById("total");
const decreaseBtn = document.getElementById("decreaseBtn");

// カートデータの読み込み
let cart = JSON.parse(localStorage.getItem("cart") || "{}");

// 商品カードを表示
function renderProducts() {
  products.forEach(item => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `<strong>${item.name}</strong><br>¥${item.price}`;
    card.onclick = () => {
      if (!cart[item.id]) cart[item.id] = { ...item, count: 0 };
      cart[item.id].count++;
      saveCart();
    };
    grid.appendChild(card);
  });
}

// カート表示を更新
function renderCart() {
  cartList.innerHTML = "";
  let total = 0;

  Object.values(cart).forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} × ${item.count}`;
    total += item.price * item.count;
    cartList.appendChild(li);
  });

  totalDisplay.textContent = total;
}

// カートを保存＆再描画
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

// 「1つ減らす」ボタンの処理（最後に追加された商品を1つ減らす）
decreaseBtn.onclick = () => {
  // 最後に追加された商品のIDを取得（存在すれば）
  const keys = Object.keys(cart);
  if (keys.length === 0) return;

  const lastKey = keys[keys.length - 1];
  if (cart[lastKey].count > 1) {
    cart[lastKey].count--;
  } else {
    delete cart[lastKey];
  }
  saveCart();
};

// 初期表示
renderProducts();
