import { ProductCreateInput } from "../../../inputs/ProductCreateInput";
import { ProductUpdateInput } from "../../../inputs/ProductUpdateInput";
import { ProductWhereUniqueInput } from "../../../inputs/ProductWhereUniqueInput";
export declare class UpsertOneProductArgs {
    where: ProductWhereUniqueInput;
    create: ProductCreateInput;
    update: ProductUpdateInput;
}
