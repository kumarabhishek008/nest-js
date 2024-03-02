import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'Name should not be empty' })
  @IsString({ message: 'Name should be string' })
  name: string;

  @IsNotEmpty({ message: 'Age should not be empty' })
  @IsNumber({}, { message: 'Age should be number type' })
  age: number;

  @IsOptional()
  @IsNumber({}, { message: 'Age should be number type' })
  address?: string;

  @IsOptional()
  city?: string;

  @IsOptional()
  state?: string;
}
