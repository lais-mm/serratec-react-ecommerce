import React from 'react';
import { Link } from 'react-router-dom'
import { Navbar } from './styles'
import logo from '../../assets/imgs/logo.png';

const Nav = ( ) => {
  
//   function redirect() {

//     if(itens.length === 0){
//       window.location.href = "/empty"
//     }else{
//       window.location.href = "/carrinho"
//     }
    
// }

return (
    <Navbar>
    <div>
        <img className="logo" src={logo} alt="logo" width="200" height="100"/> 
        <ul>
        <ul>
        <li>
          <Link  id="itens" to="/">
            Home | 
          </Link>  
        </li>
        <li>
          <Link id="itens" to="/produto">
            Produtos | 
          </Link>   
        </li>
        <li>
          <Link id="itens" to="/carrinho">
          <i class="fas fa-shopping-cart"></i>
            Minhas compras 
          </Link>
        </li>
      </ul>  
        </ul>
    </div>
    </Navbar>
)
};

export default Nav;