const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();

app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('layout', 'layout');

app.get('/', (req, res) => {
    res.render('index', { title: 'หน้าแรก' });
});

app.get('/product', (req, res) => {
    const dataId = req.query.id; 

    let info = "ไม่พบข้อมูล";
    if (dataId === '1') {
        info = "ข้อมูลรายการที่ 1";
    }

    res.render('product', {
        title: 'รายละเอียดข้อมูล',
        id: dataId,
        detailInfo: info
    });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'เกี่ยวกับเรา' });
});
app.get('/showProduct', (req, res) => {
    const myProducts = [
        { id: 'P010', name: 'RJ45 Connector LINK (100 Pack)', price: 550.00, quantity: 10 },
        { id: 'P011', name: 'สายแลน CAT6 UTP Cable 305m LINK', price: 3200.00, quantity: 5 },
        { id: 'P012', name: 'คีมเข้าหัวแลน Crimping Tool LINK', price: 450.00, quantity: 8 },
        { id: 'P013', name: 'TP-Link Gigabit Switch 8 Port', price: 790.00, quantity: 15 },
        { id: 'P014', name: 'เครื่องเทสสายแลน Network Cable Tester', price: 290.00, quantity: 12 },
        { id: 'P015', name: 'TP-Link Archer AX55 Wi-Fi 6 Router', price: 2190.00, quantity: 7 },
        { id: 'P016', name: 'สายแพทช์คอร์ด CAT6 Patch Cord 2m LINK', price: 95.00, quantity: 30 },
        { id: 'P017', name: 'ปลั๊กตัวเมีย CAT6 Modular Jack LINK', price: 120.00, quantity: 25 },
        { id: 'P018', name: 'กล่องติดลอย 1 ช่อง Surface Box LINK', price: 45.00, quantity: 40 },
        { id: 'P019', name: 'ตัวรับสัญญาณ USB Wi-Fi Adapter AC1300', price: 490.00, quantity: 14 }
    ];

    const page = parseInt(req.query.page) || 1;
    const limit = 3;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const paginatedProducts = myProducts.slice(startIndex, endIndex);
    const totalPages = Math.ceil(myProducts.length / limit);

    res.render('showProduct', {
        title: 'รายการอุปกรณ์เครือข่ายทั้งหมด',
        products: paginatedProducts,
        currentPage: page,
        totalPages: totalPages,
        limit: limit,
        startIndex: startIndex
    });
});


app.listen(3000, () => {
    console.log('Server is running on port 3000 (http://localhost:3000)');
});
