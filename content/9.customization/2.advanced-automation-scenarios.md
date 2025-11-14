---
title: "Advanced Automation Scenarios"
description: ""
---

### **Title**: Notification on Work Item Deletion

This automation flow is designed to send a notification when a work item is deleted within the project management software. The automation rule triggers the notification action as soon as a work item is deleted from the system. This ensures that team members and stakeholders are promptly informed about the deletion event, allowing them to stay updated and take any necessary actions.

Step 1: **Trigger**

The automation rule is triggered
when a work item is deleted from DevStride.
This trigger event serves as the starting point for the automation flow.

Step 2: **Action**

Once the trigger event occurs,
the automation initiates the action of sending a notification.
The notification is sent to the designated recipients, such as project members, stakeholders, or specific individuals identified in the automation configuration.

Step 3: **Notification Content**

The notification content typically includes relevant details
related to the deleted work item, such as its title, ID, project name,
and any additional information that might be useful for the recipients to
understand the context of the deletion event.

Step 4: **Delivery**

The notification is delivered to the recipients through
their preferred communication channels, which are configured in the
automation settings. This can include email, in-app notifications,
or other communication tools integrated with DevStride.

Step 5: **Recipient Action**

Upon receiving the notification, the recipients can review the information and take appropriate actions as necessary. This might involve addressing any dependencies, reassigning tasks, or reevaluating project timelines based on the deleted work item.

Step 6: **Automation Completion**

Once the notification is sent, the automation flow is completed. The system waits for the next trigger event, which occurs when another work item is deleted, to initiate the automation again.

Benefits:

- Real-time notifications: The automation ensures that team members and stakeholders are promptly notified when a work item is deleted, allowing for timely responses and adjustments to project plans.
- Transparency and visibility: The automation increases transparency by keeping everyone informed about significant changes in the project, promoting better collaboration and alignment.
- Improved coordination: By sending e-mail notifications, this automation helps to maintain coordination among team members, ensuring they are aware of the modifications made to the project scope.

**Note**: It is important to configure the
automation rule and notification settings according
to your specific project requirements and the preferences
of the project team.

### **Title**: Update Due Date on Cycle Change

This automation flow is designed to automatically update
the due date of a work item when the cycle is updated from a past cycle 
to a current cycle. 

The automation rule triggers the due date update based on the specified 
conditions and performs two sequential operations: setting the due date to *"delete due date"* and then setting it to *"14 days after the trigger."*

This automation ensures that the due dates of work items are 
adjusted dynamically based on the cycle changes, 
improving task management and maintaining accurate timelines.

Step 1: **Trigger**

The automation rule is triggered when the cycle of a work item is
updated from a past cycle to a current cycle. 
Additionally, the automation considers the condition 
that the item attribute "due date" is set.

Step 2: **Operation 1** - Set due date to "delete due date"

Once the trigger event occurs, 
the automation performs the first operation, 
which is setting the due date of the work item to "delete due date." 
This operation effectively **removes** the previous due date from the work item.

Step 3: **Operation 2** - Set due date to "14 days after the trigger"

After completing the first operation, 
the automation proceeds to the second operation.
In this step, the due date of the work item is set to *14 days after the trigger event.* 
This ensures that the due date is automatically updated to 
reflect a date that is 14 days ahead from the trigger event.

Step 4: **Completion**
Upon completing both operations,
the automation flow is finished. 
The system awaits the next trigger event, 
which occurs when the cycle is updated from a past cycle to a current
cycle while the "due date" attribute is set, to initiate the automation again.

Benefits:

- Dynamic due date updates: The automation ensures that the due dates of work items are adjusted automatically based on cycle changes, reducing manual effort and maintaining accurate timelines.
- Consistency and accuracy: By automating the due date updates, this automation ensures that all work items consistently reflect their appropriate due dates, improving task management and coordination.
- Time savings: With the automation handling due date adjustments, team members can focus on other important aspects of their work, leading to increased productivity.

**Note**: It is important to configure the automation rule, 
conditions, and operation settings according to your 
specific project requirements and the attributes used 
in DevStride.