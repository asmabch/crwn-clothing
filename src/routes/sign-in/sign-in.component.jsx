import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/filebase.utils";

const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    };

    return (
        <div>
            <h1>This is the Sign In page</h1>
            <button onClick={logGoogleUser}> Sign in with Google Popup</button>
        </div>
    )
}

export default SignIn;