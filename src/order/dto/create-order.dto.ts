import { IsNotEmpty, IsNumber } from 'class-validator';
export class createOrderDto {
    @IsNotEmpty()
    @IsNumber()
    user_id: number;

    @IsNotEmpty()
    @IsNumber()
    product_id: number;
}