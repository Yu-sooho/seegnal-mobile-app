import { atom } from 'jotai'
import { appleAuth, appleAuthAndroid } from '@invertase/react-native-apple-authentication';
import { Platform } from 'react-native';
import { v4 as uuid } from 'uuid'
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
} from '@react-native-google-signin/google-signin';
import { getProfile, KakaoOAuthToken, login, logout } from '@react-native-seoul/kakao-login';
import auth from '@react-native-firebase/auth';

auth().useEmulator('http://localhost:9099')

//login
export const isLogin = atom(false)


export const kakaoLogin = async () => {
    try {
        const token: KakaoOAuthToken = await login();
        const profile = await getProfile()
        if (!profile?.email || !token?.accessToken) return false
        console.log(token?.accessToken, token, 'FUFU')
        const result = await auth().createUserWithEmailAndPassword(profile.email, token?.accessToken)
        return result
    } catch (error) {
        console.log(error)
    }
}

export const googleLogin = async () => {

    try {
        const con = await GoogleSignin.configure();
        const has = await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
        const userInfo = await GoogleSignin.signIn();
        const { idToken } = userInfo
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);
        const result = await auth().signInWithCredential(googleCredential);
        return result
    } catch (error) {
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            // user cancelled the login flow
        } else if (error.code === statusCodes.IN_PROGRESS) {
            // operation (e.g. sign in) is in progress already
        } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            // play services not available or outdated
        } else {
            // some other error happened
        }
    }
}

export const appleLogin = async () => {
    if (Platform.OS === 'ios') {
        const appleAuthRequestResponse = await appleAuth.performRequest({
            requestedOperation: appleAuth.Operation.LOGIN,
            requestedScopes: [appleAuth.Scope.FULL_NAME, appleAuth.Scope.EMAIL],
        });

        const credentialState = await appleAuth.getCredentialStateForUser(appleAuthRequestResponse.user);

        if (credentialState === appleAuth.State.AUTHORIZED) {
            // user is authenticated
            const { identityToken, nonce } = appleAuthRequestResponse
            const appleCredential = auth.AppleAuthProvider.credential(identityToken, nonce);
            const result = await auth().signInWithCredential(appleCredential);
            console.log(result, 'appleLogin')
            return result
        }
        // Sign the user in with the credential
        return false
    }

    // Generate secure, random values for state and nonce
    const rawNonce = uuid();
    const state = uuid();

    // Configure the request
    appleAuthAndroid.configure({
        // The Service ID you registered with Apple
        clientId: 'com.seegnal.sign',

        // Return URL added to your Apple dev console. We intercept this redirect, but it must still match
        // the URL you provided to Apple. It can be an empty route on your backend as it's never called.
        redirectUri: 'https://seegnal.page.link/XktS',

        // The type of response requested - code, id_token, or both.
        responseType: appleAuthAndroid.ResponseType.ALL,

        // The amount of user information requested from Apple.
        scope: appleAuthAndroid.Scope.ALL,

        // Random nonce value that will be SHA256 hashed before sending to Apple.
        nonce: rawNonce,

        // Unique state value used to prevent CSRF attacks. A UUID will be generated if nothing is provided.
        state,
    });

    // Open the browser window for user sign in
    const response = await appleAuthAndroid.signIn();


    console.log(response)

    // Send the authorization code to your backend for verification

}

