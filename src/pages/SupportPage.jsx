import React from 'react';

const SupportPage = () => {
  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen py-8">
      <div className="bg-white shadow-lg rounded-lg p-8 text-center w-3/4 mb-8">
        <h1 className="text-3xl font-bold mb-4">Support Center</h1>
        <p className="text-lg text-gray-700">
          Need help? We're here for you! Check our FAQ below or contact us.
        </p>
      </div>

      {/* Contact Section */}
      <div className="bg-white shadow-md rounded-lg p-6 text-center w-3/4 mb-8">
        <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
        <p>Email: <a href="mailto:support@example.com" className="text-blue-600">support@example.com</a></p>
        <p>Phone: <a href="tel:+1234567890" className="text-blue-600">+1 (234) 567-890</a></p>
      </div>

      {/* FAQ Section */}
      <div className="bg-white shadow-md rounded-lg p-6 w-3/4">
        <h2 className="text-2xl font-semibold mb-4 text-center">Frequently Asked Questions</h2>
        <div className="text-left space-y-4">
          <div>
            <h3 className="font-semibold">How do I reset my password?</h3>
            <p>Click on "Forgot Password" on the login page and follow the instructions.</p>
          </div>
          <div>
            <h3 className="font-semibold">How can I contact support?</h3>
            <p>You can email us at support@example.com or call us at +1 (234) 567-890.</p>
          </div>
          <div>
            <h3 className="font-semibold">What are your support hours?</h3>
            <p>Our team is available from Monday to Friday, 9 AM - 5 PM EST.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
