---
title: "Keyboard Shortcuts"
description: "A single quick reference to DevStride's keyboard shortcuts — global commands, dialogs, tables, boards, roadmaps, the item editor, and more."
---

<!-- TWIN COPY — keep in sync with content/03.personal-workspace/04.keyboard-shortcuts.md -->

DevStride has keyboard shortcuts throughout the app so you can move faster without reaching for the mouse. This page pulls them all together in one place. Skim the **Everyday essentials** first, then jump to the section for whatever you're working in.

::alert{type="info" title="Mac and Windows keys"}
Where a shortcut shows **`Cmd/Ctrl`**, use **`Cmd`** (`⌘`) on a Mac and **`Ctrl`** on Windows or Linux — DevStride treats them the same. A few shortcuts differ by platform; those are called out where they appear.
::

## Everyday essentials

The handful you'll reach for most, anywhere in the app:

| Shortcut | Action |
| --- | --- |
| `Cmd/Ctrl + K` | Open the command palette to search and jump to any item, workstream, or board |
| `i` | Add an item |
| `Cmd/Ctrl + Shift + F` | Collapse or expand the left toolbar |
| `Cmd/Ctrl + Enter` | Save the open dialog |
| `Esc` | Close the open dialog or drawer |

::alert{type="tip" title="Single-key shortcuts pause while you are typing"}
Single-letter shortcuts like `i`, `w`, and `s` are ignored while your cursor is in a text box, or while a dialog or work item is open. Click on an empty part of the page first if a shortcut doesn't seem to respond.
::

## Global

Work from most main views (Plan, Board, Map, My Work, Items):

| Shortcut | Action |
| --- | --- |
| `Cmd/Ctrl + K` | Open or close the command palette / quick search |
| `i` | Add an item |
| `w` | Add a workstream (on the Map) |
| `s` | Add a subtask (in a work item's **Subtasks** tab) |
| `Cmd/Ctrl + Shift + F` | Collapse or expand the left toolbar |

### Command palette

Once the command palette (`Cmd/Ctrl + K`) is open:

| Shortcut | Action |
| --- | --- |
| `↑` / `↓` | Move between results |
| `Enter` | Open the highlighted result |
| `Esc` | Close the palette |

## Dialogs and selectors

DevStride's dialogs and pickers (assignee, status, tags, and the rest) share one set of keys:

| Shortcut | Action |
| --- | --- |
| `Esc` | Close / cancel |
| `Cmd/Ctrl + Enter` | Save and close |
| `Enter` | Select or toggle the highlighted row — in a single-choice picker, this also saves and closes |
| `Space` | Toggle the highlighted row |
| `↑` `↓` `←` `→` | Move through the list |
| `Cmd/Ctrl + A` | Select all |
| `/` or `?` | Jump to the search box |
| `a` | Show or hide archived items |
| `n` | Clear the selection (select none) |
| `c` | Clear all |
| `s` | Toggle subtasks |

## Tables (Items, Boards, Subtasks)

These apply to the item grids across DevStride — the Items table, the board table view, and subtask lists:

| Shortcut | Action |
| --- | --- |
| `↑` `↓` `←` `→` | Move the focused cell |
| `Enter` or `Space` | Open the editor for the focused cell (status, assignee, dates, tags, and so on) |
| `+` (or `=`) | Expand the focused row |
| `-` (or `_`) | Collapse the focused row |
| `Shift + +` (or `Shift + =`) | Expand every row one more level |
| `Shift + -` | Collapse every row one level |
| Start typing | Opens the focused cell's editor pre-filled with what you typed (text and number cells) |
| `Shift + click` | Select a range of rows |
| `Cmd/Ctrl + click` | Add or remove a single row from the selection |

## Boards

On the **Plan → Board** view:

| Shortcut | Action |
| --- | --- |
| `,` (or `<`) | Go to the previous cycle / board |
| `.` (or `>`) | Go to the next cycle / board |
| `↑` `↓` `←` `→` | Move focus into the board table |
| `Shift + ↑` / `Shift + ↓` | Extend the row selection up or down |
| `i` | Add an item |

## Roadmap and Gantt charts

On the **Plan → Roadmap** (Gantt) view:

| Shortcut | Action |
| --- | --- |
| `Shift + M` | Toggle **Linked** / **Unlinked** mode (whether changes cascade to dependent items) |
| `Shift + -` | Collapse the whole chart one level |
| `Shift + =` | Expand the whole chart one level |
| `-` / `+` / `=` | Collapse or expand the focused (or hovered) row |
| `↑` `↓` `←` `→` | Move between cells in the data grid |
| `Enter` | Edit the focused cell |
| `Esc` | Cancel the edit or clear the selection |
| Double-click empty area | Zoom in on the timeline |
| `Shift +` double-click | Zoom out on the timeline |
| `Shift + click` a **Start**/**Due** date | Set the date automatically from the item's descendants |
| `Shift + scroll` | Zoom the timeline |

For the full toolbar walkthrough, see [Gantt Charts Toolbar](/planning-concepts-and-use-cases/project-planning-tools/gantt-charts/gantt-charts-toolbar).

## Dependency graph and relationship views

When the graph has focus (the [Dependency Graph](/major-modules/workstreams-and-work-items/dependency-graph) and the item relationship visualizer):

| Shortcut | Action |
| --- | --- |
| `+` (or `=`) | Zoom in |
| `-` (or `_`) | Zoom out |
| `R` | Toggle **Fit all to screen** / **Center on current item** |
| `E` | Toggle **Expand** / **Compact** cards |
| `Cmd/Ctrl + scroll` | Zoom in and out |
| `Shift + scroll` | Pan horizontally |

## Map (Portfolio)

On the **Map** / Portfolio view:

| Shortcut | Action |
| --- | --- |
| `↑` / `↓` | Move the selection up or down (wraps at the ends) |
| `←` / `→` | Move up to the parent or down into a child level |
| `Enter` | Open the selected item |
| `i` | Add an item |
| `w` | Add a workstream |
| `Cmd/Ctrl + Shift + I` | Open the item-type totals for the selected item |
| `Shift + click` | Select a range of items |
| `Cmd + click` | Add or remove a single item from the selection — **Mac only** |

::alert{type="note" title="Selecting multiple items on the Map"}
On the Map, `Cmd + click` for multi-select works on **Mac** only. On Windows, use `Shift + click` to select a range — `Ctrl + click` is left free for the right-click menu.
::

## The item drawer and description

While a work item is open:

| Shortcut | Action |
| --- | --- |
| `Esc` | Close the drawer |
| `Cmd/Ctrl + S` | Sync your description draft to anyone viewing with you |
| `Cmd/Ctrl + click` a breadcrumb or hierarchy link | Open that item in a new context |

::alert{type="note" title="Cmd/Ctrl + S syncs, it doesn't formally save"}
In a work item's **Description**, `Cmd/Ctrl + S` shares your in-progress draft with collaborators but does **not** commit it. The description is saved for real when you explicitly save or close the drawer. See [Workspace Editor & Collaboration](/major-modules/workstreams-and-work-items/workspace-capabilities/workspace-sidebar) for how live editing works.
::

### Rich-text editor

Inside any description or comment editor:

| Shortcut | Action |
| --- | --- |
| `Cmd/Ctrl + Z` | Undo |
| `Cmd/Ctrl + Y` | Redo |
| `Cmd/Ctrl + B` | Bold |
| `Cmd/Ctrl + I` | Italic |
| `Cmd/Ctrl + U` | Underline |
| `Cmd/Ctrl + Shift + X` | Strikethrough |
| `Cmd/Ctrl + Option + 1` … `5` | Heading 1 through Heading 5 |
| `Cmd/Ctrl + K` | Turn the selected text into a link |
| `Ctrl + Cmd + Space` | Open the emoji picker |
| `Cmd/Ctrl + ]` | Increase indent |
| `Cmd/Ctrl + [` | Decrease indent |
| `Cmd/Ctrl + Shift + 7` | Ordered (numbered) list |
| `Cmd/Ctrl + Shift + 8` | Bulleted list |
| `Cmd/Ctrl + Shift + 9` | Checklist |

The full editor reference, including formatting you apply by typing (like `>` for a quote or `---` for a divider), is on [Workspace Editor & Collaboration](/major-modules/workstreams-and-work-items/workspace-capabilities/workspace-sidebar).

### Pop-ups inside the editor

When a mention (`@`), item-link, or emoji pop-up is open while you type:

| Shortcut | Action |
| --- | --- |
| `↑` / `↓` | Move through the suggestions |
| `Enter` or `Tab` | Insert the highlighted suggestion |
| `Esc` | Close the pop-up |

## Date picker

Anywhere you set a date:

| Shortcut | Action |
| --- | --- |
| `Enter` or `Space` | Open the date picker |
| `↑` / `↓` | Adjust the highlighted value |
| `Tab` / `Shift + Tab` | Move between date fields |
| `t` | Set to today |
| `Cmd/Ctrl + Enter` | Confirm |
| `Esc` | Close the picker |
