#!/usr/bin/env python3
import os
import re
from pathlib import Path

def clean_navigation_title(file_path):
    """Remove numeric prefixes from navigation titles"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()

        # Pattern to match "title:" lines with numeric prefixes like "02:", "03:", etc.
        # This will match patterns like 'title: "02: Something"' or 'title: "05: Something"'
        pattern = r'(title:\s*["\']?)(\d+:\s+)([^"\']+)(["\']?)'

        def replace_title(match):
            # Keep the prefix (title: "), remove the number, keep the rest
            return f'{match.group(1)}{match.group(3)}{match.group(4)}'

        new_content = re.sub(pattern, replace_title, content)

        if new_content != content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Updated: {file_path}")
            return True
        return False
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    content_dir = Path('/Users/agongjonbalaj/git/devstride/ds-docs/content')
    updated_count = 0

    # Find all .navigation.yml files
    for yml_file in content_dir.rglob('.navigation.yml'):
        if clean_navigation_title(yml_file):
            updated_count += 1

    print(f"\nTotal files updated: {updated_count}")

if __name__ == '__main__':
    main()
