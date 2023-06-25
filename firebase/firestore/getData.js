import app from "../config";
import { collection, getFirestore, getDocs } from "firebase/firestore";

const db = getFirestore(app)

export default async function getData(collectionName) {
    const querySnapshot = await getDocs(collection(db, "car-spare-parts"));
    let mappedData = [];
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        mappedData.push(doc.data())
        console.log(doc.id, " => ", doc.data());
    });
    return mappedData
}
