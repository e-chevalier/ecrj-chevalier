import Container from 'react-bootstrap/Container';
import Loading from '../Loading/Loading';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch'


const ItemListContainer = ({ greeting }) => {

    const { kind } = useParams();
    const [products, loading] = useFetch(kind, 0);
    
    return (

        loading ?
            <Loading />
            :
            <div>
                <p className="h4 my-5 text-center">{greeting}</p>
                <Container id="cards" className="py-5 my-5">
                    {
                        <ItemList products={products} />
                    }
                </Container>
            </div>
    )
}

export default ItemListContainer
