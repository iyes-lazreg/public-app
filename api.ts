import { API_URL } from "./config";
export async function post(path: string, data: Record<string, string>) {
  try {
    const r = await fetch(`${API_URL}${path}`, {
      method: "POST", credentials: "include",
      headers: { "Content-Type": "application/json" }, body: JSON.stringify(data),
    });
    return { ok: r.ok, status: r.status };
  } catch {
    return { ok: false, status: 0 };
  }
}
