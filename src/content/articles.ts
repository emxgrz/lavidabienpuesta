import { categories } from "@/config/categories";

export type Article = {
  titulo: string;
  slug: string;
  categoria: string;
  extracto: string;
  fechaPublicacion: string;
  fechaActualizacion?: string;
  autor: string;
  imagenPrincipal: string;
  imagenPrincipalAlt: string;
  imagenPinterest: string;
  tituloPinterest: string;
  descripcionSeo: string;
  etiquetas: string[];
  destacado?: boolean;
  borrador?: boolean;
  contenido: string;
};

export const articles: Article[] = [
  {
    titulo: "El recibidor que trabaja para ti: cinco capas de orden en la entrada",
    slug: "recibidor-ordenado-cinco-capas",
    categoria: "orden-y-organizacion",
    extracto: "Zapatos, abrigos, llaves y bolsas: cómo repartir la entrada en capas para que la casa empiece ordenada.",
    fechaPublicacion: "2026-10-23",
    autor: "La Vida Bien Puesta",
    imagenPrincipal: "/images/article-recibidor.jpg",
    imagenPrincipalAlt: "Recibidor con banco de mimbre, abrigos colgados y cesta de fibras naturales",
    imagenPinterest: "/images/article-recibidor-pin.jpg",
    tituloPinterest: "5 capas de orden para un recibidor que funciona",
    descripcionSeo:
      "Cinco capas de orden para un recibidor práctico: calzado, perchas, bandeja para llaves, cesta de paso y una rutina de dos minutos.",
    etiquetas: ["recibidor", "entrada", "orden", "espacios pequeños"],
    contenido: `
## El recibidor no es un mueble: es un sistema

La entrada recibe todo lo que llega a casa: zapatos, abrigos, llaves, el correo, las bolsas de la compra y esa chaqueta que nunca sabemos dónde dejar. Cuando no hay un sitio pensado para cada cosa, el desorden no se queda en el recibidor: se cuela en el salón, en el dormitorio y en la mesa del comedor.

La buena noticia es que no hace falta un recibidor grande ni una reforma. Basta con repartir la entrada en cinco capas sencillas, de abajo arriba, y decidir de antemano dónde aterriza cada objeto.

## 1. Una base para el calzado

Empieza por el suelo, que es lo que más pesa visualmente. Un zapatero bajo y abierto, con dos o tres baldas, resuelve más que un mueble cerrado lleno de cajas apiladas.

- Deja a la vista solo el calzado de la semana. Lo de temporada va arriba o dentro de una cesta.
- Reserva una bandeja o una balda para las botas mojadas y los zapatos de lluvia.
- Si el hueco lo permite, una cesta baja para las zapatillas de casa evita que acaben en cualquier parte.

La regla es simple: si un par no cabe en su sitio, es que sobra o toca rotarlo. Un zapatero lleno hasta arriba deja de ser orden y se convierte en un montón con puertas.

## 2. Perchas a la altura correcta

Los abrigos deben colgar sin arrastrar ni amontonarse. Instala los ganchos a una altura que permita que el bajo de la prenda más larga quede libre del suelo: en un adulto suele funcionar entre 1,60 y 1,70 metros.

Mezcla ganchos dobles con algún gancho individual para los abrigos de diario. Y no cuelgues bolsos cargados de los mismos ganchos: además de deformar las asas, acaban ocupando el espacio de las chaquetas.

<Callout type="info">Si en casa hay niños, añade una fila de ganchos a su altura. Les cuesta colgar lo que no alcanzan, y una percha a 1,20 metros evita muchas discusiones.</Callout>

## 3. Una bandeja para lo pequeño

Llaves, cartera, gafas, el correo del día y el móvil. Todo eso necesita una superficie fija, pequeña y visible. Una bandeja de madera, cerámica o metal sobre un mueble estrecho cumple mejor esa función que un cajón.

La bandeja tiene dos ventajas: delimita el desorden y hace evidente cuándo algo se acumula. Si un día no cabe el correo, es la señal para vaciarla, no para buscar otra bandeja.

## 4. Una cesta para lo que entra y sale

Hay objetos que solo están de paso: la bolsa de la compra, un paquete para devolver, el paraguas, la bolsa del gimnasio. Necesitan un contenedor, no un rincón.

Una cesta de mimbre o de tela gruesa, con tapa o sin ella, en el hueco del banco o junto al zapatero, absorbe ese tráfico sin ensuciar la estética de la entrada. Vacíala una vez por semana; si se convierte en un cajón de sastre permanente, ha dejado de cumplir su función.

## 5. Una rutina de dos minutos

El orden no se sostiene con un mueble bonito, sino con un gesto repetido. Al llegar: zapatos a su sitio, abrigo al gancho, llaves a la bandeja. Al salir: una mirada rápida a la cesta y la bandeja para que nada se quede de más.

Dos minutos al día son suficientes. Lo que no se resuelve en ese tiempo probablemente no tiene todavía un lugar claro, y ese es el verdadero problema que hay que resolver.

<Callout type="warning">No guardes abrigos, paraguas ni zapatos húmedos en un mueble cerrado. El olor y la humedad se quedan dentro; déjalos secar antes de recogerlos.</Callout>

## Cuando el espacio es mínimo

No todos los recibidores permiten un banco con hueco. Si el tuyo es un pasillo estrecho, prioriza tres cosas: un zapatero fino de fondo, una fila de ganchos y una bandeja pequeña. Un espejo vertical y una luz cálida hacen el resto: amplían visualmente y dan la sensación de que la entrada está recogida incluso cuando hay un abrigo de más.

## El orden empieza antes de entrar

Un recibidor bien pensado no es el que está siempre perfecto, sino el que perdona los días malos. Si cada cosa tiene una capa donde caer, la casa empieza ordenada desde la puerta y el resto del día cuesta menos.

Si te interesa seguir por dentro, hemos hablado de [cómo organizar un armario pequeño sin obras](/orden-y-organizacion/organizar-armario-pequeno/) y de los criterios que sí funcionan cuando el espacio aprieta.
`,
  },
  {
    titulo: "Cómo ordenar los armarios de la cocina para que todo se vea de un vistazo",
    slug: "ordenar-armarios-cocina",
    categoria: "orden-y-organizacion",
    extracto: "Un sistema por zonas, alturas y contenedores que dejan ver: menos envases sueltos y más espacio útil.",
    fechaPublicacion: "2026-10-22",
    autor: "La Vida Bien Puesta",
    imagenPrincipal: "/images/article-armarios-cocina.jpg",
    imagenPrincipalAlt: "Armario de cocina abierto con cestas de mimbre y baldas de madera",
    imagenPinterest: "/images/article-armarios-cocina-pin.jpg",
    tituloPinterest: "Cómo ordenar los armarios de la cocina",
    descripcionSeo:
      "Guía práctica para ordenar los armarios de la cocina por zonas y alturas, elegir contenedores que dejan ver y mantener el orden con una rutina sencilla.",
    etiquetas: ["cocina", "armarios", "orden", "contenedores"],
    contenido: `
## Vacía una balda, no el armario entero

Cuando se decide ordenar la cocina, la tentación es sacarlo todo a la vez. El resultado suele ser una mesa cubierta de tuppers sin tapa y la sensación de que el problema es más grande de lo que era.

Hazlo por baldas. Vacía una, limpia el fondo, decide qué vuelve y en qué cantidad. Así puedes terminar en una tarde sin dejar la cocina inutilizable durante días.

## Agrupa por momentos de uso

El criterio que mejor resiste el paso del tiempo no es el tipo de producto, sino el momento en que lo usas. Un armario organizado por tiendas se desordena en cuanto cambias de marca; uno organizado por uso se mantiene.

- **Desayuno**: café, infusiones, azúcar, galletas, miel.
- **Cocina diaria**: aceite, sal, especias, caldos, conservas abiertas.
- **Horno y repostería**: harinas, levadura, cacao, moldes.
- **Ocasiones**: servilletas, velas, manteles, menaje de invitados.

Cada grupo debe ocupar una zona completa, no repartirse por varias baldas. Si el grupo no cabe, es momento de revisar duplicados antes de buscar más espacio.

## Usa la altura como criterio

### La balda de los ojos

Es la zona más valiosa y la que más se desperdicia. Reserva la altura de los ojos para lo que usas a diario y quieres ver: especias, café, aceite, utensilios pequeños. Nada de guardar aquí la vajilla de las celebraciones.

### La balda de las rodillas

Agacharse es incómodo, así que esta zona funciona mejor para lo pesado y lo grande: ollas, sartenes, provisiones de reserva, botellas de agua. Si el armario tiene cajones bajos, son perfectos para platos y fuentes.

### Lo que casi no usas, arriba

Arriba del todo van los moldes que salen tres veces al año, la bandeja de servir y los recambios. Lo importante es que esté accesible con un taburete estable y que no se convierta en un trastero vertical.

<Callout type="info">Antes de comprar cestas, mide el fondo, el alto y el ancho de cada balda. Un contenedor que no entra o que deja un hueco muerto de diez centímetros arruina el sistema por muy bonito que sea.</Callout>

## Contenedores que dejan ver

La cocina ya tiene suficiente ruido visual con los envases de colores. Los contenedores deben ordenar, no decorar por encima del contenido.

- **Cestas de mimbre o fibra natural** para grupos heterogéneos: sobres, bolsitas, utensilios.
- **Tarros de cristal** para legumbres, arroz, pasta y especias que quieras identificar de un vistazo.
- **Cajas transparentes o de tapa madera** para lo que se guarda en lo alto.
- **Bandejas deslizantes** para aceites y salsas: sacas una y ves todas.

No compres un set completo antes de saber qué vas a guardar. Es mejor empezar con lo que ya tienes —una caja de zapatos forrada, un tarro limpio— y sustituir solo lo que de verdad moleste.

## Deja aire entre categorías

Un armario ordenado no es el que está lleno hasta el último centímetro, sino el que permite meter la mano sin desmontar la balda. Deja un pequeño margen entre grupos y un hueco libre en cada altura.

Ese aire tiene una función práctica: absorber lo nuevo sin romper el sistema. Si cada balda está al límite, cualquier compra obliga a reorganizar todo.

## Una revisión de cinco minutos

Una vez al mes, abre los armarios y mira sin sacar nada. Retira lo caducado, junta los envases abiertos y comprueba qué categoría ha crecido de más. Cinco minutos evitan la gran operación de primavera.

También ayuda etiquetar solo lo que se confunde: las cestas de desayuno y repostería, los tarros de legumbres parecidas, las cajas de lo alto. No hace falta etiquetar cada bote; el exceso de etiquetas cansa la vista y se acaba ignorando.

## Lo que no necesitas

No necesitas un organizador distinto para cada cajón, ni un envase a juego para cada producto, ni vaciar las bolsas de pasta en tarros idénticos si eso te obliga a comprar más. Un armario útil se reconoce porque es fácil de usar, no porque parezca un escaparate.

## Un armario que se mantiene solo

El mejor sistema es el que entiende toda la casa. Si el café vive siempre en la misma balda, nadie tiene que preguntar dónde está. Si las cestas tienen un límite claro, es fácil saber cuándo toca vaciar. Y si la altura está bien repartida, la cocina funciona sin esfuerzo incluso en los días de prisa.
`,
  },
  {
    titulo: "Cómo organizar un armario pequeño sin obras",
    slug: "organizar-armario-pequeno",
    categoria: "orden-y-organizacion",
    extracto: "Ocho ideas para ganar espacio real sin convertir el armario en un proyecto infinito.",
    fechaPublicacion: "2026-10-16",
    fechaActualizacion: "2026-10-20",
    autor: "La Vida Bien Puesta",
    imagenPrincipal: "/images/article-armario.jpg",
    imagenPrincipalAlt: "Armario organizado con cestas de lino",
    imagenPinterest: "/images/article-armario-pin.jpg",
    tituloPinterest: "8 ideas para organizar un armario pequeño",
    descripcionSeo:
      "Guía práctica para organizar un armario pequeño con criterios editoriales y soluciones realistas.",
    etiquetas: ["armarios", "espacios pequeños"],
    destacado: true,
    contenido: `
## Empieza por vaciar y medir

Antes de comprar nada, saca todo y mide los huecos útiles. La clave no es meter más cosas, sino decidir qué se queda a la vista y qué se guarda fuera de temporada.

## Divide por uso, no por categoría ideal

Agrupa por frecuencia de uso: diario, semanal y ocasional. Ese criterio reduce el desorden de forma inmediata.

## Añade una solución visualmente ligera

Una buena cesta de lino o una caja baja puede resolver el 80 % del problema sin añadir ruido visual.

## Qué productos sí encajan

Para este tipo de armario, una selección útil puede incluir separadores, cajas apilables y perchas uniformes. Cada pieza debe resolver un problema concreto, no decorar por decorar.
`,
  },
  {
    titulo: "5 ideas para una despensa más ordenada y fácil de mantener",
    slug: "despensa-ordenada-facil",
    categoria: "ideas-practicas",
    extracto: "Pequeños cambios para ver de un vistazo lo que tienes y evitar duplicados.",
    fechaPublicacion: "2026-10-12",
    autor: "La Vida Bien Puesta",
    imagenPrincipal: "/images/article-despensa.jpg",
    imagenPrincipalAlt: "Despensa con tarros de cristal y cestas",
    imagenPinterest: "/images/article-despensa-pin.jpg",
    tituloPinterest: "5 ideas para una despensa más ordenada",
    descripcionSeo:
      "Consejos editoriales para ordenar la despensa con sistemas simples, visuales y fáciles de mantener.",
    etiquetas: ["despensa", "cocina"],
    contenido: `
## Usa recipientes coherentes

Cuando todos los botes hablan el mismo lenguaje visual, la despensa parece más tranquila y es más fácil comprobar existencias.

## Reserva un frente para lo que caduca antes

Lo más útil es colocar delante lo que debe gastarse primero.

## Apuesta por etiquetas legibles

No hace falta etiquetar todo. Basta con hacer visibles las categorías que se confunden entre sí.
`,
  },
];

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function getCategoryBySlug(slug: string) {
  return categories.find((category) => category.slug === slug);
}