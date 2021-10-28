import React from 'react'
import Container from 'react-bootstrap/Container';
import CardComponent from '../CardComponet/CardComponent'

const ItemListContainer = () => {

    const description1 = "Naranja de Ombligo, presentan unos gajos grandes y generosos en jugo, pero también en fibra insoluble, es decir carnosas, lo que las hace más aptas para naranja de mesa que para hacer zumos. También presentan la ventaja para este fin de que casi nunca tienen las incómodas pepitas que nos encontramos en otras variedades al morder.";
    const description2 = "Este tipo de manzana tiene una piel brillante a rayas o estrías rojas-anaranjadas sobre una base de color amarillenta.Se recomienda comer en crudo, pero también para cocer para hacer tartas y al horno.";
    const description3 = "También conocida como Blanca de Aranjuez, esta pera se caracteriza por tener un tamaño mediano, un color verde poco intenso y una piel lisa y brillante. Posee una carne jugosa y una semilla pequeña.";
    const description4 = "La banana más exportada del mundo tiene una piel robusta y aguanta bien los viajes. Casi todas las bananas vendidas en Estados Unidos y Europa son de esta variedad.";
    const description5 = "De origen californiano (EEUU), de frutos grandes y firmes, es la más consumida en Argentina. Se la considera como la variedad de fresón más cultivada en la actualidad.";
    const description6 = "Su textura aterciopelada y su sabor suavemente amargo y campestre conmueve a los paladares más exigentes. La berenjena negra es simplemente exquisita.";
    const description7 = "De color verde profundo e intenso, partiendo de un tallo firme y robusto hasta una particular e inconfundible forma irregular en su copa. El brócoli llega para regalarnos un suave pero distintivo sabor que oscila entre lo amargo y lo dulce.";
    const description8 = "Inconfundibles granos color amarillo oro. Crujientes por fuera pero suaves en su interior y, al morderlos, además nos inundan de todo su dulzor tan característico. El choclo es un vegetal tanto conocido como querido por todos.";
    const description9 = "Caprichosas, rebeldes y suavemente crujientes, de interior blanco cremoso y un sabor dulce peculiar. Las almendras son célebres frutos secos, conocidos por todo tipo de paladares y preparaciones.";
    const description10 = "Crujientes, gustosas y exquisitas para todo momento. Las castañas de cajú son un singular fruto seco que nos ofrecen una textura y sabor único. Sus usos son variados, podemos optar por consumirlas solas como un snack, combinada con otros frutos secos, o bien, utilizarla en diferentes preparaciones como panes, ensaladas, tortas o postres.";
    const description11 = "El maní es el fruto seco más antojadizo, de un sabor cremoso neutro y textura crujiente pero suave. También es capaz de adoptar todo tipo de sabores que se le quiera arrojar. Entero para picar, acompañando una fría cerveza y haciendo una charla más llevadera, también mezclado con otros frutos secos e incluso en ensaladas o combinado con vegetales. Es tal vez uno de los alimentos más versátiles.";
    const description12 = "La canela es una especia muy recomendada para mejorar los problemas de circulación y muy beneficiosa para las personas con diabetes, ya que ayuda a controlar los niveles de glucosa en sangre. Sobre su origen existen algunos documentos chinos del año 2800 a.C. que ya hablan de la Cinnamomum Zeylanicum. Esta es una palabra de origen griego que significa madera dulce y Zeeylanicum proviene del nombre donde se cultivaba, Ceilán.";



    return (

        <div>
            <Container id="cards" className="py-5 my-5">
                <div className="row justify-content-evenly row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-4 g-4">
                    <CardComponent prodName="Naranja" prodId="fruit00001" price="250" description={description1} qtySelected="2" />
                    <CardComponent prodName="Manzana" prodId="fruit00002" price="350" description={description2} qtySelected="0"/>
                    <CardComponent prodName="Pera" prodId="fruit00003" price="150" description={description3} qtySelected="5"/>
                    <CardComponent prodName="Banana" prodId="fruit00004" price="240" description={description4} qtySelected="0" />
                </div >
                <div className="row justify-content-evenly row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-4 g-4">
                    <CardComponent prodName="Frutilla Camarosa" prodId="fruit00005" price="550" description={description5} qtySelected="1"/>
                    <CardComponent prodName="Berenjena Negra" prodId="veg00001" price="150" description={description6} qtySelected="0"/>
                    <CardComponent prodName="Brócoli" prodId="veg00002" price="250" description={description7} qtySelected="0"/>
                    <CardComponent prodName="Choclo" prodId="veg00003" price="340" description={description8} qtySelected="0"/>
                </div >
                <div className="row justify-content-evenly row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-4 g-4">
                    <CardComponent prodName="Almendra" prodId="nuts00001" price="750" description={description9} qtySelected="0"/>
                    <CardComponent prodName="Castaña de Cajú" prodId="nuts00002" price="650" description={description10} qtySelected="0"/>
                    <CardComponent prodName="Maní Pelado Salado" prodId="nuts00003" price="490" description={description11} qtySelected="0"/>
                    <CardComponent prodName="Canela" prodId="spices00001" price="98" description={description12} qtySelected="0"/>
                </div >
            </Container>
            
        </div>
    )
}

export default ItemListContainer
