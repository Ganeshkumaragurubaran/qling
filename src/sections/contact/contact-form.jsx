'use client';

import axios from 'axios';
import { z as zod } from 'zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';

// Validation schema using Zod
const ContactFormSchema = zod.object({
  name: zod.string().min(1, { message: 'Name is required!' }),
  email: zod
    .string()
    .min(1, { message: 'Email is required!' })
    .email({ message: 'Email must be a valid email address!' }),
  subject: zod.string().min(1, { message: 'Subject is required!' }),
  message: zod.string().min(1, { message: 'Message is required!' }),
});

export function ContactForm() {
  const [errorMsg, setErrorMsg] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const defaultValues = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  const methods = useForm({
    resolver: zodResolver(ContactFormSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting, errors },
    register,
    reset,
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      // Send POST request to the sendEmail API
      const response = await axios.post('/api/sendEmail', data);

      if (response.status === 200) {
        setIsSuccess(true);
        reset(); // Reset form after successful submission
      }
    } catch (error) {
      console.error(error);
      setErrorMsg(error?.response?.data?.message || 'Failed to send email');
    }
  });

  return (
    <div>
      <Typography variant="h3" sx={{ mb: 3 }}>
        Feel free to contact us. <br />
        We&apos;ll be glad to hear from you.
      </Typography>

      <form onSubmit={onSubmit}>
        <Box gap={3} display="flex" flexDirection="column" sx={{ my: 5 }}>
          <TextField
            label="Name"
            fullWidth
            {...register('name')}
            error={!!errors.name}
            helperText={errors.name?.message}
          />
          <TextField
            label="Email"
            fullWidth
            {...register('email')}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <TextField
            label="Subject"
            fullWidth
            {...register('subject')}
            error={!!errors.subject}
            helperText={errors.subject?.message}
          />
          <TextField
            label="Enter your message here."
            fullWidth
            multiline
            rows={4}
            {...register('message')}
            error={!!errors.message}
            helperText={errors.message?.message}
          />
        </Box>

        {/* Display success or error messages */}
        {isSuccess && (
          <Alert severity="success" sx={{ mb: 3 }}>
            Your message has been sent successfully!
          </Alert>
        )}
        {!!errorMsg && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {errorMsg}
          </Alert>
        )}

        <LoadingButton
          size="large"
          variant="contained"
          type="submit"
          loading={isSubmitting}
          loadingIndicator="Sending..."
        >
          Submit
        </LoadingButton>
      </form>
    </div>
  );
}
