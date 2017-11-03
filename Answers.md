
* 1. Describe the concept of a "Single Source of Truth" in Redux. Ex. What is the difference between Redux/Application State vs. React/Component State?
* Answer: In Redux, the entire state of the app is stored in a central store which is created using createStore(). Thus, store is source of truth for App's state. If a component needs to access some fields from the state, it gets it from the store and dispatches actions to the store whenever it needs to update the state.
In react, each component can have its own state that is not accessible to any other component, In Redux, the state is stored in a central store and entire state is accessible to all components.

* 2. Describe what an Action is/does.
* Answer: Action is a plain Javascript object which is populated by React components in event handlers and dispatched to reducers via Redux to process the event. Action is populated with all the data needed to process the event. Action needs to contain a type field that uniquely describes the type of action. Reducers use this type and other fields populated in the action to process the action.

* 3. Describe what a Reducer is/does.
* Answer: Reducer is a Javascript function that receives current state of the App and an action that needs to be processed. Reducer then changes the state based on the action received and returns the new state.

* 4. What does HTTP stand for? What does CRUD stand for? Describe four HTTP methods that can be mapped to the CRUD acronym that we use to interface with APIs/Servers.
* Answer: Hypertext Transfer Protocol
Create, Read, Update and Delete
HTTP GET = Read
HTTP PUT = Create/Update
HTTP POST = Create/Update
HTTP DELETE = Delete