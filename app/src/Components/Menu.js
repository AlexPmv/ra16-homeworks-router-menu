import {useNavigate, NavLink} from 'react-router-dom';

export default function Menu() {

  const navigate = useNavigate()

  const click = (e) => {
    e.preventDefault();
    const path = e.target.pathname;
    navigate(path);
  };

  const navLinkStyle = ({isActive}) =>
  isActive ? "menu__item menu__item-active" : "menu__item"

  return (
    <nav className='menu'>
     <NavLink className={navLinkStyle} to='/'>Главная</NavLink>
     <NavLink className={navLinkStyle} to='/drift'>Дрифт-такси</NavLink>
     <NavLink className={navLinkStyle} to='/timeattack'>Time attack</NavLink>
     <NavLink className={navLinkStyle} to='/forza'>Forza karting</NavLink>
    </nav>
  );
}