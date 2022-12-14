import useFirebaseStorage from "../../Hooks/useFirebaseStorage";

const ProductDescription = ({ product }) => {
  const { price, description, id } = product;
  return (
    <div className="product-description">
      <p className="product-details">{description}</p>
      <div className="product-price-description">
        <span className="product-price">{`${price}$`}</span>
        <div>
          <button
            className="product-button"
            onClick={() => {
              sessionStorage.setItem(id, JSON.stringify(product));
            }}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};
const Product = ({ product }) => {
  const { imageUrl } = useFirebaseStorage(product.id);

  return (
    <div className="product">
      <div className="image-wrapper">
        <img src={imageUrl} alt="test" className="product-image" />
      </div>
      <ProductDescription product={product} />
      <div className="product-cart"></div>
    </div>
  );
};
export default Product;
