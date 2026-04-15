import React from "react";
import { Fade } from "react-reveal";
import "./SystemStories.css";
import StoryCard from "../../components/storyCard/StoryCard";

export default function SystemStories({ stories, onSelectStory, theme }) {
  return (
    <div className="system-stories-main-div">
      {stories.map((story, index) => (
        <Fade key={story.id} right duration={2000}>
          <div onClick={() => onSelectStory(story)}>
            <StoryCard
              story={story}
              theme={theme}
              className={index % 2 !== 0 ? "alt" : ""}
            />
          </div>
        </Fade>
      ))}
    </div>
  );
}
