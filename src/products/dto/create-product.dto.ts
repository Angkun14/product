import { IsString, IsNumber, Min, IsNotEmpty, IsOptional } from 'class-validator'; 

export class CreateProductDto { 

    @IsString()                 
    @IsNotEmpty()               

    name: string; 

    @IsNumber()                 
    @Min(0)                    

    price: number; 

    @IsString() 
    @IsOptional()            

    description?: string; 

} 