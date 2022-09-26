import axios from "axios";
import { useState } from "react";
import useFirebaseStorage from "./useFirebaseStorage";
const API_Root = "https://localhost:7160/api/";
const useAdminManage = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState("closed");
  const { uploadImage } = useFirebaseStorage();

  async function manageForm() {
    setLoading("open");
    const data = {
      Description: name,
      ProductType: type,
      Price: Number(price),
      Quantity: Number(quantity),
    };

    const response = await axios.post(API_Root + "ECommerce/Add", data);
    const id = response.data.id;
    await uploadImage(photo, id);
    setName("");
    setType("");
    setPrice("");
    setQuantity("");
    setPhoto(null);
    setLoading("closed");
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
    photo,
    setPhoto,
    manageForm,
    loading,
    setLoading,
  };
};
export default useAdminManage;
