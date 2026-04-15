import React from "react";
import "./storyOverlay.css";

export default function StoryOverlay({ story, onClose, theme }) {
  if (!story) return null;

  const { sections = {} } = story;

  return (
    <div className="overlay-backdrop" onClick={onClose}>
      <div className="overlay-content" onClick={(e) => e.stopPropagation()}>
        {/* CLOSE */}
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>

        {/* HEADER IMAGE */}
        <img
          src={story.image}
          alt={story.title || "story image"}
          className="overlay-image"
        />

        {/* HEADER TEXT */}
        <div className="overlay-header">
          <h1 style={{ color: theme.orange }}>{story.title}</h1>
          <h2>{story.subtitle}</h2>
          <div className="overlay-meta">
            <span className="meta-author">{story.author}</span>
            <span className="meta-separator">•</span>
            <span className="meta-date">{story.date}</span>
          </div>
        </div>

        {/* SECTIONS */}
        <div className="overlay-sections">
          {sections.context && (
            <div className="section">
              <h3>Context</h3>
              <p>{sections.context}</p>
            </div>
          )}

          {sections.problem && (
            <div className="section">
              <h3>Problem</h3>
              <p>{sections.problem}</p>
            </div>
          )}

          {sections.solution && (
            <div className="section">
              <h3>Solution</h3>
              <p>{sections.solution}</p>
            </div>
          )}

          {sections.insights && (
            <div className="section highlight">
              <h3>Insights</h3>
              <p>{sections.insights}</p>
            </div>
          )}
        </div>

        {/* TAGS */}
        <div className="overlay-tags">
          <div className="tags-header">Tags:</div>

          <div className="tags-list">
            {story.tags.map((tag, i) => (
              <span key={i} className="overlay-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
