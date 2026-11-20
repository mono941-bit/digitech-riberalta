// CATÁLOGO CENTRAL DE DIGI-TECH
// Las imágenes están conectadas a los archivos reales cargados en /images/products/.

const products = [
  {
    id: "taladro-inalambrico",
    name: "Taladro inalámbrico con baterías recargables",
    price: 340,
    category: "Herramientas",
    description: "Kit con taladro inalámbrico, baterías recargables, cargador, brocas y accesorios en maletín. Práctico para instalaciones, reparaciones y proyectos de bricolaje en casa o taller.",
    image: "images/products/IMG-20260422-WA0014.jpg"
  },
  {
    id: "freidora-aire",
    name: "Freidora de aire",
    price: null,
    category: "Hogar",
    description: "Prepara papas, pollo y otros alimentos de forma práctica, rápida y con menos aceite. Ideal para el hogar.",
    image: "images/products/file_000000002f98820e86daf7a7326842de.png"
  },
  {
    id: "vaso-termico",
    name: "Vaso térmico cafetero",
    price: 80,
    category: "Hogar",
    description: "Disfruta tu bebida a tu gusto: mantiene el contenido caliente hasta 8 horas y frío hasta 12 horas. Ideal para llevar al trabajo, la oficina o donde quieras.",
    image: "images/products/file_000000008c90820e8b95e0ac62873ea5.png"
  },
  {
    id: "sanci-foco",
    name: "Cámara Foco Sanci",
    price: null,
    category: "Seguridad",
    description: "WiFi · visión nocturna · audio bidireccional · detección de movimiento · giro 360°. Control desde Android y iOS.",
    image: "images/products/file_000000009be8820eb708abcc9a70a594.png"
  },
  {
    id: "camara-tomate-doble-lente",
    name: "Cámara Tomate Doble Lente",
    price: 320,
    category: "Seguridad",
    description: "WiFi para exteriores · 6 MP · visión nocturna a color · detección de movimiento · alarma · control desde el celular.",
    image: "images/products/file_00000000cc84820e81e065fe9b2eee23.png"
  },

  {
    id: "lidimi-ld-s663ac",
    name: "LIDIMI BASS LD-S663AC",
    price: 1400,
    category: "Audio",
    description: "Parlante multimedia portátil de gran formato. Su diseño incorpora iluminación LED, conectividad Bluetooth, radio FM y entradas para reproducir tu música. Ideal para animar reuniones, celebraciones y disfrutar de tus canciones favoritas.",
    image: "images/products/lidimi-ld-s663ac.png"
  },
  {
    id: "lidimi-d-s698",
    name: "LIDIMI D-S698",
    price: 1550,
    category: "Audio",
    description: "Parlante portátil con sonido potente e iluminación RGB. Incluye Bluetooth, radio FM y opciones de reproducción mediante USB. Una alternativa para acompañar reuniones y momentos de música en casa.",
    image: "images/products/lidimi-d-s698.png"
  },
  {
    id: "lidimi-ld-s672",
    name: "LIDIMI BASS LD-S672",
    price: 1050,
    category: "Audio",
    description: "Parlante multimedia con iluminación LED y diseño portátil. Permite reproducir música por Bluetooth, USB y radio FM. Ideal para escuchar tus listas favoritas y darle ambiente a tus reuniones.",
    image: "images/products/lidimi-ld-s672.png"
  },
  {
    id: "lidimi-ld-s9096ac",
    name: "LIDIMI BASS LD-S9096AC",
    price: 1280,
    category: "Audio",
    description: "Parlante de formato vertical con iluminación LED de colores. Ofrece reproducción por Bluetooth, radio FM y entradas para conectar tus dispositivos. Diseñado para convertir la música en el centro de tus reuniones.",
    image: "images/products/lidimi-ld-s9096ac.png"
  },
  {
    id: "lidimi-d-s699",
    name: "LIDIMI D-S699",
    price: 1550,
    category: "Audio",
    description: "Parlante multimedia portátil con iluminación RGB y sonido envolvente para tus momentos de música. Cuenta con Bluetooth, radio FM y opciones de reproducción por USB. Ideal para reuniones y entretenimiento en casa.",
    image: "images/products/lidimi-d-s699.png"
  },
  {
    id: "tronsmart-halo-100",
    name: "Tronsmart HALO 100",
    price: 1200,
    category: "Audio",
    description: "Parlante Bluetooth portátil con iluminación LED dinámica. Su diseño está pensado para ambientar reuniones y espacios de entretenimiento, con controles de reproducción y conectividad inalámbrica para disfrutar tu música.",
    image: "images/products/tronsmart-halo-100.png"
  },
  {
    id: "lidimi-ld-s9000ac",
    name: "LIDIMI BASS LD-S9000AC",
    price: 1250,
    category: "Audio",
    description: "Parlante multimedia vertical con iluminación LED y diseño llamativo. Permite reproducir música mediante Bluetooth, radio FM y conexiones USB. Una opción para disfrutar música y darle energía a tus reuniones.",
    image: "images/products/lidimi-ld-s9000ac.png"
  },
  {
    id: "lidimi-d-s770",
    name: "LIDIMI D-S770",
    price: 1250,
    category: "Audio",
    description: "Parlante portátil de diseño horizontal con iluminación RGB. Incorpora Bluetooth, radio FM y reproducción desde USB, para que disfrutes tu música en distintos momentos y ambientes.",
    image: "images/products/lidimi-d-s770.png"
  },
  {
    id: "lidimi-ld-s659",
    name: "LIDIMI LD-S659",
    price: 1350,
    category: "Audio",
    description: "Parlante multimedia portátil con iluminación LED y formato compacto para llevar tu música contigo. Cuenta con Bluetooth, radio FM y opciones de reproducción por USB. Ideal para reuniones y entretenimiento diario.",
    image: "images/products/lidimi-ld-s659.png"
  }
  ,
  {
    id: "lidimi-ld-l462a",
    name: "Linterna LIDIMI LD-L462A",
    price: 240,
    category: "Linternas",
    description: "Linterna de mano LIDIMI LD-L462A recargable por USB. Según la ficha del producto: potencia indicada de 30 W y autonomía anunciada de hasta 3 horas.",
    image: "images/products/lidimi-ld-l462a.png"
  },
  {
    id: "lidimi-ld-l1608a",
    name: "Linterna LIDIMI LD-L1608A",
    price: 210,
    category: "Linternas",
    description: "Linterna de mano LIDIMI LD-L1608A recargable por USB. Según la ficha del producto: potencia indicada de 30 W y autonomía anunciada de hasta 3 horas.",
    image: "images/products/lidimi-ld-l1608a.png"
  },
  {
    id: "ewtto-et-e2269bs",
    name: "Linterna EWTTO ET-E2269BS",
    price: 470,
    category: "Linternas",
    description: "Linterna EWTTO ET-E2269BS. Una opción práctica para iluminación en el hogar, el trabajo y actividades al aire libre.",
    image: "images/products/ewtto-et-e2269bs.png"
  }

];
