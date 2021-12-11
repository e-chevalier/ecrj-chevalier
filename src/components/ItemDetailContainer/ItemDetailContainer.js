import ItemDetail from '../ItemDetail/ItemDetail';
import Loading from '../Loading/Loading';
import useFetch from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';


const ItemDetailContainer = () => {

    const { id } = useParams();
    const [products, loading] = useFetch(0, id);

    return (
        loading ?
            <Loading />
            :
            <Container>
                { 
                    products[0].name ?
                        <ItemDetail product={products[0]} />
                    :
                        <div className="h4 my-5 px-5 text-center">NO SE ENCUENTRA EL PRODUCTO.</div>
                }
            </Container>
    )
}

export default ItemDetailContainer
