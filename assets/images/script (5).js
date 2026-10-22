// ---------- Data ----------
// Images: put files in an "images" folder. Ingredient photo = images/<id>.jpg (e.g. images/tomato.jpg).
// Recipe photo = images/<recipe-name-with-dashes>.jpg (e.g. images/tomato-rice.jpg).
// Nutrition values are approximate, per 100 g.
const INGREDIENTS = [
  {
    id: "tomato", name: "Tomato", cat: "Fruit / Vegetable", bg: "#fde3dc",
    desc: "A juicy, vibrant fruit (yes, it's a fruit!) packed with flavour and nutrients. Tomatoes are a staple in many cuisines and add colour, taste and nutrition to your meals.",
    tags: ["Vitamin C", "Antioxidants", "Low Calorie", "High in Fibre"],
    nutrition: { cal: 18, protein: 0.9, carbs: 3.9, fat: 0.2, fibre: 1.2, key: ["Vitamin C", "14 mg"] },
    pros: ["Rich in vitamin C, A and potassium.", "Contains powerful antioxidants like lycopene.", "Supports heart health.", "May help boost immunity."],
    cons: ["May trigger acid reflux in some people.", "Can cause allergies in rare cases.", "Excessive intake may lead to stomach discomfort."],
    storage: ["Keep at room temperature (if unripe).", "Store in the fridge to keep it fresh longer.", "Use within a week for the best taste and quality."],
    recipes: [["Tomato Rice", "30 mins"], ["Tomato Soup", "25 mins"], ["Pasta with Tomato Sauce", "20 mins"], ["Tomato Salad", "15 mins"]]
  },
  {
    id: "egg", name: "Egg", cat: "Protein", bg: "#fdf1d3",
    desc: "A versatile, affordable source of high-quality protein. Eggs can be boiled, poached, scrambled or baked, and work in both sweet and savoury dishes.",
    tags: ["High Protein", "Vitamin B12", "Choline", "Versatile"],
    nutrition: { cal: 155, protein: 13, carbs: 1.1, fat: 11, fibre: 0, key: ["Vitamin B12", "1.1 µg"] },
    pros: ["Complete protein with all essential amino acids.", "Good source of vitamin D, B12 and choline.", "Keeps you feeling full for longer.", "Quick and easy to cook."],
    cons: ["Egg allergy is one of the more common food allergies.", "Must be cooked properly to reduce food-safety risks.", "Some people are advised to limit intake on medical advice."],
    storage: ["Keep in the fridge in their box.", "Store with the pointed end down.", "Use by the date on the box; hard-boiled eggs within 5 days."],
    recipes: [["Veggie Omelette", "10 mins"], ["Egg Fried Rice", "20 mins"], ["Avocado Egg Toast", "10 mins"], ["Shakshuka", "30 mins"]]
  },
  {
    id: "spinach", name: "Spinach", cat: "Leafy green", bg: "#dcf1d6",
    desc: "A tender leafy green with a mild flavour. Eat it raw in salads and smoothies or wilt it into curries, soups and pasta.",
    tags: ["Vitamin K", "Iron", "Low Calorie", "Folate"],
    nutrition: { cal: 23, protein: 2.9, carbs: 3.6, fat: 0.4, fibre: 2.2, key: ["Vitamin K", "483 µg"] },
    pros: ["Packed with vitamins A, C and K.", "Provides iron and folate.", "Very low in calories.", "Quick to cook and easy to hide in meals."],
    cons: ["High in vitamin K, which can affect blood-thinning medicines.", "Contains oxalates; may not suit people prone to kidney stones.", "Wash well to remove grit."],
    storage: ["Keep unwashed in the fridge.", "Wrap in kitchen paper inside a container.", "Use within 3 to 5 days."],
    recipes: [["Saag Paneer", "35 mins"], ["Spinach Omelette", "10 mins"], ["Green Smoothie", "5 mins"], ["Spinach Pasta", "20 mins"]]
  },
  {
    id: "carrot", name: "Carrot", cat: "Root vegetable", bg: "#fde0c4",
    desc: "A sweet, crunchy root vegetable that is delicious raw, roasted, steamed or blended into soups and cakes.",
    tags: ["Vitamin A", "Beta-carotene", "Fibre", "Low Fat"],
    nutrition: { cal: 41, protein: 0.9, carbs: 9.6, fat: 0.2, fibre: 2.8, key: ["Vitamin A", "835 µg"] },
    pros: ["Excellent source of beta-carotene for vitamin A.", "Supports healthy eyesight and skin.", "Good source of fibre.", "Affordable and long-lasting."],
    cons: ["Eating very large amounts can turn skin slightly orange.", "Raw carrots can trigger reactions in people with pollen allergies.", "Natural sugars are higher than in many vegetables."],
    storage: ["Cut off the green tops before storing.", "Keep in the fridge salad drawer.", "Lasts 2 to 3 weeks."],
    recipes: [["Carrot Soup", "30 mins"], ["Carrot Cake", "60 mins"], ["Roasted Carrots", "35 mins"], ["Carrot Halwa", "40 mins"]]
  },
  {
    id: "potato", name: "Potato", cat: "Starchy vegetable", bg: "#f6e6c9",
    desc: "A filling, versatile staple that can be boiled, baked, roasted or mashed. Keep the skin on for extra fibre.",
    tags: ["Potassium", "Energy", "Vitamin C", "Filling"],
    nutrition: { cal: 87, protein: 1.9, carbs: 20, fat: 0.1, fibre: 1.8, key: ["Potassium", "379 mg"] },
    pros: ["Good source of potassium.", "Provides slow-release energy.", "Naturally fat-free when boiled or baked.", "Very filling and budget friendly."],
    cons: ["Frying adds a lot of fat and salt.", "Green or sprouting potatoes should be discarded.", "Can raise blood sugar in large portions."],
    storage: ["Store in a cool, dark, dry place.", "Do not keep in the fridge.", "Keep away from onions."],
    recipes: [["Patatas Bravas", "60 mins"], ["Baked Jacket Potato", "60 mins"], ["Aloo Gobi", "35 mins"], ["Potato Salad", "30 mins"]]
  },
  {
    id: "garlic", name: "Garlic", cat: "Herb / Bulb", bg: "#efeadf",
    desc: "A pungent bulb that adds big flavour with very little salt. Use it fresh, roasted or crushed into sauces, curries and dressings.",
    tags: ["Flavour", "Vitamin B6", "Manganese", "Low Salt"],
    nutrition: { cal: 149, protein: 6.4, carbs: 33, fat: 0.5, fibre: 2.1, key: ["Vitamin B6", "1.2 mg"] },
    pros: ["Adds flavour without extra salt.", "Contains sulphur compounds studied for heart health.", "Provides vitamin B6 and manganese.", "A little goes a long way."],
    cons: ["Can cause bad breath and heartburn.", "May upset sensitive stomachs.", "Can interact with some blood-thinning medicines in large amounts."],
    storage: ["Keep whole bulbs in a cool, dry, dark place.", "Allow air to circulate around them.", "Use peeled cloves within a week."],
    recipes: [["Garlic Butter Prawns", "15 mins"], ["Roasted Garlic Hummus", "20 mins"], ["Garlic Rice", "20 mins"], ["Garlic Bread", "15 mins"]]
  },
  {
    id: "lentils", name: "Lentils", cat: "Pulse", bg: "#f2dcc4",
    desc: "Small, quick-cooking pulses that are rich in protein and fibre. Lentils soak up flavour and are great in soups, dals and stews.",
    tags: ["Fibre", "Plant Protein", "Iron", "Low Fat"],
    nutrition: { cal: 116, protein: 9, carbs: 20, fat: 0.4, fibre: 7.9, key: ["Iron", "3.3 mg"] },
    pros: ["High in fibre and plant protein.", "Helps keep cholesterol in check.", "Good source of iron and folate.", "Cheap and long-lasting."],
    cons: ["Can cause wind or bloating if you are not used to them.", "Rinse and cook thoroughly before eating.", "Canned versions can be high in salt; choose no-added-salt."],
    storage: ["Keep dry lentils in an airtight container in a cool cupboard.", "Store cooked lentils in the fridge for up to 3 days.", "Cooked lentils freeze well."],
    recipes: [["Lentil Dal", "35 mins"], ["Carrot and Lentil Soup", "22 mins"], ["Lentil Bolognese", "40 mins"], ["Lentil Salad", "25 mins"]]
  },
  {
    id: "avocado", name: "Avocado", cat: "Fruit", bg: "#d9eccd",
    desc: "A creamy fruit full of unsaturated fats. Spread it on toast, mash into guacamole or slice into salads.",
    tags: ["Healthy Fats", "Potassium", "Fibre", "Creamy"],
    nutrition: { cal: 160, protein: 2, carbs: 8.5, fat: 14.7, fibre: 6.7, key: ["Potassium", "485 mg"] },
    pros: ["Rich in heart-friendly unsaturated fats.", "High in fibre and potassium.", "Helps absorb fat-soluble vitamins.", "Easy to add to many meals."],
    cons: ["Energy dense, so watch portion size.", "Can trigger reactions in people with latex allergy.", "Ripeness window is short."],
    storage: ["Ripen at room temperature.", "Move ripe avocados to the fridge.", "Squeeze lemon on cut halves and cover to slow browning."],
    recipes: [["Guacamole", "10 mins"], ["Avocado Toast", "10 mins"], ["Avocado Salad", "15 mins"], ["Chocolate Avocado Mousse", "15 mins"]]
  },
  {
    id: "chicken", name: "Chicken", cat: "Protein", bg: "#fbe0c6",
    desc: "A lean, popular protein. Skinless chicken breast is low in fat and works in curries, stir-fries, salads and bakes.",
    tags: ["High Protein", "Lean", "Niacin", "Versatile"],
    nutrition: { cal: 165, protein: 31, carbs: 0, fat: 3.6, fibre: 0, key: ["Niacin", "13.7 mg"] },
    pros: ["Excellent source of lean protein.", "Rich in B vitamins.", "Low in saturated fat when skinless.", "Cooks quickly."],
    cons: ["Raw chicken carries food-poisoning risk.", "Always cook until no pink meat remains.", "Processed or fried chicken can be high in salt and fat."],
    storage: ["Keep raw chicken on the bottom shelf of the fridge.", "Use within 1 to 2 days or freeze.", "Cool and refrigerate cooked chicken within 2 hours."],
    recipes: [["Chicken Curry", "40 mins"], ["Grilled Chicken Salad", "25 mins"], ["Jerk Chicken Burgers", "55 mins"], ["Chicken Stir-fry", "20 mins"]]
  },
  {
    id: "oats", name: "Oats", cat: "Whole grain", bg: "#f3e8cf",
    desc: "A wholegrain breakfast classic. Oats are rich in soluble fibre and can be made into porridge, overnight oats, flapjacks and more.",
    tags: ["Beta-glucan", "Fibre", "Magnesium", "Wholegrain"],
    nutrition: { cal: 389, protein: 16.9, carbs: 66, fat: 6.9, fibre: 10.6, key: ["Magnesium", "177 mg"] },
    pros: ["Soluble fibre (beta-glucan) can help lower cholesterol.", "Slow-release energy.", "Good source of magnesium and iron.", "Cheap and filling."],
    cons: ["Contains gluten unless labelled gluten-free.", "Flavoured sachets often contain added sugar.", "Dry weight is calorie dense; measure portions."],
    storage: ["Keep in an airtight container.", "Store in a cool, dry cupboard.", "Overnight oats keep in the fridge for up to 3 days."],
    recipes: [["Porridge with Berries", "10 mins"], ["Overnight Oats", "5 mins"], ["Oat Flapjacks", "35 mins"], ["Banana Oat Pancakes", "20 mins"]]
  }
];

// ---------- Helpers ----------
const $ = id => document.getElementById(id);
const slug = s => s.toLowerCase().replace(/[^a-z0-9]+/g, "-");
let lastFocus = null;

// ---------- Gallery ----------
$("gallery").innerHTML = INGREDIENTS.map(i => `
  <button class="item" data-id="${i.id}" aria-haspopup="dialog">
    <div class="pic" style="background:${i.bg}"><img src="images/${i.id}.jpg" alt="${i.name}"></div>
    <strong>${i.name}</strong>
    <span class="cat">${i.cat}</span>
  </button>`).join("");

// ---------- Popup ----------
function openModal(id) {
  const i = INGREDIENTS.find(x => x.id === id);
  const n = i.nutrition;
  const stats = [
    ["🔥", n.cal, "Calories"], ["💪", n.protein + " g", "Protein"], ["🌾", n.carbs + " g", "Carbohydrates"],
    ["💧", n.fat + " g", "Fat"], ["🌿", n.fibre + " g", "Fibre"], ["⭐", n.key[1], n.key[0]]
  ];

  $("mPic").style.background = i.bg;
  $("mPic").innerHTML = `<img src="images/${i.id}.jpg" alt="${i.name}">`;
  $("mTitle").textContent = i.name;
  $("mDesc").textContent = i.desc;
  $("mTags").innerHTML = i.tags.map((t, k) => `<span class="tag t${k % 4}">${t}</span>`).join("");
  $("mStats").innerHTML = stats.map((s, k) =>
    `<div class="stat s${k}"><div class="ico" aria-hidden="true">${s[0]}</div><b>${s[1]}</b><small>${s[2]}</small></div>`).join("");
  $("mPros").innerHTML = i.pros.map(p => `<li>${p}</li>`).join("");
  $("mCons").innerHTML = i.cons.map(p => `<li>${p}</li>`).join("");
  $("mStorage").innerHTML = i.storage.map(p => `<li>${p}</li>`).join("");
  $("mRecipeSub").textContent = `Here are some delicious recipes that include ${i.name.toLowerCase()}:`;
  $("mRecipes").innerHTML = i.recipes.map(r => `
    <div class="rcard">
      <div class="rpic" style="background:${i.bg}"><img src="images/${slug(r[0])}.jpg" alt="${r[0]}"></div>
      <div class="rbody"><strong>${r[0]}</strong><span>🕒 ${r[1]}</span></div>
    </div>`).join("");

  lastFocus = document.activeElement;
  $("overlay").hidden = false;
  document.body.classList.add("lock");
  $("overlay").scrollTop = 0;
  $("modal").focus();
}

function closeModal() {
  $("overlay").hidden = true;
  document.body.classList.remove("lock");
  if (lastFocus) lastFocus.focus();
}

$("gallery").addEventListener("click", e => {
  const b = e.target.closest(".item");
  if (b) openModal(b.dataset.id);
});
$("close").addEventListener("click", closeModal);
$("overlay").addEventListener("click", e => { if (e.target === $("overlay")) closeModal(); });
document.addEventListener("keydown", e => { if (e.key === "Escape" && !$("overlay").hidden) closeModal(); });
