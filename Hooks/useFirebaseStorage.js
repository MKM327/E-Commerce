import { initializeApp } from "firebase/app";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { useEffect, useState } from "react";
const useFirebaseStorage = (id) => {
  const [imageUrl, setImageUrl] = useState("");
  useEffect(() => {
    getImage(id);
  });
  const firebaseConfig = {
    apiKey: "AIzaSyCj2H24MUHHD9ki9N1nDi7dC-b7fEr7CQQ",
    authDomain: "e-commerce-7ecf6.firebaseapp.com",
    projectId: "e-commerce-7ecf6",
    storageBucket: "e-commerce-7ecf6.appspot.com",
    messagingSenderId: "923366567171",
    appId: "1:923366567171:web:edc2702f43335e225b8d36",
    measurementId: "G-H2FWT5PXXV",
  };
  const app = initializeApp(firebaseConfig);
  const storage = getStorage(app);
  async function getImage(imageId) {
    const storageRef = ref(storage, `${imageId}.jpg`);
    try {
      const url = await getDownloadURL(storageRef);
      setImageUrl(url);
    } catch (error) {
      console.log(error);
    }
  }

  return { imageUrl };
};
export default useFirebaseStorage;
