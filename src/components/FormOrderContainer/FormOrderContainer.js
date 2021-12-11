import { useState } from 'react'
import firebase from "firebase/app";
import getFirestore from '../../services/GetFirestore/getFirestore'
import { useCartContext } from '../../context/CartContext'
import { useNavigate } from 'react-router-dom';
import FormOrder from '../FormOrder/FormOrder';

const FormOrderContainer = () => {

    const { cartList, subTotal, clear } = useCartContext()

    const [show, setShow] = useState(false)
    const [validated, setValidated] = useState(false);
    const [name, setName] = useState('')
    const [email, setEmail] = useState('email1')
    const [emailConfirm, setEmailConfirm] = useState('email2')
    const [phone, setPhone] = useState('')
    let navigate = useNavigate();

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    /**
     * Function to generate the order and insert on orders collection.
     */
    const addOrderToCollection = () => {

        const orderCollection = getFirestore().collection('orders')

        const buyer = { name, phone, email }
        let order = {}
        order.buyer = buyer
        order.items = cartList.map(prod => ({ id: prod.id, title: prod.name, price: prod.price, qty: prod.qty }))
        order.date = firebase.firestore.Timestamp.fromDate(new Date())
        order.state = 'generated'
        order.total = subTotal

        orderCollection.add(order)
            .then((data) => {
                alert("EL ID DE TU ORDEN DE COMPRA ES: " + data.id)
            })
            .catch((err) => {
                console.log(err)
            })
            .finally()

    }

    const updateStock = async (e) => {
        e.preventDefault()
        const db = getFirestore()
        const itemsToUpdate = db.collection('products')
            .where(firebase.firestore.FieldPath.documentId(), 'in', cartList.map(prod => prod.id))

        const query = await itemsToUpdate.get()
        const batch = db.batch()

        const outOfStock = []
        query.docs.forEach((doc, idx) => {
            if (doc.data().stock >= cartList.find(prod => prod.id === doc.id).qty) {
                batch.update(doc.ref, { stock: doc.data().stock - cartList[idx].qty })
            } else { // NOT ENOUGH STOCK
                outOfStock.push({ ...doc.data(), id: doc.id })
            }
        })

        if (outOfStock.length === 0) {
            await batch.commit()
                .then()
                .catch(err => console.log(err))
                .finally(() => {
                    addOrderToCollection()
                    handleClose()
                    navigate('/orders/' + email)
                    clear()
                }
                )

        } else {
            alert("NO HAY STOCK DE " + outOfStock.map(prod => (prod.name).toUpperCase()))
            handleClose()
            navigate('/')
        }
    }


    const handleSubmit = (event) => {

        event.preventDefault();
        event.stopPropagation();
        const form = event.currentTarget;

        if (form.checkValidity() === true && email === emailConfirm) {
            updateStock(event);
        }

        if (email !== emailConfirm) { alert("LOS EMAILS NO SON IGUALES") }

        setValidated(true);
    }


    let commonProps = {
        show: show,
        validated: validated,
        setName: setName,
        setEmail: setEmail,
        setEmailConfirm: setEmailConfirm,
        setPhone: setPhone,
        handleShow: handleShow,
        handleClose: handleClose,
        handleSubmit: handleSubmit
    }

    return (
        <>
            <FormOrder {...commonProps} />
        </>
    )
}

export default FormOrderContainer
