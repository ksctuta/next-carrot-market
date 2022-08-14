import type { NextPage } from "next";

const Create: NextPage = () => {
  return (
    <div>
      <div>
        <label          
          htmlFor="name"
        >
          Name
        </label>
        <div>
          <input
            id="name"
            type="email"            
            required
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="price"
        >
          Price
        </label>
        <div>
          <div>
            <span>$</span>
          </div>
          <input
            id="price"            
            type="text"
            placeholder="0.00"
          />
          <div>
            <span>USD</span>
          </div>
        </div>
      </div>
      <div>
        <label
          htmlFor="description"
        >
          Description
        </label>
        <textarea
          id="description"          
          rows={4}
        />
      </div>
      <button>
        Go live
      </button>
    </div>
  );
};

export default Create;