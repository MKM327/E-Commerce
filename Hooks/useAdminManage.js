import axios from "axios";
import { useState } from "react";
import useFirebaseStorage from "./useFirebaseStorage";
const API_Root = "https://localhost:7160/api/";
const useAdminManage = () => {
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState("closed");
  const { uploadImage } = useFirebaseStorage();

  async function manageForm() {
    if (
      !Number.isInteger(parseInt(quantity)) ||
      !Number.isInteger(parseInt(price))
    )
      return;

    setLoading("open");
    const data = {
      Description: description,
      ProductType: type,
      Price: Number(price),
      Quantity: Number(quantity),
    };

    const response = await axios.post(API_Root + "ECommerce/Add", data);
    const id = response.data.id;
    await uploadImage(photo, id);
    setDescription("");
    setType("");
    setPrice("");
    setQuantity("");
    setPhoto(null);
    setLoading("closed");
  }

  return {
    setDescription,
    description,
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
