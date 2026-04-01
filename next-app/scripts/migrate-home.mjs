import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const src = path.join(root, "..", "src", "pages", "Home.tsx");
let s = fs.readFileSync(src, "utf8");

s = `"use client";\n\n${s}`;

s = s.replace(
  /import \{ Link \} from 'react-router-dom';/,
  "import Link from 'next/link';\nimport Image from 'next/image';"
);
s = s.replace(/from '\.\.\/config\/socialLinks'/, "from '@/config/socialLinks'");
s = s.replace(/from '\.\.\/lib\/utils'/, "from '@/lib/utils'");
s = s.replace(
  /from '\.\.\/components\/AbilityMatrixDouble'/,
  "from '@/components/ability-matrix-double'"
);
s = s.replace(/to=/g, "href=");
s = s.replace(/export default function Home/, "export default function HomePage");

const imgBlock = `<img
                src="/avatar-wu-lab-wide.png"
                alt="老吴AI实验室"
                className="h-full w-full object-cover object-[center_28%] transition-transform duration-700 ease-out group-hover:scale-[1.015] lg:absolute lg:inset-0 lg:min-h-full"
                loading="eager"
                decoding="async"
              />`;

const imgNext = `<Image
                src="/avatar-wu-lab-wide.png"
                alt="老吴AI实验室"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                priority
                className="object-cover object-[center_28%] transition-transform duration-700 ease-out group-hover:scale-[1.015] lg:min-h-full"
              />`;

s = s.replace(imgBlock, imgNext);

const out = path.join(root, "components", "home-page.tsx");
fs.writeFileSync(out, s);
console.log("Wrote", out);
