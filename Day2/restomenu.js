
const menu = [
  {
    section: "Appetizers",
    items: [
      { name: "Bruschetta", description: "Grilled bread with fresh tomatoes and basil", price: 8.99 },
      { name: "Spinach and Artichoke Dip", description: "Served with tortilla chips", price: 10.99 }
    ]
  },
  {
    section: "Entrees",
    items: [
      { name: "Grilled Chicken Breast", description: "Served with roasted vegetables and quinoa", price: 16.99 },
      { name: "Pan-Seared Salmon", description: "Served with garlic mashed potatoes and steamed broccoli", price: 19.99 }
    ]
  },
  {
    section: "Desserts",
    items: [
      { name: "Chocolate Lava Cake", description: "Served with vanilla ice cream", price: 7.99 },
      { name: "Cheesecake", description: "Served with fresh berries", price: 8.99 }
    ]
  }
];

function createMenuHTML() {
  let menuHTML = "";
  menu.forEach(section => {
    menuHTML += `<h2>${section.section}</h2>`;
    section.items.forEach(item => {
      menuHTML += `
        <div class="menu-item">
          <h3>${item.name}</h3>
          <p>${item.description}</p>
          <p class="price">$${item.price}</p>
        </div>
      `;
    });
  });
  return menuHTML;
}