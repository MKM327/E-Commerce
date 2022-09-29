const ProductInfo = (props) => {
  const { headerRef, descriptionRef, priceRef, quantityRef, typeRef, loading } =
    props;
  return (
    <div className="add-inputs">
      <div>
        <label htmlFor="Header" className="input-header">
          Header
        </label>
        <input
          type="text"
          name="Header"
          id=""
          className="add-input"
          required
          ref={headerRef}
        />
      </div>
      <div className="add-input-wrapper">
        <label htmlFor="Header" className="input-header">
          Description
        </label>
        <input
          type="text"
          name="Header"
          id=""
          className="add-input"
          required
          ref={descriptionRef}
        />
      </div>
      <div className="add-input-wrapper-double">
        <div>
          <label htmlFor="Header" className="input-header">
            Quantity
          </label>
          <input
            type="text"
            name="Header"
            id=""
            className="add-input double"
            required
            ref={quantityRef}
          />
        </div>
        <div>
          <label htmlFor="Header" className="input-header">
            Price
          </label>
          <input
            type="text"
            name="Header"
            id=""
            className="add-input double"
            required
            ref={priceRef}
          />
        </div>
      </div>
      <div className="add-input-wrapper">
        <label htmlFor="Header" className="input-header">
          Type
        </label>
        <input
          type="text"
          name="Header"
          id=""
          className="add-input"
          required
          ref={typeRef}
        />
      </div>
      <button className="add-btn">Add Product</button>
      <div className={`lds-ring ${loading}`}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
export default ProductInfo;
