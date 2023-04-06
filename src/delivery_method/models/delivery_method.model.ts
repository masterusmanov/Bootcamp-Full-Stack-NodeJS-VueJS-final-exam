import { Column, DataType, Model, Table, HasMany } from "sequelize-typescript";
import { Supplier } from "../../suppliers/models/supplier.model";

interface DeliveryMethodCreationAttrs{
    name: string;
};

@Table({tableName: 'delivery_method'})
export class DeliveryMethod extends Model<DeliveryMethod, DeliveryMethodCreationAttrs> {
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

    @HasMany(() => Supplier)
    supplier: Supplier;
}
