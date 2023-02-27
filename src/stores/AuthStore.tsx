import { atom } from 'jotai'
import { appleAuth, appleAuthAndroid } from '@invertase/react-native-apple-authentication';
import { Platform } from 'react-native';
import { v4 as uuid } from 'uuid'

//login
export const isLogin = atom(false)

export const appleLogin = async () => {
    if (Platform.OS === 'ios') {
        const appleAuthRequestResponse = await appleAuth.performRequest({
            requestedOperation: appleAuth.Operation.LOGIN,
            requestedScopes: [appleAuth.Scope.FULL_NAME, appleAuth.Scope.EMAIL],
        });

        const credentialState = await appleAuth.getCredentialStateForUser(appleAuthRequestResponse.user);

        if (credentialState === appleAuth.State.AUTHORIZED) {
            // user is authenticated
        }
        return
    }

    // Generate secure, random values for state and nonce
    const rawNonce = uuid();
    const state = uuid();

    // Configure the request
    appleAuthAndroid.configure({
        // The Service ID you registered with Apple
        clientId: 'com.seegnal',

        // Return URL added to your Apple dev console. We intercept this redirect, but it must still match
        // the URL you provided to Apple. It can be an empty route on your backend as it's never called.
        redirectUri: 'https://www.naver.com',

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

    // Send the authorization code to your backend for verification

}