import { useState } from "react";

export default function TwitterFollowCard({
  userName = "unknown",
  children,
  initialIsFollowing,
}) {
  const formatUserName = (userName) => `@${userName}`;

  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
  const text = isFollowing ? "Following" : "Follow";
  const buttonClassName = isFollowing
    ? "tw-follow-card-button is-following"
    : "tw-follow-card-button";

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <article className="tw-follow-card">
      <header className="tw-follow-card-header">
        <img
          className="tw-follow-card-avatar"
          src={`https://unavatar.io/twitch/${userName}`}
          alt="Twitch Icon"
        />
        <div className="tw-follow-card-info">
          <strong>{children}</strong>
          <span>{formatUserName(userName)}</span>
        </div>
      </header>
      <aside>
        <button onClick={handleClick} className={buttonClassName}>
          <span className="tw-follow-card-follow-text">{text}</span>
          <span className="tw-follow-card-stop-follow">Dejar de seguir</span>
        </button>
      </aside>
    </article>
  );
}
