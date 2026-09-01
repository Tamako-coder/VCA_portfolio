#!/bin/bash

# Bulk Image to WebP Converter for PT. Veritasindo
# Converts JPG, JPEG, and PNG files to WebP format

echo "================================================"
echo "Image to WebP Bulk Converter"
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

# Source folder (your images location)
SOURCE_FOLDER="/Users/jojod/Downloads/IMAGES"

# Output folder (project work folder)
OUTPUT_FOLDER="/Users/jojod/Documents/Work/Project/Websites/Veritasindo/verita-nextjs/public/work"

# Create output folder if it doesn't exist
mkdir -p "$OUTPUT_FOLDER"

# Check if source folder exists
if [ ! -d "$SOURCE_FOLDER" ]; then
    echo "❌ Error: Folder not found: $SOURCE_FOLDER"
    exit 1
fi

# Count image files
IMAGE_COUNT=$(find "$SOURCE_FOLDER" -maxdepth 1 -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) | wc -l | tr -d ' ')

if [ "$IMAGE_COUNT" -eq 0 ]; then
    echo "❌ No image files found in: $SOURCE_FOLDER"
    exit 1
fi

echo "Source folder: $SOURCE_FOLDER"
echo "Found $IMAGE_COUNT image files"
echo "Output folder: $OUTPUT_FOLDER"
echo ""
echo "Quality setting: 80 (good balance of size/quality)"
echo ""
read -p "Press Enter to start conversion..."
echo ""

# Convert all image files
CONVERTED=0
FAILED=0
TOTAL_SIZE_BEFORE=0
TOTAL_SIZE_AFTER=0

for file in "$SOURCE_FOLDER"/*.jpg "$SOURCE_FOLDER"/*.jpeg "$SOURCE_FOLDER"/*.JPG "$SOURCE_FOLDER"/*.JPEG "$SOURCE_FOLDER"/*.png "$SOURCE_FOLDER"/*.PNG; do
    if [ -f "$file" ]; then
        filename=$(basename "$file")
        name="${filename%.*}"

        # Get original file size
        ORIGINAL_SIZE=$(stat -f%z "$file" 2>/dev/null || stat -c%s "$file" 2>/dev/null)
        TOTAL_SIZE_BEFORE=$((TOTAL_SIZE_BEFORE + ORIGINAL_SIZE))

        echo "Converting: $filename"

        if cwebp "$file" -q 80 -o "$OUTPUT_FOLDER/$name.webp" > /dev/null 2>&1; then
            # Get converted file size
            CONVERTED_SIZE=$(stat -f%z "$OUTPUT_FOLDER/$name.webp" 2>/dev/null || stat -c%s "$OUTPUT_FOLDER/$name.webp" 2>/dev/null)
            TOTAL_SIZE_AFTER=$((TOTAL_SIZE_AFTER + CONVERTED_SIZE))

            # Calculate savings
            SAVINGS=$((100 - (CONVERTED_SIZE * 100 / ORIGINAL_SIZE)))

            CONVERTED=$((CONVERTED + 1))
            echo "  ✅ Saved: $name.webp (${SAVINGS}% smaller)"
        else
            FAILED=$((FAILED + 1))
            echo "  ❌ Failed: $filename"
        fi
        echo ""
    fi
done

# Calculate total savings
if [ $TOTAL_SIZE_BEFORE -gt 0 ]; then
    TOTAL_SAVINGS=$((100 - (TOTAL_SIZE_AFTER * 100 / TOTAL_SIZE_BEFORE)))
    SIZE_BEFORE_MB=$((TOTAL_SIZE_BEFORE / 1024 / 1024))
    SIZE_AFTER_MB=$((TOTAL_SIZE_AFTER / 1024 / 1024))
fi

echo "================================================"
echo "Conversion Complete!"
echo "================================================"
echo "Successfully converted: $CONVERTED files"
echo "Failed: $FAILED files"
echo ""
echo "Total size before: ${SIZE_BEFORE_MB} MB"
echo "Total size after:  ${SIZE_AFTER_MB} MB"
echo "Total savings:     ${TOTAL_SAVINGS}%"
echo ""
echo "WebP files saved to:"
echo "$OUTPUT_FOLDER"
echo ""
echo "Next steps:"
echo "1. Check the output folder"
echo "2. Update data/work.ts with the new .webp filenames"
echo "3. Run: npm run build"
echo ""
