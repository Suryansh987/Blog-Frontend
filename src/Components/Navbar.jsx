import React,{ useState } from 'react'

const Navbar = (props) => {
  const [MenuType, setMenuType] = useState("Menu")
  const { Avatar } = props
  // const handleOnClick=(e)=>{
  //   setMenuType("Sort")
  // }
  return (
    <>
      <div className='text-3xl text-center'>Logo</div>
      <nav className='flex w-screen h-[60px] justify-between items-center text-xl px-8'>
        <ul className='sm:flex gap-10 hidden'>
          <li><span className="material-symbols-outlined sm:hidden block">Home</span>Home</li>
          <li><span className="material-symbols-outlined sm:hidden block">menu</span>My Blogs</li>
          <li><span className="material-symbols-outlined sm:hidden block">menu</span>About</li>
          <li><span className="material-symbols-outlined sm:hidden block">menu</span>Contact</li>
        </ul>
        <div className={`p-5 w-10 h-10 bg-[url("${Avatar}")] bg-contain bg-no-repeat rounded-full`}>
        </div>
        <span className="material-symbols-outlined sm:hidden block select-none" onClick={()=>{setMenuType(MenuType==="Menu"?"Sort":"Menu")}}>
          {MenuType}
        </span>
      </nav>
    </>

  )
}
export default Navbar
