import type { NextConfig } from "next";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;

function supabaseMediaRemotePattern() {
  if (!supabaseUrl) {
    return null;
  }

  try {
    const { protocol, hostname } = new URL(supabaseUrl);
    const normalizedProtocol = protocol.replace(":", "") as "http" | "https";

    return {
      protocol: normalizedProtocol,
      hostname,
      pathname: "/storage/v1/object/public/**",
    };
  } catch {
    return null;
  }
}

const supabasePattern = supabaseMediaRemotePattern();

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [...(supabasePattern ? [supabasePattern] : [])],
  },
};

export default nextConfig;
