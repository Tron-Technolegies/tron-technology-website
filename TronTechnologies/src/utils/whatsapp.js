export const handleChatClickCustom = (content) => {
  const phoneNumber = "+919744866003"; // Replace with the actual phone number
  const message = content; // Replace with your message
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  window.open(whatsappUrl, "_blank");
};

export const handleEnquiryFormClick = ({
  name,
  company,
  email,
  phone,
  message,
}) => {
  const phoneNumber = "+919744866003";
  const messageContent = `Hello I would like to discuss about a new Project. \n Name : ${name}\n Company : ${company}\n EMAIL : ${email}\n PHONE : ${phone}\n MESSAGE : ${message}`;
  const encodedMessage = encodeURIComponent(messageContent);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  window.open(whatsappUrl, "_blank");
};
