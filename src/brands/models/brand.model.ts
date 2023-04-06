import { Column, DataType, Model, Table, HasMany } from "sequelize-typescript";
import { Product } from "../../products/models/product.model";

interface BrandsCreationAttrs{
    brandName: string;
};

@Table({tableName: 'brands'})
export class Brands extends Model<Brands, BrandsCreationAttrs> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    brandName: string;

   @HasMany(() => Product)
   product: Product;
}
