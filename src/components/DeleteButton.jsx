import { Button } from "@mui/material";
import { useFirestore } from "reactfire";
import { doc, deleteDoc } from "firebase/firestore";

const Delete = async (id, db) => {
    await deleteDoc(doc(db, "messages", id));
};

export default function DeleteButton( {messageId} ) {
    const db = useFirestore()
    return (<Button onClick={() => Delete(messageId, db)}>Delete</Button>)
}