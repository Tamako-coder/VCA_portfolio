#!/bin/bash

# Bulk PNG to WebP Converter for PT. Veritasindo
# This script converts all PNG files in a folder to WebP format

echo "================================================"
echo "PNG to WebP Bulk Converter"
echo "================================================"
echo ""

# Check if cwebp is installed
if ! command -v cwebp &> /dev/null; then
    echo "❌ Error: cwebp is not installed."
    echo ""
    echo "To install on macOS:"
    echo "  brew install webp"
    echo ""
    echo "To install on Linux:"
    echo "  sudo apt-get install webp"
    echo ""
    exit 1
fi

# Get the source folder (where your PNG files are)
echo "Enter the full path to your PNG images folder:"
read -r SOURCE_FOLDER

if [ ! -d "$SOURCE_FOLDER" ]; then
    echo "❌ Error: Folder not found: $SOURCE_FOLDER"
    exit 1
fi

# Set output folder (your project's work folder)
OUTPUT_FOLDER="/Users/jojod/Documents/Work/Project/Websites/Veritasindo/verita-nextjs/public/work"

# Create output folder if it doesn't exist
mkdir -p "$OUTPUT_FOLDER"

# Count PNG files
PNG_COUNT=$(find "$SOURCE_FOLDER" -maxdepth 1 -type f -iname "*.png" | wc -l | tr -d ' ')

if [ "$PNG_COUNT" -eq 0 ]; then
    echo "❌ No PNG files found in: $SOURCE_FOLDER"
    exit 1
fi

echo ""
echo "Found $PNG_COUNT PNG files"
echo "Output folder: $OUTPUT_FOLDER"
echo ""
echo "Quality setting: 80 (good balance of size/quality)"
echo ""
read -p "Press Enter to start conversion..."
echo ""

# Convert all PNG files
CONVERTED=0
FAILED=0

for file in "$SOURCE_FOLDER"/*.png "$SOURCE_FOLDER"/*.PNG; do
    if [ -f "$file" ]; then
        filename=$(basename "$file")
        name="${filename%.*}"

        echo "Converting: $filename"

        if cwebp "$file" -q 80 -o "$OUTPUT_FOLDER/$name.webp" 2>&1 | grep -q "Saving"; then
            CONVERTED=$((CONVERTED + 1))
            echo "  ✅ Saved: $name.webp"
        else
            FAILED=$((FAILED + 1))
            echo "  ❌ Failed: $filename"
        fi
        echo ""
    fi
done

echo "================================================"
echo "Conversion Complete!"
echo "================================================"
echo "Successfully converted: $CONVERTED files"
echo "Failed: $FAILED files"
echo ""
echo "WebP files saved to:"
echo "$OUTPUT_FOLDER"
echo ""
echo "Next steps:"
echo "1. Check the output folder"
echo "2. Update data/work.ts with the new .webp filenames"
echo "3. Run: npm run build"
echo ""
