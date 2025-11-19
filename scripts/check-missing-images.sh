#!/bin/bash

# Script to find missing images in the documentation

echo "=========================================="
echo "Missing Images Report"
echo "=========================================="
echo ""

# Temporary files to store results
MISSING_FILE=$(mktemp)
FOUND_FILE=$(mktemp)
REFS_FILE=$(mktemp)

# Cleanup on exit
trap "rm -f $MISSING_FILE $FOUND_FILE $REFS_FILE" EXIT

# Find all markdown files and extract image paths
find content -name "*.md" -type f | while IFS= read -r md_file; do
  grep -o '!\[.*\](/images/[^)]*' "$md_file" | grep -o '/images/[^)]*' | while IFS= read -r img_path; do
    if [ -n "$img_path" ]; then
      # Remove /images/ prefix to get filename
      img_filename=$(basename "$img_path")

      # Track reference
      echo "$img_filename|$md_file" >> "$REFS_FILE"

      # Check if image exists
      if [ -f "public/images/$img_filename" ]; then
        echo "$img_filename" >> "$FOUND_FILE"
      else
        echo "$img_filename" >> "$MISSING_FILE"
      fi
    fi
  done
done

# Get unique images
sort -u "$MISSING_FILE" -o "$MISSING_FILE" 2>/dev/null || true
sort -u "$FOUND_FILE" -o "$FOUND_FILE" 2>/dev/null || true

# Count results
MISSING_COUNT=$(wc -l < "$MISSING_FILE" | tr -d ' ')
FOUND_COUNT=$(wc -l < "$FOUND_FILE" | tr -d ' ')

# Print missing images
echo "🔴 MISSING IMAGES ($MISSING_COUNT):"
echo "=========================================="
if [ "$MISSING_COUNT" -eq 0 ]; then
  echo "✅ No missing images found!"
else
  while IFS= read -r img; do
    if [ -n "$img" ]; then
      echo ""
      echo "❌ $img"
      echo -n "   Referenced in: "
      grep "^$img|" "$REFS_FILE" | cut -d'|' -f2 | head -3 | tr '\n' ', ' | sed 's/,$//'
      ref_count=$(grep -c "^$img|" "$REFS_FILE")
      if [ "$ref_count" -gt 3 ]; then
        echo " (and $((ref_count - 3)) more)"
      else
        echo ""
      fi
    fi
  done < "$MISSING_FILE"
fi

echo ""
echo ""
echo "✅ FOUND IMAGES ($FOUND_COUNT):"
echo "=========================================="
while IFS= read -r img; do
  if [ -n "$img" ]; then
    echo "✓ $img"
  fi
done < "$FOUND_FILE"

echo ""
echo ""
echo "📊 SUMMARY:"
echo "=========================================="
echo "Total unique images referenced: $((MISSING_COUNT + FOUND_COUNT))"
echo "Found: $FOUND_COUNT"
echo "Missing: $MISSING_COUNT"

# Generate a file list for easy copying
if [ "$MISSING_COUNT" -gt 0 ]; then
  echo ""
  echo ""
  echo "📝 Missing images list (for easy reference):"
  echo "=========================================="
  cat "$MISSING_FILE"

  # Save to a file
  cp "$MISSING_FILE" missing-images.txt
  echo ""
  echo "✅ Missing images list saved to: missing-images.txt"
fi
