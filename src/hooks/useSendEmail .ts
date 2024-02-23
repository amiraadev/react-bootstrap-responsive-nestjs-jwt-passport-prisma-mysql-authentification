import { useState, useRef, useEffect } from 'react';

// Type for form values, customize based on your form fields
type FormValues = {
  username: string;
  email: string;
  message: string;
};

type SendEmailFunction = (formElement: HTMLFormElement, values: FormValues) => Promise<void>;

const useSendEmail = (sendEmail: SendEmailFunction) => {
  const formRef = useRef<HTMLFormElement>(null);

  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSendEmail = async (values: FormValues) => {
    try {
      setIsSending(true);
      setError(null);

      // Check if form element exists
      if (!formRef.current) {
        throw new Error('Form element not found');
      }

      // Call your provided sendEmail function
      await sendEmail(formRef.current, values);

      // Send success logic (e.g., show message, redirect)
      console.log('Email sent successfully!');
    } catch (error) {
      console.error('Error sending email:', error);
    } finally {
      setIsSending(false);
    }
  };

  return {
    formRef,
    isSending,
    error,
    handleSendEmail,
  };
};

export default useSendEmail;
