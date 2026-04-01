import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const src = path.join(__dirname, "..", "..", "src", "pages", "Portfolio.tsx");
let s = fs.readFileSync(src, "utf8");

s = `"use client";\n\n${s}`;
s = s.replace(/export default function Portfolio/, "export default function PortfolioPage");

const out = path.join(__dirname, "..", "app", "portfolio", "page.tsx");
fs.mkdirSync(path.dirname(out), { recursive: true });
fs.writeFileSync(out, s);
console.log("Wrote", out);
