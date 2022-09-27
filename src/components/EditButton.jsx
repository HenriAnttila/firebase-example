import { Button } from "@mui/material";
import { useFirestore } from "reactfire";
import { doc, deleteDoc } from "firebase/firestore";

const Edit = async (id, db) => {
    await deleteDoc(doc(db, "messages", id));
};

export default function EditButton( {messageId} ) {
    const db = useFirestore()
    return (<Button disabled onClick={() => Edit(messageId, db)}>Edit</Button>)
}