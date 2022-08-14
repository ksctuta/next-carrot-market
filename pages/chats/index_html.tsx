import type { NextPage } from "next";

const Chats_Html: NextPage = () => {
  return (
    <div>
      {[1, 1, 1, 1, 1, 1, 1].map((_, i) => (
        <div
          key={i}         
        >
          <div/>
          <div>
            <p>Steve Jebs</p>
            <p>
              See you tomorrow in the corner at 2pm!
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chats_Html;