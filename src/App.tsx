import './index.css'
import SideBar from './components/side-bar';
import MainHeader from './components/main-header';
import Content from './pages/Dashboard';

function App() {

  return (
    <>
      <div className='flex'>
        <SideBar />
        <div className='flex-1'>
          <MainHeader />
          <Content />
        </div>
      </div>
    </>
  )
}

export default App
