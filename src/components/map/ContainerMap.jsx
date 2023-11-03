import React from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import SiteCard from '../../components/map/SiteCard';
//Import
import './Map.css'
import Map from './Map';
import useFilterMap from '../../hooks/useFilterMap';
import ModalForm from '../modal/ModalForm';
import { useMyState } from '../../context/ContextGlobal';

const ContainerMap = () => {

   const {setCategory, setCity, data} = useFilterMap();
   const { setAction, action, showModal} =useMyState();

  return (
    
    <>
    <Container className='container-map rounded-4 p-5'>
        <Row>
            <img src="" alt="" />
        </Row>
        <Row>
            <Col xs={12} md={12} lg={4} xl={4}>
                <Row className='justify-content-center gy-3'>
                    <Col xs={12} md={12} lg={6} xl={6}>
                        <Form.Select 
                        onChange={e => {
                            setAction(action + 1);
                            if(!showModal) {
                                return setCity(e.target.value);
                            } 
                            return;
                            

                        }}
                        className='form-control rounded-5 py-2 fc-gray-soft ff-gotham-book'>
                            <option value="all">Buscar Ciudad</option>
                            <option value="Bogotá">Bogotá</option>
                            <option value="Medellín">Medellín</option>
                            <option value="Cali">Cali</option>
                            <option value="Cartagena">Cartagena</option>
                        </Form.Select>
                    </Col>
                    <Col xs={12} md={12} lg={6} xl={6}>
                        <Form.Select 
                        onChange={e => {
                            setAction(action + 1);
                            if(!showModal) {
                                return setCategory(e.target.value)
                            } 
                            return;
                            
                        }}
                        className='form-control rounded-5 py-2 fc-gray-soft ff-gotham-book'>
                            <option value="all" className='fc-gray-soft'>Buscar Categoría</option>
                            <option value="Experimentar">Experimentar</option>
                            <option value="Socializar">Socializar</option>
                            <option value="Compartir">Compartir</option>
                        </Form.Select>
                    </Col>
                </Row>
                <Row className='container-map--sites justify-content-center mt-4'>
                    {data.info && data.info.map((item, index) => (  
                        <SiteCard
                            key={index}
                            name={item.name} 
                            hours={item.hours} 
                            address={item.address} />
                    ))}
                   
                </Row>
            </Col>
            <Col xs={12} md={12} lg={8} xl={8}>
                {/* <Map /> */}
                <Map markers={ data.locations }  />
            </Col>
        </Row>
        <div className="mt-0 p-0">
          <ModalForm />
        </div>
    </Container>
    </>
  )
}

export default ContainerMap
