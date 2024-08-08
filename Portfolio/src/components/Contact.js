import React, { useState } from "react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    eaddress: "",
    mobile: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        alert("Data received: " + JSON.stringify(result.data));
      } else {
        alert("Error: " + result.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while submitting the form.");
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
      <form id="contactForm" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="fname" className="block text-gray-700">
            First name:
          </label>
          <input
            type="text"
            id="fname"
            name="fname"
            value={formData.fname}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="lname" className="block text-gray-700">
            Last name:
          </label>
          <input
            type="text"
            id="lname"
            name="lname"
            value={formData.lname}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="eaddress" className="block text-gray-700">
            Email address:
          </label>
          <input
            type="email"
            id="eaddress"
            name="eaddress"
            value={formData.eaddress}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="mobile" className="block text-gray-700">
            Mobile number:
          </label>
          <input
            type="text"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>

        <div>
          <input
            id="toggleButton"
            type="submit"
            value="Submit"
            className="w-full px-3 py-2 bg-blue-500 text-white rounded-md cursor-pointer hover:bg-blue-600"
          />
        </div>
      </form>
    </div>
  );
};
