import React from 'react'
import Category from './Category';
//Styles
import './Category.css';
//Hooks
import useFolderRoot from '../../hooks/useFolderRoot';
//Boostrap
import { Container, Figure, Row } from 'react-bootstrap';

//Animations
const OtherCategories = () => {
    const publicURL = process.env.PUBLIC_URL;
    const {otherCategory} = useFolderRoot();

  return (
    <>
      <section className="other-categories ff-gotham-medium" style={{
        background: otherCategory.firstColor
      }}>
              {/* Articles */}
              
                <div className="other-categories--title position-relative" style={{ 
                  height: '200px',
                  background: otherCategory.secondColor
                }}>
                      <Figure className='text-center position-absolute top-50 start-50'>
                          <img src={publicURL + otherCategory.headerCategory} alt="Otras categorias" className="mw-100" /> 
                      </Figure>
                    <div style={{
                      width: '100vw',
                      height: '200px',
                      clipPath: 'polygon(0% 100%, 100% 0%, 100% 100%)',
                      background: `linear-gradient(to right, ${otherCategory.firstColor} 0%,  ${otherCategory.firstColor} 100%)` 
                    }}></div>
                </div>
              

              <Container className='pb-5'>
                  <Row className="position-relative d-flex flex-column flex-lg-row justify-content-center gap-lg-5 mb-4">
                        <div className="overlay">
                            <img src={publicURL + otherCategory.overlay} 
                            alt="Pepitas flotantes" 
                            className="floating-image mw-100 w-100 z-0 position-relative" /> 
                        </div>
                          {
                              otherCategory.list ? (
                                  otherCategory['list'].map( category => (
                                      <Category 
                                        borderColor={otherCategory.borderColor} 
                                        key={category.url} 
                                        imageUrl={category.urlImage} 
                                        url= {category.url}
                                        />
                                  ))
                              ): null
                          }
                    </Row>
              </Container>
          </section>
    </>
  )
}

export default OtherCategories
