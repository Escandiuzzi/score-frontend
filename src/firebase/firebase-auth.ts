import { app } from "./firebase-setup";
import { getAuth } from "firebase/auth";

export const auth = getAuth(app);
auth.languageCode = 'it';