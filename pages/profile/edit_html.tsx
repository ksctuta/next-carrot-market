import type { NextPage } from "next";

const EditProfile_Html: NextPage = () => {
  return (
    <div>

      <div>
        <div/>
        <label
          htmlFor="picture"
        >
          Change
          <input id="picture" type="file" className="hidden" accept="image/*" />
        </label>
      </div>

      <div>
        <label htmlFor="email">
          Email address
        </label>
        <input
          id="email"
          type="email"          
          required
        />
      </div>

      <div>
        <label htmlFor="phone">
          Phone number
        </label>
        <div>
          <span>
            +82
          </span>
          <input
            id="input"
            type="number"            
            required
          />
        </div>
      </div>

      <button>
        Update profile
      </button>
      
    </div>
  );
};

export default EditProfile_Html;