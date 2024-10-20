// 必要なSDKの関数をインポートします
import { initializeApp } from "firebase/app";
// 使用したいFirebase製品のSDKを追加します
// 詳細: https://firebase.google.com/docs/web/setup#available-libraries

// Firebaseのウェブアプリ設定
const firebaseConfig = {
    apiKey: "AIzaSyC7IfVbnw0PuZCiAPRGr2Qq-0ldHSXmsfo",
    authDomain: "slack-clone-25793.firebaseapp.com",
    projectId: "slack-clone-25793",
    storageBucket: "slack-clone-25793.appspot.com",
    messagingSenderId: "86833079956",
    appId: "1:86833079956:web:28c48a5cc24476c7ac7681"
  };

// Firebaseを初期化します
const firebaseApp = initializeApp(firebaseConfig);

export { firebaseApp };