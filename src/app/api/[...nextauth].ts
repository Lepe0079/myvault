import NextAuth from "next-auth";
import { AuthOptions } from "next-auth";
import { SupabaseAdapter } from "@auth/supabase-adapter";
import { Adapter } from "next-auth/adapters";

const nextAuthOptions: AuthOptions = {
  providers: [],
  adapter: SupabaseAdapter({
    url: process.env.SUPABASE_URL!,
    secret: process.env.SUPABASE_SERVICE_ROLE_KEY!,
  }) as Adapter,
};
export default NextAuth({
  ...nextAuthOptions
});
