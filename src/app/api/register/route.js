import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function POST(request) {
  try {
    const body = await request.json();
    const { 
      name, 
      email, 
      mobile,
      city,
      specialization,
      passingYear,
      preferredDomain,
      willingToRelocate,
      skills,
      tools,
      hasResume,
      resumeName,
      consent
    } = body;

    // Validate required fields
    if (!name || !email || !mobile || !city || !specialization || !passingYear || !preferredDomain || !willingToRelocate) {
      return NextResponse.json(
        { error: 'All required fields must be filled' },
        { status: 400 }
      );
    }

    if (!consent) {
      return NextResponse.json(
        { error: 'Consent is required to proceed' },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db('mirage');
    const users = db.collection('users');

    // Check if user already exists
    const existingUser = await users.findOne({ email });
    
    if (existingUser) {
      // Update existing user's info and return their ID
      await users.updateOne(
        { email },
        { 
          $set: { 
            name,
            mobile,
            city,
            specialization,
            passingYear,
            preferredDomain,
            willingToRelocate,
            skills: skills || [],
            tools: tools || '',
            hasResume: hasResume || false,
            resumeName: resumeName || null,
            consent,
            updatedAt: new Date()
          }
        }
      );
      return NextResponse.json({ 
        success: true, 
        userId: existingUser._id.toString(),
        message: 'Welcome back!'
      });
    }

    // Create new user
    const result = await users.insertOne({
      name,
      email,
      mobile,
      city,
      specialization,
      passingYear,
      preferredDomain,
      willingToRelocate,
      skills: skills || [],
      tools: tools || '',
      hasResume: hasResume || false,
      resumeName: resumeName || null,
      consent,
      createdAt: new Date(),
      updatedAt: new Date()
    });

    return NextResponse.json({ 
      success: true, 
      userId: result.insertedId.toString(),
      message: 'Registration successful!'
    });

  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { error: 'Failed to register. Please try again.' },
      { status: 500 }
    );
  }
}
