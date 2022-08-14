import type { NextPage } from "next";

const Write: NextPage = () => {
  return (
    <form>
      <textarea
        rows={4}
        placeholder="Ask a question!"
      />
      <button>
        Submit
      </button>
    </form>
  );
};

export default Write;