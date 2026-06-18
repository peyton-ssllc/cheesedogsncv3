import { NextResponse } from "next/server";
import { Resend } from "resend";

type BookingRequest = {
  name?: string;
  email?: string;
  phone?: string;
  eventDate?: string;
  eventLocation?: string;
  guestCount?: string;
  eventType?: string;
  message?: string;
};

const resend = new Resend(process.env.RESEND_API_KEY);

export const runtime = "nodejs";

const emailTo = process.env.BOOKING_EMAIL_TO || "cheesedogsofnc@gmail.com";
const emailFrom = process.env.BOOKING_EMAIL_FROM || "Cheesedogs Website <bookings@cheesedogsnc.com>";

function clean(value: unknown) {
  return String(value || "").trim();
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function row(label: string, value: string) {
  const safeValue = escapeHtml(value || "Not provided").replaceAll("\n", "<br />");

  return `
    <tr>
      <td style="padding:14px 0;border-bottom:1px solid #f1d8d1;">
        <div style="font-size:12px;letter-spacing:0.08em;text-transform:uppercase;color:#c93a32;font-weight:800;margin-bottom:4px;">${label}</div>
        <div style="font-size:16px;line-height:1.5;color:#171717;font-weight:700;">${safeValue}</div>
      </td>
    </tr>
  `;
}

function buildEmailHtml(data: Required<BookingRequest>) {
  const submittedAt = new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
    timeStyle: "short",
    timeZone: "America/New_York"
  }).format(new Date());

  return `
    <!doctype html>
    <html>
      <body style="margin:0;background:#fff8eb;font-family:Arial,Helvetica,sans-serif;color:#171717;">
        <div style="display:none;max-height:0;overflow:hidden;">New Cheesedogs booking request from ${escapeHtml(data.name)}</div>
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#fff8eb;padding:32px 16px;">
          <tr>
            <td align="center">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:680px;background:#ffffff;border:3px solid #171717;border-radius:28px;overflow:hidden;box-shadow:10px 10px 0 #171717;">
                <tr>
                  <td style="background:#d62828;padding:30px 28px;color:#ffffff;">
                    <div style="font-size:13px;letter-spacing:0.22em;text-transform:uppercase;font-weight:900;color:#ffe37a;">New booking request</div>
                    <h1 style="margin:10px 0 0;font-size:34px;line-height:1.05;text-transform:uppercase;">Cheesedogs NC</h1>
                    <p style="margin:12px 0 0;font-size:16px;line-height:1.5;color:#fff5f0;">A customer submitted the website booking form.</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:28px;">
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                      ${row("Name", data.name)}
                      ${row("Email", data.email)}
                      ${row("Phone", data.phone)}
                      ${row("Event date", data.eventDate)}
                      ${row("Event location", data.eventLocation)}
                      ${row("Estimated guest count", data.guestCount)}
                      ${row("Event type", data.eventType)}
                      ${row("Message", data.message)}
                    </table>
                    <div style="margin-top:26px;padding:18px;border-radius:18px;background:#fff4db;border:2px solid #f1d8d1;">
                      <div style="font-size:12px;letter-spacing:0.08em;text-transform:uppercase;color:#c93a32;font-weight:900;margin-bottom:6px;">Quick reply</div>
                      <div style="font-size:15px;line-height:1.5;color:#171717;">
                        Reply directly to this email to contact ${escapeHtml(data.name)} at ${escapeHtml(data.email)}.
                      </div>
                    </div>
                    <p style="margin:22px 0 0;font-size:12px;color:#7b6f68;">Submitted ${submittedAt} from cheesedogsnc.com.</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;
}

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json({ error: "Email service is not configured." }, { status: 500 });
    }

    const body = (await request.json()) as BookingRequest & { company?: string };

    if (body.company) {
      return NextResponse.json({ ok: true });
    }

    const data = {
      name: clean(body.name),
      email: clean(body.email),
      phone: clean(body.phone),
      eventDate: clean(body.eventDate),
      eventLocation: clean(body.eventLocation),
      guestCount: clean(body.guestCount),
      eventType: clean(body.eventType),
      message: clean(body.message)
    };

    if (!data.name || !data.email) {
      return NextResponse.json({ error: "Name and email are required." }, { status: 400 });
    }

    const subject = `New Cheesedogs booking request from ${data.name}`;
    const html = buildEmailHtml(data);

    const { error } = await resend.emails.send({
      from: emailFrom,
      to: emailTo,
      replyTo: data.email,
      subject,
      html
    });

    if (error) {
      return NextResponse.json({ error: "Could not send booking request." }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}
