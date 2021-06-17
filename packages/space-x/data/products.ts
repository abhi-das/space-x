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
}];

export default products;