# SocialStore: Tu tienda online!
¿Comenzaste o tenés un emprendimiento y te hace falta una tienda online? Con `SocialStore` podrás tener tus productos en línea de forma rápida, fácil y sin comisiones.


# User Flow

![userflow](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/0e2babf3-191a-4efe-92ec-d60408959845/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210430T193137Z&X-Amz-Expires=86400&X-Amz-Signature=f892fe4111279ece790932d14294e9055cf281b311cb4c943e35ff60e9b6648b&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22)

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

![componentes](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/a666fda0-0c59-48f8-b987-56f91b232c68/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210430T193444Z&X-Amz-Expires=86400&X-Amz-Signature=0d7c662fb960fc7dabc04079d58083e2cdbff4cf657c2a55308ac761c71830a6&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22)

Component Relationship

# Organización

En las clases, el profesor y los tutores nos recomendaron acomodar los componentes en carpetas para organizarse mejor. Sin embargo, **personalmente** es mucho más cómodo tenerlos prolijos que tenerlos organizados.

![carpetasantes](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/7b3dddbe-c227-406c-a50e-e1561404da0c/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210430T193520Z&X-Amz-Expires=86400&X-Amz-Signature=473eff313601323bbe5a39509537b631c140e3b63a45e8900198a93302a63396&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22) ![carpetasdespues](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/236e20df-1914-463f-8aef-48e094877a11/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210430T193524Z&X-Amz-Expires=86400&X-Amz-Signature=df49f10b5388baa979a31a569c635af6635de5b2caff6f53fb16e17bbc5052c9&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22)

---

![nombresantes](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/8ffcee99-e559-450c-98e1-5fb3fed61ed3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210430T193528Z&X-Amz-Expires=86400&X-Amz-Signature=5720717887d5cde9d410c8309185bfabfe74c4c206fee56f1e7be0ca6c699227&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22)

![nombresdespues](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/381a8ba7-2b6b-4365-b64f-e534892893d4/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210430T193534Z&X-Amz-Expires=86400&X-Amz-Signature=76e2a770d6a813bae799fe7f8e2d8cd97eeb4268012387c6cd5e93d3651c0143&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22)


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
