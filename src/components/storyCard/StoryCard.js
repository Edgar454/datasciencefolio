import React from "react";
import "./StoryCard.css";

export default function StoryCard({ story, theme = {} }) {
  return (
    <div
      className="blog-card"
      style={{ "--accent": theme.orange || "#ffa500" }}
    >
      {/* IMAGE */}
      <div className="meta">
        <div
          className="photo"
          style={{ backgroundImage: `url(${story.image})` }}
        />

        {/* OVERLAY */}
        <div className="details">
          <div className="details-inner">
            {story.author && (
              <div className="detail-item author">{story.author}</div>
            )}

            {story.date && <div className="detail-item date">{story.date}</div>}

            {story.tags && (
              <div className="tags">
                {story.tags.map((tag, i) => (
                  <span key={i} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* TEXT */}
      <div className="description">
        <h1>{story.title}</h1>
        <h2>{story.subtitle}</h2>

        <p>{story.description}</p>

        <p className="read-more">
          <a href={story.url || "#"} target="_blank" rel="noopener noreferrer">
            Read More
          </a>
        </p>
      </div>
    </div>
  );
}
