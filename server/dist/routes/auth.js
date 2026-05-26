"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const express_1 = require("express");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const router = (0, express_1.Router)();
exports.authRouter = router;
const secret = process.env.JWT_SECRET || 'CHANGE_THIS_SECRET';
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ error: 'Email and password are required.' });
    }
    const mockUser = {
        id: 'agent-001',
        email: 'agent@amporealty.ph',
        passwordHash: await bcryptjs_1.default.hash('SecurePass123!', 10),
        role: 'agent'
    };
    const isValid = await bcryptjs_1.default.compare(password, mockUser.passwordHash);
    if (!isValid) {
        return res.status(401).json({ error: 'Invalid credentials.' });
    }
    const token = jsonwebtoken_1.default.sign({ sub: mockUser.id, role: mockUser.role, email: mockUser.email }, secret, {
        expiresIn: '2h'
    });
    res.json({ token, user: { id: mockUser.id, role: mockUser.role, email: mockUser.email } });
});
