
// ------------------------------------------------------
// ------------------------------------------------------
import {
  doc, 
  collection, 
  onSnapshot, 
  addDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc, 
  query, 
  orderBy, 
  setDoc 
} from "firebase/firestore";
import { db } from '../firebase';


// export const createNote = async (note) => {
//   await setDoc(doc(db, 'notes', note.id), note);
// };
// createNote(note);

// export const createNote = async (note) => {
//   await addDoc(collection(db, 'notes'), coin);
// };
// createNote(note);

export const getNote = async (id) => {
  const noteSnapshot = await getDoc(doc(db, 'notes', id));
  if (noteSnapshot.exists()) {
      return noteSnapshot.data();
  } else {
      console.log("Note doesn't exist");
  }
};
// getNote(id);




let events;
export const getEvents = async () => {
  const eventsSnapshot = await getDocs(collection(db, "events"));
  const eventsList = eventsSnapshot.docs.map((doc) => doc.data());
  return eventsList;
};
getEvents()
  .then(() => console.log('fuckin did it'))
  .catch((e) => console.log('wtf:',e))




export const updateNote = async (note) => {
  const noteRef = doc(db, "notes", note.id);
  await updateDoc(noteRef, {
      description: "New description"
  });
};
// updateNote(note);

export const deleteNote = async (note) => {
  const noteRef = doc(db, "notes", note.id);
  await deleteDoc(noteRef);
};
// deleteNote(note);
// ------------------------------------------------------
// ------------------------------------------------------