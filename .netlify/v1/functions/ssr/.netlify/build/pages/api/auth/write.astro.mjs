import { s as supabase } from '../../../chunks/supabase_CRSAPNhW.mjs';
export { renderers } from '../../../renderers.mjs';

await supabase.from("coupon_products").insert({
  asin: "B0BQC4Y4TP",
  productTitle: "Samsung 653 L Frost Free Convertible 5In1, Digital Inverter Wi-Fi Enabled Side by Side Refrigerator (RS76CG8003S9HL, Refined Inox 2023 Model)"
}).select();

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
