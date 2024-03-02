import { IsString } from "class-validator";

export class CreateAuthDto {

    @IsString({ message: ''})
    email: string;
}
