import { HasMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { Product } from "../../products/models/product.model";


interface CategoriesCreationAttrs{
    productCategory: string;
    description: string;
};

@Table({tableName: 'categories', createdAt: false, updatedAt: false})
export class Categories extends Model<Categories, CategoriesCreationAttrs> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;

    @Column({
        type: DataType.STRING,
    })
    productCategory: string;
    
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    description: string;

    @HasMany(() => Product)
    product: Product;
}
