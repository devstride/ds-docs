#!/usr/bin/env python3
"""
Generate detailed verification report with line context for mismatches.
"""

import re
import os

def extract_images_with_context(file_path):
    """Extract image numbers with line numbers and context."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            lines = f.readlines()

        images = []
        for i, line in enumerate(lines, 1):
            # Pattern for /images/imageXXX.png
            match1 = re.search(r'/images/image(\d+)\.png', line)
            # Pattern for Doc360 URLs with image(XXX)
            match2 = re.search(r'image%28(\d+)%29\.png', line)

            if match1:
                images.append({
                    'number': int(match1.group(1)),
                    'line': i,
                    'context': line.strip()
                })
            elif match2:
                images.append({
                    'number': int(match2.group(1)),
                    'line': i,
                    'context': line.strip()[:100]
                })

        return images
    except Exception as e:
        return f"ERROR: {str(e)}"

base_dir = "/Users/agongjonbalaj/git/devstride/ds-docs"

# File pairs with mismatches only
mismatched_pairs = [
    ("01.header.md",
     "content/01.admin-onboarding-getting-started/05.configuring-your-work-model/02.items/02.item-workspace-tour/01.header.md",
     "DevStride-Docs/v1/articles/05-admin-onboarding-item-workspace-tour.md"),

    ("03.quick-links.md",
     "content/01.admin-onboarding-getting-started/05.configuring-your-work-model/02.items/02.item-workspace-tour/03.quick-links.md",
     "DevStride-Docs/v1/articles/o5c-admin-onboarding-item-workspace-quick-links.md"),

    ("04.right-bar-team-through-status.md",
     "content/01.admin-onboarding-getting-started/05.configuring-your-work-model/02.items/02.item-workspace-tour/04.right-bar-team-through-status.md",
     "DevStride-Docs/v1/articles/5d-admin-onboarding-item-workspace.md"),

    ("05.right-bar-point-estimates.md",
     "content/01.admin-onboarding-getting-started/05.configuring-your-work-model/02.items/02.item-workspace-tour/05.right-bar-point-estimates.md",
     "DevStride-Docs/v1/articles/5e-admin-onboarding-item-workspace.md"),

    ("08.right-bar-time-spent.md",
     "content/01.admin-onboarding-getting-started/05.configuring-your-work-model/02.items/02.item-workspace-tour/08.right-bar-time-spent.md",
     "DevStride-Docs/v1/articles/5h-admin-onboarding-item-workspace-right-bar-part-3-time-spent.md"),

    ("10.right-bar-start-dates-and-due-dates.md",
     "content/01.admin-onboarding-getting-started/05.configuring-your-work-model/02.items/02.item-workspace-tour/10.right-bar-start-dates-and-due-dates.md",
     "DevStride-Docs/v1/articles/5j-admin-onboarding-item-workspace-right-bar-part-7-start-dates-and-due-dates.md"),

    ("01.setting-the-stage.md",
     "content/01.admin-onboarding-getting-started/01.setting-the-stage.md",
     "DevStride-Docs/v1/articles/how-predictability-becomes-reality-in-devstride.md"),

    ("01.setting-up-perpetual-boards.md",
     "content/01.admin-onboarding-getting-started/07.boards-managing-workflow-and-statuses/04.setting-up-and-managing-boards/01.setting-up-perpetual-boards.md",
     "DevStride-Docs/v1/articles/setting-up-perpetual-boards.md"),

    ("02.using-cycle-boards.md",
     "content/01.admin-onboarding-getting-started/07.boards-managing-workflow-and-statuses/04.setting-up-and-managing-boards/02.using-cycle-boards.md",
     "DevStride-Docs/v1/articles/14-creating-boards-and-using-cadences.md"),

    ("01.working-group-folders.md",
     "content/01.admin-onboarding-getting-started/07.boards-managing-workflow-and-statuses/03.the-who-setting-up-working-groups/01.working-group-folders.md",
     "DevStride-Docs/v1/articles/11-creating-boards.md"),

    ("02.setting-up-cadences-and-timeboxes.md",
     "content/01.admin-onboarding-getting-started/07.boards-managing-workflow-and-statuses/02.creating-cadences/02.setting-up-cadences-and-timeboxes.md",
     "DevStride-Docs/v1/articles/13-admin-onboarding-setting-up-cadences.md"),
]

print("=" * 100)
print("DETAILED IMAGE VERIFICATION REPORT - MISMATCHES ONLY")
print("=" * 100)
print()

for filename, current, backup in mismatched_pairs:
    current_path = os.path.join(base_dir, current)
    backup_path = os.path.join(base_dir, backup)

    print("=" * 100)
    print(f"FILE: {filename}")
    print("=" * 100)
    print(f"Current: {current}")
    print(f"Backup:  {backup}")
    print()

    if not os.path.exists(current_path) or not os.path.exists(backup_path):
        print("❌ FILE NOT FOUND")
        print()
        continue

    current_images = extract_images_with_context(current_path)
    backup_images = extract_images_with_context(backup_path)

    if isinstance(current_images, str) or isinstance(backup_images, str):
        print("❌ ERROR reading files")
        print()
        continue

    # Create lookup dictionaries
    current_nums = {img['number']: img for img in current_images}
    backup_nums = {img['number']: img for img in backup_images}

    all_nums = sorted(set(list(current_nums.keys()) + list(backup_nums.keys())))

    print("IMAGE-BY-IMAGE COMPARISON:")
    print("-" * 100)

    for num in all_nums:
        in_current = num in current_nums
        in_backup = num in backup_nums

        if in_current and in_backup:
            print(f"✅ image{num}.png - Present in both")
            print(f"   Current line {current_nums[num]['line']}")
            print(f"   Backup line {backup_nums[num]['line']}")
        elif in_backup and not in_current:
            print(f"❌ image{num}.png - MISSING in current (present in backup)")
            print(f"   Backup line {backup_nums[num]['line']}")
            print(f"   → Should be added to current file")
        elif in_current and not in_backup:
            print(f"⚠️  image{num}.png - EXTRA in current (not in backup)")
            print(f"   Current line {current_nums[num]['line']}")
            print(f"   → May be incorrect, check if should be different number")
        print()

    print()
    print("SUMMARY:")
    current_seq = sorted(current_nums.keys())
    backup_seq = sorted(backup_nums.keys())
    print(f"Current sequence: {current_seq}")
    print(f"Backup sequence:  {backup_seq}")
    print()

    missing = [n for n in backup_seq if n not in current_seq]
    extra = [n for n in current_seq if n not in backup_seq]

    if missing:
        print(f"🔴 MISSING in current: {missing}")
    if extra:
        print(f"🟡 EXTRA in current: {extra}")

    print()
    print()
