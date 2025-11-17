# Admin Onboarding - Setting up Custom Fields

> 

**What It Is**
DevStride provides the ability to add dimensions to your data model. The idea is to be able to categorize work in some way or be able to track additional information.

These fields are viewable throughout the system, including in the item workspace in the custom field section at the bottom of its right bar.

**How to Do It**

#### Step 1: Create a custom field type

To add fields your global data model, go to **Settings.**
As with all the other Settings (1), you can add to the the global list of item types on your left Create Fields pane (2).

![image.png](/images/image188.png)

To create a custom field type, click on New icon next to Create Fields. There are many Available custom Fields Types to choose from:

![chrome-capture-2025-2-3.gif](/images/chrome-capture-2025-2-3.gif)

Select the field type you want to add from the picker list (1).

![image.png](/images/image188.png)

Then fill out the information you want to include in the display for this field (2):

![image.png](/images/image188.png)

#### Step 2: Group Into Collections

After you have created the fields you wish to use (3), you can group them into collections that are specific to your needs. To do this, create a Collection (4) and drag the item types you'd like to use for that collection (5). You can set any fields to required fields using the checkbox.

#### Step 3: Assign to Item Types

Then, assign the collection to your desired item type (6).

![image.png](/images/image188.png)

You can edit your collections and their names at the main level (1) and at the form level (2). Within each collection list, you can use the grab bars drag items in to add, around to order, and out to remove (3).

![image.png](/images/image188.png)

DevStride automatically displays a blank default Collection type (1) to use across all item types in the side bar 2). You will need to follow the same path of creating your organization's desired default fields and adding them to your default collection:

![image.png](/images/image188.png)

#### Step 4: Create Forms as needed

**Managing multiple custom fields: Forms functionality**
Note that in our example, we have an overall collection called "Product" that also has smaller collections of information within it. These sub-collections are called **forms**. Forms provide the ability to capture and organize data sets that might otherwise make for a cluttered workspace display.

**How to Do It**
In each collection type, there is an add icon. Start a new form by clicking this button.

Then name your form.

In the screenshot below, we show a RICE form. This is a good example of a set of data that can be managed through a form. RICE - or Reach Impact Confidence and Effort score and its combined value - is a standard way to prioritize work in a product backlog. The fields that make up a rice score belong together. Managing them as a form accomplishes this without cluttering the User Interface.

Within each item's workspace, DevStride displays custom fields in one of 2 places - the Sidebar or The Forms tab.

Note that within the Default Collection, there is also always a default form available called **Sidebar**. Use this to contain the custom fields that you want displayed in the sidebar of every item designated as using the default collection. Any other default forms you add to the Default Collection display in the Forms tab of items using the default collection designation.

Forms associated with a specific item type are displayed in the Forms tab of the items's workspace.

In the example below, we can see how fields from the Product Collection are set to display in Epics in our system (1).

In an Epic, the side bar fields (2) will show in the **sidebar** and and remaining forms show in the **Forms** (3) tab.

![image.png](/images/image188.png)

Here they are on an epic. The sidebar items from the Product Collection is displayed (1). Note that the default sidebar collection includes the calculated total for the RICE score.

![image.png](/images/image188.png)

The forms (2) for the rest of the Product Collection in our example are in the forms tab. Note that input section for the RICE score score is grouped here as one of the Form tab sections (3). Setting this input section up as a form in the collection removes the clutter from the sidebar. The calculation from this input is assigned in the side bar as we noted above.

**This is another powerful capability - forms within a collection can interact.**
Data in one form can reference or be calculated in another form.

![image.png](/images/image188.png)

As we touched on in the Create Fields step, there are many field types that you can use. Following is an easy reference table on the types of fields we offer and potential examples of their uses:

<table>
<thead>
  <tr>
    <th>
      Custom Field Name
    </th>
    
    <th>
      Use
    </th>
    
    <th>
      Example
    </th>
    
    <th>
      Notes
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      Text Options List
    </td>
    
    <td>
      Pre-defined list of text
    </td>
    
    <td>
      A text list of customers
    </td>
    
    <td>
      The most common type used
    </td>
  </tr>
  
  <tr>
    <td>
      Number Options List
    </td>
    
    <td>
      Numbers that allow for calculations
    </td>
    
    <td>
      RICE Score
    </td>
    
    <td>
      Use this for anything that you want to calculate or score
    </td>
  </tr>
  
  <tr>
    <td>
      Short Text
    </td>
    
    <td>
      Single line of free-form text
    </td>
    
    <td>
      Name or department
    </td>
    
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      Paragraph
    </td>
    
    <td>
      Multi-line free-form text
    </td>
    
    <td>
      A description
    </td>
    
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      Email
    </td>
    
    <td>
      Contact Email
    </td>
    
    <td>
      Trouble Ticket contact information
    </td>
    
    <td>
      This email field validates that the input is a real email
    </td>
  </tr>
  
  <tr>
    <td>
      Phone number
    </td>
    
    <td>
      Formatted phone number
    </td>
    
    <td>
      
    </td>
    
    <td>
      This field validates that the input is a real phone number
    </td>
  </tr>
  
  <tr>
    <td>
      URL
    </td>
    
    <td>
      Standard URL format
    </td>
    
    <td>
      Trouble ticket reporting. User could include the link to the page they were viewing when the issue occurred.
    </td>
    
    <td>
      This email field validates that the input is a real URL and creates an active link.
    </td>
  </tr>
  
  <tr>
    <td>
      Whole Number
    </td>
    
    <td>
      Even integer
    </td>
    
    <td>
      
    </td>
    
    <td>
      Enforces that you enter even integer
    </td>
  </tr>
  
  <tr>
    <td>
      Decimal Number
    </td>
    
    <td>
      Decimal format
    </td>
    
    <td>
      
    </td>
    
    <td>
      Allows for decimal places
    </td>
  </tr>
  
  <tr>
    <td>
      Percent
    </td>
    
    <td>
      Percentage
    </td>
    
    <td>
      
    </td>
    
    <td>
      Number entered is divided by 100 to display percent
    </td>
  </tr>
  
  <tr>
    <td>
      Single Checkbox
    </td>
    
    <td>
      True or False
    </td>
    
    <td>
      
    </td>
    
    <td>
      Used in calculations
    </td>
  </tr>
  
  <tr>
    <td>
      Switch
    </td>
    
    <td>
      On or Off
    </td>
    
    <td>
      
    </td>
    
    <td>
      Used in calculations
    </td>
  </tr>
  
  <tr>
    <td>
      Date Picker
    </td>
    
    <td>
      Picks from calendar; also allows manual entry
    </td>
    
    <td>
      
    </td>
    
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      Date Time Picker
    </td>
    
    <td>
      Picks from calendar and time time; also allows manual entry
    </td>
    
    <td>
      
    </td>
    
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      User Picker
    </td>
    
    <td>
      List of every user in DevStride
    </td>
    
    <td>
      Tracking responsible/accountable user (as in RACI)
    </td>
    
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      Asset Upload
    </td>
    
    <td>
      file uploader
    </td>
    
    <td>
      A marketing task for a campaign might be to upload the Instagram graphic each time
    </td>
    
    <td>
      allows for a predictable place to upload an asset.
    </td>
  </tr>
  
  <tr>
    <td>
      Calculated (Number)
    </td>
    
    <td>
      Supports advanced calculated fields including all Excel formulas and DevStride values
    </td>
    
    <td>
      RICE (Reach Impact Confidence Effort) or WSJF (Weighted Short Job First)
    </td>
    
    <td>
      If calculated fields are needed, contact DevStride User Support.
    </td>
  </tr>
  
  <tr>
    <td>
      Calculated (Text)
    </td>
    
    <td>
      Supports advanced calculated fields including all Excel formulas and DevStride values
    </td>
    
    <td>
      
    </td>
    
    <td>
      If calculated fields are needed, contact DevStride User Support.
    </td>
  </tr>
  
  <tr>
    <td>
      Calculated (Boolean)
    </td>
    
    <td>
      Supports advanced calculated fields including all Excel formulas and DevStride values
    </td>
    
    <td>
      
    </td>
    
    <td>
      If calculated fields are needed, contact DevStride User Support.
    </td>
  </tr>
</tbody>
</table>

---

**What this Gives You**
DevStride provides unparalleled flexibility for your organization through custom fields while preserving the ability to standardize for reporting and analytics.

[Next Up: Setting Up Tags](/v1/docs/07-admin-onboarding-tags)
