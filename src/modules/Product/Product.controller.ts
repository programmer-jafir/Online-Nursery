import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { ProductServices } from "./Product.service";

const createProduct = catchAsync(async (req, res) => {
  const result = await ProductServices.createProduct(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,

    success: true,

    message: "Product is created successfully",

    data: result,
  });
});

const getAllProducts = catchAsync(async (req, res) => {
    const searchTerm: string = req.query.searchTerm?.toString() || '';
    const result = await ProductServices.getAllProduct(searchTerm);

  sendResponse(res, {
    statusCode: httpStatus.OK,

    success: true,

    message: "Product are is retrieved successfully",

    data: result,
  });
});

const getSingleProduct = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await ProductServices.getProductById(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,

    success: true,

    message: "Product is retrieved successfully",

    data: result,
  });
});

const updateProduct = catchAsync(async (req, res) => {
    const {id} = req.params;
    const result = await ProductServices.updatedProductById(id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,

    success: true,

    message: "Product is updated successfully",

    data: result,
  });
});
const deleteProduct = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await ProductServices.deleteProductById(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,

    success: true,

    message: "Product is deleted successfully",

    data: result,
  });
});

export const ProductControllers = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
