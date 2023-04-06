import { Column, DataType, Model, Table, HasMany, ForeignKey, BelongsTo } from "sequelize-typescript";
import { Order } from "../../orders/models/order.model";
import { Owner } from "../../owner/models/owner.model";

interface StoreLocationCreationAttrs{
    name: string;
    region: string;
    district: string;
    address: string;
    location: string;
    ownerId: number;
};

@Table({tableName: 'store'})
export class StoreLocation extends Model<StoreLocation, StoreLocationCreationAttrs> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;

    @Column({
        type: DataType.STRING
    })
    name: string;
    
    @Column({
        type: DataType.STRING
    })
    region: string;

    @Column({
        type: DataType.STRING
    })
    district: string;

    @Column({
        type: DataType.STRING
    })
    address: string;

    @Column({
        type: DataType.STRING
    })
    location: string;

    @ForeignKey(() => Owner)
    @Column({
        type: DataType.INTEGER
    })
    ownerId: number;

    @HasMany(() => Order)
    order: Order;

    @BelongsTo(() => Owner)
    owner: Owner;
}
