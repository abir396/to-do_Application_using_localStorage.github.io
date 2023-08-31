Task Title : To-Do List Application
You can save your daily task and that's are also complete, edit and delete.

Description:
Create a simple web-based to-do list application using HTML, CSS, and JavaScript. The application should allow users to add, delete, and mark tasks as completed.

#CODE DETAILS :
---  HTML CODE  ---

Head Section:
Meta tags for character set and viewport settings.
Link to an external CSS file named "main.css" for styling.
JavaScript link to an external JavaScript file named "main.js" for scripting.

Body Section:
The application form with the id "new-task-form" and the name "myForm".
Header containing the application title, designer's name, a brief message, and a horizontal line.
Inside the header, there's a table for task management.
"Task list" text in the first column.
An icon for adding a new task in the second column. This icon triggers the "showModal()" function.
An icon for deleting all tasks in the third column. This icon triggers the "empty_storage()" function.

Section with class "task-list":
Inside this section, there's a table for displaying the task list.
Table headers for different task attributes: Sl.No., Date, Task Title, Task Description, Completed, Edit, Delete.

Modal (popup):
The modal has an id "myModal" and class "modal".
Inside the modal, there's a close button ("×") to close the modal by triggering the "closeModal()" function.Modal content includes a header with the text "Manage Tasks" and a table with input fields.
Input field for the task date.
Input field for the task title.
Input field for the task description.
Save and Delete buttons.
These buttons trigger the "savetask()" and "Delete(count)" functions respectively.

Script Section:
JavaScript code that invokes the "display_data()" function, likely responsible for populating the task list in the table.Overall, this code provides the structure for a TO-DO application with functionality for adding, editing, and deleting tasks using a modal popup for task entry and modification. The JavaScript functions are likely defined in the "main.js" file and would handle tasks like showing/hiding the modal, saving tasks, deleting tasks, and populating the task list. The CSS file "main.css" would style the application elements according to the design preferences.

#CODE DETAILS :
---  JavaScript CODE  ---

The provided JavaScript code contains various functions that handle the functionality of the TO-DO application. Let me explain the purpose of each function:

savetask(): 
This function is called when the user clicks the "Save" button in the modal. It checks for blank fields using the blankcheck() function. If the fields are not blank, it adds the task data to local storage using add_storage_data(), previews the form, displays the updated data, closes the modal, and reloads the page.

blankcheck(): 
This function checks if the task title is blank. If it's blank, an alert is shown, and the function returns false, indicating an error. If the task title is not blank, it returns true.

Completed(count): This function is called when the user clicks the "Completed" button for a specific task. It toggles the completion status of the task, updates the local storage data, and reloads the page.

Delete(count): 
This function is called when the user clicks the "Delete" button for a specific task. It asks for confirmation, removes the task data from local storage, and reloads the page.

Edit(count): 
This function is called when the user clicks the "Edit" button for a specific task. It opens the modal, pre-fills the input fields with the task data for editing, and sets the editStatus flag to true to indicate that editing mode is active.

showModal(): 
This function is called to display the modal when the user clicks the "Add" or "Edit" button.

closeModal(): 
This function is called to close the modal when the user clicks the close button (×), and it also handles clicks outside the modal.

add_storage_data(): 
This function adds or edits task data in the local storage. If editStatus is true, it updates the existing task data; otherwise, it adds a new task to the local storage.

display_data(): 
This function populates the table with task data from local storage. It loops through the data and creates rows in the table to display each task. It also applies green background to rows with completed tasks.

empty_storage(): 
This function is called when the user clicks the "Delete" button in the header to delete all tasks from local storage. It asks for confirmation, clears the local storage, and reloads the page.

Overall, these functions collectively manage the core functionality of the TO-DO application, including adding, editing, completing, and deleting tasks, as well as displaying the tasks in the table format.


#CODE DETAILS :
---  CSS CODE  ---
The provided CSS code defines the styling for various elements in your TO-DO application's interface. Let's go through each section to understand the styling choices:

Background and Fonts:
The body background is set to an image of sticky notes.
The font family for the entire application is set to "Georgia".
Headings:

h1 is styled to be centered, with a larger font size and white color.
h2 headings are centered.
Paragraphs:

Paragraphs have a font size of 25px and black color. They are centered.
Navigation Bar (Bar):

The navigation bar has a light gray background and is right-aligned.
Navigation Bar Text (bartext):

The navigation bar text is centered, bold, and has a light gray background.
Columns (Table Headers):

The table headers (td with class column) have a dark blue background and white text. They are left-aligned.
Column Items (Data Cells):

Data cells (td with class colitem) have a light gray background and are center-aligned.
Table Styling (tableContainer):

The table has border spacing and light gray border color.
The table rows have a white background and black text.
Modal Styling (modal and modal-content):

The modal is set to be hidden by default and occupies the entire screen.
The modal content has a white background, is centered vertically, and has a border.
Modal Header (p.modal-header):

The modal header has a gray background, centered text, and yellow text color.
Modal Close Button (close):

The close button has a font size of 28px and becomes a bit darker on hover.
Input Fields (input[type=text]):

Text input fields have 100% width, padding, and margin for spacing.
The CSS code provides a clean and visually appealing design for your TO-DO application. It incorporates a cohesive color scheme and aligns elements neatly to enhance the user experience.

THANKS FOR WATCHING...!!
