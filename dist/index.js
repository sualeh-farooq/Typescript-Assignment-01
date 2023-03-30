"use strict";
class MobileData {
    constructor(brand, category, desc, discount, id, images, price, rate, stock, thumb, title) {
        this.brand = brand;
        this.category = brand;
        this.description = desc;
        this.discountPercentage = discount;
        this.id = id;
        this.images = images;
        this.price = price;
        this.rating = rate;
        this.stock = stock;
        this.thumbnail = thumb;
        this.title = title;
    }
}
function getData() {
    fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((json) => {
        showData(json.products);
    });
}
function showData(res) {
    console.log(res);
    var Data = res.map((data) => new MobileData(data.brand, data.category, data.description, data.discountPercentage, data.id, data.images, data.price, data.rating, data.stock, data.thumbnail, data.title));
    var AddTable = `
  <table class='table table-striped' border="2px solid black" >
  <thead class="bg-dark text-light">
    <tr>
      <th>Brand</th>
      <th>Category</th>
      <th>Title</th>
      <th>Description</th>
      <th>Discount Percentage</th>
    
      <th>Price - PKR</th>
      <th>Rating</th>
    </tr>
  </thead>
  <tbody>
    ${res
        .map((data) => `
      <tr>
       <td>${data.brand}</td>
       <td>${data.category}</td>
       <td>${data.title}</td>
       <td>${data.description}</td>
       <td>${data.discountPercentage}</td>
       <td> ${data.price}</td>
       <td>${data.rating}</td>
      </tr>
    `)}
  </tbody>
</table>
  `;
    var TableSpace = document.getElementById("data-space");
    TableSpace.innerHTML = AddTable;
    console.log(Data);
}
getData();
//# sourceMappingURL=index.js.map