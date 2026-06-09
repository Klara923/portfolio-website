import type { NextConfig } from "next";

function apiMediaRemotePattern() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? "http://127.0.0.1:8000";

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

const apiPattern = apiMediaRemotePattern();

const nextConfig: NextConfig = {
  transpilePackages: ["@splinetool/react-spline", "@splinetool/runtime"],
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "8000",
        pathname: "/media/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "8000",
        pathname: "/media/**",
      },
      ...(apiPattern ? [apiPattern] : []),
    ],
  },
};

export default nextConfig;
