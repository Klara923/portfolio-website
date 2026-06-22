import type { NextConfig } from "next";

function apiMediaRemotePattern() {
  const apiUrl =
    process.env.NEXT_PUBLIC_API_URL ?? "http://127.0.0.1:8000/api";

  try {
    const { protocol, hostname, port } = new URL(apiUrl);
    const normalizedProtocol = protocol.replace(":", "") as "http" | "https";

    return {
      protocol: normalizedProtocol,
      hostname,
      ...(port ? { port } : {}),
      pathname: "/media/**",
    };
  } catch {
    return null;
  }
}

function supabaseMediaRemotePattern() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
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

const apiPattern = apiMediaRemotePattern();
const supabasePattern = supabaseMediaRemotePattern();

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      ...(apiPattern ? [apiPattern] : []),
      {
        protocol: "http",
        hostname: "localhost",
        port: "8000",
        pathname: "/media/**",
      },
      ...(supabasePattern ? [supabasePattern] : []),
    ],
  },
};

export default nextConfig;
