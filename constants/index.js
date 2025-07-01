const navLinks = [
 {
	id: "cocktails",
	title: "Bebidas",
 },
 {
	id: "about",
	title: "Acerca de",
 },
 {
	id: "art",
	title: "El Arte",
 },
 {
	id: "contact",
	title: "Contacto",
 },
];

const cocktailLists = [
 {
	name: "Vino Chapel Hill",
	country: "AU",
	detail: "Battle",
	price: "$10",
 },
 {
	name: "Catena Malbec",
	country: "AU",
	detail: "Battle",
	price: "$49",
 },
 {
	name: "Cerveza pálida White Rhino",
	country: "CA",
	detail: "750 ml",
	price: "$20",
 },
 {
	name: "Cerveza Irlandesa Guinness",
	country: "IE",
	detail: "600 ml",
	price: "$29",
 },
];

const mockTailLists = [
 {
	name: "Tropical Bloom",
	country: "US",
	detail: "630 ml",
	price: "$10",
 },
 {
	name: "Menta de maracuyá",
	country: "US",
	detail: "300 ml",
	price: "$49",
 },
 {
	name: "Citrus Glow",
	country: "CA",
	detail: "250 ml",
	price: "$20",
 },
 {
	name: "Lavanda efervescente",
	country: "IE",
	detail: "600 ml",
	price: "$29",
 },
];

const profileLists = [
 {
	imgPath: "/images/profile1.png",
 },
 {
	imgPath: "/images/profile2.png",
 },
 {
	imgPath: "/images/profile3.png",
 },
 {
	imgPath: "/images/profile4.png",
 },
];

const featureLists = [
 "Mezclas perfectamente equilibradas",
 "Con un toque perfecto",
 "Siempre bien frías",
 "Agitadas y removidas con maestría",
];

const goodLists = [
 "Ingredientes cuidadosamente seleccionados",
 "Técnicas exclusivas",
 "El arte de la coctelería en acción",
 "Sabores frescos y combinados",
];

const storeInfo = {
 heading: "Dónde encontrarnos",
 address: "Av. Siempre Viva 123, Springfield",
 contact: {
	phone: "(555) 987-6543",
	email: "hola@terciopelo.com",
 },
};

const openingHours = [
 { day: "Lun–Jue", time: "11:00am – 12am" },
 { day: "Vie", time: "11:00am – 2am" },
 { day: "Sab", time: "9:00am – 2am" },
 { day: "Dom", time: "9:00am – 1am" },
];

const socials = [
 {
	name: "Instagram",
	icon: "/images/insta.png",
	url: "https://www.instagram.com",
 },

 {
	name: "X (Twitter)",
	icon: "/images/x.png",
	url: "https://www.x.com",
 },

 {
	name: "Facebook",
	icon: "/images/fb.png",
	url: "https://www.facebook.com",
 },
];

const allCocktails = [
 {
	id: 1,
	name: "Mojito Cubano",
	image: "/images/drink1.png",
	title: "Ingredientes sencillos, sabor intenso",
	description:
	 "El proceso es simple pero delicado: se machacan con suavidad los ingredientes frescos para liberar sus sabores sin amargar el trago, se agrega el hielo y se termina con el ron y el agua con gas, mezclando suavemente. Decorar con una ramita de menta y una rodaja de limón aporta un toque visual clásico.",
 },
 {
	id: 2,
	name: "Mojito de frambuesa",
	image: "/images/drink2.png",
	title: "Un clásico vibrante que nunca falla",
	description:
	 "Esta variante mantiene la estructura del mojito original, pero con el giro afrutado que lo vuelve aún más aromático y visualmente atractivo. Es ideal para quienes disfrutan de tragos con personalidad y un leve dejo ácido.",
 },
 {
	id: 3,
	name: "Margarita Clásica",
	image: "/images/drink3.png",
	title: "Ingredientes sencillos, sabor intenso",
	description:
	 "Un cóctel clásico y vibrante que combina la fuerza del tequila con la frescura del jugo de lima y un toque dulce de licor de naranja. Su sello característico es el borde salado del vaso, que realza los sabores y equilibra la acidez. Agitada, congelada o servida “on the rocks”, es refrescante, cítrica y perfecta para noches cálidas o celebraciones espontáneas. Su sencillez es su poder: pocos ingredientes, mucho carácter.",
 },
 {
	id: 4,
	name: "mojito Blue Curacao",
	image: "/images/drink4.png",
	title: "Elaborado con cuidado, vertido con amor",
	description:
	 "Esta impresionante bebida azul incorpora todos los deliciosos sabores del mojito clásico, pero añade un toque de sutil sabor a naranja, realzando perfectamente los sabores a lima y menta. Además, el color vibrante lo convierte en una opción llamativa para cualquier ocasión.",
 },
];

export {
 navLinks,
 cocktailLists,
 mockTailLists,
 profileLists,
 featureLists,
 goodLists,
 openingHours,
 storeInfo,
 socials,
 allCocktails,
};
