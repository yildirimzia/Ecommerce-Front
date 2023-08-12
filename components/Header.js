import Link from "next/link";
import styled from "styled-components"
import Center from "./Center";

import { CartContext } from "./CartContext";
import { useContext } from "react";

const StyleHeader = styled.header`
  background-color: #222;

`
const Logo = styled(Link)`
    color: #fff;
    text-decoration: none;
`

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
`

const StyledNav = styled.nav`
    display: flex;
    gap: 15px;
`

const NavLink = styled(Link)`
    color: #aaa;
    text-decoration: none;
`

function Header() {

    const { cartProducts } = useContext(CartContext);


    return (
        <StyleHeader>
            <Center>
                <Wrapper>
                    <Logo href={'/'}>Ecommerce</Logo>
                    <StyledNav>
                        <NavLink href={'/'}>Home</NavLink>
                        <NavLink href={'/products'}>All Products</NavLink>
                        <NavLink href={'/categories'}>Categories</NavLink>
                        <NavLink href={'/account'}>Account</NavLink>
                        <NavLink href={'/cart'}>Cart ({cartProducts.length})</NavLink>
                    </StyledNav>
                </Wrapper>
            </Center>
        </StyleHeader>
    )
}

export default Header