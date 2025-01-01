import "firebase/compat/firestore"
import { firebaseConfig } from '../firebase.config';
import '@firebase/storage';
import { initializeApp } from "@firebase/app"
import { getDownloadURL, getStorage, ref } from "@firebase/storage";

export function initApp() {
    let app;
    try {
        app = initializeApp(firebaseConfig);
    } catch (error) {
        
    }
    return app;
}

export const getImage = async (path: string | undefined) => {
    var storage = getStorage();
    const url = await getDownloadURL(ref(storage, path))
    return url
}