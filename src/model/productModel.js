const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
    {
        title: { type: String, required: true, unique: true },

        description: { type: String, required: true },

        price: { type: Number, required: true },

        currencyId: { type: String, required: true },

        currencyFormat: { type: String, required: true },

        isFreeShipping: { type: Boolean, default: false },

        productImage: { type: String, required: true }, // s3 link

        style: { type: String },

        availableSizes: { type: [String], required: true, toUpperCase: true },

        installments: { type: Number },

        deletedAt: { type: Date, default: null },

        isDeleted: { type: Boolean, default: false },

    }, { versionKey: false, timestamps: true });

module.exports = mongoose.model('product', productSchema);