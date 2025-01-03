import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Patch,
  Req,
  UseGuards,
} from '@nestjs/common';
import { VoucherService } from './voucher.service';
import { Voucher } from './voucher.schema';
import { JwtAuthGuard } from '../user/jwt/jwt-auth.guard';
import { UseVoucherDto } from 'src/dto/useVoucher.dto';
import { CreateVoucherDto } from '../../dto/createVoucher.dto';
import { EditVoucherDto } from '../../dto/editVoucher.dto';

@Controller('voucher')
export class VoucherController {
  constructor(private readonly voucherService: VoucherService) {}

  @UseGuards(JwtAuthGuard)
  @Get('vouchers')
  async getAllVoucherByUser(@Req() req: any): Promise<Voucher[]> {
    const userId = req.user.userId;
    return this.voucherService.getAllVoucherByUser(userId);
  }

  @UseGuards(JwtAuthGuard)
  @Post('create-voucher')
  async createVoucher(
    @Body() createVoucher: CreateVoucherDto,
    @Req() req: any,
  ): Promise<Voucher> {
    return this.voucherService.createVoucher(createVoucher, req.user.userId);
  }

  @UseGuards(JwtAuthGuard)
  @Post('apply-voucher')
  async applyVoucher(@Body() useVoucherDto: UseVoucherDto, @Req() req: any) {
    return this.voucherService.applyVoucher(useVoucherDto, req.user.userId);
  }

  @UseGuards(JwtAuthGuard)
  @Post('use-voucher')
  async useVoucher(@Body() useVoucherDto: UseVoucherDto, @Req() req: any) {
    return this.voucherService.useVoucher(
      useVoucherDto.voucherCode,
      req.user.userId,
      useVoucherDto.cartValue,
    );
  }

  @UseGuards(JwtAuthGuard)
  @Delete('/delete/:id')
  async deleteVoucher(@Param('id') id: string) {
    return this.voucherService.deleteVoucher(id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch('edit-voucher/:id')
  async editVoucher(
    @Param('id') id: string,
    @Body() updateVoucherDto: EditVoucherDto,
  ): Promise<Voucher> {
    return this.voucherService.editVoucher(id, updateVoucherDto);
  }
}
