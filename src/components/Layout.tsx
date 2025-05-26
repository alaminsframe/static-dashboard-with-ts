
import SideBar from './side-bar';
import MainHeader from './main-header';
import { Outlet } from 'react-router';

function Layout() {

  return (
    <>
      <div className='flex'>
        <SideBar />
        <div className='flex-1'>
          <MainHeader />
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default Layout
