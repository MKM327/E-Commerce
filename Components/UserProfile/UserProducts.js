const UserProducts = () => {
  return (
    <div className="user-products">
      <h3>My Products</h3>
      <div className="user-row">
        <div className="product-wrapper">
          <div className="user-image-wrapper">
            <img src="/images/upload-image-icon.svg" alt="l" />
          </div>
          <div className="product-info-wrapper">
            <div className="user-header-wrapper">
              <div className="user-product-header">Header</div>
            </div>
            <div className="user-product-header">Price : </div>
            <div className="user-product-header">Quantity : quan</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserProducts;
