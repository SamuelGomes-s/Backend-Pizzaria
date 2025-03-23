"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddItemController = void 0;
const AddItemService_1 = require("../../services/order/AddItemService");
class AddItemController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { orderId, amount, productId } = req.body;
            const addService = new AddItemService_1.AddItemService();
            const addItem = yield addService.execute({ amount, orderId, productId });
            return res.json(addItem);
        });
    }
}
exports.AddItemController = AddItemController;
