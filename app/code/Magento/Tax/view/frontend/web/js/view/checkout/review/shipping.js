/**
 * {license_notice}
 *
 * @copyright   {copyright}
 * @license     {license_link}
 */
/*jshint browser:true jquery:true*/
/*global alert*/
define(
    [
        'jquery',
        'uiComponent',
        'Magento_Checkout/js/model/quote',
        'Magento_Catalog/js/price-utils',
        'Magento_Checkout/js/model/shipping-service'
    ],
    function ($, Component, quote, priceUtils, shippingService) {
        var displayMode = window.checkoutConfig.reviewShippingDisplayMode;
        return Component.extend({
            defaults: {
                displayMode: displayMode,
                template: 'Magento_Tax/checkout/review/shipping'
            },
            getColspan: 3,
            style: "",
            quoteIsVirtual: quote.isVirtual(),
            selectedShippingMethod: quote.getShippingMethod(),
            getTitle: function() {
                return "Shipping & Handling" + "(" + shippingService.getTitleByCode(this.selectedShippingMethod())+ ")";
            },
            getExcludingLabel: function() {
                return "Shipping Excl. Tax" + shippingService.getTitleByCode(this.selectedShippingMethod());
            },
            getIncludingLabel: function() {
                return "Shipping Incl. Tax" + shippingService.getTitleByCode(this.selectedShippingMethod());
            },
            totals: quote.getTotals(),
            isBothPricesDisplayed: function() {
                return 'both' == this.displayMode
            },
            isIncludingDisplayed: function() {
                return 'including' == this.displayMode;
            },
            isExcludingDisplayed: function() {
                return 'excluding' == this.displayMode;
            },
            getValue: function() {
                var price = 0;
                if (this.totals()) {
                    price =  this.totals().shipping_amount;
                }
                return quote.getCurrencySymbol() + priceUtils.formatPrice(price);
            },
            getIncludingValue: function() {
                var price = 0;
                if (this.totals()) {
                    price =  this.totals().shipping_incl_tax;
                }
                return quote.getCurrencySymbol() + priceUtils.formatPrice(price);
            },
            getExcludingValue: function() {
                var price = 0;
                if (this.totals()) {
                    price =  this.totals().shipping_amount;
                }
                return quote.getCurrencySymbol() + priceUtils.formatPrice(price);
            }
        });
    }
);
