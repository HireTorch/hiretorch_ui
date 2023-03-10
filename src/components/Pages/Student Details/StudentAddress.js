import { useId, React } from "react";
import './StudentAddress.css'


const StudentAddress = () => {
  const postTextAreaId = useId();

  function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);

    // You can pass formData as a fetch body directly:
    fetch("/some-api", { method: form.method, body: formData });

    // Or you can work with it as a plain object:
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
  }

  return (
    <form method="post" onSubmit={handleSubmit}>
        <div className="Student_Address" >
      <label  >
        Student Address <br/>
        <input name="postTitle" placeholder="Enter Your Address" />
      </label>
      <br />
      <label>
        Edit your Address: {' '} <br/> 
        
        <textarea
          name="postContent"
          placeholder="Enter Your New Address Here"
          rows={4}
          cols={40}
        />
      </label>
      <hr />
      <button type="reset">Reset edits</button>
      <button type="submit">Save Address</button>
      </div>
    </form>
  );
};

export default StudentAddress;
