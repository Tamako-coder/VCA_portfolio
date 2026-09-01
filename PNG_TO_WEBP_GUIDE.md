# Converting PNG to WebP - Quick Guide

## Why Convert?

Your PNG images will be **2-5x larger** than WebP. Converting them will:
- Make your website load 40-50% faster
- Reduce bandwidth costs
- Improve mobile experience
- Boost SEO rankings

---

## Method 1: Online Converter (Easiest)

### CloudConvert (Free, No Install)
1. Go to: https://cloudconvert.com/png-to-webp
2. Upload your PNG files
3. Click "Convert"
4. Download the WebP files
5. Place in `public/work/`

### Squoosh (Google's Tool)
1. Go to: https://squoosh.app/
2. Drag and drop PNG files
3. Select "WebP" in the right panel
4. Adjust quality (75-85 is good balance)
5. Download
6. Place in `public/work/`

---

## Method 2: Bulk Convert with Command Line

### macOS/Linux (Using `cwebp`)

**Install:**
```bash
# macOS
brew install webp

# Ubuntu/Debian
sudo apt-get install webp
```

**Convert single file:**
```bash
cwebp input.png -q 80 -o output.webp
```

**Convert all PNG files in a folder:**
```bash
# Navigate to your PNG folder
cd ~/Downloads/project-images/

# Convert all PNG files to WebP
for file in *.png; do
    cwebp "$file" -q 80 -o "${file%.png}.webp"
done
```

**Move to project:**
```bash
mv *.webp /Users/jojod/Documents/Work/Project/Websites/Veritasindo/verita-nextjs/public/work/
```

---

## Method 3: Next.js Will Convert Automatically

**Good news:** Next.js `Image` component can accept PNG and serve WebP automatically!

You can:
1. Place your PNG files directly in `public/work/`
2. Update `data/work.ts` with PNG paths:
   ```typescript
   {
     id: "work-001",
     src: "/work/transformer-install.png",  // PNG file
     // Next.js will serve as WebP to modern browsers
   }
   ```
3. Next.js will automatically optimize and serve as WebP

**However:** The original PNG files will still be larger on your server, and the first-time optimization takes longer.

---

## Recommended Quality Settings

- **Photos:** 75-85 quality (good balance)
- **High detail:** 85-90 quality (crisp but larger)
- **Web optimized:** 70-75 quality (smaller, still good)

```bash
# Good for web (balanced)
cwebp input.png -q 80 -o output.webp

# High quality (for detailed technical photos)
cwebp input.png -q 85 -o output.webp

# Aggressive compression (smaller files)
cwebp input.png -q 75 -o output.webp
```

---

## Expected Results

**Example:**
- Original PNG: `project-photo.png` (2.4 MB)
- Converted WebP: `project-photo.webp` (640 KB)
- **Savings: 73% smaller!**

---

## Quick Start: Use PNG Now, Optimize Later

If you want to launch quickly:

1. **Place PNG files in `public/work/`**
2. **Update `data/work.ts` with `.png` extension**
3. **Site works immediately** (Next.js optimizes on-the-fly)
4. **Convert to WebP later** for better performance

```typescript
// In data/work.ts - PNG works fine:
{
  id: "work-001",
  src: "/work/transformer-install.png",  // ✅ Works!
  alt: "Transformer installation",
  tags: ["electrical", "installation"],
  width: 1200,
  height: 800
}
```

---

## Best Practice Workflow

1. **Take photos** with your camera/phone
2. **Export as PNG** from your editing software
3. **Convert to WebP** using one of the methods above
4. **Place WebP files** in `public/work/`
5. **Update `data/work.ts`** with WebP paths
6. **Test** with `npm run dev`
7. **Build** with `npm run build`

---

## File Naming Convention

Use descriptive, lowercase names with hyphens:

✅ **Good:**
```
transformer-installation-01.webp
cubicle-lv-workshop-02.webp
electrical-panel-batam-site.webp
```

❌ **Avoid:**
```
IMG_20240901.webp
photo1.webp
New Project (2).webp
```

---

## Summary

**Option 1 (Fastest):** Use https://squoosh.app/ - drag PNGs, download WebP  
**Option 2 (Bulk):** Install `cwebp` and batch convert  
**Option 3 (Quick Start):** Use PNG now, let Next.js optimize  

**All options work!** But pre-converting to WebP gives the best performance.
