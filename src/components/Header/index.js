import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { FaCoffee } from 'react-icons/fa';
import { DiCoffeescript } from 'react-icons/di';

import { Container, Cart, Logo } from './styles';

export default function Header() {
  const cartSize = useSelector(state => state.cart.length);

  return (
    <Container>
      <Link to="/">
        <Logo>
          <DiCoffeescript size={50} color="#FFf" />
          <h1>Essência e Sabor do Café</h1>
          <DiCoffeescript size={50} color="#FFf" />
        </Logo>
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu Pedido</strong>
          <span>{cartSize} itens</span>
        </div>
        <FaCoffee size={36} color="#FFf" />
      </Cart>
    </Container>
  );
}
