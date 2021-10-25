import React from 'react'

const CardComponent = ({prodName, prodId, price, description}) => {

    return (
        <div className="col py-4 px-4 px-lg-2 py-lg-3">
            <div className="card h-100 mx-2">
                <div className="card-header text-center">
                    <h5 className="card-title">{prodName}</h5>
                </div>
                <div className="row h-100 g-0 pt-3">
                    <div className="col-6">
                        <img id="img" className="card-img-top" src={"/assets/img/product/"+ prodId +".jpg"} alt="" />
                    </div>
                    <div className="col-6">
                        <div className="card-body font-black">
                            <p className="card-text">Precio por Kg</p>
                            <p className="fw-bold fs-4">${price}</p>

                        </div>
                    </div>
                </div>
                <div className="row g-0">
                    <div className="card-footer text-center">
                        <p>
                            <button className="btn btn-light text-dark" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapse-1" aria-expanded="false" aria-controls="collapse-1">
                                Más información
                            </button>
                            <div className="collapse" id="collapse-1">
                                <div className="card-text px-4">
                                    {description}
                                </div>
                            </div>
                        </p>

                        <div className="d-flex flex-row justify-content-around align-items-center">
                            <button id="takeoutButton-1" type="button"
                                className="btn btn-outline-danger rounded-circle border-0 square-button">
                                <i className="bi bi-patch-minus h2"></i>
                            </button>
                            <div> <span id="prodQty-1" className="badge bg-light text-success fs-5"> 5</span> </div>
                            <button id="addButton-1" type="button"
                                className="btn btn-outline-success rounded-circle border-0 square-button">
                                <i className="bi bi-patch-plus h2"></i>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default CardComponent
