// import EditBlog from './EditBlog'
// import { db } from '@/firebase'
// import { collection, getDocs } from 'firebase/firestore'

// async function getPosts() {
//   const postsRef = collection(db, 'posts')
//   const snapshot = await getDocs(postsRef)
//   return snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
// }

// export default async function Page() {
//   const posts = await getPosts()
//   const sortedPosts = posts.sort((a, b) => b.data.created_at.seconds - a.data.created_at.seconds)

//   return <EditBlog posts={sortedPosts} />
// }


import EditBlog from "./EditBlog"
import { collection, getDocs } from "firebase/firestore"
import { db } from "@/firebase"

export default async function Page() {
  const snapshot = await getDocs(collection(db, "posts"))
  const posts = snapshot.docs.map((doc) => {
    const data = doc.data()

    return {
      id: doc.id,
      data: {
        ...data,
        created_at: data.created_at?.seconds ? data.created_at.seconds * 1000 : 0,
        last_edit: data.last_edit?.seconds ? data.last_edit.seconds * 1000 : 0,
      }
    }
  })

  const sortedPosts = posts.sort((a, b) => b.data.created_at - a.data.created_at)

  return <EditBlog posts={sortedPosts} />
}
