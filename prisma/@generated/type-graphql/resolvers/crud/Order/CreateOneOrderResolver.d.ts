import { GraphQLResolveInfo } from "graphql";
import { CreateOneOrderArgs } from "./args/CreateOneOrderArgs";
import { Order } from "../../../models/Order";
export declare class CreateOneOrderResolver {
    createOneOrder(ctx: any, info: GraphQLResolveInfo, args: CreateOneOrderArgs): Promise<Order>;
}
