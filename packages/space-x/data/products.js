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
    image: "images/1225.webp",
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
    image: "images/1225.webp",
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
    name: "Motorola KRZR K1",
    condition: "New",
    image: "images/1225.webp",
    description: "Original Unlocked Motorola KRZR K1 Cell Phone Bluetooth 2MP GSM Mobile MP3",
    category: "phone",
    price: 59.33,
    countInStock: 5,
    rating: 4.5,
    numOfReviews: 5,
    shippingAvailable: ShippingType.USPS_First_Class,
    shippingCost: "Free Shipping",
    returnPolicy: "Free 60 day returns",
    reviews:[{
        name: "user",
        comments: "comments",
        rating: "3"
    }]
}];

export { products };