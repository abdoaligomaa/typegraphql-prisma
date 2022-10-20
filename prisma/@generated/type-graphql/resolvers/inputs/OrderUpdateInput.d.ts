import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { ProductUpdateManyWithoutOrdersNestedInput } from "../inputs/ProductUpdateManyWithoutOrdersNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneWithoutOrdersNestedInput } from "../inputs/UserUpdateOneWithoutOrdersNestedInput";
export declare class OrderUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    customer?: UserUpdateOneWithoutOrdersNestedInput | undefined;
    products?: ProductUpdateManyWithoutOrdersNestedInput | undefined;
}
