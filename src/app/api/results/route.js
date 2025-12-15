import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function POST(request) {
  try {
    const body = await request.json();
    const { userId, stream, responses, alignmentScore, insights } = body;

    // Validate required fields
    if (!userId || !stream || !responses || alignmentScore === undefined) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db('mirage');
    const results = db.collection('results');

    // Store the quiz results
    const result = await results.insertOne({
      userId,
      stream: {
        id: stream.id,
        name: stream.name
      },
      responses: responses.map(r => ({
        text: r.text,
        weight: r.weight
      })),
      alignmentScore,
      insights,
      completedAt: new Date()
    });

    return NextResponse.json({ 
      success: true, 
      resultId: result.insertedId.toString(),
      message: 'Results saved successfully!'
    });

  } catch (error) {
    console.error('Save results error:', error);
    return NextResponse.json(
      { error: 'Failed to save results. Please try again.' },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');

    if (!userId) {
      return NextResponse.json(
        { error: 'User ID is required' },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db('mirage');
    const results = db.collection('results');

    // Get all results for a user
    const userResults = await results
      .find({ userId })
      .sort({ completedAt: -1 })
      .toArray();

    return NextResponse.json({ 
      success: true, 
      results: userResults
    });

  } catch (error) {
    console.error('Get results error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch results.' },
      { status: 500 }
    );
  }
}
