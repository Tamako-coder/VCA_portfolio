#!/bin/bash

# Clean up duplicate files in assets folder

ASSETS_DIR="/Users/jojod/Documents/Work/Project/Websites/Veritasindo/verita-nextjs/public/assets"

echo "================================================"
echo "Duplicate File Cleanup"
echo "================================================"
echo ""

# Count duplicates
DUPLICATE_COUNT=$(find "$ASSETS_DIR" -maxdepth 1 -type f -name "* 2.*" | wc -l | tr -d ' ')

if [ "$DUPLICATE_COUNT" -eq 0 ]; then
    echo "✅ No duplicate files found!"
    exit 0
fi

echo "Found $DUPLICATE_COUNT duplicate files (ending with ' 2.ext')"
echo ""
echo "Files to be deleted:"
echo ""

# List files that will be deleted
find "$ASSETS_DIR" -maxdepth 1 -type f -name "* 2.*" | while read file; do
    echo "  - $(basename "$file")"
done

echo ""
read -p "Delete these files? (y/n): " -n 1 -r
echo ""

if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo ""
    echo "Deleting duplicate files..."

    DELETED=0
    find "$ASSETS_DIR" -maxdepth 1 -type f -name "* 2.*" | while read file; do
        rm "$file"
        DELETED=$((DELETED + 1))
        echo "  ✅ Deleted: $(basename "$file")"
    done

    echo ""
    echo "================================================"
    echo "Cleanup Complete!"
    echo "================================================"
    echo "Deleted $DUPLICATE_COUNT duplicate files"
else
    echo "Cleanup cancelled."
fi
