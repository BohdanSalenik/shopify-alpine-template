/**
 * imports
 */
import './css/main.css'
import Alpine from 'alpinejs'
import mask from '@alpinejs/mask'
import intersect from '@alpinejs/intersect'
import persist from '@alpinejs/persist'
import focus from '@alpinejs/focus'
import collapse from '@alpinejs/collapse'
import morph from '@alpinejs/morph'
//plugins
Alpine.plugin(mask)
Alpine.plugin(intersect)
Alpine.plugin(persist)
Alpine.plugin(focus)
Alpine.plugin(collapse)
Alpine.plugin(morph)
//global alpine instance
window.Alpine = Alpine

//STORES & COMPONENTS
import {mobileMenu} from "@/alpine-js/store/mobile-menu";
import {ProductGallery} from "@/alpine-js/components/product-gallery";
import {ProductVariantSelector} from "@/alpine-js/components/product-variant-selector";
import {TemplateSwitch} from "@/alpine-js/components/template-switch";
import {AddressesSwitch} from "@/alpine-js/components/addresses-switch";

//store
Alpine.store('mobile-menu', mobileMenu);

//components
Alpine.data('ProductGallery', ProductGallery);
Alpine.data('ProductVariantSelector', ProductVariantSelector);
Alpine.data('TemplateSwitch', TemplateSwitch);
Alpine.data('AddressesSwitch', AddressesSwitch);

Alpine.start()