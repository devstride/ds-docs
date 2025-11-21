#!/usr/bin/env python3
"""
Verify image sequences between current content files and backup files.
"""

import re
import os
from pathlib import Path

def extract_image_numbers(file_path):
    """Extract all image numbers from a markdown file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()

        # Pattern for /images/imageXXX.png
        pattern1 = r'/images/image(\d+)\.png'
        # Pattern for Doc360 URLs with image(XXX)
        pattern2 = r'image%28(\d+)%29\.png'

        numbers1 = re.findall(pattern1, content)
        numbers2 = re.findall(pattern2, content)

        all_numbers = [int(n) for n in (numbers1 + numbers2)]
        return sorted(all_numbers)
    except Exception as e:
        return f"ERROR: {str(e)}"

def compare_files(current_file, backup_file):
    """Compare image sequences between current and backup files."""
    current_images = extract_image_numbers(current_file)
    backup_images = extract_image_numbers(backup_file)

    if isinstance(current_images, str) or isinstance(backup_images, str):
        return {
            'match': False,
            'current': current_images,
            'backup': backup_images,
            'error': True
        }

    match = current_images == backup_images

    return {
        'match': match,
        'current': current_images,
        'backup': backup_images,
        'missing_in_current': [n for n in backup_images if n not in current_images],
        'extra_in_current': [n for n in current_images if n not in backup_images],
        'error': False
    }

# File mappings
file_pairs = [
    # Item Workspace Tour files
    ("content/01.admin-onboarding-getting-started/05.configuring-your-work-model/02.items/02.item-workspace-tour/01.header.md",
     "DevStride-Docs/v1/articles/05-admin-onboarding-item-workspace-tour.md"),

    ("content/01.admin-onboarding-getting-started/05.configuring-your-work-model/02.items/02.item-workspace-tour/02.tabs.md",
     "DevStride-Docs/v1/articles/o5b-admin-onboarding-item-workspace-tour.md"),

    ("content/01.admin-onboarding-getting-started/05.configuring-your-work-model/02.items/02.item-workspace-tour/03.quick-links.md",
     "DevStride-Docs/v1/articles/o5c-admin-onboarding-item-workspace-quick-links.md"),

    ("content/01.admin-onboarding-getting-started/05.configuring-your-work-model/02.items/02.item-workspace-tour/04.right-bar-team-through-status.md",
     "DevStride-Docs/v1/articles/5d-admin-onboarding-item-workspace.md"),

    ("content/01.admin-onboarding-getting-started/05.configuring-your-work-model/02.items/02.item-workspace-tour/05.right-bar-point-estimates.md",
     "DevStride-Docs/v1/articles/5e-admin-onboarding-item-workspace.md"),

    ("content/01.admin-onboarding-getting-started/05.configuring-your-work-model/02.items/02.item-workspace-tour/06.right-bar-time-estimates.md",
     "DevStride-Docs/v1/articles/5f-admin-onboarding-item-workspace-right-bar-part-2-time.md"),

    ("content/01.admin-onboarding-getting-started/05.configuring-your-work-model/02.items/02.item-workspace-tour/07.right-bar-best-practice-time-estimates.md",
     "DevStride-Docs/v1/articles/5g-admin-onboarding-item-workspace-right-bar-part-3-best-practice-time-estimates.md"),

    ("content/01.admin-onboarding-getting-started/05.configuring-your-work-model/02.items/02.item-workspace-tour/08.right-bar-time-spent.md",
     "DevStride-Docs/v1/articles/5h-admin-onboarding-item-workspace-right-bar-part-3-time-spent.md"),

    ("content/01.admin-onboarding-getting-started/05.configuring-your-work-model/02.items/02.item-workspace-tour/09.right-bar-priority.md",
     "DevStride-Docs/v1/articles/5i-admin-onboarding-item-workspace-right-bar-part-3-time-estimates.md"),

    ("content/01.admin-onboarding-getting-started/05.configuring-your-work-model/02.items/02.item-workspace-tour/10.right-bar-start-dates-and-due-dates.md",
     "DevStride-Docs/v1/articles/5j-admin-onboarding-item-workspace-right-bar-part-7-start-dates-and-due-dates.md"),

    # Overview files
    ("content/01.admin-onboarding-getting-started/01.setting-the-stage.md",
     "DevStride-Docs/v1/articles/how-predictability-becomes-reality-in-devstride.md"),

    # Board files
    ("content/01.admin-onboarding-getting-started/07.boards-managing-workflow-and-statuses/04.setting-up-and-managing-boards/01.setting-up-perpetual-boards.md",
     "DevStride-Docs/v1/articles/setting-up-perpetual-boards.md"),

    ("content/01.admin-onboarding-getting-started/07.boards-managing-workflow-and-statuses/04.setting-up-and-managing-boards/02.using-cycle-boards.md",
     "DevStride-Docs/v1/articles/14-creating-boards-and-using-cadences.md"),

    ("content/01.admin-onboarding-getting-started/07.boards-managing-workflow-and-statuses/04.setting-up-and-managing-boards/03.track-and-move-work-on-boards.md",
     "DevStride-Docs/v1/articles/track-and-move-work-on-boards.md"),

    ("content/01.admin-onboarding-getting-started/07.boards-managing-workflow-and-statuses/03.the-who-setting-up-working-groups/01.working-group-folders.md",
     "DevStride-Docs/v1/articles/11-creating-boards.md"),

    ("content/01.admin-onboarding-getting-started/07.boards-managing-workflow-and-statuses/02.creating-cadences/02.setting-up-cadences-and-timeboxes.md",
     "DevStride-Docs/v1/articles/13-admin-onboarding-setting-up-cadences.md"),
]

base_dir = "/Users/agongjonbalaj/git/devstride/ds-docs"

print("=" * 80)
print("IMAGE SEQUENCE VERIFICATION REPORT")
print("=" * 80)
print()

matches = []
mismatches = []

for current, backup in file_pairs:
    current_path = os.path.join(base_dir, current)
    backup_path = os.path.join(base_dir, backup)

    current_name = os.path.basename(current)
    backup_name = os.path.basename(backup)

    if not os.path.exists(current_path):
        print(f"❌ MISSING: {current_name}")
        print(f"   File not found: {current_path}")
        print()
        continue

    if not os.path.exists(backup_path):
        print(f"❌ MISSING BACKUP: {backup_name}")
        print(f"   File not found: {backup_path}")
        print()
        continue

    result = compare_files(current_path, backup_path)

    if result['error']:
        print(f"❌ ERROR: {current_name}")
        print(f"   Current: {result['current']}")
        print(f"   Backup: {result['backup']}")
        print()
        continue

    if result['match']:
        matches.append((current_name, result))
        print(f"✅ MATCH: {current_name}")
        print(f"   → {backup_name}")
        print(f"   Images: {result['current']}")
        print()
    else:
        mismatches.append((current_name, backup_name, result))
        print(f"❌ MISMATCH: {current_name}")
        print(f"   → {backup_name}")
        print(f"   Current has: {result['current']}")
        print(f"   Backup has:  {result['backup']}")
        if result['missing_in_current']:
            print(f"   Missing in current: {result['missing_in_current']}")
        if result['extra_in_current']:
            print(f"   Extra in current: {result['extra_in_current']}")
        print()

print("=" * 80)
print("SUMMARY")
print("=" * 80)
print(f"Total files checked: {len(matches) + len(mismatches)}")
print(f"✅ Matches: {len(matches)}")
print(f"❌ Mismatches: {len(mismatches)}")
print()

if mismatches:
    print("=" * 80)
    print("MISMATCHES DETAIL")
    print("=" * 80)
    for current_name, backup_name, result in mismatches:
        print(f"\n{current_name}")
        print(f"  Backup: {backup_name}")
        print(f"  Current sequence: {result['current']}")
        print(f"  Backup sequence:  {result['backup']}")
        if result['missing_in_current']:
            print(f"  ⚠️  MISSING: {result['missing_in_current']}")
        if result['extra_in_current']:
            print(f"  ⚠️  EXTRA: {result['extra_in_current']}")
