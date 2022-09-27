import { collection, limit, orderBy, query } from "firebase/firestore";
import { useFirestore, useFirestoreCollectionData } from "reactfire";
import Messages from "./Messages";
import { CircularProgress } from "@mui/material";
import MessageAppBar from "./MessageAppBar.jsx";

export default function Channel() {
  const firestore = useFirestore();
  const messagesCollection = collection(firestore, "messages");
  const messagesQuery = query(
    messagesCollection,
    orderBy("createdAt"),
    limit(100)
  );

  const { status, data: messages } = useFirestoreCollectionData(messagesQuery, {
    idField: "id", // this field will be added to the object created from each document
  });

  return (
    <div>
      {status === "loading" ? (
        <CircularProgress/>
      ) : (
        <Messages messages={messages} />
      )}
      <MessageAppBar messagesCollection={messagesCollection} />
    </div>
  );
}
