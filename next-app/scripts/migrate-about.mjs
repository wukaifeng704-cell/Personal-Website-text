import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const src = path.join(__dirname, "..", "..", "src", "pages", "About.tsx");
let s = fs.readFileSync(src, "utf8");

s = `"use client";\n\n${s}`;
s = s.replace(/import \{ Link \} from 'react-router-dom';/, "import Link from 'next/link';");
s = s.replace(/from '\.\.\/data\/timelines'/, "from '@/data/timelines'");
s = s.replace(/from '\.\.\/lib\/utils'/, "from '@/lib/utils'");
s = s.replace(/to=/g, "href=");
s = s.replace(/export default function About/, "export default function AboutPage");

const out = path.join(__dirname, "..", "app", "about", "page.tsx");
fs.mkdirSync(path.dirname(out), { recursive: true });
fs.writeFileSync(out, s);
console.log("Wrote", out);
