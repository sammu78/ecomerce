import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// MongoDB Connection
const MONGO_URI = process.env.MONGODB_URI || 'mongodb+srv://sameer63031_db_user:k3gzmSeu28EqcCQw@cluster0.bhfxjod.mongodb.net/ecommerce?appName=Cluster0';
mongoose.connect(MONGO_URI)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// Schemas
const productSchema = new mongoose.Schema({
    id: String,
    url: String,
    detailUrl: String,
    title: Object,
    price: Object,
    quantity: Number,
    description: String,
    discount: String,
    tagline: String
});

const Product = mongoose.model('Product', productSchema);

// Initial Data - 20 Products
const products = [
    // 1. Sandwich Maker
    {
        id: 'product1',
        url: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600&auto=format&fit=crop&q=60',
        detailUrl: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=1200&auto=format&fit=crop&q=80',
        title: { shortTitle: 'Sandwich Makers', longTitle: 'Flipkart SmartBuy Sandwich 01 Grill (Black)' },
        price: { mrp: 1499, cost: 899, discount: '40%' },
        quantity: 1,
        description: 'Non-stick sandwich toaster, easy to use. Make delicious grilled sandwiches at home.',
        discount: 'From 99+5% Off',
        tagline: 'Best Seller'
    },
    // 2. Resistance Tube
    {
        id: 'product2',
        url: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=500&auto=format&fit=crop&q=60',
        detailUrl: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=1200&auto=format&fit=crop&q=80',
        title: { shortTitle: 'Fitness Gear', longTitle: 'AJRO DEAL New Resistance Tube (Multicolor)' },
        price: { mrp: 499, cost: 166, discount: '66%' },
        quantity: 1,
        description: 'Unique product to tone muscles. Perfect for home workouts and resistance training.',
        discount: 'Upto 70% Off',
        tagline: 'Deal of the Day'
    },
    // 3. Smart Watch
    {
        id: 'product3',
        url: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&auto=format&fit=crop&q=60',
        detailUrl: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=1200&auto=format&fit=crop&q=80',
        title: { shortTitle: 'Smart Watches', longTitle: 'Molife Sense 500 Smartwatch (Black Strap, Regular)' },
        price: { mrp: 6999, cost: 4049, discount: '42%' },
        quantity: 1,
        description: 'The Molife Sense 500, a brilliant smartwatch with a beautiful large display and health tracking features.',
        discount: 'Grab Now',
        tagline: 'Best Seller'
    },
    // 4. Hair Dryer
    {
        id: 'product4',
        url: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=500&auto=format&fit=crop&q=60',
        detailUrl: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=1200&auto=format&fit=crop&q=80',
        title: { shortTitle: 'Trimmers, Dryers & more', longTitle: 'Nova Professional NHP 8220 Hair Dryer (1800 W, Multicolor)' },
        price: { mrp: 1899, cost: 1124, discount: '40%' },
        quantity: 1,
        description: 'Professional hair dryer for salon-like styling at home. Powerful and gentle on hair.',
        discount: 'From ₹499',
        tagline: 'Kubra, Nova & more'
    },
    // 5. Gaming Headset
    {
        id: 'product5',
        url: 'https://images.unsplash.com/photo-1599669454699-248893623440?w=500&auto=format&fit=crop&q=60',
        detailUrl: 'https://images.unsplash.com/photo-1599669454699-248893623440?w=1200&auto=format&fit=crop&q=80',
        title: { shortTitle: 'Headphones', longTitle: 'Razer Kraken X Multi-Platform Wired Gaming Headset' },
        price: { mrp: 4999, cost: 2499, discount: '50%' },
        quantity: 1,
        description: 'Immersive 7.1 Surround Sound for Positional Audio: Outfitted with custom-tuned 40 mm drivers.',
        discount: 'Flat 50% Off',
        tagline: 'Gamer\'s Choice'
    },
    // 6. Running Shoes
    {
        id: 'product6',
        url: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60',
        detailUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1200&auto=format&fit=crop&q=80',
        title: { shortTitle: 'Shoes', longTitle: 'Nike Air Max 270 React Men\'s Running Shoes' },
        price: { mrp: 12995, cost: 7999, discount: '38%' },
        quantity: 1,
        description: 'The Nike Air Max 270 React delivers superior comfort and style.',
        discount: 'Special Price',
        tagline: 'Just Do It'
    },
    // 7. DSLR Camera
    {
        id: 'product7',
        url: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&auto=format&fit=crop&q=60',
        detailUrl: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1200&auto=format&fit=crop&q=80',
        title: { shortTitle: 'Cameras', longTitle: 'Canon EOS 1500D DSLR Camera Body+ 18-55 mm IS II Lens' },
        price: { mrp: 39999, cost: 32999, discount: '17%' },
        quantity: 1,
        description: 'Capture high-quality images with the Canon EOS 1500D.',
        discount: 'Best Saver',
        tagline: 'Top Rated'
    },
    // 8. Backpack
    {
        id: 'product8',
        url: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format&fit=crop&q=60',
        detailUrl: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=1200&auto=format&fit=crop&q=80',
        title: { shortTitle: 'Bags', longTitle: 'American Tourister 32 L Backpack (Black)' },
        price: { mrp: 2500, cost: 1200, discount: '52%' },
        quantity: 1,
        description: 'Durable and stylish backpack for travel and daily use.',
        discount: 'More than 50% Off',
        tagline: 'Travel in Style'
    },
    // 9. Chair
    {
        id: 'product9',
        url: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=500&auto=format&fit=crop&q=60',
        detailUrl: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=1200&auto=format&fit=crop&q=80',
        title: { shortTitle: 'Furniture', longTitle: 'Green Soul Ergonomic Office Chair' },
        price: { mrp: 15000, cost: 8990, discount: '40%' },
        quantity: 1,
        description: 'High-back ergonomic chair with mesh back for breathability.',
        discount: 'Work From Home',
        tagline: 'Comfort First'
    },
    // 10. Sunglasses
    {
        id: 'product10',
        url: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&auto=format&fit=crop&q=60',
        detailUrl: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=1200&auto=format&fit=crop&q=80',
        title: { shortTitle: 'Eyewear', longTitle: 'Ray-Ban Aviator Sunglasses (Gold Frame)' },
        price: { mrp: 8500, cost: 6500, discount: '23%' },
        quantity: 1,
        description: 'Classic Ray-Ban aviators. Timeless style.',
        discount: 'Luxury',
        tagline: 'Cool Look'
    },
    // 11. Lipstick
    {
        id: 'product11',
        url: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=500&auto=format&fit=crop&q=60',
        detailUrl: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=1200&auto=format&fit=crop&q=80',
        title: { shortTitle: 'Beauty', longTitle: 'MAC Matte Lipstick - Ruby Woo' },
        price: { mrp: 1900, cost: 1750, discount: '8%' },
        quantity: 1,
        description: 'The iconic Ruby Woo shade. Long-lasting matte finish.',
        discount: 'Bestseller',
        tagline: 'Beauty Essential'
    },
    // 12. Plant
    {
        id: 'product12',
        url: 'https://images.pexels.com/photos/2123482/pexels-photo-2123482.jpeg?auto=compress&cs=tinysrgb&w=600',
        detailUrl: 'https://images.pexels.com/photos/2123482/pexels-photo-2123482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        title: { shortTitle: 'Home Decor', longTitle: 'Indoor Potted Snake Plant' },
        price: { mrp: 999, cost: 499, discount: '50%' },
        quantity: 1,
        description: 'Air purifying snake plant. Easy to maintain.',
        discount: 'Green Deal',
        tagline: 'Fresh Air'
    },
    // 13. Teddy Bear
    {
        id: 'product13',
        url: 'https://images.pexels.com/photos/708774/pexels-photo-708774.jpeg?auto=compress&cs=tinysrgb&w=600',
        detailUrl: 'https://images.pexels.com/photos/708774/pexels-photo-708774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        title: { shortTitle: 'Toys', longTitle: 'Giant Soft Teddy Bear (4 Feet)' },
        price: { mrp: 2999, cost: 1499, discount: '50%' },
        quantity: 1,
        description: 'Soft and cuddly teddy bear. Perfect gift for loved ones.',
        discount: 'Gift Special',
        tagline: 'Soft & Cuddly'
    },
    // 14. Laptop
    {
        id: 'product14',
        url: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&auto=format&fit=crop&q=60',
        detailUrl: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=1200&auto=format&fit=crop&q=80',
        title: { shortTitle: 'Laptops', longTitle: 'Apple MacBook Air M1 (Silver, 256GB)' },
        price: { mrp: 99900, cost: 74900, discount: '25%' },
        quantity: 1,
        description: 'Supercharged by the Apple M1 chip. Battery life up to 18 hours.',
        discount: 'Apple Days',
        tagline: 'Power Efficient'
    },
    // 15. Coffee Mug
    {
        id: 'product15',
        url: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=600',
        detailUrl: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        title: { shortTitle: 'Kitchen', longTitle: 'Ceramic Coffee Mug (Set of 2)' },
        price: { mrp: 899, cost: 399, discount: '55%' },
        quantity: 1,
        description: 'Minimalist ceramic mugs for your morning coffee.',
        discount: 'Daily Use',
        tagline: 'Morning Vibes'
    },
    // 16. Yoga Mat
    {
        id: 'product16',
        url: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500&auto=format&fit=crop&q=60',
        detailUrl: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=1200&auto=format&fit=crop&q=80',
        title: { shortTitle: 'Fitness', longTitle: 'Premium Non-Slip Yoga Mat' },
        price: { mrp: 1599, cost: 799, discount: '50%' },
        quantity: 1,
        description: 'Eco-friendly yoga mat with alignment lines.',
        discount: 'Yoga Day',
        tagline: 'Stay Fit'
    },
    // 17. Bluetooth Speaker
    {
        id: 'product17',
        url: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&auto=format&fit=crop&q=60',
        detailUrl: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=1200&auto=format&fit=crop&q=80',
        title: { shortTitle: 'Audio', longTitle: 'JBL Flip 5 Waterproof Portable Speaker' },
        price: { mrp: 9999, cost: 6999, discount: '30%' },
        quantity: 1,
        description: 'Bold sound for every adventure. 12 hours of playtime.',
        discount: 'Music Feast',
        tagline: 'Sound On'
    },
    // 18. Denim Jacket
    {
        id: 'product18',
        url: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=500&auto=format&fit=crop&q=60',
        detailUrl: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=1200&auto=format&fit=crop&q=80',
        title: { shortTitle: 'Clothing', longTitle: 'Men\'s Classic Denim Jacket' },
        price: { mrp: 3999, cost: 1499, discount: '62%' },
        quantity: 1,
        description: 'Classic fit denim jacket. A wardrobe staple.',
        discount: 'Clearance',
        tagline: 'Fashion'
    },
    // 19. Cushion Covers
    {
        id: 'product19',
        url: 'https://images.pexels.com/photos/1248583/pexels-photo-1248583.jpeg?auto=compress&cs=tinysrgb&w=600',
        detailUrl: 'https://images.pexels.com/photos/1248583/pexels-photo-1248583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        title: { shortTitle: 'Decor', longTitle: 'Printed Cushion Covers (Set of 5)' },
        price: { mrp: 999, cost: 399, discount: '60%' },
        quantity: 1,
        description: 'Add a splash of color to your living room with these digitally printed covers.',
        discount: 'Home Decor',
        tagline: 'Comfort'
    },
    // 20. Water Bottle (NEW Pexels Image)
    {
        id: 'product20',
        url: 'https://images.pexels.com/photos/1342529/pexels-photo-1342529.jpeg?auto=compress&cs=tinysrgb&w=600',
        detailUrl: 'https://images.pexels.com/photos/1342529/pexels-photo-1342529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        title: { shortTitle: 'Kitchen', longTitle: 'Stainless Steel Insulated Water Bottle (1L)' },
        price: { mrp: 1200, cost: 650, discount: '45%' },
        quantity: 1,
        description: 'Keeps water cold for 24 hours and hot for 12 hours.',
        discount: 'Hydration',
        tagline: 'Stay Hydrated'
    }
];

const categories = [
    { image: "https://cdn-icons-png.flaticon.com/128/372/372973.png", name: "Grocery" },
    { image: "https://cdn-icons-png.flaticon.com/128/15/15707.png", name: "Mobiles" },
    { image: "https://cdn-icons-png.flaticon.com/128/1198/1198308.png", name: "Fashion" },
    { image: "https://cdn-icons-png.flaticon.com/128/911/911514.png", name: "Electronics" },
    { image: "https://cdn-icons-png.flaticon.com/128/2203/2203124.png", name: "Home" },
    { image: "https://cdn-icons-png.flaticon.com/128/3659/3659933.png", name: "Appliances" },
    { image: "https://cdn-icons-png.flaticon.com/128/826/826070.png", name: "Travel" },
    { image: "https://cdn-icons-png.flaticon.com/128/3081/3081840.png", name: "Beauty, Toys" }
];

// Seed Database
const seedDB = async () => {
    try {
        await Product.deleteMany({});
        await Product.insertMany(products);
        console.log('Database Seeded');
    } catch (err) {
        console.log('Seed Error', err);
    }
}
seedDB();

// APIs

// Get Products with Search Logic
app.get('/api/products', async (req, res) => {
    try {
        const query = req.query.q;
        let filter = {};
        if (query) {
            filter = {
                $or: [
                    { 'title.longTitle': { $regex: query, $options: 'i' } },
                    { 'title.shortTitle': { $regex: query, $options: 'i' } },
                    { 'tagline': { $regex: query, $options: 'i' } }
                ]
            };
        }
        const data = await Product.find(filter);
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// GET Single Product by ID
app.get('/api/products/:id', async (req, res) => {
    try {
        const product = await Product.findOne({ 'id': req.params.id });
        if (product) {
            res.json(product);
        } else {
            res.status(404).json({ message: "Product not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.get('/api/categories', (req, res) => {
    res.json(categories);
});

// Mock Login
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    if (username === 'user' && password === 'pass') {
        res.json({ success: true, user: { username: 'Sameer', email: 'sameer@test.com' } });
    } else {
        res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
});

let cart = [];

app.get('/api/cart', (req, res) => {
    res.json(cart);
});

app.post('/api/cart', (req, res) => {
    const product = req.body;
    cart.push(product);
    res.json({ success: true, cart: cart });
});

app.delete('/api/cart/:id', (req, res) => {
    const id = req.params.id;
    const index = cart.findIndex(item => item.id == id);
    if (index > -1) {
        cart.splice(index, 1);
    }
    res.json({ success: true, cart: cart });
});

app.post('/api/cart/checkout', (req, res) => {
    cart = [];
    res.json({ success: true, message: "Order Placed Successfully!" });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
