import { async } from "@firebase/util";
import axios from "axios";
import { useState } from "react";
const API_Root = "https://localhost:7160/api/";
const useAdminManage = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [photo, setPhoto] = useState(null);
  //const [photo, setPhoto] = useState("");
  async function manageForm() {
    const data = {
      name: name,
      type: type,
      price: price,
      quantity: quantity,
    };
    const response = await axios.post(API_Root + "ECommerce/Add", data);
    setName("");
    setType("");
    setPrice("");
    setQuantity("");
  }
  return {
    setName,
    name,
    setType,
    type,
    setPrice,
    price,
    setQuantity,
    quantity,
    manageForm,
  };
};
export default useAdminManage;
