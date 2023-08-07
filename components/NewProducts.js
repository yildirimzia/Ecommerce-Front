import styled from "styled-components"
import ProductBox from "./ProductBox"
import Center from "./Center"

const ProductsGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 20px;
    padding: 20px;
`

const Title = styled.h2`
    font-size: 2rem;
    margin:30px 20px 20px;
    font-weight: 400px;
`


function NewProducts({ products }) {
    return (
        <Center>
            <Title>New Products</Title>
            <ProductsGrid>
                {products?.length > 0 && products.map(product => (
                    <ProductBox key={product._id} {...product} />
                ))}
            </ProductsGrid>
        </Center>
    )
}

export default NewProducts