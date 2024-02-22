import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
    { idL: '1', title: 'Learning Redux', content: 'All its contents of Redux' },
    { idL: '2', title: 'Learning Redux Toolkit', content: 'All its contents of Redux Toolkit' },
]

const postsSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        postAdded:{
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(title, content) {
                return {
                    payload: {
                        id: nanoid,
                        title,
                        content
                    }
                }
            }
    }
    }
    // reducers: {
    //     postAdded(state, action) {
    //         state.push(action.payload)
    //     }
    // }

})

// export const selectAllPosts = (state) => state.posts;
const selectAllPosts = (state) => state.posts;

// export default postsSlice.reducer;
const postReducer = postsSlice.reducer;

export {selectAllPosts, postReducer}

export const {postAdded} = postsSlice.actions



