import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    Blogs : [
        {
          "title": "Future Tech Trends",
          "description": "Exploring emerging technologies and their potential impact.",
          "user": "techtrends@example.com"
        },
        {
          "title": "AI Innovations",
          "description": "Discover the latest advancements in artificial intelligence.",
          "user": "ai_enthusiast@example.com"
        },
        {
          "title": "Blockchain Insights",
          "description": "Understanding the fundamentals and applications of blockchain technology.",
          "user": "blockchainexpert@example.com"
        },
        {
          "title": "Cybersecurity Chronicles",
          "description": "Stay informed about cybersecurity threats and best practices.",
          "user": "cybersecuritypro@example.com"
        },
        {
          "title": "Tech Startup Stories",
          "description": "Inspiring stories of tech startups and their journey to success.",
          "user": "startupenthusiast@example.com"
        },
        {
          "title": "Cloud Computing Chronicles",
          "description": "Exploring the world of cloud computing and its impact on businesses.",
          "user": "cloudspecialist@example.com"
        },
        {
          "title": "Internet of Things Insights",
          "description": "Understanding the potential of IoT and its role in shaping the future.",
          "user": "iotenthusiast@example.com"
        },
        {
          "title": "Data Science Discoveries",
          "description": "Exploring data science techniques and their applications in various domains.",
          "user": "datasciencegeek@example.com"
        },
        {
          "title": "Tech Gadgets Galore",
          "description": "Reviews and insights on the latest tech gadgets and devices.",
          "user": "gadgetlover@example.com"
        },
        {
          "title": "Robotics Revolution",
          "description": "Exploring the fascinating world of robotics and its potential future.",
          "user": "roboticsenthusiast@example.com"
        }
      ]
      
}

const BlogSlicer = createSlice({
    name: "Auth",
    initialState,
    reducers: {
        fetch : (state, action) => {
            state.Blogs.push(action.payload)
        },
        create : (state,action) => {
            state.Blogs.push(action.payload)
        },
        remove : (state,action) => {
            state.Blogs.push(action.payload)
        }
    }
})

export const { fetch , create , remove } = BlogSlicer.actions

export default BlogSlicer.reducer