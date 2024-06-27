
import { Route,Routes } from 'react-router-dom';
import ClippedDrawer  from '../src/sidebar';
import AddUser from './users/features/Addusers'
import Edituser from './users/features/Edituser';
import Landingpage from './users/features/landing';
import Adminloginform from './users/features/Loginadmin'
import UserList from './users/features/userlist';
function App() {
  return (
    <div >
      <Routes>
      <Route path="/" element={<Landingpage/>}/>
        <Route path='/admin' element={<UserList/>}/>
        <Route path='/userform' element={<AddUser/>}/>
        <Route path='/edituser/:id' element={< Edituser />}/>
        <Route path='/dashboard' element={< ClippedDrawer />}/>
        <Route path='/adminform' element={< Adminloginform />}/>
      
      </Routes>
    </div>
  );
}

export default App;
