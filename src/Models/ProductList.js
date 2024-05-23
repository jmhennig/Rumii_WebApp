// Seeds the MongoDB database with product data using Mongoose.
import Product from './ProductModel';

// Array of product data
const productsData = [
    { id: 1, name: 'Night Shift', pop: 'Neutral', price: '$32.00', rating: 5 },
    { id: 2, name: 'Night Shift', pop: 'Pop', price: '$32.00', rating: 5 },
    { id: 3, name: 'The Frontliner', pop: 'Neutral', price: '$32.00', rating: 5 },
    { id: 4, name: 'The Frontliner', pop: 'Pop', price: '$32.00', rating: 5 },
    { id: 5, name: 'Full Moon', pop: 'Neutral', price: '$32.00', rating: 5 },
    { id: 6, name: 'Full Moon', pop: 'Pop', price: '$32.00', rating: 5 },
    { id: 7, name: 'Boost Blue', pop: 'Neutral', price: '$32.00', rating: 5 },
    { id: 8, name: 'Boost Blue', pop: 'Pop', price: '$32.00', rating: 5 },
];

// Function to seed the database with product data
const seedDatabase = async () => {
    try {
        await Product.insertMany(productsData);
        console.log('Database seeded successfully.');
    } catch (error) {
        console.error('Error seeding database:', error);
    }
};

seedDatabase();

export default productsData;