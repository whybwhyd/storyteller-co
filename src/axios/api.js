import axios from "axios";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../firebase";

const getStorys = async () => {
    const q = query(collection(db, "storys"));
    const querySnapshot = await getDocs(q)

    const initialStorys = []

    querySnapshot.forEach((doc) => {

        const data = {
            id: doc.id,
            ...doc.data(),
        }
        initialStorys.push(data)

    })
    return initialStorys
}

export { getStorys }