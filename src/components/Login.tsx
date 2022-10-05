import { useForm } from "react-hook-form";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { useState } from "react";
import { auth } from "../firebase/firebase-auth";
import { googleProvider } from "../firebase/providers";

export default function Login() {

    const [createAccount, setCreateAccount] = useState(false);
    const { register, handleSubmit } = useForm();

    const onSubmit = handleSubmit((data) => {

        const { email, password } = data;

        if (createAccount) {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;

                    alert('Login with firebase - Success!');
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;

                    console.log(errorCode, errorMessage);
                });
        } else {
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;

                    console.log(errorCode, errorMessage);
                });
        }
    }
    );

    function handleSigninGoogle() {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                if (credential != null) {
                    const token = credential.accessToken;
                    // The signed-in user info.
                    const user = result.user;
                    alert(user);
                }
                // ...
            }).catch((error) => {
                // Handle Errors here.        
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }

    return (
        <div className="text-center">

            <button className="mt-32" onClick={handleSigninGoogle}> Sign-in with Google</button>

            <div className="flex justify-center mt-2">
                <div className="w-80 bg-white rounded text-center">
                    <form className="shadow-md rounded p-8" onSubmit={onSubmit}>
                        <div className="mb-4 w-60 ">
                            <label className="block float-left text-gray-700 text-sm font-bold mb-2">
                                Email
                            </label>
                            <input {...register('email')} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="firebase@react.com" />
                        </div>
                        <div className="mb-4 w-60 ">
                            <label className="block float-left text-gray-700 text-sm font-bold mb-2">
                                Password
                            </label>
                            <input {...register('password')} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password" />
                        </div>

                        <input className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-2 rounded" type="submit" value="Login" />
                    </form>
                </div>
            </div>
        </div>
    );
}