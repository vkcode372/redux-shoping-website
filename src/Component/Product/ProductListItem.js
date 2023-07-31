  import React from 'react'
  import SingleProduct from "../SingleProduct/SingleProduct";
  import Container from 'react-bootstrap/Container';
  import Row from 'react-bootstrap/Row';
  import Col from 'react-bootstrap/Col';
  export const ProductListItem = ({product,categories}) => {
    
    return (

      <div className="productSection" key={product.id}>
            <Container>
                  <div className="wrapTitle">
                    <h3 className="sectionTitle mt-5 mb-4" style={{color:"#000000",textAlign:"left",borderBottom:"1px solid black"}}>{categories}</h3>
                  </div>
                  <div className='productLists row'>
                  {
                    product.map(product => {


                      return (
                        <SingleProduct key={product.id} product={product} />
                      )
                    })
                  }
                </div>
          </Container>
        </div>
    
    )
  }
