# Item Types

> 

## Overview

Item Types help you capture both the right content for a given unit of work, as well as the appropriate structure for the kind work your team is performing. You can create Item Types individually, or as part of a hierarchy.

## Adding a Base Item Type

If you wish to create a hierarchy of Item Types, such as Epic -> Feature -> User Story, you will start by adding a Base Item Type which represents the largest units of work. Here’s how to add a Base Item Type, such as an Epic:

![ADD_BASE_ITEM.png](/images/ADD_BASE_ITEM.png)

1. Navigate to the **Item Types** section under the **DATA MODEL** in the left-hand navigation bar of the Setup page.
2. Click on the **+ New** button to create a new item type.
3. Enter the name of your Base Item Type, for example, "Module".
4. Click **Save** to add your new Base Item Type to the system.

## Adding Work Items Under Base Item Type

Once you have your Base Item Types set up, you can start adding work items under them:

1. Select the Base Item Type you created, such as "Epic".
2. Click on the **+ New Item** button to create a new work item.
3. Fill in the details of your work item in the dialog that appears.

### 2a. Set Priority Level

Setting a priority level helps to communicate the importance and urgency of the work item:

1. Within the new item dialog, find the **Priority Level** dropdown.
2. Select a priority from the list, such as "Critical", "High", "Normal", or "Low".
3. The system may also have priority levels related to Service Level Agreements (SLAs), select the appropriate one if necessary.

### 2b. Add Estimate

Adding an estimate to your work item helps in planning and tracking progress:

1. Look for the **Estimate** section within the new item dialog.
2. Choose an estimate range that reflects the size of the effort, such as "Small", "Medium", "Large", etc.
3. If your organization uses t-shirt sizing, you might see options like "XS", "S", "M", "L", "XL".

### 2c. Add a Tag and/or Custom Field

Tags and custom fields provide additional context and categorization for your work items:

1. To add a tag, type into the **Tags** field and select from existing tags or create a new one.
2. To add a custom field, scroll to the **Custom Fields** section.
3. Click on the **+ Add Custom Field** button if you need to create a new one, or select from existing fields.
4. Enter the information required for the custom field.

---

## Understanding the Distinction Between Item Types and Tags in DevStride

When working with project management tools like DevStride, it's crucial to categorize and differentiate between various elements of your workflows. Two fundamental concepts in such tools are "Item Types" and "Tags." Here's an overview to help you understand the differences and how to use them effectively in DevStride.

## Item Types

Item Types in DevStride are used to define the nature of a task or work item. They are broad categories that encapsulate the primary characteristics of a work item and typically represent the various stages or types of work within a project.

**Characteristics of Item Types:**

- **Structural**: They provide a structure to the work items and are often used to categorize tasks into types such as Epics, Stories, Defects, or Tasks.
- **Hierarchical**: Item Types can have a hierarchy, with parent and child relationships to reflect the breakdown of work items from large objectives to more granular tasks.
- **Workflow Specific**: They are integral to defining the workflow of a project, with each Item Type possibly following a different workflow or set of processes.

![item types 2.png](/images/item-types-2.png)

## Tags

Tags in DevStride are labels that can be attached to work items to provide additional context or denote certain characteristics that cross-cut different Item Types.

**Characteristics of Tags:**

- **Flexible**: Tags can be added to any item regardless of its type and are used to mark items for various purposes like indicating priorities, locations, or features.
- **Non-hierarchical**: Unlike Item Types, Tags do not have a parent-child relationship. They serve as attributes rather than categories.
- **Filtering and Reporting**: Tags are particularly useful for filtering items across different views and generating reports based on specific criteria.

![tags.png](/images/tags1.png)

## Distinctions

- **Purpose**: Item Types define what a work item is, while Tags describe additional attributes of the work items.
- **Usage**: Item Types are used to manage and track the progress of work according to the defined workflow, whereas Tags are used for sorting, filtering, and quick identification of certain aspects of the work items.
- **Flexibility**: Tags offer more flexibility and can be used ad-hoc, unlike Item Types, which are predefined and follow a strict classification system within DevStride.
- **Visibility**: In DevStride, Item Types are often visually distinct and form part of the main structure of the board or list views. Tags are smaller, color-coded labels that provide at-a-glance information.

## Conclusion

In summary, Item Types are like the chapters of a book, defining the main sections, while Tags are akin to the index terms, providing a quick reference. Both are essential for effective project management and when used together, they offer a powerful way to organize, prioritize, and navigate your work within DevStride.
