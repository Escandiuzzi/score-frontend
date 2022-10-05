import { GoogleAuthProvider } from "firebase/auth";

export const googleProvider = new GoogleAuthProvider();

googleProvider.addScope('https://www.googleapis.com/auth/contacts.readonly');
googleProvider.setCustomParameters({
    'login_hint': 'user@example.com'
  });