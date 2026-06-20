// Generates a minimal, VALID one-page PDF placeholder for the Download CV link.
// Run: `node scripts/gen-cv-placeholder.mjs`
// Replace public/cv/CV-placeholder.pdf with the real CV when ready.
import { writeFileSync, mkdirSync } from 'node:fs'

const objects = [
  '<< /Type /Catalog /Pages 2 0 R >>',
  '<< /Type /Pages /Kids [3 0 R] /Count 1 >>',
  '<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>',
  '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>',
]

const stream = [
  'BT',
  '/F1 26 Tf',
  '72 770 Td',
  '(Lorem Ipsum) Tj',
  '/F1 14 Tf',
  '0 -30 Td',
  '(Lorem Ipsum Dolor) Tj',
  '/F1 11 Tf',
  '0 -44 Td',
  '(Placeholder CV. Replace public/cv/CV-placeholder.pdf) Tj',
  '0 -16 Td',
  '(with the real document.) Tj',
  'ET',
].join('\n')

objects.push(`<< /Length ${stream.length} >>\nstream\n${stream}\nendstream`)

let pdf = '%PDF-1.4\n'
const offsets = []
objects.forEach((body, i) => {
  offsets.push(pdf.length)
  pdf += `${i + 1} 0 obj\n${body}\nendobj\n`
})

const xrefStart = pdf.length
const size = objects.length + 1
pdf += `xref\n0 ${size}\n`
pdf += '0000000000 65535 f \n'
offsets.forEach((off) => {
  pdf += `${String(off).padStart(10, '0')} 00000 n \n`
})
pdf += `trailer\n<< /Size ${size} /Root 1 0 R >>\nstartxref\n${xrefStart}\n%%EOF\n`

mkdirSync('public/cv', { recursive: true })
writeFileSync('public/cv/CV-placeholder.pdf', pdf, 'latin1')
console.log(`wrote public/cv/CV-placeholder.pdf (${pdf.length} bytes)`)
