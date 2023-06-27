import { query } from "./db.js";
import { emptyOrRows } from "../helper.js";
import { v1 as uuidv1 } from 'uuid';

const getAll = async () => {
  const rows = await query(`SELECT * FROM product`);
  const data = emptyOrRows(rows);
  return data;
};

const getByQuery = async (q) => {
  const rows = await query(
    'SELECT * FROM product WHERE product_name LIKE ? OR brand LIKE ?', 
    ['%' + q + '%', '%' + q + '%'],
  )
  const data = emptyOrRows(rows);
  return data;
}

const productService = {
  getAll,
  getByQuery
}

export default productService