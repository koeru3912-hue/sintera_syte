import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { name, phone } = await request.json();

    if (!phone || phone.replace(/[\s\-\(\)]/g, '').length < 7) {
      return NextResponse.json({ error: 'Invalid phone' }, { status: 400 });
    }

    // TODO: Send to Telegram Bot, CRM, or email
    // Example: await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, { ... })

    console.log('New lead:', { name, phone, date: new Date().toISOString() });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
