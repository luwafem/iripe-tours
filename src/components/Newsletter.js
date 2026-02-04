import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Mail, CheckCircle } from 'lucide-react';
import { websiteConfig } from '../config/websiteConfig';

const Newsletter = () => {
  const [state, handleSubmit] = useForm(websiteConfig.formspree.newsletterFormId);

  if (state.succeeded) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
        <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-green-800 mb-2">Thank You!</h3>
        <p className="text-green-700">
          You've been successfully subscribed to our newsletter.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-xl p-8 text-white">
      <div className="flex items-center mb-4">
        <Mail className="h-6 w-6 mr-3" />
        <h3 className="text-xl font-bold">Stay Updated</h3>
      </div>
      <p className="text-green-100 mb-6">
        Subscribe to our newsletter for exclusive deals, travel tips, and West Africa insights.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            name="email"
            placeholder="Your email address"
            required
            className="flex-grow px-4 py-3 rounded-lg text-gray-900"
          />
          <button
            type="submit"
            disabled={state.submitting}
            className="bg-white text-green-700 hover:bg-gray-100 font-semibold px-6 py-3 rounded-lg transition-colors disabled:opacity-50"
          >
            {state.submitting ? 'Subscribing...' : 'Subscribe'}
          </button>
        </div>
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <p className="text-green-200 text-sm">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </form>
    </div>
  );
};

export default Newsletter;