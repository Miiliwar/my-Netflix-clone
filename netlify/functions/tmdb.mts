// Proxies requests to TMDB so the API key stays on the server.
// /api/tmdb/trending/all/week?language=en-US -> https://api.themoviedb.org/3/trending/all/week?...&api_key=...
export default async (req: Request) => {
  const apiKey = Netlify.env.get("TMDB_API_KEY") || Netlify.env.get("VITE_TMDB_API_KEY");
  if (!apiKey) {
    return Response.json(
      { error: "TMDB_API_KEY environment variable is not set" },
      { status: 500 },
    );
  }

  const url = new URL(req.url);
  const path = url.pathname.replace(/^\/api\/tmdb/, "");
  const target = new URL(`https://api.themoviedb.org/3${path}`);
  url.searchParams.forEach((value, key) => {
    if (key !== "api_key") target.searchParams.set(key, value);
  });
  target.searchParams.set("api_key", apiKey);

  const res = await fetch(target);
  return new Response(res.body, {
    status: res.status,
    headers: {
      "Content-Type": res.headers.get("Content-Type") ?? "application/json",
      "Cache-Control": res.ok ? "public, max-age=600" : "no-store",
    },
  });
};

export const config = {
  path: "/api/tmdb/*",
};
