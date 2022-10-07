import { IsOptional, IsString } from "class-validator";

export class UpdatePostDto {

    @IsString()
    @IsOptional()
    public title: string;

    @IsString()
    @IsOptional()
    public description: string;

    // @IsString()
    // @IsOptional()
    // public createdAt: string
}