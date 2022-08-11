const ItemDescription = ({ Description }) => {
  return (
    <div className="description-wrapper">
      <p className="cart-description">{Description}</p>
      <div className="product-managment">
        <button className="product-button">Remove from cart</button>
        <select name="select" id="select" className="cart-select">
          <option value="1" selected>
            1
          </option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <label for="select">Quantity</label>
        <div className="select-arrow"></div>
      </div>
    </div>
  );
};
const CartItem = ({ item }) => {
  const { Description, Price, Image } = item;
  return (
    <li className="cart-item">
      <div className="image-wrapper">
        <img src={Image} alt="" className="cart-image" />
      </div>
      <ItemDescription Description={Description} />
      <div className="cart-checkout">
        <span className="cart-price">{Price}</span>
      </div>
    </li>
  );
};
export default CartItem;
