import React, { useContext } from 'react'
import Center from './Center'
import styled from 'styled-components'
import Button from './Button'
import ButtonLink from './ButtonLink'
import CartIcon from './icons/CartIcon'
import { CartContext } from './CartContext'

const Bg = styled.div`
    background-color: #222;
    color: #fff;
    padding: 50px 0;
`

const Title = styled.h1`
    margin: 0;
    font-weight: normal;
`

const Desc = styled.p`
    color: #aaa;
    font-size: .9rem;
`

const ColumnsWrapper = styled.div`
    display: grid;
    grid-template-columns: .9fr 0.9fr;
    gap: 40px;
    img {
        max-width: 100%
    }
`

const Column = styled.div`
    display: flex;
    align-items: center;
`

const ButtonsWrapper = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 25px;

`

function Featured({ product }) {

    const { addProduct } = useContext(CartContext);


    return (
        <div>
            <Bg>
                <Center>

                    <ColumnsWrapper>
                        <Column>
                            <div>
                                <Title>{product.title}</Title>
                                <Desc>{product.description}</Desc>

                                <ButtonsWrapper>
                                    <ButtonLink href={'/products'} outline={1} white={1} size='l'>
                                        Read More
                                    </ButtonLink>
                                    <Button white={1} onClick={addProduct}>
                                        <CartIcon />
                                        Add to Cart
                                    </Button>
                                </ButtonsWrapper>
                            </div>


                        </Column>

                        <Column>
                            <img src="https://yildirim-ecommerce-next.s3.amazonaws.com/1691310097794.png" alt="" />
                        </Column>
                    </ColumnsWrapper>
                </Center>
            </Bg>
        </div >
    )
}

export default Featured