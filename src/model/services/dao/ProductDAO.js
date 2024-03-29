import AbstractDAO from "./AbstractDAO.js";
import schema from "../../../../private/schema.js";

const table = 'products'
export default class ProductDAO extends AbstractDAO {
    constructor() {
        super(table.toUpperCase(), Object.keys(schema.tables[table]), schema.keyTable[table])
    }

    select_by_uid(fields, uid) {
        return super.select_all(fields, { u_id: uid });
    }
}