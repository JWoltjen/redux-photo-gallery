# Redux Photo Gallery Application


### Why are thunk reducers called Extrareducers?
Thunk, while included as part of Redux Toolkit, is considered an external-action to createSlice. 

### Why can we mutate state directly in createSlice? 
Because Toolkit has a library called Immer installed with it, so even though it looks like you're directly modifying the state, underneath it all, your actually replacing existing state with an entirely new object, rather than modifying the same state object, again brought to you by Immer. 
