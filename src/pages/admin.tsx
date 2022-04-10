import Layout from '../components/Layout'
import { Heading } from 'grommet';
import { useEffect, useContext, useState } from 'react';
import { Context } from "../App";
import "firebase/compat/firestore"
import 'firebase/firestore';
import AdminComments from '../components/AdminComments';
import { useNavigate } from 'react-router-dom';
import { doc, getDoc, getFirestore } from 'firebase/firestore';

const AdminPage: React.FunctionComponent<{state: any }> = () => {

  const {user} = useContext(Context);
  const [authorized, setAuth] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user){
      return;
    }
    if (authorized) return;
    const db = getFirestore();
    const ref = getDoc(doc(db,'users',user.uid))
    ref.then(doc => {
      let data = doc.data();
      if (data && data.admin === true) {
        setAuth(true);
      }
    }).catch(err => {
      console.error(err)
      navigate('/');
    })
  },[user]);

  return (
    
    <Layout title="Admin Dylan Allen | JavaScript Developer | Front-end Web">
      <div>
        { authorized &&
          <div>
            <Heading>Admin</Heading>
            <AdminComments></AdminComments>
          </div>
        }
      </div>
    </Layout>
  )
}

export default AdminPage
