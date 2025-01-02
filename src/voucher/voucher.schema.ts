import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';


@Schema()
export class Voucher extends Document {

    @Prop({ required: true})
    name: string;

    @Prop({required: true, unique: true})
    voucherCode: string;

    @Prop({required: true, enum:['percentage','fixed']})
    discountType: string;

    @Prop({required:true})
    discountValue: number;

    @Prop({default:null})
    minCartValue: number;

    @Prop({default:null})
    maxDiscount: number;

    @Prop({required:true})
    activationDate: Date;

    @Prop({required:true})
    expiryDate: Date;

    @Prop({default:1})
    usageLimit: number;

    @Prop({default:true})
    isActive: boolean;

    @Prop({default:0})
    totalUsageCount: number;

    @Prop({
        type: [String],
        default: [],
        description: 'Array of user IDs who have used this voucher'
    })
    usedBy: string[];

    @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User', required: true })
    createdBy: string;

    @Prop({default: false})
    reusable: boolean;

    @Prop({
        type: Object,
        default: {},
        description: 'Categories for eligibility, e.g., {gender: "male", ageRange: [18, 60], userType: "new"}',
    })
    eligibilityCriteria: {
        gender?: string;
        ageRange?: [number, number];
        userType?: 'new' | 'old' ;
    };
}

export const VoucherSchema = SchemaFactory.createForClass(Voucher);

VoucherSchema.pre('save', function (next) {
    if (this.discountType === 'fixed') {
        this.maxDiscount = this.discountValue; // Automatically set maxDiscount for fixed type
    }
    next();
});