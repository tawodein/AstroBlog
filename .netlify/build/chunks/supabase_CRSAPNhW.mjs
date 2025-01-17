import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  "https://wilkqohphfjywtgvhwzj.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndpbGtxb2hwaGZqeXd0Z3Zod3pqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQxMDUwMDgsImV4cCI6MjA0OTY4MTAwOH0.Ji29XRekSMZXwXchC3sFJGJSI5pZywMYdCvbqoSgVUc"
);

export { supabase as s };
