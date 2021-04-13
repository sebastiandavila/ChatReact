import React, { useEffect, useRef, useState } from "react";
import "./App.css";

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyAeFrtfkbRVQRfnOYzXHlN0pF8LwUd2eSA",
  authDomain: "chat-48d9c.firebaseapp.com",
  projectId: "chat-48d9c",
  storageBucket: "chat-48d9c.appspot.com",
  messagingSenderId: "398299283718",
  appId: "1:398299283718:web:79282e9ec355a461de9e87",
});

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  const [user] = useAuthState(auth);
  return <div className="App">{user ? <ChatRoom /> : <SignIn />}</div>;
}

function ChatRoom() {}

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };
  return <button onClick={signInWithGoogle}>Sign in with google</button>;
}

function SignOut() {
  return (
    auth.currentUser && (
      <button
        onClick={() => {
          auth.signOut();
        }}
      >
        Sign out
      </button>
    )
  );
}

export default App;
