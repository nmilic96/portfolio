import React, { useEffect, useState } from "react";
import head from "../assets/images/head.png";
import styles from "./FloatingHead.module.scss";
import { reactions } from "..//consts";
import { useStore } from "@nanostores/react";
import { reaction } from "../stores/reactionStore";

const FloatingHead = ({ text }: { text?: string }) => {
  const $reaction = useStore(reaction);
  const [isShaking, setIsShaking] = useState(false);
  const [clicks, setClicks] = useState(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (clicks > 50) {
      reaction.set("Aj bok");
      setTimeout(() => {
        reaction.set("");
        setClicks(0);
        setHidden(true);
      }, 1000);
    }
  }, [clicks]);

  useEffect(() => {
    if (hidden) {
      setTimeout(() => {
        setHidden(false);
      }, 5000);
    }
  }, [hidden]);

  const [reactionTimeoutId, setReactionTimeoutId] =
    useState<NodeJS.Timeout | null>(null);
  const [shakeTimeoutId, setShakeTimeoutId] = useState<NodeJS.Timeout | null>(
    null
  );

  const handleClick = () => {
    setClicks(clicks + 1);

    const randomReaction =
      reactions[Math.floor(Math.random() * reactions.length)];
    reaction.set(randomReaction);

    // Clear the previous reaction timeout if it exists
    if (reactionTimeoutId) {
      clearTimeout(reactionTimeoutId);
      setReactionTimeoutId(null);
    }

    // Clear the previous shake timeout if it exists
    if (shakeTimeoutId) {
      clearTimeout(shakeTimeoutId);
      setShakeTimeoutId(null);
    }

    setIsShaking(true);
    setShakeTimeoutId(setTimeout(() => setIsShaking(false), 100)); // same duration as your shake animation

    // Set a new reaction timeout
    setReactionTimeoutId(
      setTimeout(() => {
        reaction.set("");
      }, 500)
    ); // Clears the reaction after 500 milliseconds
  };

  return (
    <div className={`head-wrapper ${styles.wrapper} ${hidden ? styles.isHidden : ""}`}>
      <button
        onClick={handleClick}
        className={`${styles.floatingHead}`}>
        <img
          src={head.src}
          alt="head"
          className={isShaking ? styles.shake : ""}
        />
      </button>
      {$reaction.length > 0 && <p className={styles.text}>{$reaction}</p>}
    </div>
  );
};

export default FloatingHead;
