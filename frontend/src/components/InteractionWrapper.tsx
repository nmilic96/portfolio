import { useStore } from "@nanostores/react";
import { reaction } from "../stores/reactionStore";

export default function InteractionWrapper(props: any) {
  
  const $reaction = useStore(reaction);
  const setReaction = (text: string) => {
    reaction.set(text);
  }

  return (
    <div onMouseEnter={() => setReaction(props.text)} onMouseLeave={() => setReaction("")}>
      {props.children}
    </div>
  );
}