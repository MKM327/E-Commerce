import axios from "axios";
import { useContext, useRef, useState } from "react";
import { LoginContext } from "../Contexts/LoginContext";
import useFirebaseStorage from "./useFirebaseStorage";
const API_Root = "https://localhost:7160/api/";
const useAddProduct = () => {
  const descriptionRef = useRef();
  const headerRef = useRef();
  const priceRef = useRef();
  const quantityRef = useRef();
  const typeRef = useRef();
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState("closed");
  const { user } = useContext(LoginContext);
  const { uploadImage } = useFirebaseStorage();
  async function manageForm(e) {
    e.preventDefault();
    if (
      !Number.isInteger(parseInt(quantityRef.current.value)) ||
      !Number.isInteger(parseInt(priceRef.current.value))
    )
      return;

    setLoading("open");
    const data = {
      Header: headerRef.current.value,
      Description: descriptionRef.current.value,
      ProductType: typeRef.current.value,
      Price: Number(priceRef.current.value),
      Quantity: Number(quantityRef.current.value),
      UserId: user.id,
    };
    const response = await axios.post(API_Root + "ECommerce/Add", data);
    const id = response.data.id;
    await uploadImage(photo, id);
    setLoading("closed");
  }
  return {
    descriptionRef,
    headerRef,
    priceRef,
    quantityRef,
    photo,
    setPhoto,
    typeRef,
    loading,
    manageForm,
  };
};
export default useAddProduct;
