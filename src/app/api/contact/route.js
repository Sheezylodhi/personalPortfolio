import connectDB from '@/lib/db';
import Contact from '@/lib/models/Contact';
import { sendEmail } from '@/lib/send-email';
import { NextResponse } from 'next/server';

export async function POST(req) {
  const body = await req.json();
  
  try {
    await connectDB();
    
    // 1. Database mein save karo
    const newContact = await Contact.create(body);
    
    // 2. Email bhejo
    await sendEmail(body);
    
    return NextResponse.json({ message: 'Success', id: newContact._id }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Database/Email Error' }, { status: 500 });
  }
}