import Table from "react-bootstrap/Table"

const Order = ({id, items, total, date}) => {

    console.log(date)

    return (
        <div>
            <Table size="sm" className="caption-top">
                <caption> Fecha: </caption>
                <caption>ID de la orden de compra :  <span className="font-weight fs-5">{id}</span></caption>
                <thead className="table-info">
                    <tr>
                        <th className="col-1">#</th>
                        <th className="col-6">Articulo</th>
                        <th className="col-2">Cantidad</th>
                        <th className="col-3">Precio</th>
                    </tr>
                </thead>
                <tbody>
                {   
                    items.map( (item, index) => 
                        <tr key={item.id}>
                            <td>{index+1}</td>
                            <td>{item.title}</td>
                            <td>{item.qty} Kg</td>
                            <td>$ {item.price * item.qty}</td>
                        </tr>
                    ) 
                }
                </tbody>
                <tfoot>
                    <tr className="font-weight fs-5">
                        <td></td>
                        <td></td>
                        <td>TOTAL</td>
                        <td>$ {total}</td>
                    </tr>
                </tfoot>
            </Table>     
        </div>
    )
}

export default Order
