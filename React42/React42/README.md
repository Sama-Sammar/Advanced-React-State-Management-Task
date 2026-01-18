1. Why is Context better than props drilling?
Context is better than props drilling because it allows components to access shared data directly
without passing props through multiple intermediate components.
This results in cleaner code, better readability, and easier maintenance, especially when the
component tree becomes deep.

2. What are Context limitations?
- It can cause unnecessary re-renders when the context value changes
- It is harder to debug compared to Redux
- It is not designed to handle complex state logic or frequent updates efficiently

3. When should Context not be used?
- The application state is complex or frequently changing
- The app requires advanced debugging or state tracking
- The state includes complex business logic or async operations
In such cases, a state management library like Redux Toolkit is more suitable.