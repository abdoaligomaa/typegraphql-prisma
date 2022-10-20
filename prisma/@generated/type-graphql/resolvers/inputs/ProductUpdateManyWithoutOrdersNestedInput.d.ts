import { ProductCreateOrConnectWithoutOrdersInput } from "../inputs/ProductCreateOrConnectWithoutOrdersInput";
import { ProductCreateWithoutOrdersInput } from "../inputs/ProductCreateWithoutOrdersInput";
import { ProductScalarWhereInput } from "../inputs/ProductScalarWhereInput";
import { ProductUpdateManyWithWhereWithoutOrdersInput } from "../inputs/ProductUpdateManyWithWhereWithoutOrdersInput";
import { ProductUpdateWithWhereUniqueWithoutOrdersInput } from "../inputs/ProductUpdateWithWhereUniqueWithoutOrdersInput";
import { ProductUpsertWithWhereUniqueWithoutOrdersInput } from "../inputs/ProductUpsertWithWhereUniqueWithoutOrdersInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";
export declare class ProductUpdateManyWithoutOrdersNestedInput {
    create?: ProductCreateWithoutOrdersInput[] | undefined;
    connectOrCreate?: ProductCreateOrConnectWithoutOrdersInput[] | undefined;
    upsert?: ProductUpsertWithWhereUniqueWithoutOrdersInput[] | undefined;
    set?: ProductWhereUniqueInput[] | undefined;
    disconnect?: ProductWhereUniqueInput[] | undefined;
    delete?: ProductWhereUniqueInput[] | undefined;
    connect?: ProductWhereUniqueInput[] | undefined;
    update?: ProductUpdateWithWhereUniqueWithoutOrdersInput[] | undefined;
    updateMany?: ProductUpdateManyWithWhereWithoutOrdersInput[] | undefined;
    deleteMany?: ProductScalarWhereInput[] | undefined;
}
