import NextAuth from "next-auth";
import { AuthOptions } from "next-auth";
import { SupabaseAdapter } from "@auth/supabase-adapter";

const nextAuthOptions: AuthOptions = {
  providers: [],
  adapter: SupabaseAdapter({
    url: process.env.SUPABASE_URL!,
    secret: process.env.SUPABASE_SERVICE_ROLE_KEY!,
  }),
};
export default NextAuth({
  ...nextAuthOptions
});
