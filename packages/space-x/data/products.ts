enum ShippingType {
    /* eslint-disable camelcase */
    STANDARD_SHIPPING = 'STANDARD_SHIPPING',
    USPS_PRIORITY_MAIL_SMALL = 'USPS_PRIORITY_MAIL_SMALL',
    USPS_First_Class = 'USPS_FIRST_CLASS',
}
const products = [
    {
    manufacturer: "Samsung",
    name: "Samsung Galaxy Note 20",
    condition: "New",
    image: "images/sm1.webp",
    description: "Samsung Galaxy Note 20 Ultra 256GB 12GB RAM SM-N9860 (FACTORY UNLOCKED) 6.9",
    category: "phone",
    price: 59.33,
    countInStock: 5,
    rating: 4.5,
    numOfReviews: 5,
    shippingAvailable: ShippingType.STANDARD_SHIPPING,
    shippingCost: "Free Shipping",
    returnPolicy: "Free 60 day returns",
    reviews:[{
        name: "user",
        comments: "comments",
        rating: "3"
    }]
}, {
    manufacturer: "Apple",
    name: "Apple iPhone 7 32GB Black",
    condition: "New",
    image: "images/iph1.webp",
    description: "Apple iPhone 7 Unlocked 32GB Black - AT&T T-Mobile Verizon GSM Unlocked",
    category: "phone",
    price: 59.33,
    countInStock: 5,
    rating: 4.5,
    numOfReviews: 5,
    shippingAvailable: ShippingType.USPS_PRIORITY_MAIL_SMALL,
    shippingCost: "Free Shipping",
    returnPolicy: "Free 60 day returns",
    reviews:[{
        name: "user",
        comments: "comments",
        rating: "3"
    }]
}, {
    manufacturer: "Motorola",
    name: "Motorola Moto E6 Play",
    condition: "New",
    image: "images/moto1.webp",
    description: "Motorola Moto E6 Play XT2029-1 32GB Unlocked GSM Dual SIM Phone w/ 13MP Camera - Steel Black",
    category: "phone",
    price: 124.99,
    countInStock: 10,
    rating: 4.5,
    numOfReviews: 9,
    shippingAvailable: ShippingType.USPS_First_Class,
    shippingCost: "Free Shipping",
    returnPolicy: "Free 60 day returns",
    reviews:[{
        name: "user",
        comments: "comments",
        rating: "3"
    }]
}, {
    manufacturer: "Motorola",
    name: "Motorola One Action XT2013",
    condition: "New",
    image: "images/moto2.webp",
    description: "Motorola One Action XT2013 128GB Unlocked GSM Dual SIM Phone w/ 12MP Camera - Denim Blue",
    category: "phone",
    price: 204.55,
    countInStock: 2,
    rating: 4,
    numOfReviews: 12,
    shippingAvailable: ShippingType.USPS_First_Class,
    shippingCost: "Free Shipping",
    returnPolicy: "Free 60 day returns",
    reviews:[{
        name: "user",
        comments: "comments",
        rating: "3"
    }]
}, {
    manufacturer: "Samsung",
    name: "Samsung Galaxy Note 20",
    condition: "New",
    image: "images/sm1.webp",
    description: "Samsung Galaxy Note 20 Ultra 256GB 12GB RAM SM-N9860 (FACTORY UNLOCKED) 6.9",
    category: "phone",
    price: 59.33,
    countInStock: 5,
    rating: 4.5,
    numOfReviews: 5,
    shippingAvailable: ShippingType.STANDARD_SHIPPING,
    shippingCost: "Free Shipping",
    returnPolicy: "Free 60 day returns",
    reviews:[{
        name: "user",
        comments: "comments",
        rating: "3"
    }]
}, {
    manufacturer: "Apple",
    name: "Apple iPhone 7 32GB Black",
    condition: "New",
    image: "images/iph1.webp",
    description: "Apple iPhone 7 Unlocked 32GB Black - AT&T T-Mobile Verizon GSM Unlocked",
    category: "phone",
    price: 59.33,
    countInStock: 5,
    rating: 4.5,
    numOfReviews: 5,
    shippingAvailable: ShippingType.USPS_PRIORITY_MAIL_SMALL,
    shippingCost: "Free Shipping",
    returnPolicy: "Free 60 day returns",
    reviews:[{
        name: "user",
        comments: "comments",
        rating: "3"
    }]
}, {
    "manufacturer": "Samsung",
    "name": "Samsung Galaxy S10 Plus Ceremic White",
    "condition": "New",
    "image": "images/sgs10pcw.webp",
    "description": "Samsung Galaxy S10 Plus Ceremic White 1TB ROM 12GB RAM GSM Dual SIM Phone 16MP Camera (Ultra Wide)",
    "category": "phone",
    "price": 1600.11,
    "countInStock": 5,
    "rating": 4.5,
    "numOfReviews": 5,
    "shippingAvailable": "STANDARD_SHIPPING",
    "shippingCost": "Free Shipping",
    "returnPolicy": "7 Days Replacement Policy",
    "reviews":[{
        "name": "user",
        "comments": "comments",
        "rating": "3"
    }]
}, {
    "manufacturer": "Xiaomi",
    "name": "Mi 10 Coral Green",
    "condition": "New",
    "image": "images/mi10cgcg.webp",
    "description": "Mi 10 Coral Green 8GB RAM 256GB ROM 108MP Quad Camera",
    "category": "phone",
    "price": 745.59,
    "countInStock": 5,
    "rating": 4.2,
    "numOfReviews": 30,
    "shippingAvailable": "STANDARD_SHIPPING",
    "shippingCost": "Free Shipping",
    "returnPolicy": "7 Days Replacement Policy",
    "reviews":[{
        "name": "user",
        "comments": "comments",
        "rating": "4"
    }]
}, {
    "manufacturer": "Xiaomi",
    "name": "Mi 11X Pro 5G Celestial Silver",
    "condition": "New",
    "image": "images/mi11xpcs.webp",
    "description": "Mi 11X Pro 5G Celestial Silver 8GB RAM 128GB ROM 108MP Camera Qualcomm Snapdragon 888 Processor",
    "category": "phone",
    "price": 568.86,
    "countInStock": 5,
    "rating": 4,
    "numOfReviews": 0,
    "shippingAvailable": "STANDARD_SHIPPING",
    "shippingCost": "Free Shipping",
    "returnPolicy": "7 Days Replacement Policy",
    "reviews":[{
        "name": "user",
        "comments": "comments",
        "rating": "4"
    }]
}, {
    "manufacturer": "Xiaomi",
    "name": "Redmi K20 Carbon Black",
    "condition": "New",
    "image": "images/mik20cb.webp",
    "description": "Redmi K20 Carbon Black 6GB 128 ROM 48MP AI Triple Camera",
    "category": "phone",
    "price": 338.66,
    "countInStock": 5,
    "rating": 4.5,
    "numOfReviews": 5400,
    "shippingAvailable": "STANDARD_SHIPPING",
    "shippingCost": "Free Shipping",
    "returnPolicy": "7 Days Replacement Policy",
    "reviews":[{
        "name": "user",
        "comments": "comments",
        "rating": "4"
    }]
}, {
    "manufacturer": "LG ELECTRONICS",
    "name": "LG 1.5 Ton Split Inverter AC White",
    "condition": "New",
    "image": "images/lgsiaw.webp",
    "description": "LG 1.5 Ton 5 Star Split Inverter AC (MS-Q18KNZA, Copper Condenser) ",
    "category": "AC",
    "price": 649.36,
    "countInStock": 5,
    "rating": 4,
    "numOfReviews": 0,
    "shippingAvailable": "STANDARD_SHIPPING",
    "shippingCost": "Free Shipping",
    "returnPolicy": "10 Days Replacement Policy",
    "reviews":[{
        "name": "user",
        "comments": "comments",
        "rating": "4"
    }]
}, {
    "manufacturer": "Voltas Ltd",
    "name": "Voltas 2 in 1 1.2 Ton Split Inverter AC White",
    "condition": "New",
    "image": "images/v21ccsaw.webp",
    "description": "Voltas 2 in 1 Convertible Cooling 1.2 Ton Split Inverter AC White 5 Star Copper Condenser (155V ADW) ",
    "category": "AC",
    "price": 467.25,
    "countInStock": 5,
    "rating": 4.2,
    "numOfReviews": 822,
    "shippingAvailable": "STANDARD_SHIPPING",
    "shippingCost": "Free Shipping",
    "returnPolicy": "10 Days Replacement Policy",
    "reviews":[{
        "name": "user",
        "comments": "comments",
        "rating": "4"
    }]
}, {
    "manufacturer": "Blue Star Ltd",
    "name": "Blue Star Split Inverter 1.0 Ton AC White",
    "condition": "New",
    "image": "images/bssiaw.webp",
    "description": "Blue Star 1.0 Ton Split Inverter AC 3 Star Copper Condenser (IC315AATU) ",
    "category": "AC",
    "price": 419.87,
    "countInStock": 5,
    "rating": 4.3,
    "numOfReviews": 974,
    "shippingAvailable": "STANDARD_SHIPPING",
    "shippingCost": "Free Shipping",
    "returnPolicy": "10 Days Replacement Policy",
    "reviews":[{
        "name": "user",
        "comments": "comments",
        "rating": "4"
    }]
}, {
    "manufacturer": "Samsung India Electronics Pvt. Ltd.",
    "name": "Samsung Series 8 (75 Inch) 4K LED Smart TV",
    "condition": "New",
    "image": "images/stUA75NU8000KXXL.webp",
    "description": "Samsung Series 8 (75 Inch) Ultra HD (4K) LED Smart TV Crystal Clear Clarity HDR Technology (UA75NU8000KXXL)",
    "category": "Television",
    "price": 8118.32,
    "countInStock": 5,
    "rating": 4,
    "numOfReviews": 0,
    "shippingAvailable": "STANDARD_SHIPPING",
    "shippingCost": "Free Shipping",
    "returnPolicy": "10 Days Replacement Policy",
    "reviews":[{
        "name": "user",
        "comments": "comments",
        "rating": "4"
    }]
}, {
    "manufacturer": "Samsung India Electronics Pvt. Ltd.",
    "name": "Samsung Q Series (65 Inch) 4K QLED Ultra Smart TV",
    "condition": "New",
    "image": "images/st65Q8C.webp",
    "description": "Samsung Q Series (65 Inch) QLED Ultra HD (4K) Smart TV Wifi Direct HDR Quad Core Processor (65Q8C)",
    "category": "Television",
    "price": 6366.01,
    "countInStock": 5,
    "rating": 4,
    "numOfReviews": 0,
    "shippingAvailable": "STANDARD_SHIPPING",
    "shippingCost": "Free Shipping",
    "returnPolicy": "10 Days Replacement Policy",
    "reviews":[{
        "name": "user",
        "comments": "comments",
        "rating": "4"
    }]
}, {
    "manufacturer": "Samsung India Electronics Pvt. Ltd.",
    "name": "Samsung Q Series (65 Inch) 4K QLED Ultra Smart TV (65Q7F)",
    "condition": "New",
    "image": "images/st65Q7F.webp",
    "description": "Samsung Q Series (65 Inch) QLED Ultra HD (4K) Smart TV (65Q7F)",
    "category": "Television",
    "price": 5961.29,
    "countInStock": 5,
    "rating": 4,
    "numOfReviews": 0,
    "shippingAvailable": "STANDARD_SHIPPING",
    "shippingCost": "Free Shipping",
    "returnPolicy": "10 Days Replacement Policy",
    "reviews":[{
        "name": "user",
        "comments": "comments",
        "rating": "4"
    }]
}, {
    "manufacturer": "LG Electronics India Pvt. Ltd.",
    "name": "LG Super UHD (65 Inch) 4K QLED Ultra Smart TV (65SJ850T)",
    "condition": "New",
    "image": "images/st65SJ850T.webp",
    "description": "LG Super UHD (65 Inch) 4K QLED Ultra Smart TV (65SJ850T)",
    "category": "Television",
    "price": 4820.78,
    "countInStock": 5,
    "rating": 5,
    "numOfReviews": 1,
    "shippingAvailable": "STANDARD_SHIPPING",
    "shippingCost": "Free Shipping",
    "returnPolicy": "10 Days Replacement Policy",
    "reviews":[{
        "name": "user",
        "comments": "comments",
        "rating": "4"
    }]
}, {
    "manufacturer": "Sony India Pvt. Ltd.",
    "name": "Sony Bravia (65 Inch) OLED Ultra HD Smart Android TV (KD65A9F)",
    "condition": "New",
    "image": "images/stKD65A9F.webp",
    "description": "Sony Bravia (65 Inch) OLED Ultra HD Smart Android TV (KD65A9F) Netflix YouTube Dobly Digital",
    "category": "Television",
    "price": 6345.82,
    "countInStock": 5,
    "rating": 5,
    "numOfReviews": 1,
    "shippingAvailable": "STANDARD_SHIPPING",
    "shippingCost": "Free Shipping",
    "returnPolicy": "10 Days Replacement Policy",
    "reviews":[{
        "name": "user",
        "comments": "comments",
        "rating": "4"
    }]
}, {
    "manufacturer": "Guangdong Changhong Electronics Co. Ltd.",
    "name": "Realme (50 Inch) Ultra HD LED Smart Android TV (RMV2005)",
    "condition": "New",
    "image": "images/rtRMV2005.webp",
    "description": "Realme (50 Inch) Ultra HD LED Smart Android TV (RMV2005) with Handsfree Voice Search and Dobly Vision & Atoms",
    "category": "Television",
    "price": 539.77,
    "countInStock": 5,
    "rating": 4.1,
    "numOfReviews": 118,
    "shippingAvailable": "STANDARD_SHIPPING",
    "shippingCost": "Free Shipping",
    "returnPolicy": "10 Days Replacement Policy",
    "reviews":[{
        "name": "user",
        "comments": "comments",
        "rating": "4"
    }]
}, {
    "manufacturer": "Dixon Technologies India Ltd.",
    "name": "Toshiba U50 Series (55 Inch) Ultra HD LED Smart Android TV (55U5050)",
    "condition": "New",
    "image": "images/rt55U5050.webp",
    "description": "Toshiba U50 Series (55 Inch) Ultra HD LED Smart Android TV (55U5050) Dobly Vision & Atoms",
    "category": "Television",
    "price": 546.29,
    "countInStock": 5,
    "rating": 4.3,
    "numOfReviews": 286,
    "shippingAvailable": "STANDARD_SHIPPING",
    "shippingCost": "Free Shipping",
    "returnPolicy": "10 Days Replacement Policy",
    "reviews":[{
        "name": "user",
        "comments": "comments",
        "rating": "4"
    }]
}, {
    "manufacturer": "Samsung India Electronics Pvt. Ltd.",
    "name": "Samsung 810 L Black Caviar (RF28N9780SG/TL)",
    "condition": "New",
    "image": "images/srRF28N9780SGTL.webp",
    "description": "Samsung 810 L Black Caviar Frost Free Side by Side Inverter Technology with Four Door(RF28N9780SG/TL)",
    "category": "Refrigerator",
    "price": 3688.58,
    "countInStock": 5,
    "rating": 4,
    "numOfReviews": 0,
    "shippingAvailable": "STANDARD_SHIPPING",
    "shippingCost": "Free Shipping",
    "returnPolicy": "10 Days Replacement Policy",
    "reviews":[{
        "name": "user",
        "comments": "comments",
        "rating": "4"
    }]
}, {
    "manufacturer": "Samsung India Electronics Pvt. Ltd.",
    "name": "Samsung 657 L Gentle Black Matt (RS74T5F01B4/TL)",
    "condition": "New",
    "image": "images/srRS74T5F01B4TL.webp",
    "description": "Samsung 657 L Black Caviar Frost Free Side by Side Inverter Technology with Four Door(RS74T5F01B4/TL)",
    "category": "Refrigerator",
    "price": 2967.22,
    "countInStock": 5,
    "rating": 3.6,
    "numOfReviews": 0,
    "shippingAvailable": "STANDARD_SHIPPING",
    "shippingCost": "Free Shipping",
    "returnPolicy": "10 Days Replacement Policy",
    "reviews":[{
        "name": "user",
        "comments": "comments",
        "rating": "4"
    }]
}, {
    "manufacturer": "LG ELECTRONICS INDIA PVT LTD.",
    "name": "LG 668 L Matt Black (GC-X247CQAV)",
    "condition": "New",
    "image": "images/lrGC-X247CQAV.webp",
    "description": "LG 668 L Matt Black Frost Free Side by Side Door Instaview and Smart ThinQ Wifi Enabled (GC-X247CQAV)",
    "category": "Refrigerator",
    "price": 2117.00,
    "countInStock": 5,
    "rating": 3.5,
    "numOfReviews": 0,
    "shippingAvailable": "STANDARD_SHIPPING",
    "shippingCost": "Free Shipping",
    "returnPolicy": "10 Days Replacement Policy",
    "reviews":[{
        "name": "user",
        "comments": "comments",
        "rating": "4"
    }]
}, {
    "manufacturer": "Samsung India Electroincs Pvt. Ltd.",
    "name": "Samsung 8 KG Grey (WW80T504DAN/TL)",
    "condition": "New",
    "image": "images/swWW80T504DANTL.webp",
    "description": "Samsung 8 KG Grey 5 Star Fully Automatic Front Load (WW80T504DAN/TL)",
    "category": "Washing Machine",
    "price": 519.50,
    "countInStock": 5,
    "rating": 5,
    "numOfReviews": 0,
    "shippingAvailable": "STANDARD_SHIPPING",
    "shippingCost": "Free Shipping",
    "returnPolicy": "10 Days Replacement Policy",
    "reviews":[{
        "name": "user",
        "comments": "comments",
        "rating": "4"
    }]
}, {
    "manufacturer": "Samsung India Electroincs Pvt. Ltd.",
    "name": "Samsung 9 KG Grey (WW90K54E0UX/TL)",
    "condition": "New",
    "image": "images/swWW90K54E0UXTL.webp",
    "description": "Samsung 9 KG Grey 5 Star Fully Automatic Front Load with In-build Heater (WW90K54E0UX/TL)",
    "category": "Washing Machine",
    "price": 808.44,
    "countInStock": 5,
    "rating": 4,
    "numOfReviews": 0,
    "shippingAvailable": "STANDARD_SHIPPING",
    "shippingCost": "Free Shipping",
    "returnPolicy": "10 Days Replacement Policy",
    "reviews":[{
        "name": "user",
        "comments": "comments",
        "rating": "4"
    }]
}, {
    "manufacturer": "IFB",
    "name": "IFB 8.5 KG Fully Automatic White (Executive Plus VX ID)",
    "condition": "New",
    "image": "images/ifbwVXID.webp",
    "description": "IFB 8.5 KG Fully Automatic Front Load with In-build Heater White (Executive Plus VX ID)",
    "category": "Washing Machine",
    "price": 523.90,
    "countInStock": 5,
    "rating": 4.4,
    "numOfReviews": 90,
    "shippingAvailable": "STANDARD_SHIPPING",
    "shippingCost": "Free Shipping",
    "returnPolicy": "10 Days Replacement Policy",
    "reviews":[{
        "name": "user",
        "comments": "comments",
        "rating": "4"
    }]
}, {
    "manufacturer": "Puma Sports India Pvt Ltd.",
    "name": "Puma Men Black Velocity Nitro Running Shoes (13484306)",
    "condition": "New",
    "image": "images/ps13484306.webp",
    "description": "Puma Men Black Velocity Nitro Foam light responsive new fit designed for comfort (13484306)",
    "category": "Shoes",
    "price": 118.67,
    "countInStock": 5,
    "rating": 4.4,
    "numOfReviews": 80,
    "shippingAvailable": "STANDARD_SHIPPING",
    "shippingCost": "Free Shipping",
    "returnPolicy": "30 Days Return Policy",
    "reviews":[{
        "name": "user",
        "comments": "comments",
        "rating": "4"
    }]
}, {
    "manufacturer": "Adidas India Marketing Private Ltd.",
    "name": "Adidas Men Blue & Pink",
    "condition": "New",
    "image": "images/as13444848.webp",
    "description": "Adidas Men Blue & Pink Woven Design Stycon Primegreen Tennis Shoes (13444848)",
    "category": "Shoes",
    "price": 161.84,
    "countInStock": 5,
    "rating": 4,
    "numOfReviews": 70,
    "shippingAvailable": "STANDARD_SHIPPING",
    "shippingCost": "Free Shipping",
    "returnPolicy": "30 Days Return Policy",
    "reviews":[{
        "name": "user",
        "comments": "comments",
        "rating": "4"
    }]
}, {
    "manufacturer": "Puma Sports India Pvt Ltd.",
    "name": "Puma Men Black Sneakers",
    "condition": "New",
    "image": "images/ps11335336.webp",
    "description": "Puma Men Black Sneakers (11335336)",
    "category": "Shoes",
    "price": 21.23,
    "countInStock": 5,
    "rating": 4.2,
    "numOfReviews": 120,
    "shippingAvailable": "STANDARD_SHIPPING",
    "shippingCost": "Free Shipping",
    "returnPolicy": "30 Days Return Policy",
    "reviews":[{
        "name": "user",
        "comments": "comments",
        "rating": "557"
    }]
}, {
    "manufacturer": "Adidas India Marketing Private Ltd.",
    "name": "Adidas Men Navy Blue & Grey Solid Bentton II Sports Sandals",
    "condition": "New",
    "image": "images/as11354016.webp",
    "description": "Adidas Men Navy Blue & Grey Solid Bentton II Sports Sandals (11354016)",
    "category": "Shoes",
    "price": 21.23,
    "countInStock": 5,
    "rating": 4.2,
    "numOfReviews": 102,
    "shippingAvailable": "STANDARD_SHIPPING",
    "shippingCost": "Free Shipping",
    "returnPolicy": "30 Days Return Policy",
    "reviews":[{
        "name": "user",
        "comments": "comments",
        "rating": "114"
    }]
}, {
    "manufacturer": "Fossil India Pvt. Ltd.",
    "name": " Fossil Men Off-White Analogue Watch FS5439I_SOR",
    "condition": "New",
    "image": "images/fw9037081.webp",
    "description": "Fossil Men Off-White Analogue Watch FS5439I_SOR (9037081)",
    "category": "Watches",
    "price": 121.51,
    "countInStock": 5,
    "rating": 4,
    "numOfReviews": 52,
    "shippingAvailable": "STANDARD_SHIPPING",
    "shippingCost": "Free Shipping",
    "returnPolicy": "30 Days Return Policy",
    "reviews":[{
        "name": "user",
        "comments": "comments",
        "rating": "15"
    }]
}, {
    "manufacturer": "Fossil India Pvt. Ltd.",
    "name": "Fossil The Minimalist Fs5304 Brown",
    "condition": "New",
    "image": "images/fw7928015.webp",
    "description": "Fossil The Minimalist Fs5304 Brown/Blue Analog Watch (7928015)",
    "category": "Watches",
    "price": 121.53,
    "countInStock": 5,
    "rating": 3.8,
    "numOfReviews": 20,
    "shippingAvailable": "STANDARD_SHIPPING",
    "shippingCost": "Free Shipping",
    "returnPolicy": "30 Days Return Policy",
    "reviews":[{
        "name": "user",
        "comments": "comments",
        "rating": "19"
    }]
}, {
    "manufacturer": "Fossil India Pvt. Ltd.",
    "name": "Fossil Men Black Analogue Watch FS5305_SOR",
    "condition": "New",
    "image": "images/fw9037519.webp",
    "description": "Fossil Men Black Analogue Watch FS5305_SOR (9037519)",
    "category": "Watches",
    "price": 121.53,
    "countInStock": 5,
    "rating": 4.4,
    "numOfReviews": 59,
    "shippingAvailable": "STANDARD_SHIPPING",
    "shippingCost": "Free Shipping",
    "returnPolicy": "30 Days Return Policy",
    "reviews":[{
        "name": "user",
        "comments": "comments",
        "rating": "14"
    }]
}, {
    "manufacturer": "Titan Company Limited",
    "name": "Titan Men White Analogue Watch",
    "condition": "New",
    "image": "images/tw10051959.webp",
    "description": "Titan Men White Analogue Watch (10051959)",
    "category": "Watches",
    "price": 125.64,
    "countInStock": 5,
    "rating": 4,
    "numOfReviews": 20,
    "shippingAvailable": "STANDARD_SHIPPING",
    "shippingCost": "Free Shipping",
    "returnPolicy": "30 Days Return Policy",
    "reviews":[{
        "name": "user",
        "comments": "comments",
        "rating": "5"
    }]
}, {
    "manufacturer": "Titan Company Limited",
    "name": "Titan Edge Unisex White Analogue watch NL1683WL02",
    "condition": "New",
    "image": "images/tw10052231.webp",
    "description": "Titan Edge Unisex White Analogue watch NL1683WL02 (10052231)",
    "category": "Watches",
    "price": 162.20,
    "countInStock": 5,
    "rating": 4,
    "numOfReviews": 15,
    "shippingAvailable": "STANDARD_SHIPPING",
    "shippingCost": "Free Shipping",
    "returnPolicy": "30 Days Return Policy",
    "reviews":[{
        "name": "user",
        "comments": "comments",
        "rating": "5"
    }]
}, {
    "manufacturer": "Titan Company Limited",
    "name": "Titan Ceramics Men Black Analogue watch NL90014KC01",
    "condition": "New",
    "image": "images/tw1453804.webp",
    "description": "Titan Ceramics Men Black Analogue watch NL90014KC01 (1453804)",
    "category": "Watches",
    "price": 168.99,
    "countInStock": 5,
    "rating": 3.6,
    "numOfReviews": 25,
    "shippingAvailable": "STANDARD_SHIPPING",
    "shippingCost": "Free Shipping",
    "returnPolicy": "30 Days Return Policy",
    "reviews":[{
        "name": "user",
        "comments": "comments",
        "rating": "7"
    }]
}, {
    "manufacturer": "Intercraft Trading Company Pvt Ltd.",
    "name": "KENZO Women JEU DAMOUR Eau de Parfum",
    "condition": "New",
    "image": "images/kp2229647.webp",
    "description": "KENZO Women JEU DAMOUR Eau de Parfum 100 ml (2229647)",
    "category": "Perfume",
    "price": 117.04,
    "countInStock": 5,
    "rating": 4.6,
    "numOfReviews": 149,
    "shippingAvailable": "STANDARD_SHIPPING",
    "shippingCost": "Free Shipping",
    "returnPolicy": "30 Days Return Policy",
    "reviews":[{
        "name": "user",
        "comments": "comments",
        "rating": "5"
    }]
}, {
    "manufacturer": "Bvlgari Parfumes",
    "name": "Bvlgari Goldea Women The Roman Night Eau De Parfum",
    "condition": "New",
    "image": "images/bp10001975.webp",
    "description": "Bvlgari Goldea Women The Roman Night Eau De Parfum 75 ml (10001975)",
    "category": "Perfume",
    "price": 131.93,
    "countInStock": 5,
    "rating": 4.7,
    "numOfReviews": 149,
    "shippingAvailable": "STANDARD_SHIPPING",
    "shippingCost": "Free Shipping",
    "returnPolicy": "30 Days Return Policy",
    "reviews":[{
        "name": "user",
        "comments": "comments",
        "rating": "7"
    }]
}, {
    "manufacturer": "Bvlgari Parfumes",
    "name": "Bvlgari Vapo Intence Eau Parfumee Au The Noir Eau de Cologne",
    "condition": "New",
    "image": "images/bp13104944.webp",
    "description": "Bvlgari Vapo Intence Eau Parfumee Au The Noir Eau de Cologne 150 ml (13104944)",
    "category": "Perfume",
    "price": 142.05,
    "countInStock": 5,
    "rating": 4.5,
    "numOfReviews": 50,
    "shippingAvailable": "STANDARD_SHIPPING",
    "shippingCost": "Free Shipping",
    "returnPolicy": "30 Days Return Policy",
    "reviews":[{
        "name": "user",
        "comments": "comments",
        "rating": "5"
    }]
}, {
    "manufacturer": "Bvlgari Parfumes",
    "name": "Bvlgari Women Splendida Rose Eau De Parfum",
    "condition": "New",
    "image": "images/bp2277401.webp",
    "description": "Bvlgari Women Splendida Rose Eau De Parfum 100 ml (2277401)",
    "category": "Perfume",
    "price": 142.05,
    "countInStock": 5,
    "rating": 4.5,
    "numOfReviews": 50,
    "shippingAvailable": "STANDARD_SHIPPING",
    "shippingCost": "Free Shipping",
    "returnPolicy": "30 Days Return Policy",
    "reviews":[{
        "name": "user",
        "comments": "comments",
        "rating": "5"
    }]
}, {
    "manufacturer": "Ferragamo Parfumes",
    "name": "Salvatore Ferragamo Women Set of 2 Perfumes",
    "condition": "New",
    "image": "images/fp4324337.webp",
    "description": "Salvatore Ferragamo Women Set of 2 Perfumes (4324337)",
    "category": "Perfume",
    "price": 162.44,
    "countInStock": 5,
    "rating": 3.9,
    "numOfReviews": 8,
    "shippingAvailable": "STANDARD_SHIPPING",
    "shippingCost": "Free Shipping",
    "returnPolicy": "30 Days Return Policy",
    "reviews":[{
        "name": "user",
        "comments": "comments",
        "rating": "8"
    }]
}, {
    "manufacturer": "Puma Sports India Pvt Ltd.",
    "name": "Puma Unisex Polarised Sunglasses",
    "condition": "New",
    "image": "images/ps1408546.webp",
    "description": "Puma Unisex Polarised Sunglasses 91084301 (1408546)",
    "category": "Sunglasses",
    "price": 175.99,
    "countInStock": 5,
    "rating": 4.5,
    "numOfReviews": 5,
    "shippingAvailable": "STANDARD_SHIPPING",
    "shippingCost": "Free Shipping",
    "returnPolicy": "30 Days Return Policy",
    "reviews":[{
        "name": "user",
        "comments": "comments",
        "rating": "5"
    }]
}, {
    "manufacturer": "PIONEER EXPORTS LTD.",
    "name": "WROGN Unisex Rectangle Sunglasses",
    "condition": "New",
    "image": "images/ws2385276.webp",
    "description": "WROGN Unisex Rectangle Sunglasses MFB-PN-CY-51430 (2385276)",
    "category": "Sunglasses",
    "price": 20.08,
    "countInStock": 5,
    "rating": 4.4,
    "numOfReviews": 124,
    "shippingAvailable": "STANDARD_SHIPPING",
    "shippingCost": "Free Shipping",
    "returnPolicy": "30 Days Return Policy",
    "reviews":[{
        "name": "user",
        "comments": "comments",
        "rating": "5"
    }]
}, {
    "manufacturer": "Safari Industries India (LTD)",
    "name": "Safari Unisex Black Regloss Anti-Scratch Small Trolley Suitcase",
    "condition": "New",
    "image": "images/st1850663.webp",
    "description": "Safari Unisex Black Regloss Anti-Scratch Small Trolley Suitcase (1850663)",
    "category": "Luggages",
    "price": 35.55,
    "countInStock": 5,
    "rating": 4.3,
    "numOfReviews": 719,
    "shippingAvailable": "STANDARD_SHIPPING",
    "shippingCost": "Free Shipping",
    "returnPolicy": "30 Days Return Policy",
    "reviews":[{
        "name": "user",
        "comments": "comments",
        "rating": "5"
    }]
}, {
    "manufacturer": "Safari Industries India (LTD)",
    "name": "Safari Unisex Multi Printed Trolley Bag",
    "condition": "New",
    "image": "images/st10686490.webp",
    "description": "Safari Unisex Multi Printed Trolley Bag (10686490)",
    "category": "Luggages",
    "price": 32.65,
    "countInStock": 5,
    "rating": 4.2,
    "numOfReviews": 494,
    "shippingAvailable": "STANDARD_SHIPPING",
    "shippingCost": "Free Shipping",
    "returnPolicy": "30 Days Return Policy",
    "reviews":[{
        "name": "user",
        "comments": "comments",
        "rating": "5"
    }]
}, {
    "manufacturer": "Safari Industries India (LTD)",
    "name": "Safari Unisex Blue Textured Anti-Scratch Large Hard-Sided Trolley Suitcase",
    "condition": "New",
    "image": "images/st13789694.webp",
    "description": "Safari Unisex Blue Textured Anti-Scratch Large Hard-Sided Trolley Suitcase (13789694)",
    "category": "Luggages",
    "price": 56.60,
    "countInStock": 5,
    "rating": 4,
    "numOfReviews": 25,
    "shippingAvailable": "STANDARD_SHIPPING",
    "shippingCost": "Free Shipping",
    "returnPolicy": "30 Days Return Policy",
    "reviews":[{
        "name": "user",
        "comments": "comments",
        "rating": "5"
    }]
}];

export default products;