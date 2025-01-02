import {
  IsDate,
  IsNumber,
  IsString,
  IsBoolean,
  IsOptional,
  IsEnum,
  IsArray,
  Min,
  Max,
  IsPositive,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

class EligibilityCriteriaDto {
  @IsOptional()
  @IsEnum(['male', 'female', 'other'])
  gender?: 'male' | 'female' | 'other';

  @IsOptional()
  @IsArray()
  @IsNumber({}, { each: true })
  @Min(0, { each: true })
  @Max(150, { each: true })
  ageRange?: [number, number];

  @IsOptional()
  @IsEnum(['new', 'old'])
  userType?: 'new' | 'old';
}

export class CreateVoucherDto {
  @IsString()
  name: string;

  @IsString()
  voucherCode: string;

  @IsString()
  discountType: string;

  @IsNumber()
  @IsPositive()
  discountValue: number;

  @IsPositive()
  @IsNumber()
  minCartValue?: number;

  @IsPositive()
  @IsNumber()
  maxDiscount?: number;

  @IsDate()
  @Type(() => Date)
  activationDate: Date;

  @IsDate()
  @Type(() => Date)
  expiryDate: Date;

  @IsPositive()
  @IsNumber()
  usageLimit?: number;

  @IsBoolean()
  reusable: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => EligibilityCriteriaDto)
  eligibilityCriteria?: EligibilityCriteriaDto;
}
