# KS Photography
[Visit KS Photography](http://www.kyleseem.com/#!/photography/home "www.kyleseem.com/#!/photography/")

General
------
KS Photography is an application that allows a creator to showcase and maintain photos in a gallery-style format.
It has been deployed with limited CRUD functionality in order to display usability while preserving the integrity of the site and database. Some functions have been adjusted accordingly.


Dashboard
------

View [my] photos in a gallery using a Masonry layout.
Click an image to launch a modal with a larger version of the photo.
Filter images by clicking a "tag" in the modal or by typing in the search box in the nav bar.
Reset search by clicking clear button or by deleting text in search box.
The nav search option is only visible on the homepage/dashboard.


Update Section
------
Upon navigation to "update" section, a warning pops up advising limited functionality. Once this warning has been viewed, it will not appear again for 24 hours. Each sub-view has a secondary nav tab that allows navigation within the update section.

* **Add New Photo**

    Displays a form that allows the user to add an image.
    This deployment has predetermined options for the user to select, but full functionality would allow the user to open a file.
    Selecting an image displays photo in the preview box and updates radio buttons appropriately (disables incorrect option).
    Tags can be added one at a time and dynamically appear under the image preview.
    Hovering over an existing tag [button] turns the tag grey with crossed out text; clicking the tag will remove it.
    Danger alert appears if required information is missing upon submission.
    Success alert appears if submission passes validation.

* **Existing Photos (default view)**

    All photos are listed in a table with the title, description, and tags, as well as "edit" and "delete" options for each respective photo.
    Photos saved to the database have a light grey background to indicate they cannot be modified; "action" links are disabled.
    Photos added by the user will sort to the top of the table with all links enabled.
    Clicking a photo's title will toggle a thumbnail of the photo.
    "Edit" routes the user to an update form.
    "Delete" prompts a warning modal displaying the selected photo and requiring confirmation prior to deletion; deleted photos are removed from the table.

* **Edit Photo**

    Displays a form with the current information for the photo that was selected.
    Page design and function is nearly identical to add new photo page.
    If form submission is successful, the user is redirected to the existing photos page and the table shows the most up to date information.


About
------
Quick blurbs about me and about the site.
Links are provided for the different tech used to create the application.

---

Issues
------
**Dashboard:** Filtering images multiple times *may* result in malfunctioning masonry formatting, either loading images into a single column or creating large spaces between images. I believe this to be related to AngularJS, but because this bug is rare and has been difficult to reproduce, I haven't been able to specifically pinpoint the cause. I will continue to troubleshoot and update the code as long as this issue persists.
