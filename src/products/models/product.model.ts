import { BelongsTo, Column, DataType, Model, Table, ForeignKey, HasMany } from "sequelize-typescript";
import { Categories } from "../../categories/models/category.model";
import { Brands } from "../../brands/models/brand.model";
import { Supplier } from "../../suppliers/models/supplier.model";
import { Review } from "../../reviews/models/review.model";
import { ShoppingCarts } from "../../shopping_carts/models/shopping_cart.model";
import { Order } from "../../orders/models/order.model";


interface ProductCreationAttrs{
    productName: string;
    user_photo: string;
    newOrDifferent: string;
    price: string;
    stock: string;
    categoryId: number;
    brandId: number;
    supplierId: number;
};

@Table({tableName: 'product', createdAt: false, updatedAt: false})
export class Product extends Model<Product, ProductCreationAttrs> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;

    @Column({
        type: DataType.STRING,
    })
    productName: string;

    @Column({
        type: DataType.STRING,
    })
    user_photo: string;
    
    @Column({
        type: DataType.STRING,
    })
    description: string;

    @Column({
        type: DataType.STRING,
    })
    price: string;

    @Column({
        type: DataType.STRING,
    })
    stock: string;

    @ForeignKey(() => Categories)
    @Column({
        type: DataType.INTEGER,
    })
    categoryId: number;

    @ForeignKey(() => Brands)
    @Column({
        type: DataType.INTEGER,
    })
    brandId: number;

    @ForeignKey(() => Supplier)
    @Column({
        type: DataType.INTEGER,
    })
    supplierId: number;

    @HasMany(() => Review)
    review: Review;

    @HasMany(() => ShoppingCarts)
    shoppingCarts: ShoppingCarts;

    @HasMany(() => Order)
    order: Order;

    @BelongsTo(() => Categories)
    category: Categories;

    @BelongsTo(() => Brands)
    brands: Brands;

    @BelongsTo(() => Supplier)
    supplier: Supplier;

}
