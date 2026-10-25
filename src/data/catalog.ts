/** Editable catalogue: assignment types, subjects and countries. Pages, menus and filters read from here. */
export type HelpPoint = { title: string; blurb: string };
export type AssignmentType = { slug: string; title: string; short: string };
export type Subject = { slug: string; title: string; topics: string[] };
export type SubjectCategory = { slug: string; title: string; blurb: string; subjects: Subject[] };

const slugify = (s: string) => s.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const sub = (title: string, topics: string[]): Subject => ({ slug: slugify(title), title, topics });


export const assignmentTypes: AssignmentType[] = [
  { slug: "essays", title: "Essays", short: "Structured, well-developed essays tailored to your topic and brief." },
  { slug: "dissertations", title: "Dissertations", short: "Research-based dissertations organised around your requirements and methodology." },
  { slug: "theses", title: "Theses", short: "Detailed academic writing organised into coherent chapters and arguments." },
  { slug: "research-papers", title: "Research papers", short: "Research-based papers with relevant sources, analysis and academic formatting." },
  { slug: "case-studies", title: "Case studies", short: "Detailed case study write-ups applying relevant concepts to specific scenarios." },
  { slug: "reports", title: "Reports", short: "Well-structured reports with findings, analysis and recommendations." },
  { slug: "literature-reviews", title: "Literature reviews", short: "Organised reviews of relevant literature, research and academic sources." },
  { slug: "presentations", title: "Presentations", short: "Presentation content and slide materials tailored to your topic and brief." },
  { slug: "other-coursework", title: "Other coursework", short: "Customised coursework, proposals, portfolios and other academic documents." },
];


/** How we help, whatever the assignment type. */

export const commonHelp: HelpPoint[] = [
  { title: "Assignment Preparation", blurb: "Content prepared according to your assignment brief, topic and marking criteria." },
  { title: "Research and Content Development", blurb: "Relevant research, organised information and well-developed academic content." },
  { title: "Structure and Formatting", blurb: "Clear sections, logical organisation and formatting aligned with your requirements." },
  { title: "Referencing and Citations", blurb: "Citations and reference lists arranged according to your specified referencing style." },
  { title: "Proofreading and Quality Checks", blurb: "Review of grammar, clarity, consistency and presentation before delivery." },
];


export const toShare = [
  "Your assignment brief or question",
  "The marking rubric, if you have one",
  "Your notes or draft so far",
  "Word count, referencing style and deadline",
];

export const subjectCategories: SubjectCategory[] = [
  { slug: "sciences", title: "Sciences", blurb: "Natural and life sciences.", subjects: [
    sub("Biology", ["Cell biology", "Genetics", "Physiology", "Ecology"]),
    sub("Chemistry", ["Organic chemistry", "Inorganic chemistry", "Physical chemistry", "Lab report structure"]),
    sub("Physics", ["Mechanics", "Electricity and magnetism", "Thermodynamics", "Waves and optics"]),
    sub("Environmental science", ["Ecosystems", "Climate science", "Sustainability"]),
  ] },
  { slug: "maths-computing", title: "Mathematics and computing", blurb: "Quantitative subjects and programming.", subjects: [
    sub("Mathematics", ["Algebra", "Calculus", "Linear algebra", "Discrete mathematics"]),
    sub("Statistics", ["Probability", "Hypothesis testing", "Regression", "Data interpretation"]),
    sub("Computer science", ["Algorithms", "Data structures", "Databases", "Operating systems"]),
    sub("Programming", ["Python", "Java", "SQL", "Debugging approaches"]),
  ] },
  { slug: "business-management", title: "Business and management", blurb: "Business, finance and economics.", subjects: [
    sub("Business studies", ["Strategy frameworks", "Operations", "Entrepreneurship"]),
    sub("Management", ["Organisational behaviour", "Human resource management", "Project management"]),
    sub("Marketing", ["Consumer behaviour", "Marketing strategy", "Market research"]),
    sub("Accounting and finance", ["Financial accounting", "Corporate finance", "Financial statements"]),
    sub("Economics", ["Microeconomics", "Macroeconomics", "Econometrics basics"]),
  ] },
  { slug: "social-sciences", title: "Social sciences", blurb: "People, society and behaviour.", subjects: [
    sub("Psychology", ["Research methods", "Cognitive psychology", "Developmental psychology"]),
    sub("Sociology", ["Social theory", "Inequality", "Qualitative methods"]),
    sub("Criminology", ["Criminological theory", "Research methods"]),
    sub("Politics", ["Political theory", "International relations"]),
    sub("Education", ["Learning theory", "Research in education"]),
  ] },
  { slug: "humanities-languages", title: "Humanities and languages", blurb: "Writing, texts and ideas.", subjects: [
    sub("English", ["Essay structure", "Grammar and style", "Close reading"]),
    sub("Literature", ["Textual analysis", "Literary theory"]),
    sub("History", ["Source analysis", "Historiography", "Essay argument"]),
    sub("Philosophy", ["Logic and argument", "Ethics"]),
    sub("Academic writing", ["Thesis statements", "Paragraph structure", "Referencing"]),
  ] },
  { slug: "law-health-engineering", title: "Law, health and engineering", blurb: "Professional and applied fields.", subjects: [
    sub("Law", ["Legal reasoning", "Case-law analysis", "Referencing legal sources"]),
    sub("Nursing and healthcare", ["Evidence-based practice", "Reflective writing", "Research appraisal"]),
    sub("Engineering", ["Mechanics", "Circuits", "Technical report structure"]),
  ] },
];

export const countryRegions: { region: string; countries: string[] }[] = [
  { region: "Asia and Pacific", countries: ["India", "Pakistan", "Bangladesh", "Sri Lanka", "Nepal", "Singapore", "Malaysia", "Philippines", "Australia", "New Zealand"] },
  { region: "Europe", countries: ["United Kingdom", "Ireland", "Germany", "France", "Netherlands", "Spain", "Italy", "Sweden"] },
  { region: "Americas", countries: ["United States", "Canada", "Mexico", "Brazil"] },
  { region: "Middle East and Africa", countries: ["United Arab Emirates", "Saudi Arabia", "Qatar", "Nigeria", "Kenya", "Ghana", "South Africa", "Egypt"] },
];
export const allCountries = countryRegions.flatMap((r) => r.countries);

export const getType = (slug: string) => assignmentTypes.find((t) => t.slug === slug);
export const getCategory = (slug: string) => subjectCategories.find((c) => c.slug === slug);
export const getSubject = (cat: string, slug: string) => getCategory(cat)?.subjects.find((s) => s.slug === slug);
export const allSubjects = () => subjectCategories.flatMap((c) => c.subjects.map((s) => ({ ...s, category: c.slug, categoryTitle: c.title })));

/** Build an enquiry link that pre-fills the form. */
export function enquiryHref(opts: { type?: string; subject?: string; country?: string } = {}) {
  const p = new URLSearchParams();
  if (opts.type) p.set("type", opts.type);
  if (opts.subject) p.set("subject", opts.subject);
  if (opts.country) p.set("country", opts.country);
  const q = p.toString();
  return q ? `/contact?${q}` : "/contact";
}
