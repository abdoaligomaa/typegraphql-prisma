import { OrderCreateOrConnectWithoutProductsInput } from "../inputs/OrderCreateOrConnectWithoutProductsInput";
import { OrderCreateWithoutProductsInput } from "../inputs/OrderCreateWithoutProductsInput";
import { OrderScalarWhereInput } from "../inputs/OrderScalarWhereInput";
import { OrderUpdateManyWithWhereWithoutProductsInput } from "../inputs/OrderUpdateManyWithWhereWithoutProductsInput";
import { OrderUpdateWithWhereUniqueWithoutProductsInput } from "../inputs/OrderUpdateWithWhereUniqueWithoutProductsInput";
import { OrderUpsertWithWhereUniqueWithoutProductsInput } from "../inputs/OrderUpsertWithWhereUniqueWithoutProductsInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";
export declare class OrderUpdateManyWithoutProductsNestedInput {
    create?: OrderCreateWithoutProductsInput[] | undefined;
    connectOrCreate?: OrderCreateOrConnectWithoutProductsInput[] | undefined;
    upsert?: OrderUpsertWithWhereUniqueWithoutProductsInput[] | undefined;
    set?: OrderWhereUniqueInput[] | undefined;
    disconnect?: OrderWhereUniqueInput[] | undefined;
    delete?: OrderWhereUniqueInput[] | undefined;
    connect?: OrderWhereUniqueInput[] | undefined;
    update?: OrderUpdateWithWhereUniqueWithoutProductsInput[] | undefined;
    updateMany?: OrderUpdateManyWithWhereWithoutProductsInput[] | undefined;
    deleteMany?: OrderScalarWhereInput[] | undefined;
}
