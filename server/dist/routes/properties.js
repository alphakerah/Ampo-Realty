"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propertyRouter = void 0;
const express_1 = require("express");
const router = (0, express_1.Router)();
exports.propertyRouter = router;
const sampleProperties = [
    {
        id: 'p1',
        title: 'Cielo Residences',
        city: 'Makati',
        price: 38600000,
        type: 'Penthouse',
        score: 9.6,
        currency: 'PHP'
    },
    {
        id: 'p2',
        title: 'Azure Villa',
        city: 'Batangas',
        price: 52400000,
        type: 'Beachfront',
        score: 9.8,
        currency: 'PHP'
    }
];
router.get('/', (_req, res) => {
    res.json({ data: sampleProperties });
});
router.get('/:id', (req, res) => {
    const property = sampleProperties.find((item) => item.id === req.params.id);
    if (!property) {
        return res.status(404).json({ error: 'Property not found.' });
    }
    res.json({ data: property });
});
