import { useStore } from "@nanostores/react";
import { reaction } from "../stores/reactionStore";

export default function InteractionWrapper(props: { text: string, children: any, className?: string }) {
  
  const $reaction = useStore(reaction);
  const setReaction = (text: string) => {
    reaction.set(text);
  }

  return (
    <div className={props.className} onMouseEnter={() => setReaction(props.text)} onMouseLeave={() => setReaction("")}>
      {props.children}
    </div>
  );
}