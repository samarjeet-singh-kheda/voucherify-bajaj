import { IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';

export class UseVoucherDto {
  @IsNotEmpty()
  @IsString()
  voucherCode: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  cartValue: number;
}
