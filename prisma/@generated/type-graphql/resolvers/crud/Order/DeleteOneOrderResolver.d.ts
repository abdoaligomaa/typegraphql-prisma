import { GraphQLResolveInfo } from "graphql";
import { DeleteOneOrderArgs } from "./args/DeleteOneOrderArgs";
import { Order } from "../../../models/Order";
export declare class DeleteOneOrderResolver {
    deleteOneOrder(ctx: any, info: GraphQLResolveInfo, args: DeleteOneOrderArgs): Promise<Order | null>;
}
