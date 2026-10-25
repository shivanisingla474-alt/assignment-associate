"use client";

import { useEffect, useRef, useState } from "react";
import { Check, ChevronLeft, ChevronRight, Copy } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { assignmentTypes, subjectCategories, allSubjects, allCountries } from "@/data/catalog";
import { buildWhatsAppMessage, buildWhatsAppUrl } from "@/lib/whatsapp";

type F = { subject: string; type: string; deadline: string; message: string; name: string; email: string; country: string };
type Errors = Partial<Record<keyof F, string>>;
const meta = ["Subject", "Details", "WhatsApp"];
const field = "mt-1.5 min-h-12 w-full rounded-md border border-ink/25 bg-white px-3 py-2";
const chip = "min-h-11 rounded-full border px-4 text-sm transition-colors";

function Err({ id, m }: { id: string; m?: string }) {
  return m ? <p id={`${id}-err`} className="mt-1.5 text-sm font-medium text-[#B42318]">{m}</p> : null;
}

export function QuickEnquiry() {
  const [step, setStep] = useState(0);
  const [cat, setCat] = useState("all");
  const [f, setF] = useState<F>({ subject: "", type: "", deadline: "", message: "", name: "", email: "", country: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [opened, setOpened] = useState(false);
  const [copied, setCopied] = useState(false);
  const heading = useRef<HTMLHeadingElement>(null);
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) { firstRender.current = false; return; }
    heading.current?.focus({ preventScroll: true });
  }, [step]);

  const set = (k: keyof F, v: string) => setF((p) => ({ ...p, [k]: v }));
  const onInput = (k: keyof F) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => set(k, e.target.value);
  const aria = (k: keyof F) => ({ "aria-invalid": errors[k] ? true : undefined, "aria-describedby": errors[k] ? `q-${k}-err` : undefined });

  const subjects = cat === "all" ? allSubjects() : (subjectCategories.find((c) => c.slug === cat)?.subjects ?? []);
  const text = buildWhatsAppMessage({ name: f.name.trim(), email: f.email.trim(), country: f.country.trim(), assignmentType: f.type, subject: f.subject.trim(), level: "", wordCount: "", deadline: f.deadline, message: f.message.trim(), documents: "" });
  const url = buildWhatsAppUrl(text);

  function next() {
    if (step === 0) {
      if (!f.subject.trim()) { setErrors({ subject: "Choose a subject, or type yours." }); return; }
    } else if (step === 1) {
      const e: Errors = {};
      if (!f.type) e.type = "Choose the type of assignment.";
      if (f.message.trim().length < 10) e.message = "Describe what the assignment asks for in at least a sentence.";
      if (!f.name.trim()) e.name = "Enter your name.";
      if (!f.email.trim()) e.email = "Enter your email address.";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.trim())) e.email = "Enter a valid email address, such as name@example.com.";
      if (!f.country.trim()) e.country = "Enter the country you are in.";
      if (Object.keys(e).length) { setErrors(e); document.getElementById(`q-${Object.keys(e)[0]}`)?.focus(); return; }
    }
    setErrors({}); setStep((s) => s + 1);
  }
  function openWhatsApp() { if (url) { window.open(url, "_blank", "noopener,noreferrer"); setOpened(true); } }
  async function copy() { try { await navigator.clipboard.writeText(text); setCopied(true); setTimeout(() => setCopied(false), 2500); } catch { setCopied(false); } }

  return (
    <div className="mx-auto w-full max-w-3xl rounded-2xl bg-white p-5 text-ink shadow-2xl shadow-black/30 sm:p-8">
      <ol className="flex items-center" aria-label="Progress">
        {meta.map((m, i) => (
          <li key={m} className="flex flex-1 items-center last:flex-none" aria-current={i === step ? "step" : undefined}>
            <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-semibold transition-all ${i < step ? "bg-brand text-white" : i === step ? "bg-brand text-white ring-4 ring-brand/20" : "border border-rule bg-white text-ink-soft"}`}>{i < step ? <Check aria-hidden size={16} /> : i + 1}</span>
            <span className={`ml-2 text-sm font-medium ${i === step ? "" : "hidden sm:inline"}`}>{m}</span>
            {i < meta.length - 1 && <span aria-hidden className="mx-3 h-0.5 flex-1 rounded bg-rule"><span className="block h-full rounded bg-brand transition-all duration-500" style={{ width: i < step ? "100%" : "0%" }} /></span>}
          </li>
        ))}
      </ol>

      <div key={step} className="panel-in mt-7">
        {step === 0 && (
          <div>
            <h3 ref={heading} tabIndex={-1} className="text-2xl font-medium outline-none">Which subject is your assignment in?</h3>
            <div role="group" aria-label="Subject category" className="-mx-1 mt-4 flex gap-2 overflow-x-auto px-1 pb-2">
              {[{ slug: "all", title: "All subjects" }, ...subjectCategories].map((c) => (
                <button key={c.slug} type="button" aria-pressed={cat === c.slug} onClick={() => setCat(c.slug)} className={`${chip} shrink-0 ${cat === c.slug ? "border-ink bg-ink text-white" : "border-rule bg-white hover:border-brand"}`}>{c.title}</button>
              ))}
            </div>
            <div role="group" aria-label="Subjects" className="mt-3 flex max-h-56 flex-wrap gap-2 overflow-y-auto pr-1">
              {subjects.map((s) => (
                <button key={s.slug} type="button" aria-pressed={f.subject === s.title} onClick={() => { set("subject", s.title); setErrors({}); }} className={`${chip} ${f.subject === s.title ? "border-brand bg-brand text-white" : "border-rule bg-[#F8EAEC]/60 hover:border-brand"}`}>{s.title}</button>
              ))}
            </div>
            <div className="mt-5">
              <label htmlFor="q-subject" className="font-medium">Not listed? Type your subject</label>
              <input id="q-subject" value={f.subject} onChange={onInput("subject")} className={field} {...aria("subject")} />
              <Err id="q-subject" m={errors.subject} />
            </div>
          </div>
        )}

        {step === 1 && (
          <div>
            <h3 ref={heading} tabIndex={-1} className="text-2xl font-medium outline-none">Tell us about the assignment</h3>
            <p className="mt-1 text-ink-soft">Subject: <strong className="font-medium text-ink">{f.subject}</strong></p>
            <fieldset className="mt-4">
              <legend className="font-medium">Assignment type</legend>
              <div className="mt-2 flex flex-wrap gap-2">
                {assignmentTypes.map((t) => (
                  <button key={t.slug} type="button" id={t.slug === assignmentTypes[0].slug ? "q-type" : undefined} aria-pressed={f.type === t.title} onClick={() => set("type", t.title)} className={`${chip} ${f.type === t.title ? "border-brand bg-brand text-white" : "border-rule bg-white hover:border-brand"}`}>{t.title}</button>
                ))}
                <button type="button" aria-pressed={f.type === "Other"} onClick={() => set("type", "Other")} className={`${chip} ${f.type === "Other" ? "border-brand bg-brand text-white" : "border-rule bg-white hover:border-brand"}`}>Other</button>
              </div>
              <Err id="q-type" m={errors.type} />
            </fieldset>
            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <div><label htmlFor="q-deadline" className="font-medium">Deadline <span className="font-normal text-ink-soft">(optional)</span></label><input id="q-deadline" type="date" value={f.deadline} onChange={onInput("deadline")} className={field} /></div>
              <div><label htmlFor="q-country" className="font-medium">Country you are in</label><input id="q-country" list="q-countries" autoComplete="country-name" value={f.country} onChange={onInput("country")} className={field} {...aria("country")} /><datalist id="q-countries">{allCountries.map((c) => <option key={c} value={c} />)}</datalist><Err id="q-country" m={errors.country} /></div>
            </div>
            <div className="mt-5"><label htmlFor="q-message" className="font-medium">What does the assignment ask for?</label><textarea id="q-message" rows={4} value={f.message} onChange={onInput("message")} className={field} {...aria("message")} /><p className="mt-1.5 text-sm text-ink-soft">Topic, word count, level and referencing style help us a lot.</p><Err id="q-message" m={errors.message} /></div>
            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <div><label htmlFor="q-name" className="font-medium">Your name</label><input id="q-name" autoComplete="name" value={f.name} onChange={onInput("name")} className={field} {...aria("name")} /><Err id="q-name" m={errors.name} /></div>
              <div><label htmlFor="q-email" className="font-medium">Email address</label><input id="q-email" type="email" autoComplete="email" value={f.email} onChange={onInput("email")} className={field} {...aria("email")} /><Err id="q-email" m={errors.email} /></div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div aria-live="polite">
            <h3 ref={heading} tabIndex={-1} className="text-2xl font-medium outline-none">Your WhatsApp message is ready</h3>
            <p className="mt-1 text-ink-soft">Check it, then open WhatsApp and press send. We receive your enquiry only when you send it.</p>
            <div className="mt-5 rounded-xl bg-paper-deep p-4 sm:p-5">
              <div className="relative ml-auto max-w-[95%] rounded-xl rounded-tr-sm bg-white p-4 text-[0.95rem] leading-snug shadow-sm sm:max-w-[85%]">
                <pre className="whitespace-pre-wrap font-sans">{text}</pre>
              </div>
            </div>
            {opened && <p className="mt-4 rounded-md bg-paper-deep p-3 text-sm"><strong>It has not been sent yet.</strong> WhatsApp should have opened in a new tab. Press send there to reach us.</p>}
            {!url && <p className="mt-4 rounded-md bg-paper-deep p-3 text-sm text-[#B42318]">WhatsApp could not be opened from here, so nothing has been sent. Please try again in a little while.</p>}
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <button type="button" onClick={openWhatsApp} disabled={!url} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-ink px-6 font-medium text-white shadow-sm transition-colors hover:bg-brand-dark disabled:opacity-50"><WhatsAppIcon className="h-5 w-5" />{opened ? "Open WhatsApp again" : "Open WhatsApp"}</button>
              <button type="button" onClick={copy} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-brand px-6 font-medium text-brand hover:bg-brand hover:text-white">{copied ? <><Check aria-hidden size={18} />Copied</> : <><Copy aria-hidden size={18} />Copy message</>}</button>
            </div>
          </div>
        )}
      </div>

      <div className="mt-8 flex items-center justify-between gap-3 border-t border-rule pt-5">
        {step > 0 ? <button type="button" onClick={() => { setErrors({}); setStep((s) => s - 1); }} className="inline-flex min-h-12 items-center gap-1 rounded-md px-3 font-medium text-ink-soft hover:text-ink"><ChevronLeft aria-hidden size={18} />Back</button> : <span />}
        {step < 2 && <button type="button" onClick={next} className="inline-flex min-h-12 items-center gap-1 rounded-md bg-brand px-7 font-medium text-white shadow-sm transition-colors hover:bg-ink">{step === 0 ? "Continue" : "Prepare my message"}<ChevronRight aria-hidden size={18} /></button>}
      </div>
    </div>
  );
}
