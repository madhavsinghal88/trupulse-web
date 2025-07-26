import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyDI3RSgog1zp-ecjUBrURJJFGcsY1nCSzI',
  authDomain: 'scanta-blog-a8c57.firebaseapp.com',
  projectId: 'scanta-blog-a8c57',
  storageBucket: 'scanta-blog-a8c57.appspot.com',
  messagingSenderId: '1091655201282',
  appId: '1:1091655201282:web:2857ba57759c44a3aead1b',
  measurementId: 'G-LX0Y78R55K',
}

const app = initializeApp(firebaseConfig)

const auth = getAuth(app)
const db = getFirestore(app)
const storage = getStorage(app)

export { auth, db, storage }
