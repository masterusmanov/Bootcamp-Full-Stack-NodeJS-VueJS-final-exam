import { Column, DataType, Model, Table, HasMany, ForeignKey, BelongsTo } from "sequelize-typescript";
import { Users } from "../../users/models/user.models";
import { Product } from "../../products/models/product.model";
import { CartItems } from "../../cart_items/models/cart_item.model";


interface ShoppingCartsCreationAttrs{
    customerId: number;
    productId: number;
    addedTime: Date;
};

@Table({tableName: 'shopping_carts'})
export class ShoppingCarts extends Model<ShoppingCarts, ShoppingCartsCreationAttrs> {
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
        defaultValue: new Date(),
    })
    addedTime: Date;

    @HasMany(() => CartItems)
    cartItems: CartItems

    @BelongsTo(() => Users)
    customer: Users

    @BelongsTo(() => Product)
    product: Product
}
