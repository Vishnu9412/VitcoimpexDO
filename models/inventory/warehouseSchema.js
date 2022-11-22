const { default: mongoose } = require("mongoose");

const wareHouse = mongoose.Schema({
    createdBy: {
        adminName: { type: 'string', required: true },
        date: { type: 'string', required: true },
        adminId: { type: 'string', required: true },
    },
    warehouseName: { type: 'string', required: true },
    warehouseImg: { type: 'string', required: true },
    permissions: { type: 'array', required: true },
    categories: [
        {
            createdBy: {
                adminName: { type: 'string' },
                date: { type: 'string' },
                adminId: { type: 'string' },
            },
            categoryName: { type: 'string' },
            products: [
                {
                    createdBy: {
                        adminName: { type: 'string' },
                        date: { type: 'string' },
                        adminId: { type: 'string' },
                    },
                    productName: { type: 'string' },
                    productImg: { type: 'string' },
                    unit: { type: 'string' },
                    // description: { type: 'string' },
                    rate: { type: 'string' },
                    minimumStock: { type: 'string' },
                    // maximumStock: { type: 'string' },
                    currentStock: { type: 'string',default:"0" },
                    SKU: { type: 'string' },
                    stockHistory:[]
                }
            ]
        }
    ]

});

module.exports = mongoose.model("inventory-warehouse", wareHouse);