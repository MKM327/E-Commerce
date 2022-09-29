import ProductInfo from "./ProductInfo";
import useAddProduct from "../../Hooks/useAddProduct";
import UploadImage from "./UploadImage";

const AddProduct = () => {
  const {
    descriptionRef,
    headerRef,
    priceRef,
    quantityRef,
    photo,
    setPhoto,
    typeRef,
    loading,
    manageForm,
  } = useAddProduct();
  return (
    <div className="container add">
      <form
        className="add"
        onSubmit={(e) => {
          manageForm(e);
        }}
      >
        <UploadImage photo={photo} setPhoto={setPhoto} />

        <ProductInfo
          descriptionRef={descriptionRef}
          headerRef={headerRef}
          priceRef={priceRef}
          quantityRef={quantityRef}
          typeRef={typeRef}
          loading={loading}
        />
      </form>
    </div>
  );
};
export default AddProduct;
