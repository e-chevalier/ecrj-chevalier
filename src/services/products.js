const products =  [
    {
        "id": "fruit00001",
        "name": "Naranja de Ombligo",
        "price": 60, 
        "description": "Naranja de Ombligo, presentan unos gajos grandes y generosos en jugo, pero también en fibra insoluble, es decir carnosas, lo que las hace más aptas para naranja de mesa que para hacer zumos. También presentan la ventaja para este fin de que casi nunca tienen las incómodas pepitas que nos encontramos en otras variedades al morder.",
        "weight": 1, 
        "discount": 0, 
        "kind": "Frutas",
        "qty": 0,
        "stock": 5
    },
    {
        "id": "fruit00002",
        "name": "Manzana Gala",
        "price": 90, 
        "description": "Este tipo de manzana tiene una piel brillante a rayas o estrías rojas-anaranjadas sobre una base de color amarillenta.Se recomienda comer en crudo, pero también para cocer para hacer tartas y al horno.",
        "weight": 1,
        "discount": 10,
        "kind": "Frutas",
        "qty": 0,
        "stock": 6 
    },

    {
        "id": "fruit00003",
        "name": "Pera Blanquilla",
        "price": 85, 
        "description": "También conocida como Blanca de Aranjuez, esta pera se caracteriza por tener un tamaño mediano, un color verde poco intenso y una piel lisa y brillante. Posee una carne jugosa y una semilla pequeña.",
        "weight": 1,
        "discount": 5,
        "kind": "Frutas",
        "qty": 0,
        "stock": 66 
    },

    {
        "id": "fruit00004",
        "name": "Banana Cavendish",
        "price": 120, 
        "description": "La banana más exportada del mundo tiene una piel robusta y aguanta bien los viajes. Casi todas las bananas vendidas en Estados Unidos y Europa son de esta variedad.",
        "weight": 1,
        "discount": 15,
        "kind": "Frutas",
        "qty": 0,
        "stock": 54 
    },
    {
        "id": "fruit00005",
        "name": "Frutilla Camarosa",
        "price": 200, 
        "description": "De origen californiano (EEUU), de frutos grandes y firmes, es la más consumida en Argentina. Se la considera como la variedad de fresón más cultivada en la actualidad.",
        "weight": 1,
        "discount": 20,
        "kind": "Frutas",
        "qty": 0,
        "stock": 250 
    },
    {
        "id": "veg00001",
        "name": "Berenjena Negra",
        "price": 140, 
        "description": "Su textura aterciopelada y su sabor suavemente amargo y campestre conmueve a los paladares más exigentes. La berenjena negra es simplemente exquisita.",
        "weight": 1,
        "discount": 20,
        "kind": "Verduras",
        "qty": 0,
        "stock": 570 
    },
    {
        "id": "veg00002",
        "name": "Brócoli",
        "price": 174, 
        "description": "De color verde profundo e intenso, partiendo de un tallo firme y robusto hasta una particular e inconfundible forma irregular en su copa. El brócoli llega para regalarnos un suave pero distintivo sabor que oscila entre lo amargo y lo dulce.",
        "weight": 1,
        "discount": 20,
        "kind": "Verduras",
        "qty": 0,
        "stock": 920 
    },
    {
        "id": "veg00003",
        "name": "Choclo Unidad",
        "price": 471, 
        "description": "Inconfundibles granos color amarillo oro. Crujientes por fuera pero suaves en su interior y, al morderlos, además nos inundan de todo su dulzor tan característico. El choclo es un vegetal tanto conocido como querido por todos.",
        "weight": 1,
        "discount": 20,
        "kind": "Verduras",
        "qty": 0,
        "stock": 330 
    },
    {
        "id": "nuts00001",
        "name": "Almendra",
        "price": 217, 
        "description": "Caprichosas, rebeldes y suavemente crujientes, de interior blanco cremoso y un sabor dulce peculiar. Las almendras son célebres frutos secos, conocidos por todo tipo de paladares y preparaciones.",
        "weight": 1,
        "discount": 20,
        "kind": "Frutos Secos",
        "qty": 0,
        "stock": 690 
    },
    {
        "id": "nuts00002",
        "name": "Castaña de Cajú",
        "price": 566, 
        "description": "Crujientes, gustosas y exquisitas para todo momento. Las castañas de cajú son un singular fruto seco que nos ofrecen una textura y sabor único. Sus usos son variados, podemos optar por consumirlas solas como un snack, combinada con otros frutos secos, o bien, utilizarla en diferentes preparaciones como panes, ensaladas, tortas o postres.",
        "weight": 1,
        "discount": 20,
        "kind": "Frutos Secos",
        "qty": 0,
        "stock": 800 
    },
    {
        "id": "nuts00003",
        "name": "Maní Pelado Salado",
        "price": 490, 
        "description": "El maní es el fruto seco más antojadizo, de un sabor cremoso neutro y textura crujiente pero suave. También es capaz de adoptar todo tipo de sabores que se le quiera arrojar. Entero para picar, acompañando una fría cerveza y haciendo una charla más llevadera, también mezclado con otros frutos secos e incluso en ensaladas o combinado con vegetales. Es tal vez uno de los alimentos más versátiles.",
        "weight": 1,
        "discount": 20,
        "kind": "Frutos Secos",
        "qty": 0,
        "stock": 760 
    },
    {
        "id": "spices00001",
        "name": "Canela",
        "price": 379, 
        "description": "La canela es una especia muy recomendada para mejorar los problemas de circulación y muy beneficiosa para las personas con diabetes, ya que ayuda a controlar los niveles de glucosa en sangre. Sobre su origen existen algunos documentos chinos del año 2800 a.C. que ya hablan de la Cinnamomum Zeylanicum. Esta es una palabra de origen griego que significa madera dulce y Zeeylanicum proviene del nombre donde se cultivaba, Ceilán.",
        "weight": 0.1,
        "discount": 20,
        "kind": "Hierbas y Especias",
        "qty": 0,
        "stock": 540
    },
    {
        "id": "spices00002",
        "name": "Albahaca",
        "price": 152, 
        "description": "Dulce, fragante y aromática. El sabor de nuestra albahaca se asemeja a un ramo de flores con notas de menta y perfume. Una hierba que nos transmite toda la frescura del Mediterráneo y que no pasará desapercibida en nuestros platos.",
        "weight": 0.025,
        "discount": 20,
        "kind": "Hierbas y Especias",
        "qty": 0,
        "stock": 760 
    },
    {
        "id": "spices00003",
        "name": "Menta",
        "price": 259, 
        "description": "La menta es una hierba muy utilizada en la cocina oriental. Puede incluirse tanto en platos salados como dulces. Su aroma es fresco y agradable. Vuelve muy refrescante a cualquier plato que la componga.",
        "weight": 0.025,
        "discount": 20,
        "kind": "Hierbas y Especias",
        "qty": 0,
        "stock": 550 
    },
    {
        "id": "meat00001",
        "name": "Milanesa de Pollo",
        "price": 450, 
        "description": "Filete fino de carne de pollo aderezada de especias y limón de forma exquisita, que le dan un toque característico y que consiste en pasar el filete por huevo batido y posteriormente sufren un rebozado en pan rallado. Cocinar con abundante aceite a gran temperatura.",
        "weight": 0.025,
        "discount": 20,
        "kind": "Carnes y Pescados",
        "qty": 0,
        "stock": 579 
    },
    {
        "id": "meat00002",
        "name": "Salmón rojo",
        "price": 2700, 
        "description": "El salmón rojo es la especie de salmón más importante en Alaska, aunque no la más abundante, por su sabor rico y textura firme. Su carne tiene más contenido de aceite, y considerado un pescado de muy alta calidad, mucho más que otras especies de salmón ",
        "weight": 0.025,
        "discount": 20,
        "kind": "Carnes y Pescados",
        "qty": 0,
        "stock": 579 
    }
];

export default products;