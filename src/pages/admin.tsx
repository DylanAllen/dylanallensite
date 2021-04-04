import Layout from '../components/Layout'
import { Heading } from 'grommet';
import { useEffect, useContext, useState } from 'react';
import { Context } from "../App";
import firebase from 'firebase/app';
import 'firebase/firestore';
import AdminComments from '../components/AdminComments';
import { useHistory } from 'react-router-dom';
const firestore = firebase.firestore;

const AdminPage: React.FunctionComponent<{state: any }> = () => {

  const state = useContext(Context);
  const [authorized, setAuth] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if (!state.user){
      return;
    }
    if (authorized) return;
    const ref = firestore().collection('users').doc(state.user.uid).get();
    ref.then(doc => {
      let data = doc.data();
      if (data && data.admin === true) {
        setAuth(true);
      }
    }).catch(err => {
      console.error(err)
      history.push('/');
    })
  })

  return (
    
    <Layout title="Admin Dylan Allen | JavaScript Developer | Frontend Web">
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
