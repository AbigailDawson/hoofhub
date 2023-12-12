# <div align="center">HoofHub</div>
### <div align="center">A horse care app for self-employed farm sitters and horse care professionals<div>

![HoofHub Login Page](./public/images/screenshot-1.png)

## <div align="center">Introduction</div>
HoofHub provides a platform for busy horse care professionals to keep all of their horse and barn notes organized and up to date in one place. With detailed horse and barn profiles, dedicated space for custom horse notes, and a chore management system for users to create, order and check off chores, HoofHub has everything a farm sitter needs to streamline their business workflow.

### <div align="center">Meet Kästlee, a self-employed farm sitter</div>
<div align="center"><img src="./public/images/kastlee.jpg" height="350" alt="Kästlee with a horse" /></div>

Kästlee has been running her own farm sitting business for four years, but has never found an organizational system that meets her needs. She manages up to 6 barns at a time with up to 20 horses each, and keeps notes saved in the small details section of her calendar app. With this system, Kästlee finds it difficult to look up important information about specific horses and keep track of communication from the barn owners.

HoofHub eliminates the need for multiple apps, trackers and notes systems, and helps users like Kästlee stay focused on providing exceptional horse care. HoofHub continues to be developed with the unique needs of horse care professionals in mind.

## <div align="center">Using the HoofHub App</div>
#### *Logging In*
HoofHub uses Google OAuth authentication system and users must be signed in to enjoy the app's features. Use the Sign In button to easily sign up using a Google account. HoofHub does not send emails to users.

#### *Horses and Barns*
Users can get started right away customizing the app to suit their needs. Barns and horses can be added by filling out a quick form, and horses can be assigned to barns from either the horse's details page or from the edit barn page. 
<div align="center"><img src="./public/images/screenshot-3.png" height="550" alt="HoofHub Add Horse Form" /><img src="./public/images/screenshot-5.png" height="550" alt="HoofHub Edit Barn Form" /></div>

#### *Searching*
Finding a specific horse is easy with the search feature on the **My Herd** page. Quickly search for any horse from any barn using the search bar, or sort horses alphabetically by name or by age (ascending). Sort functionality is also available for each barn.

![HoofHub My Herd Page](./public/images/screenshot-4.png)

#### *Managing Chores*
Users who care for horses at multiple barns will enjoy HoofHub's chore management system, which allows for a customized chore list to be created for each barn. Users can add chores quickly with a simple form and use the up and down arrows to reorder the list to suit their needs. Checking off a chore moves it to the bottom of the list, and the Clear All button resets the list by un-checking all items on the list.

![HoofHub Chores Page](./public/images/screenshot-2.png)


## <div align="center">Tech</div>

### <div align="center">
HTML, CSS, JavaScript | Node.js & Express.js | Mongoose & MongoDB | Bootstrap 5
</div>

<div align="center"><img src="./public/images/screenshot-m-1.png" height="400" alt="HoofHub HoofHub Mobile View" /><img src="./public/images/screenshot-m-2.png" height="400" alt="HoofHub Mobile View" /><img src="./public/images/screenshot-m-3.png" height="400" alt="HoofHub Mobile View" />&nbsp;<br>
<img src="./public/images/screenshot-m-4.png" height="400" alt="HoofHub HoofHub Mobile View" /><img src="./public/images/screenshot-m-5.png" height="400" alt="HoofHub Mobile View" /><img src="./public/images/screenshot-m-6.png" height="400" alt="HoofHub Mobile View" />
</div>


### Mobile-Friendly User Interface
Because farm sitters are always on the go, it was important to me to build HoofHub with mobile use in mind. Users may choose to create and organize their notes using HoofHub's desktop layout on larger screens, but can also enjoy the same features on smaller screens with HoofHub's mobile-friendly user interface.

I taught myself Bootstrap specifically for this project because of its mobile-first approach to responsive design. Given the unique needs of HoofHub's target users, developing the app with a mobile-friendly user interface was a priority. Bootstrap 5's responsive grid system, form templates and other styling packages contributed to the consistent appearance and feel across all app pages and features.

## Next Steps

There are a number of additional features currently in development:

1. **Notebook** - A designated notebook page for each horse and barn for users to add quick notes

2. **Contact information for horses** - Space to add contacts for each horse, such as owner and veterinary information

3. **Sort chores by shift** - Assign chores to AM, PM, Midday or Overnight shifts

4. **Scheduling & Google Calendar integration** - Organize barns and chores into a schedule that can be exported to Google Calendar