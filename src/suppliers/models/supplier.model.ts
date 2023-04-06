import { Column, DataType, Model, Table, HasMany, ForeignKey, BelongsTo } from "sequelize-typescript";
import { DeliveryMethod } from "../../delivery_method/models/delivery_method.model";
import { Product } from "../../products/models/product.model";

interface SupplierCreationAttrs{
    deliveryServiceId: number;
    email: string;
    phoneNumber: string;
    address: string;
    zipCode: number;
};

@Table({tableName: 'supplier'})
export class Supplier extends Model<Supplier, SupplierCreationAttrs> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;

    @ForeignKey(() => DeliveryMethod)
    @Column({
        type: DataType.INTEGER
    })
    deliveryMethodId: number;

    @Column({
        type: DataType.STRING
    })
    email: string;

    @Column({
        type: DataType.STRING
    })
    phoneNumber: string;

    @Column({
        type: DataType.STRING,
    })
    address: string;
    
    @Column({
        type: DataType.INTEGER
    })
    zipCode: number;

    @HasMany(() => Product)
    product: Product
    
    @BelongsTo(() => DeliveryMethod)
    deliveryMethod: DeliveryMethod
}
