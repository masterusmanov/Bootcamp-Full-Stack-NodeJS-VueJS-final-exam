import { Column, DataType, Model, Table, HasMany } from "sequelize-typescript";
import { Order } from "../../orders/models/order.model";

interface StatusCreationAttrs{
    name: string;
};

@Table({tableName: 'status'})
export class Status extends Model<Status, StatusCreationAttrs> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;

    @Column({
        type: DataType.STRING,
    })
    name: string;

    @HasMany(() => Order)
    order: Order;
}
