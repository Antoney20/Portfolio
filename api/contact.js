import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function handler(req, res) {
  const formData = req.body;

  try {
    await prisma.contact.create({
      data: {
        name: formData.name,
        emailaddress: formData.emailaddress,
        subject: formData.subject,
        mobile: formData.mobile,
        message: formData.message,
      },
    });

    res.status(200).json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error submitting form' });
  }
}
