import { getFirestore, doc, getDoc, getDocs, collection, setDoc } from "firebase/firestore";
import { firebaseApp } from "./Firebase";
import NotFoundPage from "../Components/GenericComponents/NotFoundPage"

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

    return false

  }
}else{
  return false
}

};

//Set all products
export const setAllProducts = (arr) => {
  arr.map(prod => {
    setIndividualProduct(prod)
  })
  
  return "Successfully set all products!"
}

//Get individual product
export const getIndividualProduct = async (id) => {

  const docRef = doc(firestore, "productDetails", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data()
  } else {
    return false
  }
}

//Get all product as an array as promise result
export const getAllProducts = async () => {
    const querySnapshot = await getDocs(collection(firestore, "productDetails"));
    const res =  querySnapshot.docs.map((doc) => doc.data())
    if(!res) return false
    return res
}

