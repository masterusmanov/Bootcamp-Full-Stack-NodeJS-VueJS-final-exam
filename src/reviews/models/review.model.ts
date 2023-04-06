import { BelongsTo, Column, DataType, Model, Table, ForeignKey } from "sequelize-typescript";
import { Product } from "../../products/models/product.model";
import { Users } from "../../users/models/user.models";


interface ReviewCreationAttrs{
    productId: number;
    customerId: number;
    comment: string;
    date: Date;
};

@Table({tableName: 'review', createdAt: false, updatedAt: false})
export class Review extends Model<Review, ReviewCreationAttrs> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;

    @ForeignKey(() => Product)
    @Column({
        type: DataType.INTEGER,
    })
    productId: number;

    @ForeignKey(() => Users)
    @Column({
        type: DataType.INTEGER,
    })
    userId: number;

    @Column({
        type: DataType.STRING,
    })
    comment: string;

    @Column({
        type: DataType.DATE,
        defaultValue: new Date(),
    })
    date: Date;

    @BelongsTo(() => Product)
    product: Product;

    @BelongsTo(() => Users)
    user: Users;
}
