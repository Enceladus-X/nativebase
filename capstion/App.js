import React from "react";
import AppNavigator from "./Routes/Router";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnVlynd8sfH4KzW897ZktB-ahe5jfCu3M",
  authDomain: "capstone-d59c2.firebaseapp.com",
  databaseURL: "https://capstone-d59c2-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "capstone-d59c2",
  storageBucket: "capstone-d59c2.appspot.com",
  messagingSenderId: "517618805917",
  appId: "1:517618805917:web:d5a3961d7aaab9d1427874",
  measurementId: "G-DFN95B0W1M"
};


// Initialize Firebase
initializeApp(firebaseConfig);

export default function App() {
  return (
    <NativeBaseProvider>
      <AppNavigator />
    </NativeBaseProvider>
  );
}
