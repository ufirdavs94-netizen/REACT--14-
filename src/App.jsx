import "./App.css";

const products = [
  {
    id: 1,
    name: "iPhone 15",
    price: "$735",
    image: "https://m.media-amazon.com/images/I/51-dI0OmzyL._AC_UF894,1000_QL80_.jpg"
  },
  {
    id: 2,
    name: "MacBook Air",
    price: "$1.299",
    image: "https://maxcom.uz/storage/product/8pxnIcwPGrit4xlEHw9L2PZCUppJt2dDNN513ZKY.png"
  },
  {
    id: 3,
    name: "AirPods Pro",
    price: "$249",
    image: "https://maxcom.uz/storage/product/fBUKe3LS1mRQEOutlr91E6kVIQA2lF2xxueGXC7B.png"
  },
  {
    id: 4,
    name: "Apple Watch",
    price: "$399",
    image: "https://castore.uz/upload/iblock/b7b/eynjanqj41229mmuvzu5m27zpltzsfw5/smart-chasy-apple-watch-series-11-gps-42mm-rose-meu04rk-a.jpg"
  },
  {
    id: 5,
    name: "PlayStation 5",
    price: "$499",
    image: "https://files.ox-sys.com/cache/original/image/6a/5f/c0/6a5fc0d912409c65df27826d1ce53720b718578c53513627080b3ae9a08b6bb4.webp"
  },
  {
    id: 6,
    name: "Canon Camera",
    price: "$6.400",
    image: "https://cdn.media.amplience.net/i/canon/g7_x_mark_iii_bk_frt_d39de1737aa145cfa5ab1c2f2fe7fa49"
  }
];

function App() {
  return (
    <div className="app">
      <h1>Магазин товаров</h1>

      <div className="products">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <img src={product.image} alt={product.name} />

            <div className="card-content">
              <h2>{product.name}</h2>
              <p>{product.price}</p>
              <button>Купить</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;