import Navbar from "../Components/NavigationBar/Navbar";
const NewProduct = () => {
  return (
    <>
      <Navbar />
      <div className="container add">
        <form action="|" className="add">
          <div className="add-img-wrapper">
            <img
              src="../public/images/dummy-speaker-image.jpg"
              alt="Test"
              className="add-img-wrapper"
            />
            <div>
              <input type="file" className="photo-input" />
            </div>
          </div>
          <div className="add-inputs">
            <div>
              <label htmlFor="Header" className="input-header">
                Header
              </label>
              <input type="text" name="Header" id="" className="add-input" />
            </div>
            <div className="add-input-wrapper">
              <label htmlFor="Header" className="input-header">
                Description
              </label>
              <input type="text" name="Header" id="" className="add-input" />
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
                />
              </div>
            </div>
            <div className="add-input-wrapper">
              <label htmlFor="Header" className="input-header">
                Price
              </label>
              <input type="text" name="Header" id="" className="add-input" />
            </div>
            <button className="add-btn">Add Product</button>
          </div>
        </form>
      </div>
    </>
  );
};
export default NewProduct;
