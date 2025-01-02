import { CreateVoucherDto } from './createVoucher.dto';
import { PartialType } from '@nestjs/mapped-types';

export class EditVoucherDto extends PartialType(CreateVoucherDto) {}
