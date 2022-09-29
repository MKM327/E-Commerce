import ProductInfo from "./ProductInfo";
import UploadImage from "./UploadImage";

const AddProduct = () => {
  return (
    <div className="container add">
      <form action="|" className="add">
        <UploadImage />
        <ProductInfo />
      </form>
    </div>
  );
};
export default AddProduct;
