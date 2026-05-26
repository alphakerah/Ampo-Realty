import { Request, Response, Router } from 'express';

const router = Router();

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

router.get('/', (_req: Request, res: Response) => {
  res.json({ data: sampleProperties });
});

router.get('/:id', (req: Request, res: Response) => {
  const property = sampleProperties.find((item) => item.id === req.params.id);
  if (!property) {
    return res.status(404).json({ error: 'Property not found.' });
  }
  res.json({ data: property });
});

export { router as propertyRouter };
