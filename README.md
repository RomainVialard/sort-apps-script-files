## Sort Apps Script files inside a project

By default, Apps Script files are organized by creation date inside a project.
In the old Apps Script editor, a menu entry was available to sort files alphabetically. The new editor does not have this option but allows you to move files up & down in the list. 
This method though can be a bit tedious to use if you have a lot of files.

The code available in this Github repo uses the Google Apps Script API to get your Apps Script project (via its ID) and organize its files alphabetically in one go.
![enter image description here](https://lh3.googleusercontent.com/d/14NLi3KwZD8J4y82BiJoWYc8CYSocgirW=s960)

You can either copy the code of this repo in a new Apps Script project or make a copy of this Apps Script project:
https://script.google.com/d/1f2uE7ixRxWHhqa70_elI-LQ_vLwSLSwqJJfssv3JIdPhRlnnqNTIphjy/edit?usp=sharing

Note that you will need to activate the Apps Script API in GCP for this code to run properly.
