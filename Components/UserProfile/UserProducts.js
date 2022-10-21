import Link from "next/link";
import useUserProducts from "../../Hooks/useUserProducts";
import UserProduct from "./UserProduct";

const UserProductHeader = ({ setSearchValue }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h3>My Products</h3>
      <input
        className="add-input"
        style={{ maxWidth: "30%" }}
        placeholder="Search Product"
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
      />
      <Link href={"/NewProduct"}>
        <button className="add-btn" style={{ marginTop: 0 }}>
          Add Product
        </button>
      </Link>
    </div>
  );
};
const UserProducts = () => {
  const { userProducts, loading, setSearchValue, searchedUserProducts } =
    useUserProducts();
  return (
    <div className="user-products">
      <UserProductHeader setSearchValue={setSearchValue} />
      <div className="user-row">
        {!loading ? (
          searchedUserProducts.length === 0 ? (
            userProducts.map((product) => {
              return <UserProduct product={product} key={product.id} />;
            })
          ) : (
            searchedUserProducts.map((product) => {
              return <UserProduct product={product} key={product.id} />;
            })
          )
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
};
export default UserProducts;
