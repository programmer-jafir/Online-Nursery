import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { OrderServices } from './Order.service';



const createOrder = catchAsync(async (req, res) => {
  const { user, products } = req.body;

  const result = await OrderServices.createOrder(user, products);



  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Order is created successfully',
    data: result,
  });
});

export const OrderControllers = {
    createOrder
  };
