import type { APIRoute } from 'astro';
import { supabase } from "../../../lib/supabase";


const { data, error } = await supabase
	.from("coupon_products")
	.insert({
		asin: "B0BQC4Y4TP",
		productTitle:
			"Samsung 653 L Frost Free Convertible 5In1, Digital Inverter Wi-Fi Enabled Side by Side Refrigerator (RS76CG8003S9HL, Refined Inox 2023 Model)",
	})
	.select();