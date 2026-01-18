1. What is props drilling?
Props drilling is the process of passing data from a parent component to deeply nested child
components through multiple intermediate components, even when those intermediate components do
not need the data themselves.

2. What problems did you face?
- Passing props through many components unnecessarily
- Components receiving props they do not directly use
- Code becoming harder to read, maintain, and scale as the application grows
