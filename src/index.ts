class MobileData {
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  id: number;
  images: string[];
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  title: string;
  constructor(
    brand: string,
    category: string,
    desc: string,
    discount: number,
    id: number,
    images: string[],
    price: number,
    rate: number,
    stock: number,
    thumb: string,
    title: string
  ) {
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

type MobileType = {
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  id: number;
  images: string[];
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  title: string;
};

function getData() {
  fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((json) => {
      showData(json.products);
    });
}

function showData(res: MobileType[]) {
  console.log(res);
  var Data = res.map(
    (data: MobileType) =>
      new MobileData(
        data.brand,
        data.category,
        data.description,
        data.discountPercentage,
        data.id,
        data.images,
        data.price,
        data.rating,
        data.stock,
        data.thumbnail,
        data.title
      )
  );

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
      .map(
        (data: MobileType) => `
      <tr>
       <td>${data.brand}</td>
       <td>${data.category}</td>
       <td>${data.title}</td>
       <td>${data.description}</td>
       <td>${data.discountPercentage}</td>
       <td> ${data.price}</td>
       <td>${data.rating}</td>
      </tr>
    `
      )}
  </tbody>
</table>
  `;
  var TableSpace = document.getElementById("data-space") as HTMLDivElement;
  TableSpace.innerHTML = AddTable;
  console.log(Data);
}

getData();
