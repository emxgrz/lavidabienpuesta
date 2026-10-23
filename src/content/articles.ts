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
  afiliado?: boolean;
  contenido: string;
};

export const articles: Article[] = [
  {
    titulo: "Cajas Vtopmart de 6,55 L: cómo ordenar la despensa con un solo sistema",
    slug: "vtopmart-cajas-almacenamiento",
    categoria: "orden-y-organizacion",
    extracto: "Seis cajas transparentes, apilables y con tapa abatible: para qué sirven, qué limitaciones tienen y cuándo merecen la pena.",
    fechaPublicacion: "2026-10-24",
    autor: "La Vida Bien Puesta",
    imagenPrincipal: "/images/article-vtopmart-cajas.jpg",
    imagenPrincipalAlt: "Tarzos transparentes con legumbres y pasta ordenados en una balda",
    imagenPinterest: "/images/article-vtopmart-cajas-pin.jpg",
    tituloPinterest: "Cajas Vtopmart para ordenar la despensa",
    descripcionSeo:
      "Análisis del set de 6 cajas Vtopmart de 6,55 L: medidas, capacidad, usos reales y limitaciones antes de comprarlas.",
    etiquetas: ["cajas de almacenamiento", "despensa", "orden", "Vtopmart"],
    afiliado: true,
    contenido: `
## Un sistema, no seis cajas sueltas

La despensa se desordena cuando cada producto tiene un envase distinto y no hay un criterio común. Un set de cajas iguales hace que el ojo entienda antes dónde está cada cosa y permite apilar sin construir una torre inestable.

Este set de Vtopmart incluye seis cajas grandes de 6,55 litros con tapa abatible y asas laterales. Son transparentes, apilables y están pensadas para ver el contenido sin tener que abrirlas.

<ProductCard
  asin="B0BC8VSWC7"
  nombre="Vtopmart Juego de 6 Cajas de Almacenamiento con Tapa"
  descripcionEditorial="Seis cajas transparentes de 6,55 litros, apilables y con tapa abatible. Una solución uniforme para despensa, nevera o armarios."
  motivo="Unifican el sistema, dejan ver el contenido y se apilan sin perder estabilidad. Son prácticas para grupos de productos pequeños que hoy viven sueltos."
  imagen="/images/producto-vtopmart-cajas.jpg"
  alt="Juego de seis cajas transparentes apilables con tapa abatible"
  etiqueta="Análisis"
/>

## Qué incluye exactamente

- **6 cajas** de 6,55 litros cada una.
- Medidas por caja: **27,9 cm de largo × 19,1 cm de ancho × 15,2 cm de alto**.
- Fabricadas en **polietileno transparente**, con tapa abatible y asas laterales.
- Peso total del conjunto: **3,21 kg**.
- Acabado apilable, pensado para aprovechar la altura de la balda.

La capacidad es generosa: en una caja caben varios paquetes de legumbres, snacks, sobres de repostería o una buena cantidad de fruta. No son cajas pequeñas de cajón, sino contenedores para baldas y armarios.

## Para qué las usaría

- **Despensa:** agrupar paquetes abiertos de arroz, pasta, frutos secos o galletas por categorías.
- **Nevera:** fruta, verduras, quesos o embutidos que quieras tener a la vista.
- **Baño y limpieza:** productos de limpieza, recambios y pequeños utensilios.
- **Armarios:** cables, manualidades, material de oficina o juguetes pequeños.

Funcionan mejor cuando el contenido es heterogéneo y quieres verlo de un vistazo. Si lo que guardas es polvo fino o líquidos, necesitas otro tipo de recipiente.

## Cómo aprovecharlas de verdad

### Mide la balda antes de comprar

La altura de 15,2 cm es el dato clave. Súmale un margen para abrir la tapa y comprueba que puedes sacar la caja sin chocar con la balda superior. Si el hueco es justo, mejor medir dos veces que devolver seis cajas.

### Agrupa por uso, no por marca

Una caja para el desayuno, otra para la cocina diaria, otra para repostería. Ese criterio se mantiene aunque cambies de producto. Etiquetar solo lo que se confunde evita llenar la despensa de rótulos.

### No las llenes hasta el borde

El asa y la tapa están pensadas para levantar la caja con comodidad. Si la cargas demasiado, el plástico se deforma y la torre pierde estabilidad. Deja un pequeño margen y apila las más pesadas abajo.

<Callout type="warning">Estas cajas no son herméticas: la tapa es abatible y la ficha del fabricante indica que no son resistentes al agua. No las uses para líquidos, salsas ni alimentos que puedan derramarse si la caja se inclina.</Callout>

## Lo que conviene saber antes de comprar

- **Transparencia total:** se ve el contenido, pero también el desorden. Si no mantienes un criterio, el efecto es el contrario.
- **No son aptas para congelador o microondas** según su uso previsto; son cajas de almacenamiento en seco.
- **El plástico se raya con el uso.** Lava con una esponja suave y evita estropajos abrasivos.
- **Precio:** en el momento de publicar esta guía ronda los 33 €. Consulta el precio actual en Amazon, porque puede variar.

## Veredicto

Si tienes una despensa con paquetes sueltos y quieres unificar el sistema de una vez, este set tiene sentido: seis cajas del mismo tamaño, apilables y fáciles de ver. No son herméticas ni sustituyen a los tarros de conservación, pero para ordenar grupos de productos funcionan muy bien.

Si tu prioridad es la estanqueidad total o guardar líquidos, no es la compra adecuada. Y si la balda mide menos de 17 cm de alto, busca un modelo más bajo.

Para completar el sistema, tenemos una guía sobre [cómo ordenar los armarios de la cocina](/orden-y-organizacion/ordenar-armarios-cocina/).
`,
  },
  {
    titulo: "Fiambreras de vidrio borosilicato: la compra que hace fácil comer mejor",
    slug: "fiambreras-vidrio-borosilicato",
    categoria: "ideas-practicas",
    extracto: "Tres tamaños, tapa hermética y vidrio que no retiene olores: lo que conviene saber antes de cambiar los tuppers de plástico.",
    fechaPublicacion: "2026-10-24",
    autor: "La Vida Bien Puesta",
    imagenPrincipal: "/images/article-fiambreras-vidrio.jpg",
    imagenPrincipalAlt: "Tres fiambreras de vidrio con comida preparada en fila",
    imagenPinterest: "/images/article-fiambreras-vidrio-pin.jpg",
    tituloPinterest: "Fiambreras de vidrio para meal prep",
    descripcionSeo:
      "Análisis de un set de 3 fiambreras de vidrio borosilicato de 370, 640 y 930 ml: ventajas, límites y cuidados.",
    etiquetas: ["fiambreras", "vidrio", "meal prep", "conservación"],
    afiliado: true,
    contenido: `
## El problema del táper que huele a curry

A todos nos ha pasado: abres un táper de plástico y sigue oliendo a la comida de la semana pasada, aunque esté limpio. El plástico absorbe olores y se tiñe con salsas, y con el tiempo acaba dando una sensación de desorden en la nevera.

El vidrio borosilicato resuelve esa parte del problema. No retiene olores ni sabores, se limpia con facilidad y permite ver el contenido. Este set de tres fiambreras redondas añade algo más: tapa hermética, válvula de vapor y tres tamaños que cubren desde una salsa hasta una ración completa.

<ProductCard
  asin="B0CB75RNZN"
  nombre="Set de 3 Fiambreras Redondas de Vidrio Borosilicato"
  descripcionEditorial="Tres recipientes de 370, 640 y 930 ml con tapa hermética de cuatro pestañas, junta de silicona y válvula de vapor. Sin BPA."
  motivo="El vidrio no retiene olores, aguanta bien el uso diario y las tres medidas se adaptan a sobras, meal prep y transporte. La válvula evita salpicaduras al calentar."
  imagen="/images/producto-fiambreras-vidrio.jpg"
  alt="Set de tres fiambreras redondas de vidrio con tapa"
  etiqueta="Análisis"
/>

## Qué incluye el set

- **Tres fiambreras redondas** de 370, 640 y 930 ml.
- **Vidrio borosilicato**, resistente a temperaturas de **-20 °C a 400 °C**.
- Tapa con **cuatro pestañas** y junta de silicona para un cierre hermético.
- **Válvula de vapor** para calentar en microondas sin salpicaduras.
- Libres de **BPA**, aptas para lavavajillas, nevera, congelador, microondas y horno (sin tapa).

La más pequeña mide 17,5 × 17,5 × 7,6 cm. Es un tamaño compacto, cómodo para llevar al trabajo o guardar una ración individual.

## Por qué el vidrio borosilicato

El borosilicato es un vidrio con baja dilatación térmica, lo que le permite soportar cambios de temperatura mejor que el vidrio convencional. Por eso se usa en utensilios de laboratorio y en muchas bandejas de horno.

En la práctica, eso significa que puedes pasar del frigorífico al microondas con más tranquilidad que con un vidrio normal. No significa que sea indestructible: un golpe contra el fregadero o un cambio térmico muy brusco pueden romperlo.

## Los detalles que marcan la diferencia

### Cuatro pestañas y junta de silicona

El cierre de cuatro pestañas reparte la presión de forma más uniforme que una tapa de clip único. La junta de silicona es la que hace el sellado; conviene retirarla de vez en cuando y lavarla por separado para que no se acumulen restos.

### Válvula de vapor

Al calentar en el microondas, abre la válvula para que el vapor salga. Así evitas que la tapa se levante o que la comida salpique. No hace falta destapar por completo.

### Tres tamaños que se apilan

La de 930 ml sirve para una comida completa; la de 640 ml, para media ración o una ensalada; la de 370 ml, para salsas, fruta o snacks. Al ser redondas, se apilan con estabilidad y ocupan menos que tres tuppers de formas distintas.

## Cómo usarlas sin sustos

- **En el microondas:** con la válvula abierta. No selles la tapa del todo si vas a calentar durante varios minutos.
- **En el horno:** sin tapa. El vidrio aguanta, pero la junta y la válvula no están pensadas para el calor directo.
- **Del congelador al microondas:** mejor deja unos minutos a temperatura ambiente o usa la función de descongelación. Evita el choque térmico extremo.
- **No las llenes hasta el borde:** los alimentos se expanden al congelarse y los líquidos al calentarse.

<Callout type="warning">El vidrio borosilicato resiste bien el calor, pero no es irrompible. Evita apoyarlo sobre una superficie mojada o fría cuando esté caliente, y no lo uses si tiene un golpe o una grieta.</Callout>

## ¿Merecen la pena?

Sí, si buscas un set pequeño y versátil para meal prep, sobras o transporte de comida. El vidrio no retiene olores, se limpia bien y las tapas con válvula son un detalle útil en el día a día.

No son la mejor opción si necesitas raciones muy grandes, si vas a transportar comida a diario en bicicleta y te preocupa el peso, o si buscas algo irrompible para niños. En esos casos, un recipiente de acero inoxidable o un táper de plástico de buena calidad puede encajar mejor.

En el momento de publicar esta guía, el set ronda los 16 €. Consulta el precio actual en Amazon antes de comprar.

Si quieres completar el sistema de conservación, tenemos ideas para [mantener la despensa ordenada](/ideas-practicas/despensa-ordenada-facil/).
`,
  },
  {
    titulo: "Xiaomi Smart Air Fryer 6.5L: cuándo merece la pena (y cuándo no)",
    slug: "xiaomi-smart-air-fryer-6-5l",
    categoria: "hallazgos",
    extracto: "Capacidad grande, 1800 W y control desde el móvil: lo que realmente aporta y lo que conviene saber antes de hacer sitio en la encimera.",
    fechaPublicacion: "2026-10-24",
    autor: "La Vida Bien Puesta",
    imagenPrincipal: "/images/article-airfryer-xiaomi.jpg",
    imagenPrincipalAlt: "Alitas de pollo doradas dentro de una freidora de aire",
    imagenPinterest: "/images/article-airfryer-xiaomi-pin.jpg",
    tituloPinterest: "Xiaomi Smart Air Fryer 6.5L: ¿merece la pena?",
    descripcionSeo:
      "Análisis de la Xiaomi Smart Air Fryer 6.5L: capacidad, potencia, funciones inteligentes, limitaciones y para quién tiene sentido.",
    etiquetas: ["freidora de aire", "Xiaomi", "cocina", "electrodomésticos"],
    afiliado: true,
    contenido: `
## La freidora de aire no hace magia

Una freidora de aire no fríe como una freidora de aceite. Cocina con aire caliente en movimiento, y eso da resultados crujientes en algunos alimentos y texturas distintas en otros. Si esperas patatas fritas idénticas a las de una freidora tradicional, probablemente te decepcione.

Si buscas una forma cómoda de cocinar verduras, pollo, pescado o recalentar sin encender el horno entero, la cosa cambia. La Xiaomi Smart Air Fryer 6.5L apunta a ese uso: capacidad familiar, control de temperatura amplio y funciones conectadas.

<ProductCard
  asin="B0CKFNWWDD"
  nombre="Xiaomi Smart Air Fryer 6.5L"
  descripcionEditorial="Freidora de aire de 6,5 litros y 1800 W, con pantalla OLED, temperatura regulable de 40 a 220 °C, recetas en la nube y control por voz."
  motivo="La capacidad es suficiente para dos o cuatro personas, el rango de temperatura es amplio y la app añade recetas y programación. Es una opción completa si ya tienes sitio en la encimera."
  imagen="/images/producto-airfryer-xiaomi.jpg"
  alt="Freidora de aire Xiaomi Smart Air Fryer 6.5L en color negro"
  etiqueta="Análisis"
/>

## Qué ofrece

- **Capacidad:** 6,5 litros.
- **Potencia:** 1800 W.
- **Temperatura:** regulable entre **40 °C y 220 °C**.
- **Cocción:** convección de 360° para repartir el calor.
- **Pantalla OLED** y control desde la app.
- **Más de 100 recetas** en la nube y programación de hasta 24 horas.
- **Control por voz** con dispositivos compatibles con Google Assistant.
- Medidas: **38,9 cm de fondo × 31,7 cm de ancho × 28,7 cm de alto**.
- Peso: **5,4 kg**.

La versión ES incluye el menú y el enchufe españoles. Es un electrodoméstico grande: antes de comprarlo, mide el hueco y comprueba que puedes abrir la cesta sin chocar con la pared o con otros aparatos.

## Lo que hace bien

### Cocinar para dos o cuatro personas

6,5 litros permiten una bandeja de verduras y proteína a la vez, o una tanda de alitas para compartir. Es una capacidad cómoda para una familia pequeña, sin llegar a los modelos enormes de 8 litros.

### Verduras y alimentos que se benefician del aire

Berenjena, calabacín, brócoli, patata en bastones, pollo marinado o salmón funcionan bien. La clave es no amontonar: el aire tiene que circular. Si llenas la cesta hasta arriba, el resultado se parece más a vapor que a crujiente.

### Recalentar sin encender el horno

Para una ración de pizza, croquetas o verduras asadas, la freidora calienta rápido y no necesita el precalentamiento de un horno grande. Ahí está buena parte de su valor diario.

### Programación y recetas

La app permite lanzar recetas y programar la cocción. Es útil si te gusta dejar preparado o si no quieres memorizar tiempos. Tampoco es imprescindible: los controles de la pantalla bastan para el uso normal.

## Lo que no es

- **No sustituye a una freidora de aceite.** La textura y el sabor son distintos.
- **No es un horno completo.** No tiene la misma superficie ni la misma versatilidad para repostería o guisos.
- **No es silenciosa.** El ventilador se oye, aunque no más que un horno con convección.
- **No es pequeña.** Necesita una encimera estable, ventilación alrededor y espacio para abrir la cesta.
- **Las funciones inteligentes no son obligatorias.** Si no vas a usar la app, pagas por algo que no aprovecharás.

## Consumo y limpieza

Con 1800 W, es un aparato potente. Calienta rápido, pero no es gratis en términos de consumo: para raciones muy pequeñas, a veces sale más a cuenta el microondas o una sartén.

La cesta y la rejilla se extraen para limpiar. Consulta las instrucciones del fabricante sobre lavavajillas y evita los estropajos metálicos para no dañar el recubrimiento. La resistencia y el interior se limpian mejor cuando el aparato está frío.

<Callout type="warning">No llenes la cesta por encima de la marca máxima ni bloquees las salidas de aire. Deja espacio para que circule el calor, usa guantes para sacar la cesta y desenchufa el aparato antes de limpiarlo.</Callout>

## ¿Merece la pena?

Merece la pena si tienes espacio en la encimera, cocinas para dos o cuatro personas y buscas una forma rápida de hacer verduras, proteínas y recalentados. La capacidad de 6,5 litros y el rango de temperatura la hacen versátil, y la app añade comodidad sin ser el centro de la experiencia.

No la compraría si tu cocina es muy pequeña, si esperas el sabor de una fritura tradicional o si ya tienes un horno pequeño que usas a diario. En el momento de publicar esta guía ronda los 99 €; consulta el precio actual en Amazon.

Si quieres hacerle sitio en la cocina, tenemos ideas para [ordenar los armarios y la encimera](/orden-y-organizacion/ordenar-armarios-cocina/).
`,
  },
  {
    titulo: "Seis objetos de cocina que merecen quedarse a la vista",
    slug: "objetos-cocina-a-la-vista",
    categoria: "hallazgos",
    extracto: "Piezas que resuelven, envejecen bien y no necesitan esconderse: una selección para usar todos los días.",
    fechaPublicacion: "2026-10-23",
    autor: "La Vida Bien Puesta",
    imagenPrincipal: "/images/article-cocina-a-la-vista.jpg",
    imagenPrincipalAlt: "Encimera con tabla de madera, cuenco, tarro de cerámica y utensilios",
    imagenPinterest: "/images/article-cocina-a-la-vista-pin.jpg",
    tituloPinterest: "6 objetos de cocina que merecen quedarse a la vista",
    descripcionSeo:
      "Selección editorial de objetos de cocina útiles y bonitos: tablas, cerámica, textiles y bandejas que envejecen bien.",
    etiquetas: ["cocina", "hallazgos", "cerámica", "madera"],
    contenido: `
## Un hallazgo no es una novedad

Un objeto que merece quedarse a la vista tiene que cumplir tres condiciones: resolver algo, resistir el uso diario y no cansar a la vista. Si falla una, acaba en un cajón. Esta selección no va de novedades, sino de piezas que se usan de verdad.

## 1. Una tabla de madera que se pueda colgar

Una tabla de corte de madera maciza, con asa y un agujero para colgarla, resuelve el corte, el servicio de aperitivos y la presentación de la fruta. Cuanto más simple, mejor: las formas muy decoradas son difíciles de limpiar y acaban guardadas.

Elige madera de haya, olivo o acacia, sin tratamientos que no sean aptos para alimentos. Sécala de pie y frótala con una gota de aceite mineral de vez en cuando.

## 2. Un tarro de cerámica para los utensilios

Los cubiertos de madera y las espátulas necesitan un recipiente estable, con base ancha y boca suficiente para no atrapar la humedad. Un tarro de gres o cerámica mate cumple mejor esa función que un vaso alto, que vuelca con facilidad.

Si el tarro es opaco, no verás los restos que se acumulan en el fondo. Lávalo cada semana y deja secar las piezas antes de devolverlas.

## 3. Cuencos apilables de gres

Un juego de tres cuencos de tamaños distintos sustituye a media docena de recipientes sueltos. Sirven para preparar, servir y guardar. El gres aguanta el calor, no retiene olores y envejece mejor que muchas piezas decorativas.

Mejor si son apilables y aptos para lavavajillas. La cerámica hecha a mano tiene variaciones de color: no es un defecto, es parte del encanto.

## 4. Un paño de lino grueso

Un paño de lino o algodón de tejido grueso dura más, seca mejor y se ve más bonito que una bayeta fina. Sirve para tapar el pan, secar la encimera o cubrir una bandeja.

Ten dos: uno para las manos y otro para la comida. Lávalos a 40 °C y evita el suavizante, que reduce la absorción.

## 5. Una jarra con asa cómoda

Una jarra de cerámica o vidrio resistente, con asa amplia y pico vertedor, es más útil de lo que parece: agua en la mesa, flores, utensilios o restos de café. El asa debe caber con la mano entera, no solo con dos dedos.

## 6. Una bandeja que recoja todo

Una bandeja de madera o metal mate en la encimera agrupa el aceite, la sal, la pimienta y el molinillo. Reduce el ruido visual y permite limpiar debajo en un gesto. Debe tener un borde bajo y un tamaño que no ocupe media cocina.

<Callout type="info">Antes de comprar un objeto «de cocina bonito», pregúntate dónde va a vivir. Si no tiene un sitio fijo, probablemente no resuelva nada.</Callout>

## Cómo elegir sin acumular

La regla es sencilla: una función, un objeto. Si ya tienes un bol para servir, no necesitas tres. Si la tabla no cabe colgada, no la compres aunque sea preciosa.

Los buenos hallazgos no llenan la encimera: la dejan respirar. Y cuanto menos haya a la vista, más se disfruta lo que queda.
`,
  },
  {
    titulo: "Un escritorio más tranquilo: hallazgos que sí se usan",
    slug: "hallazgos-escritorio-tranquilo",
    categoria: "hallazgos",
    extracto: "Cuadernos, luz y pequeños contenedores: lo que ayuda a trabajar sin llenar la mesa de objetos.",
    fechaPublicacion: "2026-10-23",
    autor: "La Vida Bien Puesta",
    imagenPrincipal: "/images/article-escritorio-tranquilo.jpg",
    imagenPrincipalAlt: "Escritorio con cuaderno, bolígrafo y libros sobre una mesa de madera",
    imagenPinterest: "/images/article-escritorio-tranquilo-pin.jpg",
    tituloPinterest: "Hallazgos para un escritorio tranquilo",
    descripcionSeo:
      "Selección de objetos útiles para el escritorio: cuadernos, iluminación, contenedores y bandejas que ordenan sin recargar.",
    etiquetas: ["escritorio", "hallazgos", "papelería", "orden"],
    contenido: `
## La mesa no necesita más cosas

Un escritorio tranquilo no es el que está vacío, sino el que tiene solo lo que se usa. Antes de comprar un organizador nuevo, retira todo y deja encima únicamente lo que necesitas para trabajar. Lo que no vuelva en una semana probablemente no era necesario.

## Un cuaderno que se abra plano

Un cuaderno cosido o con encuadernación que permita abrirlo entero es más cómodo que uno encolado que se cierra solo. El papel importa: si escribes con pluma, busca un gramaje alto; si usas lápiz, uno con algo de textura.

No necesitas uno para cada cosa. Con un cuaderno principal y una libreta pequeña para lo urgente suele bastar.

## Un bolígrafo que apetezca usar

Escribir a mano mejora cuando el útil funciona. Un bolígrafo de tinta fluida, un lápiz con buen agarre o una pluma sencilla bastan. Lo importante es que no raspe, que no se seque y que puedas recargarlo.

## Una lámpara que ilumine el papel, no los ojos

La luz del escritorio debe caer sobre la superficie de trabajo sin deslumbrar. Una lámpara con brazo articulado y pantalla opaca permite dirigir el haz y evitar sombras de la mano. Si trabajas de noche, elige una temperatura cálida y una intensidad regulable.

## Un contenedor pequeño para lo suelto

Clips, gomas, tarjetas y cables cortos necesitan un único recipiente pequeño, no cinco cajas. Un cuenco de cerámica o una caja de madera con tapa resuelve el problema y se integra en la mesa.

## Una bandeja para el portátil

Si el portátil se queda en el escritorio, una bandeja o base de madera lo eleva, mejora la ventilación y delimita su sitio. También sirve para recoger el cargador y los papeles que se acumulan alrededor.

<Callout type="info">La mejor inversión para un escritorio suele ser una silla cómoda y una luz bien colocada. Los accesorios vienen después.</Callout>

## Menos, pero mejor

Un escritorio se mantiene ordenado cuando cada objeto tiene una función clara y un lugar fijo. Si una pieza no se usa al menos una vez por semana, guárdala. El espacio libre también forma parte del diseño.

Si quieres afinar la iluminación, hemos escrito sobre [cómo elegir una luz cálida](/decoracion/luz-calida-decoracion/).
`,
  },
  {
    titulo: "Cómo elegir una alfombra para el salón: medidas, material y color",
    slug: "elegir-alfombra-salon",
    categoria: "guias-de-compra",
    extracto: "Lo que conviene medir y mirar antes de comprar una alfombra que no se quede corta ni sobre.",
    fechaPublicacion: "2026-10-23",
    autor: "La Vida Bien Puesta",
    imagenPrincipal: "/images/article-alfombra-salon.jpg",
    imagenPrincipalAlt: "Salón en tonos neutros con alfombra de fibras naturales y mesa de madera",
    imagenPinterest: "/images/article-alfombra-salon-pin.jpg",
    tituloPinterest: "Cómo elegir una alfombra para el salón",
    descripcionSeo:
      "Guía de compra para elegir alfombra de salón: medidas, materiales, colores, grosor y mantenimiento sin equivocarte.",
    etiquetas: ["alfombras", "salón", "guías de compra", "decoración"],
    contenido: `
## Primero, mide la zona

La mayoría de las alfombras que no funcionan fallan por tamaño, no por diseño. Antes de mirar modelos, dibuja el espacio con cinta de pintor en el suelo y comprueba cómo se mueve la estancia alrededor.

Mide el sofá, la mesa de centro y la distancia a las paredes. Si la alfombra va debajo de la mesa, debe sobresalir al menos 60 centímetros por cada lado para que las sillas no se enganchen al moverlas.

## Tamaños que funcionan

- **Salón pequeño**: 160 × 230 cm suele bastar para agrupar sofá y mesa de centro.
- **Salón mediano**: 200 × 300 cm permite que las patas delanteras del sofá queden sobre la alfombra.
- **Salón amplio**: 250 × 350 cm o más, si quieres cubrir toda la zona de estar.
- **Comedor**: la alfombra debe extenderse 60–70 cm más allá de la mesa por cada lado.
- **Pasillo**: un ancho de 80–100 cm deja margen a ambos lados.

Una alfombra pequeña bajo la mesa de centro puede verse como un parche. Si el presupuesto no llega a la medida ideal, a veces es mejor no poner alfombra que poner una que se quede corta.

## Material: lana, yute, algodón o sintético

La lana es cálida, duradera y aísla del ruido; también es la opción más cara y requiere cuidado. El yute y el sisal son resistentes y económicos, pero ásperos y poco cómodos para estar descalzo. El algodón es lavable y informal, ideal para zonas de paso. Las fibras sintéticas resisten bien y son fáciles de limpiar, aunque pueden generar electricidad estática.

Para un salón con sofá y mesa, una mezcla de lana y algodón o una lana de pelo corto suele ser el mejor equilibrio entre confort, durabilidad y mantenimiento.

## Color y patrón

Los tonos claros amplían y aportan calma; los oscuros recogen y dan calidez, pero muestran más el polvo. Un patrón discreto disimula mejor las manchas que un color liso, sobre todo en casas con niños o mascotas.

Si el salón ya tiene mucha textura, elige una alfombra lisa. Si es muy neutro, un patrón suave añade interés sin romper la paleta.

## Grosor y puertas

Una alfombra de pelo alto es agradable, pero puede rozar puertas y dificultar el paso de sillas. Mide la altura libre de las puertas y el hueco bajo el sofá. Para zonas de mucho tránsito, un pelo corto o plano es más práctico.

## Cómo limpiarla

Pasa la aspiradora con regularidad, sin cepillar demasiado las fibras naturales. Limpia las manchas con un paño limpio desde el borde hacia el centro y evita frotar. Las alfombras de lana agradecen una limpieza profesional cada uno o dos años.

Usa siempre una base antideslizante, sobre todo en suelos de madera o baldosa. Además de seguridad, evita que la alfombra se deforme.

<Callout type="info">Antes de pagar, comprueba la política de devolución y si la alfombra se puede limpiar en casa. Una pieza grande es difícil de devolver por mensajería.</Callout>

## Antes de pagar

Mide dos veces, elige el material según el uso real y desconfía de las alfombras muy baratas de pelo largo: suelen perder fibra y aplanarse en pocos meses. Una alfombra que dura diez años sale más a cuenta que tres que duran tres.
`,
  },
  {
    titulo: "Cómo elegir sábanas: tejido, gramaje y talla",
    slug: "elegir-sabanas",
    categoria: "guias-de-compra",
    extracto: "Algodón, lino o percal: qué mirar en la etiqueta para dormir mejor y no pagar de más.",
    fechaPublicacion: "2026-10-23",
    autor: "La Vida Bien Puesta",
    imagenPrincipal: "/images/article-sabanas.jpg",
    imagenPrincipalAlt: "Cama con ropa de cama de lino en tonos neutros y mesilla de madera",
    imagenPinterest: "/images/article-sabanas-pin.jpg",
    tituloPinterest: "Cómo elegir sábanas: tejido, gramaje y talla",
    descripcionSeo:
      "Guía de compra de sábanas: cómo medir la cama, elegir algodón o lino, entender el gramaje y cuidar el tejido.",
    etiquetas: ["sábanas", "textiles", "guías de compra", "dormitorio"],
    contenido: `
## La talla manda

Antes de mirar tejidos, mide el colchón: ancho, largo y grosor. Una cama de 150 cm no usa las mismas sábanas que una de 160, y un colchón grueso necesita una bajera con más fondo.

Comprueba la altura de la bajera ajustable. Si el colchón mide 30 cm de alto, necesitas una bajera con fondo de al menos 35 cm. Si queda justa, se soltará por las esquinas durante la noche.

## Algodón: largo de fibra y gramaje

El algodón es el tejido más versátil. La calidad depende sobre todo del largo de la fibra: las fibras largas (como el algodón egipcio o pima) son más suaves, resistentes y duran más que las cortas.

El gramaje indica el peso por metro cuadrado. Para sábanas, un tejido de 120–160 g/m² es ligero y fresco; a partir de 170 g/m² se nota más cuerpo y abriga. No es mejor cuanto más pesado: depende de la estación y de cómo duermas.

## Lino y mezclas

El lino es fresco, transpirable y muy duradero, pero arruga y al principio puede resultar áspero. Con los lavados se suaviza. Una mezcla de lino y algodón conserva parte de esa frescura con menos arrugas y un precio más contenido.

Si buscas sábanas para todo el año, el algodón de gramaje medio es la apuesta más segura. Si sudas mucho en verano, el lino o el percal ligero funcionan mejor.

## Percal y satén

El percal es un tejido de trama sencilla, fresco y mate. El satén tiene un brillo suave y una caída más fluida, pero suele ser más delicado y resbaladizo. Ninguno es mejor en abstracto: el percal es más práctico para el día a día; el satén, más suave al tacto.

## Hilos, gramaje y mitos

El famoso «número de hilos» no lo dice todo. Un tejido de 300 hilos con fibra corta puede ser peor que uno de 200 con fibra larga. Además, algunas etiquetas cuentan hilos de formas que no son comparables entre marcas.

Mira la composición, el gramaje y el tipo de fibra antes que la cifra grande de la etiqueta. Y desconfía de las sábanas que prometen suavidad extrema a precio muy bajo: suelen mezclar fibra corta con acabados que se pierden al lavar.

<Callout type="warning">No compres sábanas sin saber la altura de tu colchón. Una bajera ajustable demasiado justa es la causa más común de que la cama se deshaga cada noche.</Callout>

## Cuidado y duración

Lava las sábanas a 30–40 °C, con detergente suave y sin exceso de suavizante, que reduce la transpirabilidad. Seca al aire si puedes y plancha mientras estén ligeramente húmedas.

Alterna dos juegos para que cada uno descanse y se lave con menos frecuencia. Un buen juego de sábanas, cuidado con calma, puede durar muchos años.
`,
  },
  {
    titulo: "Cómo cuidar los muebles de madera para que duren (y se vean mejor)",
    slug: "cuidar-muebles-madera",
    categoria: "ideas-practicas",
    extracto: "Polvo, humedad y sol: una rutina sencilla para mantener la madera bonita sin productos agresivos.",
    fechaPublicacion: "2026-10-23",
    autor: "La Vida Bien Puesta",
    imagenPrincipal: "/images/article-muebles-madera.jpg",
    imagenPrincipalAlt: "Detalle de patas de madera barnizada sobre una superficie de roble",
    imagenPinterest: "/images/article-muebles-madera-pin.jpg",
    tituloPinterest: "Cómo cuidar los muebles de madera",
    descripcionSeo:
      "Rutina práctica para limpiar y cuidar muebles de madera: polvo, humedad, sol, manchas y cuándo usar aceite o cera.",
    etiquetas: ["madera", "muebles", "limpieza", "mantenimiento"],
    contenido: `
## Antes de limpiar, mira el acabado

La madera no se cuida igual si está barnizada, lacada, aceitada o encerada. El barniz y la laca forman una película que protege la superficie; el aceite y la cera penetran en la fibra. Confundir los productos es la forma más rápida de estropear un mueble que estaba bien.

Si no sabes qué acabado tiene, prueba en una zona oculta. Una gota de agua que se queda en la superficie indica una película de barniz o laca. Si se absorbe y oscurece la madera, probablemente esté aceitada o sin tratar.

## El polvo, con un paño seco

El polvo se retira con un paño de microfibra seco o muy ligeramente humedecido. Pasa la mano sin apretar, siguiendo la veta, y sacude el paño con frecuencia. La arena y las partículas duras son las que rayan: cuanto menos las arrastres, mejor.

Evita los sprays directos sobre la superficie. Si usas un producto, aplícalo primero en el paño y trabaja por zonas pequeñas.

## La humedad, en su justa medida

La madera respira y se mueve con los cambios de humedad. Un ambiente muy seco puede abrir grietas; uno muy húmedo hincha la fibra y levanta el acabado. En casa, mantener una humedad estable entre el 40 y el 60 % protege más que cualquier producto.

- Seca inmediatamente cualquier derrame.
- No coloques muebles de madera pegados a paredes húmedas o radiadores.
- Ventila después de cocinar o ducharte.

## El sol y el calor

Los rayos UV alteran el color de la madera y de los barnices. No hace falta vivir a oscuras: basta con evitar que el sol directo golpee siempre la misma zona. Baja las persianas en las horas centrales o mueve ligeramente los objetos de sitio de vez en cuando.

El calor también cuenta. Un radiador encendido a pocos centímetros reseca la madera y puede agrietar los ensambles. Si no puedes cambiar el mueble de lugar, al menos deja una separación y mantén la humedad controlada.

## Manchas: primero, no frotar

Ante un derrame, retira el exceso con papel absorbente sin extenderlo. Después pasa un paño limpio apenas humedecido y seca enseguida. Frotar con fuerza empuja la mancha hacia la fibra y puede levantar el acabado.

Para manchas de grasa, un poco de agua tibia con jabón neutro suele bastar. Para marcas de vasos o aros, deja actuar un paño tibio y seca bien; si no desaparece, consulta a un restaurador antes de probar remedios caseros.

<Callout type="warning">Nunca uses alcohol, acetona, limpiacristales con amoniaco ni estropajos metálicos sobre la madera. Tampoco aceites de cocina: con el tiempo se vuelven rancios y atraen polvo.</Callout>

## Aceite o cera: solo si el mueble lo pide

Los muebles barnizados o lacados no necesitan cera; de hecho, la cera puede acumularse y apagar el acabado. Los muebles aceitados sí agradecen una capa fina de aceite específico una o dos veces al año. Los encerados, una capa de cera neutra.

Aplica siempre una cantidad mínima, extiende con un paño limpio y retira el exceso. Es mejor dos capas finas que una gruesa. Y no trates un mueble recién limpiado con productos agresivos: la madera necesita estar seca y limpia.

## Una rutina de dos minutos

Polvo una vez por semana, revisión de humedad y sol una vez al mes, y tratamiento específico una o dos veces al año. Esa es toda la rutina. La madera no pide prisa; pide constancia.

## La madera mejora con los años

Un mueble bien cuidado gana pátina y carácter. Las pequeñas marcas del uso no son un defecto: forman parte de su historia. El objetivo no es tenerlo como el primer día, sino que siga siendo agradable de usar y de mirar dentro de veinte años.
`,
  },
  {
    titulo: "La colada de la ropa blanca: cómo mantenerla blanca sin castigarla",
    slug: "colada-ropa-blanca",
    categoria: "ideas-practicas",
    extracto: "Separar, dosificar y secar bien: lo que de verdad funciona para que el blanco no se vuelva gris.",
    fechaPublicacion: "2026-10-23",
    autor: "La Vida Bien Puesta",
    imagenPrincipal: "/images/article-ropa-blanca.jpg",
    imagenPrincipalAlt: "Pila de toallas claras dobladas sobre un taburete blanco",
    imagenPinterest: "/images/article-ropa-blanca-pin.jpg",
    tituloPinterest: "Cómo lavar la ropa blanca sin amarillearla",
    descripcionSeo:
      "Guía práctica para lavar ropa blanca: separación, temperaturas, detergente, manchas y secado sin amarillear las prendas.",
    etiquetas: ["colada", "ropa blanca", "limpieza", "hogar"],
    contenido: `
## El blanco no se ensucia solo: se contamina

Cuando una camiseta blanca empieza a verse gris, casi nunca es por una mancha concreta. Es el resultado de muchas coladas pequeñas: partículas de otras prendas, detergente mal aclarado y tejidos que han perdido luminosidad.

La solución no es lavar más fuerte, sino lavar mejor. Separar, dosificar y aclarar bien hace más por el blanco que cualquier producto milagroso.

## Separa por tejido y por grado de blancura

No todas las prendas blancas son iguales. El algodón resiste más que la seda o la lana, y una camiseta nueva puede soltar color en las primeras coladas. Separa al menos en tres grupos:

- **Blancos resistentes**: algodón, toallas, sábanas, camisetas.
- **Blancos delicados**: seda, lana, encaje, prendas con bordados.
- **Blancos deportivos**: tejidos técnicos, que no admiten calor alto.

Lava juntos solo prendas de blancura similar. Una toalla vieja y grisácea puede apagar una camisa recién comprada.

## Temperatura: más caliente no siempre es mejor

El agua caliente ayuda con la grasa y las manchas, pero también desgasta las fibras y fija algunas manchas de proteína. La etiqueta manda.

- **30 °C**: ropa blanca de uso diario y tejidos delicados.
- **40 °C**: algodón y ropa de cama, si la etiqueta lo permite.
- **60 °C**: toallas y sábanas cuando necesitas higienizar.

Si dudas, empieza por 30 o 40 °C. Lavar a 60 °C todo el armario acorta la vida de las prendas y no siempre mejora el resultado.

## Detergente: dosifica y no llenes la cubeta

Más detergente no significa más limpieza. El exceso se queda en la fibra, atrae suciedad y hace que el blanco se vea apagado. Usa la dosis indicada para tu agua y tu carga, y no llenes la lavadora hasta el borde: la ropa necesita moverse.

Si el agua de tu zona es muy dura, un poco de detergente extra puede ayudar, pero conviene revisar también el filtro y hacer un ciclo de limpieza de la máquina de vez en cuando.

## Oxígeno activo en lugar de lejía

La lejía con cloro blanquea, sí, pero también amarillea tejidos sintéticos, lana y seda, y castiga el algodón con el uso. Para mantener el blanco, el oxígeno activo es una opción más amable.

Añádelo según las instrucciones del fabricante, preferiblemente en coladas de 40 °C o más, y no lo mezcles con otros productos. Funciona mejor como mantenimiento que como rescate de una prenda muy amarillenta.

## Manchas: actúa antes de lavar

Cuanto antes actúes, menos tendrás que forzar la colada. Retira el exceso con papel absorbente, aclara con agua fría si es una mancha de proteína (sangre, huevo, leche) y aplica un poco de detergente líquido antes de lavar.

No frotes con fuerza ni uses agua caliente al principio: el calor puede fijar la mancha. Si no sale a la primera, deja secar y vuelve a intentarlo; no metas la prenda en la secadora hasta que la mancha haya desaparecido.

<Callout type="info">Las toallas blancas no necesitan suavizante. El suavizante deja una película que reduce la absorción y, con el tiempo, apaga el color. Un poco de vinagre en el aclarado ayuda a eliminar restos de detergente.</Callout>

## Secado y planchado

El sol directo ayuda a mantener el blanco, pero puede amarillear algunos sintéticos si se deja demasiado tiempo. Seca al aire libre las prendas de algodón y reserva la secadora para lo que necesites suavizar, con una temperatura moderada.

Plancha mientras la prenda esté ligeramente húmeda o usa vapor. El calor excesivo sobre una mancha residual la fija para siempre.

## Una rutina semanal

Una colada de blancos por semana, con la carga bien separada y la dosis justa, evita la acumulación de grises. Revisa antes de lavar los bolsillos y las manchas visibles. Y no laves una prenda blanca solo porque ha quedado un hueco en la lavadora: espera a tener un grupo coherente.

## El blanco no tiene que ser perfecto

Con el tiempo, el blanco cambia. No hace falta perseguir un blanco de escaparate ni renovar el armario cada temporada. Cuidar bien las prendas que ya tienes es más sostenible, más barato y casi siempre queda mejor que comprar una camiseta nueva para sustituir otra que solo estaba un poco apagada.
`,
  },
  {
    titulo: "Cómo decorar un salón en tonos neutros sin que parezca frío",
    slug: "salon-tonos-neutros-calido",
    categoria: "decoracion",
    extracto: "Texturas, madera y un acento de color: las capas que convierten un salón claro en un lugar acogedor.",
    fechaPublicacion: "2026-10-23",
    autor: "La Vida Bien Puesta",
    imagenPrincipal: "/images/article-salon-neutro.jpg",
    imagenPrincipalAlt: "Salón en tonos neutros con sofá beige, cojines verdes y cortinas de lino",
    imagenPinterest: "/images/article-salon-neutro-pin.jpg",
    tituloPinterest: "Cómo dar calidez a un salón en tonos neutros",
    descripcionSeo:
      "Ideas de decoración para dar calidez a un salón en tonos neutros con texturas, madera, luz cálida y pequeños acentos de color.",
    etiquetas: ["salón", "tonos neutros", "decoración", "calidez"],
    contenido: `
## El color no es el problema

Cuando un salón en tonos neutros parece frío, casi nunca es culpa del beige o del blanco. El problema suele ser la falta de capas: superficies lisas, luz uniforme y objetos sin textura. El neutro no enfría; lo hace la ausencia de contraste y de materia.

Antes de pintar o comprar muebles, prueba a añadir capas. Es más barato, más reversible y casi siempre funciona.

## Empieza por las texturas

La textura es lo que hace que un color plano se perciba cálido. En un salón neutro, mezcla al menos tres familias:

- **Fibras naturales**: lino, algodón grueso, yute, mimbre.
- **Pelo o lana**: una manta, un cojín de bouclé, una alfombra de pelo corto.
- **Cerámica y madera**: superficies mate que absorben la luz en lugar de reflejarla.

No hace falta que todo combine. Un cojín de lino arrugado junto a una manta de lana y una alfombra de yute crea más calidez que cualquier color.

## La madera calienta cualquier paleta

Un mueble de madera natural —roble, olmo, nogal claro— aporta temperatura sin romper la armonía. Si el salón es muy blanco, empieza por un objeto de madera visible: una mesa de centro, una estantería baja, un marco.

Evita mezclar demasiados tonos de madera en la misma estancia. Dos como máximo: uno claro y otro medio. El resto puede ser negro mate, ratán o cerámica.

## Un acento de color, no cinco

Los neutros admiten color, pero piden jerarquía. Elige un solo acento y repítelo en tres puntos: un cojín, un jarrón, un libro. Terracota, ocre, verde salvia o azul apagado funcionan bien porque tienen pigmento y no compiten entre sí.

<Callout type="info">Si dudas, mira la paleta desde la puerta. Si el acento aparece más de tres veces, deja de ser un acento y empieza a ser un tema.</Callout>

## La luz hace la mitad del trabajo

Una lámpara de techo encendida a media tarde aplana la estancia. Mejor varias fuentes bajas y cálidas: una lámpara de pie, una de mesa y una luz indirecta detrás de un mueble. La luz rasante revela texturas y crea sombras suaves, que es justo lo que un salón neutro necesita para no parecer una sala de espera.

## Objetos que cuentan algo

Un salón neutro se vuelve personal cuando los objetos tienen historia: libros de segunda mano, una bandeja heredada, cerámica de un viaje, una planta que lleva años. No hacen falta muchos; bastan tres o cuatro bien colocados.

Lo que sí conviene evitar es llenar los huecos. Un estante con aire respira mejor que uno completo, y el aire también es una textura.

## El orden también decora

Un salón despejado se percibe más cálido porque deja ver los materiales. Recoge los cables, elige una sola bandeja para los mandos y deja una superficie vacía. El orden no compite con la decoración: la deja hablar.

## Un salón neutro y habitado

La calidez no se compra en un solo pedido. Se construye con una manta que invita a sentarse, una lámpara que se enciende al caer la tarde y un objeto que solo tiene sentido ahí.

Si quieres seguir afinando la luz, hemos escrito sobre [cómo elegir una luz cálida sin equivocarte](/decoracion/luz-calida-decoracion/).
`,
  },
  {
    titulo: "La luz cálida cambia una habitación: cómo elegirla sin equivocarte",
    slug: "luz-calida-decoracion",
    categoria: "decoracion",
    extracto: "Temperatura, pantallas y altura: tres decisiones sencillas para que la casa se vea (y se sienta) mejor de noche.",
    fechaPublicacion: "2026-10-23",
    autor: "La Vida Bien Puesta",
    imagenPrincipal: "/images/article-luz-calida.jpg",
    imagenPrincipalAlt: "Salón con lámpara de pie encendida, sofá claro y cojines terracota",
    imagenPinterest: "/images/article-luz-calida-pin.jpg",
    tituloPinterest: "Cómo elegir una luz cálida en casa",
    descripcionSeo:
      "Guía de decoración para elegir luz cálida en casa: temperatura de color, pantallas, capas de iluminación y errores que conviene evitar.",
    etiquetas: ["iluminación", "luz cálida", "decoración", "ambiente"],
    contenido: `
## Qué es la luz cálida (y qué no)

La luz cálida es la que tiene una temperatura de color baja, entre 2.200 y 3.000 K. Se parece a la luz de una vela o a la de una bombilla incandescente, y es la que hace que la madera, el lino y la pintura crema se vean como son.

No es lo mismo que luz tenue. Una bombilla cálida puede ser muy potente y seguir siendo cálida; una luz fría puede ser débil y seguir pareciendo de oficina.

## La temperatura de color, en números sencillos

- **2.200–2.700 K**: ámbar, muy cálida. Ideal para rincones, dormitorios y lámparas de mesa.
- **3.000 K**: blanco cálido. El punto medio para salones, comedores y cocinas.
- **4.000 K**: blanco neutro. Útil en baños y zonas de trabajo, pero frío para descansar.
- **5.000–6.500 K**: luz de día. Mejor reservarla para tareas concretas, no para toda la casa.

Para una estancia de descanso, 2.700 K es casi siempre una apuesta segura. Si el espacio es de paso o se usa para leer, 3.000 K da algo más de claridad sin perder calidez.

## La pantalla importa tanto como la bombilla

Una bombilla cálida detrás de una pantalla blanca y brillante sigue deslumbrando. Las pantallas de lino, papel o tela difuminan la luz y reparten el calor por la pared.

- Elige pantallas opacas o translúcidas, nunca transparentes.
- Prefiere tonos crema, arena o blanco roto.
- Comprueba que la bombilla no se vea desde ningún ángulo habitual.

## Tres puntos de luz, no una lámpara gigante

Una sola fuente en el techo crea sombras duras y aplana la habitación. Reparte la luz en tres niveles:

1. **General**: una luz suave en el techo o una lámpara de pie que ilumine el conjunto.
2. **De apoyo**: una lámpara de mesa junto al sofá o en la consola.
3. **Ambiente**: una luz baja detrás de una planta o un mueble, o una vela LED.

No hace falta encenderlas todas. La gracia es poder elegir.

## Altura y dirección

La luz debe llegar a la altura de los ojos, no desde arriba. Una lámpara de pie con el brazo a la altura del hombro ilumina un libro sin deslumbrar. Una lámpara de mesa debe quedar por debajo de la mirada cuando estás sentado.

<Callout type="warning">Desconfía de las bombillas de luz fría en dormitorios y salones. A 5.000 K o más, el cuerpo sigue leyendo «mediodía» y cuesta más entrar en modo descanso.</Callout>

## Regulable o nada

Si puedes, elige bombillas y lámparas regulables. Bajar la intensidad por la noche cambia por completo la sensación de la casa, y no obliga a cambiar de lámpara. Comprueba que el regulador sea compatible con LED.

## Un rincón de lectura bien resuelto

Un sillón, una lámpara de pie y una mesa pequeña. La luz debe caer sobre el libro, no sobre los ojos. Si el sillón está junto a una ventana, coloca la lámpara del lado contrario a la mano que sostiene el libro para no hacer sombra.

## Menos luz, mejor luz

La tentación es iluminar todo. Pero las casas se sienten más acogedoras cuando hay zonas en penumbra y focos claros. Apaga la luz general, enciende una lámpara y observa cómo cambia la habitación: eso es la luz cálida haciendo su trabajo.

Si además tu salón es de tonos claros, tenemos ideas para [darle calidez sin llenarlo de cosas](/decoracion/salon-tonos-neutros-calido/).
`,
  },
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
    imagenPrincipalAlt: "Tarros de cristal con legumbres sobre una mesa de madera",
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