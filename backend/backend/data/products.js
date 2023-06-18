const { Product } = require('../models/Product');

async function createInitialProductData() {
  try {
    // Create product data
    const products = [
      {
        productId: "wter-001",
        name: "Singha Drinking Water 600 ml.",
        description:
          "Stay hydrated throughout the day with SINGHA Drinking Water, purified drinking water that includes cutting-edge technology such as the Smart Micro Filter, making Singha Drinking Water more than just clean but also packed with essential minerals for your health.",
        price: 7,
        countInStock: 10,
        uom: 'Bottles',
        imageUrl:
          "https://st.bigc-cs.com/public/media/catalog/product/07/88/8850999320007/8850999320007_1-20230608165233-.jpg",
      },
      {
        productId: "ric-001",
        name: "Banjarong Jasmine rice 5 kg.",
        description:
          "Benjarong jasmine rice 100% Made of pure riue and through the production process standards. Fragrant and Delicious taste of real jusmine rice with full benefits for body. The best for cooking",
        price: 165.00,
        countInStock: 6,
        uom: 'Bags',
        imageUrl:
          "https://st.bigc-cs.com/public/media/catalog/product/89/88/8851702199989/8851702199989_1-20221222181503-.jpg",
      },
      {
        productId: "bana-001",
        name: "Banana",
        description:
          "The highest quality fruits and vegetables from standardized plantations to your hands.",
        price: 39,
        countInStock: 12,
        uom: 'Bunches',
        imageUrl:
          "https://st.bigc-cs.com/public/media/catalog/product/42/20/2000000501642/2000000501642_1_1.jpg",
      },
      {
        productId: "bred-001",
        name: "Farmhouse Royal Bread 250 G",
        description:
          "Premium quality, Meticulous production process, Great for a variety of dishes.",
        price: 7,
        uom: 'Bag',
        countInStock: 5,
        imageUrl:
          "https://st.bigc-cs.com/public/media/catalog/product/06/88/8850123111006/8850123111006_1-20221115143539-.jpg",
        
      },
      {
        productId: "mil-001",
        name: "Meiji Pasteurized Milk Plain Flavor 830 ml.",
        description:
          "Meiji Pasteurized Milk is delicious milk made of high-quality cow milk. It is also a great source of protein and calcium which help promote body growth and build healthy bones, teeth, and muscles.",
        price: 7,
        countInStock: 3,
        uom: 'Bottles',
        imageUrl:
          "https://st.bigc-cs.com/public/media/catalog/product/11/88/8850329183111/8850329183111.jpg",
        
      },
    ];

    await Product.insertMany(products);

    console.log('Initial product data created');
  } catch (error) {
    throw new Error('Error creating initial product data: ' + error.message);
  }
}

module.exports = createInitialProductData;
