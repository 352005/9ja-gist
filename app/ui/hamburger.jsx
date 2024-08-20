import './hamburger.css';

const Hamburger = ({className})=>{
  
  const openMenu = ()=>{
    document.querySelector('.burger-menu').classList.toggle('open');
    document.querySelector('#userMenu').classList.toggle('open');
  }

  return (
    <div className={`${className} burger-menu`} onClick={openMenu} >
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
    </div>
  )
}

export default Hamburger;