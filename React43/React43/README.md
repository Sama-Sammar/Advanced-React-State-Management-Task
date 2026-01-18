1. Why Redux Toolkit?

Redux Toolkit simplifies using Redux by reducing boilerplate code and providing a clear structure
for managing global state.
It makes state updates predictable, easier to debug, and more maintainable, especially when the
application grows and includes complex logic.

2. How is Redux better for large apps?
- It centralizes the application state in one place (the store)
- State changes follow a clear and predictable flow (actions → reducers)
- It makes debugging easier using tools like Redux DevTools
- It handles complex logic and frequent state updates more efficiently than Context
------------------------------------------------------------------------------------------------------------------

Part 4 – Comparison
| Feature               | Props Drilling               | React Context         | Redux Toolkit                   |
| --------------------- | ---------------------------- | --------------------- | ------------------------------- |
| Purpose               | Pass data through components | Share global state    | Manage global application state |
| State Location        | Parent component             | Context Provider      | Redux Store                     |
| Ease of Use           | Easy for small apps          | Easy to medium        | Medium (requires setup)         |
| Scalability           | Poor                         | Moderate              | Excellent                       |
| Performance           | Low with deep trees          | Can cause re-renders  | Optimized and efficient         |
| Debugging             | Difficult                    | Limited               | Excellent (Redux DevTools)      |
| Use Cases             | Small apps                   | Theme, Auth, Settings | Large and complex apps          |
| Handles Complex Logic | No                           | No                    | Yes                             |
------------------------------------------------------------------------------------------------------------------

Final Questions
1. When should Context be used?

Context should be used when sharing simple and global data across components without complex logic or frequent updates.
Examples include theme (light/dark), language settings, and authentication state.

2. When should Redux be used?

Redux should be used when the application has complex state, frequent updates, or business logic that needs to be managed in a predictable and scalable way.
It is ideal for large applications with features like carts, products, users, and API data.

3. Can Context and Redux be used together?

Yes, Context and Redux can be used together.
Context is often used for simple UI-related state (such as theme), while Redux manages complex application data and logic.

------------------------------------------------------------------------------------------------------------------
Bonus
Redux DevTools: Used to inspect dispatched actions and state changes for easier debugging.

Async Actions: Implemented using createAsyncThunk to simulate an API call and handle loading state (pending/fulfilled) via extraReducers.