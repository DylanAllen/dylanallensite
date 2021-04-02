import firebase from "firebase/app";
import { firebaseConfig } from '../firebase.config';
import 'firebase/storage';

export function initApp() {
    try {
        firebase.initializeApp(firebaseConfig);
    } catch (error) {
        if (!/already exists/u.test(error.message)) {
            console.error('Firebase admin initialization error', error.stack);
        }
    }
    return firebase;
}

export const getImage = async (path: string | undefined) => {
    var storage = firebase.storage();
    const url = await storage.ref(path).getDownloadURL();
    return url
}