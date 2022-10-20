import { GraphQLResolveInfo } from "graphql";
import { UpsertOneOrderArgs } from "./args/UpsertOneOrderArgs";
import { Order } from "../../../models/Order";
export declare class UpsertOneOrderResolver {
    upsertOneOrder(ctx: any, info: GraphQLResolveInfo, args: UpsertOneOrderArgs): Promise<Order>;
}
