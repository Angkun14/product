import { Test, TestingModule } from '@nestjs/testing';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';

describe('ProductsController', () => {
  let controller: ProductsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsController],
      providers: [ProductsService],
    }).compile();

    controller = module.get<ProductsController>(ProductsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

// Mock data for 10 product examples
const mockProducts = [
  { id: 1, name: 'Laptop', price: 999.99, description: 'High-performance laptop' },
  { id: 2, name: 'Smartphone', price: 699.99, description: 'Latest smartphone model' },
  { id: 3, name: 'Headphones', price: 199.99, description: 'Noise-cancelling headphones' },
  { id: 4, name: 'Tablet', price: 499.99, description: '10-inch tablet' },
  { id: 5, name: 'Smartwatch', price: 299.99, description: 'Fitness tracking smartwatch' },
  { id: 6, name: 'Keyboard', price: 79.99, description: 'Mechanical keyboard' },
  { id: 7, name: 'Mouse', price: 49.99, description: 'Wireless mouse' },
  { id: 8, name: 'Monitor', price: 299.99, description: '27-inch 4K monitor' },
  { id: 9, name: 'Printer', price: 149.99, description: 'All-in-one printer' },
  { id: 10, name: 'Router', price: 89.99, description: 'Wi-Fi 6 router' },
];
