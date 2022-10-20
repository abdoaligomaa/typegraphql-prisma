import { GraphQLResolveInfo } from "graphql";
import { UpdateOneOrderArgs } from "./args/UpdateOneOrderArgs";
import { Order } from "../../../models/Order";
export declare class UpdateOneOrderResolver {
    updateOneOrder(ctx: any, info: GraphQLResolveInfo, args: UpdateOneOrderArgs): Promise<Order | null>;
}
