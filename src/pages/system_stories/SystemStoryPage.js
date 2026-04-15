import React, { useState } from "react";
import { Fade } from "react-reveal";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import StoryOverlay from "../../components/storyOverlay/storyOverlay";

import SystemStoryImg from "./SystemStoryImg";
import SystemStories from "../../containers/systemStories/SystemStories";
import { SystemStoryHeader, Stories } from "../../stories";
import "./SystemStoryPage.css";

export default function SystemStoryPage(props) {
  const theme = props.theme;
  const [selectedStory, setSelectedStory] = useState(null);
  return (
    <div className="system-story-page-main">
      <Header theme={theme} />
      <div className="basic-story">
        <Fade bottom duration={2000} distance="40px">
          <div className="system-story-heading-div">
            <div className="system-story-heading-img-div">
              <SystemStoryImg theme={theme} />
            </div>
            <div className="system-story-heading-text-div">
              <h1
                className="system-story-heading-text"
                style={{ color: theme.orange }}
              >
                {SystemStoryHeader.title}
              </h1>
              <p
                className="system-story-header-detail-text subTitle"
                style={{ color: theme.text }}
              >
                {SystemStoryHeader["description"]}
              </p>
            </div>
          </div>
        </Fade>
      </div>
      {/* LIST */}
      <SystemStories
        stories={Stories}
        onSelectStory={setSelectedStory}
        theme={theme}
      />
      {/* OVERLAY */}
      {selectedStory && (
        <StoryOverlay
          story={selectedStory}
          onClose={() => setSelectedStory(null)}
          theme={theme}
        />
      )}
      <Footer theme={props.theme} onToggle={props.onToggle} />
      <TopButton theme={props.theme} />
    </div>
  );
}
