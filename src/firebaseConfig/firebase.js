import { initializeApp } from "firebase/app";

import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCmWVz4c9XF13yMg3dqmCp8hhxTtlx6xJ4",
  authDomain: "crud-jorge-ferrer.firebaseapp.com",
  projectId: "crud-jorge-ferrer",
  storageBucket: "crud-jorge-ferrer.firebasestorage.app",
  messagingSenderId: "432028179366",
  appId: "1:432028179366:web:6584c6ee98d56eb101cd67",
  measurementId: "G-TX4JTC9FRW" 
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)