const ShippingType = {
    /* eslint-disable camelcase */
    STANDARD_SHIPPING: 'STANDARD_SHIPPING',
    USPS_PRIORITY_MAIL_SMALL: 'USPS_PRIORITY_MAIL_SMALL',
    USPS_First_Class: 'USPS_FIRST_CLASS',
}
const products = [{
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
    name: "Motorola Moto E6 Play XT2029",
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
}];