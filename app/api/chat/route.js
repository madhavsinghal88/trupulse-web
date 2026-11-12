import { askTruPulseLlm } from "@/lib/chatLlm";
import { FALLBACK } from "@/app/(site)/_components/chat/knowledge";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_MESSAGE = 2000;
const MAX_HISTORY = 8;

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, answer: FALLBACK.answer, route: FALLBACK.route }, { status: 400 });
  }

  const message = String(body?.message || "").trim();
  if (!message || message.length > MAX_MESSAGE) {
    return Response.json({ ok: false, answer: FALLBACK.answer, route: FALLBACK.route }, { status: 400 });
  }

  if (/<script|javascript:|on\w+\s*=/i.test(message)) {
    return Response.json({ ok: false, answer: FALLBACK.answer, route: FALLBACK.route, id: "FALLBACK" });
  }

  const history = Array.isArray(body?.history) ? body.history.slice(-MAX_HISTORY) : [];
  const result = await askTruPulseLlm(message, history);
  return Response.json({
    ok: Boolean(result.ok),
    answer: result.answer || FALLBACK.answer,
    route: result.route || FALLBACK.route,
    id: result.id || (result.ok ? "GPT_LUNA" : "FALLBACK"),
  });
}
