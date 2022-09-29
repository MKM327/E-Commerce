const ProductInfo = () => {
  return (
    <div className="add-inputs">
      <div>
        <label htmlFor="Header" className="input-header">
          Header
        </label>
        <input type="text" name="Header" id="" className="add-input" required />
      </div>
      <div className="add-input-wrapper">
        <label htmlFor="Header" className="input-header">
          Description
        </label>
        <input type="text" name="Header" id="" className="add-input" required />
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
          />
        </div>
        <div>
          <label htmlFor="Header" className="input-header">
            Type
          </label>
          <input
            type="text"
            name="Header"
            id=""
            className="add-input double"
            required
          />
        </div>
      </div>
      <div className="add-input-wrapper">
        <label htmlFor="Header" className="input-header">
          Price
        </label>
        <input type="text" name="Header" id="" className="add-input" required />
      </div>
      <button className="add-btn">Add Product</button>
    </div>
  );
};
export default ProductInfo;
