import { Request, Response, Router } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const router = Router();
const secret = process.env.JWT_SECRET || 'CHANGE_THIS_SECRET';

router.post('/login', async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required.' });
  }

  const mockUser = {
    id: 'agent-001',
    email: 'agent@amporealty.ph',
    passwordHash: await bcrypt.hash('SecurePass123!', 10),
    role: 'agent'
  };

  const isValid = await bcrypt.compare(password, mockUser.passwordHash);
  if (!isValid) {
    return res.status(401).json({ error: 'Invalid credentials.' });
  }

  const token = jwt.sign({ sub: mockUser.id, role: mockUser.role, email: mockUser.email }, secret, {
    expiresIn: '2h'
  });

  res.json({ token, user: { id: mockUser.id, role: mockUser.role, email: mockUser.email } });
});

export { router as authRouter };
