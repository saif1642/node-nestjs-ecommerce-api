import { IsNotEmpty } from 'class-validator';
export class createCategoryDto {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    description: string;
}