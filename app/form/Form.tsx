import Input from "~/components/Input";
import { useState } from "react";

export function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const clearForm = () => {
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    // Optionally, reset the form fields in the UI
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
    const fd = new FormData(event.target as HTMLFormElement);
    const customerData = Object.fromEntries(fd.entries());
    // You can send customerData to your server or process it as needed
    clearForm();
    console.log("Form submitted", customerData);
    console.log("Form data:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="Name"
        id="name"
        type="text"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <Input
        label="Email"
        id="email"
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <Input
        label="Message"
        id="message"
        type="textarea"
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
