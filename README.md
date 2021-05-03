# SocialStore: Tu tienda online!
¿Comenzaste o tenés un emprendimiento y te hace falta una tienda online? Con `SocialStore` podrás tener tus productos en línea de forma rápida, fácil y sin comisiones.


# User Flow

![userflow](https://cdn.discordapp.com/attachments/838591543019438095/838591559897317376/Untitled.png)

## Inicio / Categorías

Se muestran todas las categorías con sus productos, por cada categoría aparecen hasta 4 productos, si existen más aparece un botón para dirigirse a la categoría completa.

## Categoría individual

Al dirigirse a una categoría desde el `NavBar` o en `Ver más`, carga el mismo componente que en inicio, pero haciendo el llamado a una sola categoría, que es indicada mediante la ruta. Por ejemplo, `/category/ropa`.

## Detalle del producto

En `/item/id` se muestra el producto con su imagen, su descripción y su precio, en donde se puede seleccionar la cantidad según el stock disponible. 

## Carrito

Luego de agregar productos al carrito, aparecerán listados en `/cart`, con opciones para remover el producto y para agregar o restar del stock. Solamente hay que rellenar el formulario de usuario y completar la compra.

## Productos propios

Cualquier usuario puede subir sus productos sin cargo, en cada producto se guardan los datos del dueño.

Al dirigirse a `/loadproduct`, se especifica la categoría del producto en el campo autocompletable, y luego se ingresan los datos del producto en conjunto con los datos del usuario.

# Componentes

![componentes](https://cdn.discordapp.com/attachments/838591543019438095/838591635709100062/Untitled.png)

Component Relationship

# Organización

En las clases, el profesor y los tutores nos recomendaron acomodar los componentes en carpetas para organizarse mejor. Sin embargo, **personalmente** es mucho más cómodo tenerlos prolijos que tenerlos organizados.

![carpetasantes](https://cdn.discordapp.com/attachments/838591543019438095/838591750581780561/Untitled.png) ![carpetasdespues](https://cdn.discordapp.com/attachments/838591543019438095/838591735159324689/Untitled.png)

---

![nombresantes](https://cdn.discordapp.com/attachments/838591543019438095/838591720446361609/Untitled.png)

![nombresdespues](https://cdn.discordapp.com/attachments/838591543019438095/838591707153956884/Untitled.png)


## Versiones de cada desafío
* [Desafío 1 "Crear la App utilizando el CLI"](https://github.com/FranElfers/socialstore-elfers/tree/1f9ca9a676099211d48a91449ebfe408cc980f28)
* [Desafío 2 "Menú e-commerce"](https://github.com/FranElfers/socialstore-elfers/tree/d7c07f528cd4dcd6bb1d99bccdc5bf8a190f79d4)
* [Desafío 3 "Estilos y Home"](https://github.com/FranElfers/socialstore-elfers/tree/cdd66d20815e7aebbd4450c3325f5bd455f97cf2)
* [Desafío 4 "Contador con botón"](https://github.com/FranElfers/socialstore-elfers/tree/46ce5da0fa84b2eb070e180564b20c0933598393)
* [Desafío 5 "Catálogo con MAPS y Promises"](https://github.com/FranElfers/socialstore-elfers/tree/71b24c99f33f6f5bbaf159f3d1bf160b443df289)
* [Desafío 6 "Detalle de producto"](https://github.com/FranElfers/socialstore-elfers/tree/38fb4acd50fbcc8acb54f2962e2111c651b29315)
* [Desafío 7 "Sincronizar el counter"](https://github.com/FranElfers/socialstore-elfers/tree/2d195fa3acf559dc488c5dce0032ee452124eb39)
* [Desafío 8 "CartContext"](https://github.com/FranElfers/socialstore-elfers/tree/ae51c12066831fae59d8f340e73480bd6918b5f5)
* [Desafío 9 "Cart View"](https://github.com/FranElfers/socialstore-elfers/tree/40f525785715ef4704eb5ca149f4fec13381ae9f)
* [Desafío 10 "Item Collection"](https://github.com/FranElfers/socialstore-elfers/tree/4feec08948d05a459d0c6929e82f6257cf0f0c76)
* [Desafío 11 "Item Collection II"](https://github.com/FranElfers/socialstore-elfers/tree/4a5a5d36b2d91f24305b1a5fd6cb02446caf02f3)
