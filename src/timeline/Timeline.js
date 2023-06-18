import React, { useState } from "react";
import Post from "./posts/Post";
import Sugesstions from './Sugesstions';
import "./Timeline.css"

function Timeline() {
  const [posts, setPosts] = useState([
    {
      user: "redian_",
      postImage:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      likes: 54,
      timestamp: "1d",
    },
    {
      user: "johndoe",
      postImage:
        "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80",
      likes: 432,
      timestamp: "2d",
    },
    {
      user: "mariussss",
      postImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
      likes: 140,
      timestamp: "45min",
    },
    {
      user: "kobee_18",
      postImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGCAaQ5u1TMTij5ELPWi5-VPtlSqELw-R6lj0EpYmNcGt56kOQaCokzS0IK81MOSphlkw&usqp=CAU",
      likes: 14,
      timestamp: "30min",
    },
    {
      user: "virat_kohli",
      postImage:
        "https://static.theprint.in/wp-content/uploads/2023/03/ANI-20230228230226.jpg",
      likes: 540343400,
      timestamp: "2d",
    },
    {
      user: "Ram charan",
      postImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhHZ44zTKWbTwr8PDgpW5wPJEYglgtKrCzsg&usqp=CAU",
      likes: 2343400,
      timestamp: "5d",
    },
    {
      user: "alia.bhat___",
      postImage:
        "https://www.onmanorama.com/content/dam/mm/en/entertainment/entertainment-news/images/2023/4/14/alia-ranbir.jpg.transform/576x300/image.jpg",
      likes: 2343400,
      timestamp: "5d",
    },
    {
      user: "Ms_dh0ni",
      postImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd_zccZMxqZgYAMNM94vDP3cbj7rQgmHn7kQ&usqp=CAU",
      likes: 2343400,
      timestamp: "5d",
    },
    {
      user: "samanta",
      postImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmgraY8bNsuIaCE2vxQjhgclWGs5Mx4AVrSg&usqp=CAU",
      likes: 2343400,
      timestamp: "5d",
    },
    

  ]);

  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline__posts">
          {posts.map((post) => (
            <Post
              user={post.user}
              postImage={post.postImage}
              likes={post.likes}
              timestamp={post.timestamp}
            />
          ))}
        </div>
      </div>
      <div className="timeline__right">
        <Sugesstions />
      </div>
    </div>
  );
}

export default Timeline;