/**
 * Copyright © 2015 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */
/*browser:true*/
/*global define*/
define(
    [
        'uiComponent',
        'Magento_Checkout/js/model/quote',
        'Magento_Catalog/js/price-utils'
    ],
    function (Component,quote, priceUtils) {
        "use strict";
        return Component.extend({
            defaults: {
                template: 'Magento_Tax/checkout/shipping_method/price',
            },

            isDisplayShippingPriceExclTax: window.checkoutConfig.isDisplayShippingPriceExclTax,
            isDisplayShippingBothPrices: window.checkoutConfig.isDisplayShippingBothPrices,
            isPriceEqual: function(item) {
                return item.price_excl_tax != item.price_incl_tax;
            },
            getFormattedPrice: function (price) {
                //todo add format data
                return quote.getCurrencySymbol() + priceUtils.formatPrice(price)
            }

        });
    }
);
