import { IsString, IsNumber, Min, IsNotEmpty, IsOptional, Max } from 'class-validator'; 

export class CreateProductDto { 

    @IsString()                 
    @IsNotEmpty()               

    name: string; 

    @IsNumber()                 
    @Min(0)
    @Max(100000)              

    price: number; 

    @IsString() 
    @IsOptional()            

    description?: string; 

} 