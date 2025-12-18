import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity'; 

@Injectable()
export class ProductsService {
  //macking data "comping Products"10 items
private products: Product[] = [ 
    { id: 1, name: 'Product 1', price: 10.99, description: 'Description for Product 1' },
    { id: 2, name: 'Product 2', price: 15.99, description: 'Description for Product 2' },
    { id: 3, name: 'Product 3', price: 20.99, description: 'Description for Product 3' }, 
    { id: 4, name: 'Product 4', price: 25.99, description: 'Description for Product 4' },
    { id: 5, name: 'Product 5', price: 30.99, description: 'Description for Product 5' },
    { id: 6, name: 'Product 6', price: 35.99, description: 'Description for Product 6' },
    { id: 7, name: 'Product 7', price: 40.99, description: 'Description for Product 7' },
    { id: 8, name: 'Product 8', price: 45.99, description: 'Description for Product 8' },
    { id: 9, name: 'Product 9', price: 50.99, description: 'Description for Product 9' },
    { id: 10, name: 'Product 10', price: 55.99, description: 'Description for Product 10' },
  
  ]; 
  
  create(createProductDto: CreateProductDto) { 

    const newId = this.products.length > 0 ? Math.max(...this.products.map(p => p.id)) + 1 : 1; 

     

    const newProduct: Product = { 

      id: newId, 

      ...createProductDto, // นำข้อมูลจาก DTO (name, price, description) มาใส่เลย 

      description: createProductDto.description || '', 

    }; 

 

    this.products.push(newProduct); 

    return newProduct; 

  } 

 

  findAll() { 

    return this.products; 

  } 

 

  findOne(id: number) { 

    return this.products.find(product => product.id === id); 

  } 

 

  update(id: number, updateProductDto: UpdateProductDto) { 

    const productIndex = this.products.findIndex(product => product.id === id); 

    if (productIndex !== -1) { 

      const updatedProduct = { 

        ...this.products[productIndex], 

        ...updateProductDto, 

      }; 

      this.products[productIndex] = updatedProduct; 

      return updatedProduct; 

    } 

    return null; 

  } 

 

  remove(id: number) { 

    const productIndex = this.products.findIndex(product => product.id === id); 

    if (productIndex !== -1) { 

      this.products.splice(productIndex, 1); 

      return { deleted: true }; 

    } 

    return { deleted: false }; 

 

  } 
}







