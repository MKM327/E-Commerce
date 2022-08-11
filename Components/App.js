import Navbar from "./NavigationBar/Navbar";
import Products from "./Products/Products";
const data = [
  {
    id: 1,
    Type: "boot",
    Price: 100,
    Description: "This is a pair of boots",
    AvaibleSizes: [35, 36, 41, 42],
    Image: "/images/shoe1.jpg",
  },
  {
    id: 2,
    Type: "boot",
    Price: 100,
    Description: "This is a pair of boots",
    AvaibleSizes: [35, 36, 41, 42],
    Image: "/images/shoe2.jpg",
  },
  {
    id: 3,
    Type: "boot",
    Price: 100,
    Description: "This is a pair of boots",
    AvaibleSizes: [35, 36, 41, 42],
    Image: "/images/shoe3.jpg",
  },
  {
    id: 4,
    Type: "boot",
    Price: 300,
    Description: "This is a pair of boots",
    AvaibleSizes: [35, 36, 41, 42],
    Image: "/images/shoe4.jpg",
  },
];
const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Products data={data} />
      </div>
    </>
  );
};
export default App;
