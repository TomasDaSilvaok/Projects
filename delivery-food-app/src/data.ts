type Product = {
    id: number
    title: string
    desc?: string
    img?: string
    price: number
    options?: {title: string, additionalPrice: number}[]
}

type Products = Product[]

export const featuredProducts: Products = [
    {
      id: 1,
      title: "Sicilian",
      desc: "Encienda sus papilas gustativas con una combinación ardiente de pepperoni picante, jalapeños, pimiento rojo triturado y queso mozzarella derretido, brindando una patada con cada bocado.",
      img: "/food-img/p1.png",
      price: 3500,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 2,
      title: "Bacon Deluxe",
      desc: "Deléitese con una hamburguesa de ternera a la parrilla, cubierta con tocino crujiente, queso cheddar derretido, cebollas caramelizadas y un poco de salsa BBQ ácida.",
      img: "/food-img/p2.png",
      price: 4000,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 3,
      title: "Bella Napoli",
      desc: "Una delicia italiana clásica con una corteza delgada y crujiente, salsa de tomate picante, mozzarella fresca y una mezcla de hierbas aromáticas cubiertas con lechuga, tomates y una cucharada de mayonesa picante.",
      img: "/food-img/p3.png",
      price: 3450,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 4,
      title: "Arrabbiata picante",
      desc: "Encienda sus papilas gustativas con esta creación de pasta ardiente, que combina penne en una salsa de tomate picante infundida con ajo, hojuelas de chile rojo y albahaca fresca para la máxima experiencia de comida reconfortante",
      img: "/food-img/p4.png",
      price: 2800,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 5,
      title: "Jalapeño Fiesta",
      desc: "¡Enciende tus papilas gustativas con una patada ardiente! Esta hamburguesa presenta una suculenta carne de res, jalapeños picantes, queso pepper jack y una sabrosa salsa de mayonesa con chipotle, y todas las guarniciones clásicas en un panecillo tostado.",
      img: "/food-img/p5.png",
      price: 3400,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 6,
      title: "Margarita Mágica",
      desc: "Un favorito atemporal con un toque, que muestra una corteza delgada cubierta con tomates dulces, albahaca fresca, queso mozzarella cremoso y una llovizna de aceite de oliva virgen extra, rúcula fresca y una llovizna de glaseado balsámico.",
      img: "/food-img/p6.png",
      price: 3300,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 7,
      title: "Linguine con ajo parmesano",
      desc: "Una delicia para los amantes del ajo, con linguini bañado en una salsa cremosa de queso parmesano, infundido con ajo y adornado con perejil picado, pimientos y tomates cherry.",
      img: "/food-img/p7.png",
      price: 2950,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 8,
      title: "Delicia Mediterranea",
      desc: "Embárquese en un viaje culinario con esta creación de inspiración mediterránea, que incluye queso feta, aceitunas Kalamata, tomates secados al sol y una pizca de orégano.",
      img: "/food-img/p8.png",
      price: 3100,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 9,
      title: "Teriyaki Hawaiana",
      desc: "Experimente el sabor de los trópicos con una jugosa hamburguesa de res glaseada en salsa teriyaki ácida, cubierta con piña asada, tocino crujiente y lechuga fresca, y todas las guarniciones clásicas en un panecillo tostado.",
      img: "/food-img/p9.png",
      price: 3800,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
  ];