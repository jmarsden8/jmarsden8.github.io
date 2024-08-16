import Swal from 'sweetalert2'

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "b3081965-8bb8-4e05-85aa-93c5e5dc62e3");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire("Message sent!");
    }
  };
    return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
      <form id="contactForm" onSubmit={onSubmit}>
        <div className="mb-4">
          <label htmlFor="fullname" className="block text-gray-700">
            Full Name:
          </label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="eaddress" className="block text-gray-700">
            Email address:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700">
            Your message:
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full px-3 py-2 border rounded-md"></textarea>
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
export default Contact;