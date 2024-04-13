import { Bussiness } from "../models/Bussiness";

export const handleGetBussinessType = async () => {
    await Bussiness.find({});
};
