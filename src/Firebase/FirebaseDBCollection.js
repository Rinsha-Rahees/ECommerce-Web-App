import { getFirestore, doc, getDoc, getDocs, collection, setDoc } from "firebase/firestore";
import { firebaseApp } from "./Firebase";
import { productDetails } from "../assets/DataCollection/DataArray";

const firestore = getFirestore(firebaseApp);

//Set individual product
export const setIndividualProduct = async (prod) => {

  // Add a new document in collection 
if(prod && prod?.id){
  try{
    await setDoc(doc(firestore, "productDetails", `${prod?.id}`), {
      id: prod?.id,
      title: prod?.title,
      images: prod?.images,
      price: prod?.price,
      priceString: prod?.priceString,
      rating: prod?.rating, 
      size: prod?.size
    });

  }catch{

    console.error("Failed to add document!", error)

  }
}else{
  console.error("Invalid product data", prod)
}

};

//Set all products
export const setAllProducts = () => {
  productDetails.map(prod => {
    setIndividualProduct(prod)
  })
  return "Successfully set all products!"
}

//Get individual product
export const getIndividualProduct = async () => {

  const docRef = doc(firestore, "productDetails", "1");
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }
}

//Get all product as an array as promise result
export const getAllProducts = async () => {
    const querySnapshot = await getDocs(collection(firestore, "productDetails"));
    const res =  querySnapshot.docs.map((doc) => doc.data())
    return res
}
