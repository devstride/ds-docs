#!/bin/bash

# Source directory
SOURCE_DIR="$HOME/git/devstride/devstride-docs/.gitbook/assets"
DEST_DIR="public/images"

# Color codes
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo "=========================================="
echo "Copying Missing Images from DevStride-Docs"
echo "=========================================="
echo ""

# Create destination if it doesn't exist
mkdir -p "$DEST_DIR"

# Counter
copied=0
missing=0
already_exists=0

# Function to copy and rename
copy_image() {
    local source_name="$1"
    local dest_name="$2"

    if [ -f "$SOURCE_DIR/$source_name" ]; then
        if [ -f "$DEST_DIR/$dest_name" ]; then
            echo -e "${YELLOW}⊙ $dest_name (already exists)${NC}"
            ((already_exists++))
        else
            cp "$SOURCE_DIR/$source_name" "$DEST_DIR/$dest_name"
            echo -e "${GREEN}✓ Copied: $source_name → $dest_name${NC}"
            ((copied++))
        fi
    else
        echo -e "${RED}✗ Not found: $source_name${NC}"
        ((missing++))
    fi
}

# Copy images with mapping
echo "Copying images..."
echo ""

# Dependency images (found with underscores)
copy_image "add_dependencies.png" "add-dependencies.png"
copy_image "edit_dependencies.png" "edit-dependencies.png"
copy_image "removing_dependencies.png" "removing-dependencies.png"
copy_image "viewing_dependencies.png" "viewing-dependencies.png"

# View images (found with spaces)
copy_image "Satus View.png" "status-view.png"
copy_image "Table View.png" "table-view.png"
copy_image "2D view.png" "2d-view.png"

# Import images
copy_image "import items.png" "import-items-button.png"
copy_image "import2.png" "import-items-dialog.png"

# Folder images
copy_image "new folders.png" "new-folder-button.png"
copy_image "add_folder_create.png" "create-folder-dialog.png"
copy_image "create subfolder.png" "create-subfolder-menu.png"

# Board type comparison - try image260
copy_image "image(260).png" "board-types-comparison.png"

# Workstream breakdown - try image265
copy_image "image(265).png" "workstream-breakdown.png"

# Board folder structure - need to find
copy_image "image(265).png" "board-folder-structure.png"

# Board folder interface - need to find
copy_image "image(265).png" "board-folder-interface.png"

# Folder configuration dialog
copy_image "image(265).png" "folder-configuration-dialog.png"

# Folder default team
copy_image "image(265).png" "folder-default-team.png"

echo ""
echo "=========================================="
echo "Summary:"
echo "=========================================="
echo -e "${GREEN}Copied: $copied${NC}"
echo -e "${YELLOW}Already existed: $already_exists${NC}"
echo -e "${RED}Not found: $missing${NC}"
echo ""

if [ $missing -gt 0 ]; then
    echo "⚠️  Some images were not found. You may need to:"
    echo "   1. Check the markdown files for the exact image references"
    echo "   2. Look for images with different names in: $SOURCE_DIR"
    echo "   3. Update the markdown files to use existing images"
fi

echo ""
echo "Run ./scripts/check-missing-images.sh to verify!"
