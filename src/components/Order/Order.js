import Table from "react-bootstrap/Table"

const Order = ({id, items, total, date}) => {
        
    return (
        <div className="m-3 p-3">
            <p> Orden ID: <span className="text-success font-weight fs-6">{id}</span> - {date.toDate().toLocaleString()}hs</p>
            <Table borderless size="sm" className="caption-top">
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
                    items.sort((a, b) => a.title.localeCompare(b.title)).map( (item, index) => 
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
                    <tr className="fw-bolder">
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
