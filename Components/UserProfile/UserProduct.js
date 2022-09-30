import useFirebaseStorage from "../../Hooks/useFirebaseStorage";

const UserProduct = ({ product }) => {
  const { header, price, id, quantity } = product;
  const { imageUrl } = useFirebaseStorage(id);
  return (
    <div className="product-wrapper">
      <div className="user-image-wrapper">
        <img src={imageUrl} alt="l" />
      </div>
      <div className="product-info-wrapper">
        <div className="user-header-wrapper">
          <div className="user-product-header">{header}</div>
        </div>
        <div className="user-product-header">Price : {price} $</div>
        <div className="user-product-header">Quantity : {quantity}</div>
      </div>
    </div>
  );
};
export default UserProduct;
