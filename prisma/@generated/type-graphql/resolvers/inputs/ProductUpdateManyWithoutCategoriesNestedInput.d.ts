import { ProductCreateOrConnectWithoutCategoriesInput } from "../inputs/ProductCreateOrConnectWithoutCategoriesInput";
import { ProductCreateWithoutCategoriesInput } from "../inputs/ProductCreateWithoutCategoriesInput";
import { ProductScalarWhereInput } from "../inputs/ProductScalarWhereInput";
import { ProductUpdateManyWithWhereWithoutCategoriesInput } from "../inputs/ProductUpdateManyWithWhereWithoutCategoriesInput";
import { ProductUpdateWithWhereUniqueWithoutCategoriesInput } from "../inputs/ProductUpdateWithWhereUniqueWithoutCategoriesInput";
import { ProductUpsertWithWhereUniqueWithoutCategoriesInput } from "../inputs/ProductUpsertWithWhereUniqueWithoutCategoriesInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";
export declare class ProductUpdateManyWithoutCategoriesNestedInput {
    create?: ProductCreateWithoutCategoriesInput[] | undefined;
    connectOrCreate?: ProductCreateOrConnectWithoutCategoriesInput[] | undefined;
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoriesInput[] | undefined;
    set?: ProductWhereUniqueInput[] | undefined;
    disconnect?: ProductWhereUniqueInput[] | undefined;
    delete?: ProductWhereUniqueInput[] | undefined;
    connect?: ProductWhereUniqueInput[] | undefined;
    update?: ProductUpdateWithWhereUniqueWithoutCategoriesInput[] | undefined;
    updateMany?: ProductUpdateManyWithWhereWithoutCategoriesInput[] | undefined;
    deleteMany?: ProductScalarWhereInput[] | undefined;
}
