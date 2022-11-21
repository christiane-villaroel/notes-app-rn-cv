# notes-app-rn:

This notes app is to help me understand how to better deepen my understanding of React Native. The reason for creating a notes app is due to the fact that I usse google keep everyday to keep track of activities, due dates and study notes. Seeing how helpful it has been to utilize Google Keep I decided it would be best to make something that I will be using every day.

## Features:

- Create New note and add to list
- Save notes
- Delete notes

## Updates:

### 11/16/22:

- Issues: React Navigator would cause an error when runing `npx exp start` & Could not pass NOTES data, stored in a useState, as a props to <Stack.Screen> Component to render data ina flatlist component:
  - Found out that I was missing React Navigator Dependencies & to enclose <Main> component with <NavigationContainer> in App.js file.
  - By having `notes` useState outside of a body function component I created an invalid Hook call. Now `notes` is saved in the body function component of NotesNavigator.

### 11/16/22:

- Issues: Passing Props in render callback function for Notescreen component.
  - I stored NOTES data object into a useState Hook, `notes`, trying to pass it a prop this way`{(notes)=> <NotesScreen data={notes}>}`, then tried another recommended in the React Navigation Documentation `{(props)=> <NotesScreen {...props}extraData={notes}>}`. However both ways yielded the error as the chrome debugger kept reading the props as undefined.
  - Alternative Solution: imported NOTES and useState() Hook into NoteScreen.js. and passing `notes` useState as prop in <FlatList> component using `data={}` attribute.

### 11/16/22:

- `onPress` event => added on press event handler to <ListItem> component, so far it only logs the id of the item pressed.

### 11/21/22

- Main Component: Made NotesScreen the default initial route in Stack.Navigator component.
- Deleted Home screen route(will implement in a later time)

# Primary Goal this Week:

- Render Notes descrition when user press notes title.

- Store data in server and make GET request to retrieve data.
