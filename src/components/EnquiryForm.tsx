"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { assignmentTypes, allSubjects, allCountries } from "@/data/catalog";
import { buildWhatsAppMessage, buildWhatsAppUrl, type Enquiry } from "@/lib/whatsapp";

type Errors = Partial<Record<"name" | "email" | "country" | "assignmentType" | "subject" | "message", string>>;
const NOT_SURE = "Other or not sure";

function Err({ id, m }: { id: string; m?: string }) {
  return m ? <p id={`${id}-err`} className="mt-1.5 text-sm font-medium text-[#9b1c1c]">{m}</p> : null;
}

export function EnquiryForm() {
  const sp = useSearchParams();
  const initialType = assignmentTypes.find((t) => t.slug === sp.get("type"))?.title ?? "";
  const [f, setF] = useState({ name: "", email: "", country: sp.get("country") ?? "", assignmentType: initialType, subject: sp.get("subject") ?? "", level: "", wordCount: "", deadline: "", message: "", documents: "" });
  const [copied, setCopied] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [result, setResult] = useState<null | { url: string | null; text: string }>(null);
  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => setF((p) => ({ ...p, [k]: e.target.value }));

  function validate(): Errors {
    const e: Errors = {};
    if (!f.name.trim()) e.name = "Enter your name.";
    if (!f.email.trim()) e.email = "Enter your email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.trim())) e.email = "Enter a valid email address, such as name@example.com.";
    if (!f.country.trim()) e.country = "Enter the country you are in.";
    if (!f.assignmentType) e.assignmentType = "Choose an assignment type, or “Other or not sure”.";
    if (!f.subject.trim()) e.subject = "Enter your subject.";
    if (f.message.trim().length < 10) e.message = "Describe what you need in at least a sentence.";
    return e;
  }

  async function copyMessage(text: string) {
    try { await navigator.clipboard.writeText(text); setCopied(true); setTimeout(() => setCopied(false), 2500); } catch { setCopied(false); }
  }

  function onSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    const e = validate(); setErrors(e);
    if (Object.keys(e).length) { document.getElementById(`f-${Object.keys(e)[0]}`)?.focus(); return; }
    const data: Enquiry = { ...Object.fromEntries(Object.entries(f).map(([k, v]) => [k, v.trim()])) } as Enquiry;
    const text = buildWhatsAppMessage(data);
    const url = buildWhatsAppUrl(text);
    setResult({ url, text });
    if (url) window.open(url, "_blank", "noopener,noreferrer");
  }

  const field = "mt-1.5 min-h-12 w-full rounded-md border border-ink/25 bg-white/70 px-3 py-2";
  const aria = (id: keyof Errors) => ({ "aria-invalid": errors[id] ? true : undefined, "aria-describedby": errors[id] ? `f-${id}-err` : undefined });

  return (
    <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">
      <form onSubmit={onSubmit} noValidate className="space-y-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <div><label htmlFor="f-name" className="font-medium">Full name</label><input id="f-name" autoComplete="name" value={f.name} onChange={set("name")} className={field} {...aria("name")} /><Err id="f-name" m={errors.name} /></div>
          <div><label htmlFor="f-email" className="font-medium">Email address</label><input id="f-email" type="email" autoComplete="email" value={f.email} onChange={set("email")} className={field} {...aria("email")} /><Err id="f-email" m={errors.email} /></div>
          <div><label htmlFor="f-country" className="font-medium">Country you are in</label><input id="f-country" list="country-list" autoComplete="country-name" value={f.country} onChange={set("country")} className={field} {...aria("country")} /><datalist id="country-list">{allCountries.map((c) => <option key={c} value={c} />)}</datalist><p className="mt-1.5 text-sm text-ink-soft">Any country is fine. Type yours if it is not listed.</p><Err id="f-country" m={errors.country} /></div>
          <div><label htmlFor="f-deadline" className="font-medium">Deadline <span className="font-normal text-ink-soft">(optional)</span></label><input id="f-deadline" type="date" value={f.deadline} onChange={set("deadline")} className={field} /><p className="mt-1.5 text-sm text-ink-soft">Date format follows your device settings.</p></div>
          <div><label htmlFor="f-assignmentType" className="font-medium">Assignment type</label>
            <select id="f-assignmentType" value={f.assignmentType} onChange={set("assignmentType")} className={field} {...aria("assignmentType")}>
              <option value="">Choose an assignment type</option>
              {assignmentTypes.map((t) => <option key={t.slug} value={t.title}>{t.title}</option>)}
              <option value={NOT_SURE}>{NOT_SURE}</option>
            </select><Err id="f-assignmentType" m={errors.assignmentType} /></div>
          <div><label htmlFor="f-subject" className="font-medium">Subject</label>
            <input id="f-subject" list="subject-list" value={f.subject} onChange={set("subject")} className={field} {...aria("subject")} />
            <datalist id="subject-list">{allSubjects().map((s) => <option key={`${s.category}-${s.slug}`} value={s.title} />)}</datalist><Err id="f-subject" m={errors.subject} /></div>
          <div><label htmlFor="f-level" className="font-medium">Academic level <span className="font-normal text-ink-soft">(optional)</span></label>
            <select id="f-level" value={f.level} onChange={set("level")} className={field}>
              <option value="">Select level</option>
              {["School or pre-university", "Undergraduate", "Postgraduate (Master's)", "Doctoral (PhD)", "Professional course"].map((l) => <option key={l} value={l}>{l}</option>)}
            </select></div>
          <div><label htmlFor="f-wordCount" className="font-medium">Word count <span className="font-normal text-ink-soft">(optional)</span></label><input id="f-wordCount" inputMode="numeric" value={f.wordCount} onChange={set("wordCount")} placeholder="e.g. 2000" className={field} /></div>
        </div>
        <div><label htmlFor="f-message" className="font-medium">What does the assignment ask for?</label><textarea id="f-message" rows={5} value={f.message} onChange={set("message")} className={field} {...aria("message")} /><p className="mt-1.5 text-sm text-ink-soft">Course level, topics, word count, referencing style and your time zone.</p><Err id="f-message" m={errors.message} /></div>
        <div><label htmlFor="f-documents" className="font-medium">Documents <span className="font-normal text-ink-soft">(optional)</span></label><input id="f-documents" value={f.documents} onChange={set("documents")} placeholder="e.g. I will send my draft as a PDF in WhatsApp" className={field} /><p className="mt-1.5 text-sm text-ink-soft">This website does not upload files. Share documents in WhatsApp if appropriate.</p></div>
        <p className="text-sm text-ink-soft">We guide you through your own assignment. You write and submit the work yourself.</p>
        <button type="submit" className="min-h-12 rounded-md bg-brand px-7 shadow-sm font-medium text-white transition-colors hover:bg-ink">Continue to WhatsApp</button>
      </form>

      <div className="lg:sticky lg:top-28 lg:self-start" aria-live="polite">
        {!result && (
          <div className="rounded-md border-t-4 border-brand bg-paper-deep p-6"><h2 className="text-xl font-medium">What happens next</h2>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-ink-soft"><li>We prepare a message from your answers.</li><li>WhatsApp opens in a new tab.</li><li>You check it and press send.</li></ol>
            <p className="mt-3 text-sm text-ink-soft">We receive your enquiry when you press send in WhatsApp.</p></div>
        )}
        {result && (
          <div className="rounded-md border-t-4 border-brand bg-paper-deep p-6">
            {result.url ? (<>
              <h2 className="text-xl font-medium">Last step: send it on WhatsApp</h2>
              <p className="mt-2">WhatsApp should have opened in a new tab with your message ready. <strong>It has not been sent yet.</strong> Check it and press send.</p>
              <a href={result.url} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block font-medium underline underline-offset-4">Open WhatsApp again</a>
            </>) : (<>
              <h2 className="text-xl font-medium">We could not open WhatsApp</h2>
              <p className="mt-2">WhatsApp could not be opened from this page, so nothing has been sent. Please try again in a little while.</p>
            </>)}
            <p className="mt-4 text-sm font-medium">Message preview</p>
            <button type="button" onClick={() => copyMessage(result.text)} className="mt-1 inline-flex min-h-11 items-center gap-2 rounded-md border border-brand px-4 text-sm font-medium text-brand hover:bg-brand hover:text-white">{copied ? <><Check aria-hidden size={16} />Copied</> : <><Copy aria-hidden size={16} />Copy message</>}</button>
            <pre className="mt-3 max-h-64 overflow-auto whitespace-pre-wrap border border-rule bg-white/70 p-3 text-sm">{result.text}</pre>
          </div>
        )}
      </div>
    </div>
  );
}
