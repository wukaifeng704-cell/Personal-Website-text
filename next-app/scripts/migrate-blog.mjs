import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const src = path.join(__dirname, "..", "..", "src", "pages", "Blog.tsx");
let s = fs.readFileSync(src, "utf8");

s = `"use client";\n\n${s}`;
s = s.replace(/from '\.\.\/lib\/utils'/, "from '@/lib/utils'");
s = s.replace(/export default function Blog/, "export default function BlogPage");

const out = path.join(__dirname, "..", "app", "blog", "page.tsx");
fs.mkdirSync(path.dirname(out), { recursive: true });
fs.writeFileSync(out, s);
console.log("Wrote", out);
