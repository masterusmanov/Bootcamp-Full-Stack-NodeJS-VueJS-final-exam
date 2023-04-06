import { BelongsTo, Column, DataType, Model, Table, ForeignKey, HasMany } from "sequelize-typescript";
import { Users } from "../../users/models/user.models";
import { Product } from "../../products/models/product.model";
import { StoreLocation } from "../../store_location/models/store_location.model";
import { Payments } from "../../payments/models/payment.model";
import { Status } from "../../status/models/status.model";


interface OrderCreationAttrs{
    customerId: number;
    productId: number;
    storeLocationId: number;
    deliveryDate: Date;
    statusId: string;
    amount: number;
    pricePerItems: number
    totalPrice: string;
    address: string;
    zipCode: string;
};

@Table({tableName: 'order', createdAt: false, updatedAt: false})
export class Order extends Model<Order, OrderCreationAttrs> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;

    @ForeignKey(() => Users)
    @Column({
        type: DataType.INTEGER,
    })
    customerId: number;

    @ForeignKey(() => Product)
    @Column({
        type: DataType.INTEGER,
    })
    productId: number;

    @Column({
        type: DataType.DATE,
        defaultValue: new Date()
    })
    date: Date;

    @Column({
        type: DataType.DATE
    })
    deliveryDate: Date; 

    @ForeignKey(() => Status)
    @Column({
        type: DataType.INTEGER,
    })
    statusId: number;

    @Column({
        type: DataType.INTEGER,
    })
    amount: number;

    @Column({
        type: DataType.INTEGER,
    })
    pricePerItems: number

    @Column({
        type: DataType.STRING,
    })
    totalPrice: string;

    @ForeignKey(() => StoreLocation)
    @Column({
        type: DataType.INTEGER,
    })
    storeLocationId: number;

    @Column({
        type: DataType.STRING,
    })
    address: string;

    @Column({
        type: DataType.INTEGER,
    })
    zipCode: number;

    @HasMany(() => Payments)
    payments: Payments;

    @BelongsTo(() => Users)
    user: Users;

    @BelongsTo(() => Product)
    product: Product;

    @BelongsTo(() => Status)
    status: Status;

    @BelongsTo(() => StoreLocation)
    storeLocation: StoreLocation;
}
