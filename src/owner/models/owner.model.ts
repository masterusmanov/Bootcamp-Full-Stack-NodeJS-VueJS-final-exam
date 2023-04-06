import { Column, DataType, Model, Table, HasMany } from "sequelize-typescript";
import { StoreLocation } from "../../store_location/models/store_location.model";

interface OwnerCreationAttrs{
    name: string;
    email: string;
    phoneNumber: string;
};

@Table({tableName: 'owner'})
export class Owner extends Model<Owner, OwnerCreationAttrs> {
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

    @Column({
        type: DataType.STRING,
    })
    email: string;

    @Column({
        type: DataType.STRING,
    })
    phoneNumber: string;

    @HasMany(() => StoreLocation)
    storeLocation: StoreLocation;
}
