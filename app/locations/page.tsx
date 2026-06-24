import type { Metadata } from "next";
import Image from "next/image";
import { CalendarDays, Clock, Facebook, Instagram, MapPin, Sparkles } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { business } from "@/data/site";

export const metadata: Metadata = {
  title: "Locations and Schedule",
  description:
    "Find the Cheesedogs NC weekly and monthly hot dog cart calendar for Raleigh, Durham, Cary, Wake Forest, Apex, and Triangle NC events.",
  alternates: { canonical: "/locations" }
};

export const revalidate = 300;

const calendarUrl =
  process.env.GOOGLE_CALENDAR_ICS_URL ||
  "https://calendar.google.com/calendar/ical/cheesedogsofnc%40gmail.com/public/basic.ics";

type CalendarEvent = {
  title: string;
  location: string;
  description: string;
  startsAt: Date;
  endsAt?: Date;
  isPrivate: boolean;
  isAllDay: boolean;
};

function unfoldIcs(value: string) {
  return value.replace(/\r?\n[ \t]/g, "");
}

function decodeIcsText(value = "") {
  return value
    .replace(/\\n/g, "\n")
    .replace(/\\,/g, ",")
    .replace(/\\;/g, ";")
    .replace(/\\\\/g, "\\")
    .trim();
}

function getIcsValue(line: string) {
  const separator = line.indexOf(":");
  if (separator === -1) {
    return { name: line, value: "" };
  }

  const name = line.slice(0, separator).split(";")[0];
  const value = line.slice(separator + 1);

  return { name, value };
}

function parseIcsDate(value = "") {
  const dateMatch = value.match(/^(\d{4})(\d{2})(\d{2})$/);

  if (dateMatch) {
    const [, year, month, day] = dateMatch;

    return {
      date: new Date(Number(year), Number(month) - 1, Number(day), 12),
      isAllDay: true
    };
  }

  const dateTimeMatch = value.match(/^(\d{4})(\d{2})(\d{2})T(\d{2})(\d{2})(\d{2})(Z)?$/);

  if (!dateTimeMatch) {
    return null;
  }

  const [, year, month, day, hour, minute, second, zulu] = dateTimeMatch;
  const date = zulu
    ? new Date(Date.UTC(Number(year), Number(month) - 1, Number(day), Number(hour), Number(minute), Number(second)))
    : new Date(Number(year), Number(month) - 1, Number(day), Number(hour), Number(minute), Number(second));

  return { date, isAllDay: false };
}

function parseCalendar(ics: string) {
  const events: CalendarEvent[] = [];
  const lines = unfoldIcs(ics).split(/\r?\n/);
  let current: Record<string, string> | null = null;

  for (const line of lines) {
    if (line === "BEGIN:VEVENT") {
      current = {};
      continue;
    }

    if (line === "END:VEVENT" && current) {
      const start = parseIcsDate(current.DTSTART);
      const end = parseIcsDate(current.DTEND);

      if (start) {
        const rawTitle = decodeIcsText(current.SUMMARY || "Cheesedogs NC Stop");
        const isPrivate = /private|wedding|closed|booked/i.test(rawTitle);

        events.push({
          title: isPrivate ? "Private Event" : rawTitle,
          location: isPrivate ? "Triangle NC" : decodeIcsText(current.LOCATION || "Location coming soon"),
          description: isPrivate ? "The cart is booked for a private event." : decodeIcsText(current.DESCRIPTION || ""),
          startsAt: start.date,
          endsAt: end?.date,
          isPrivate,
          isAllDay: start.isAllDay
        });
      }

      current = null;
      continue;
    }

    if (current) {
      const { name, value } = getIcsValue(line);
      current[name] = value;
    }
  }

  const now = new Date();
  const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  return events
    .filter((event) => event.startsAt >= startOfToday)
    .sort((a, b) => a.startsAt.getTime() - b.startsAt.getTime());
}

async function getCalendarEvents() {
  try {
    const response = await fetch(calendarUrl, {
      next: { revalidate },
      headers: { accept: "text/calendar,text/plain,*/*" }
    });

    if (!response.ok) {
      return [];
    }

    return parseCalendar(await response.text());
  } catch {
    return [];
  }
}

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    timeZone: "America/New_York"
  }).format(date);
}

function formatMonth(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    year: "numeric",
    timeZone: "America/New_York"
  }).format(date);
}

function formatTime(event: CalendarEvent) {
  if (event.isAllDay) {
    return "All day";
  }

  const formatter = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    timeZone: "America/New_York"
  });

  if (event.endsAt) {
    return `${formatter.format(event.startsAt)} - ${formatter.format(event.endsAt)}`;
  }

  return formatter.format(event.startsAt);
}

function buildMonthDays(events: CalendarEvent[]) {
  const baseDate = events[0]?.startsAt || new Date();
  const first = new Date(baseDate.getFullYear(), baseDate.getMonth(), 1);
  const last = new Date(baseDate.getFullYear(), baseDate.getMonth() + 1, 0);
  const days: { date: Date; events: CalendarEvent[] }[] = [];

  for (let day = 1; day <= last.getDate(); day += 1) {
    const date = new Date(baseDate.getFullYear(), baseDate.getMonth(), day);
    days.push({
      date,
      events: events.filter(
        (event) =>
          event.startsAt.getFullYear() === date.getFullYear() &&
          event.startsAt.getMonth() === date.getMonth() &&
          event.startsAt.getDate() === date.getDate()
      )
    });
  }

  return {
    monthLabel: formatMonth(baseDate),
    leadingBlanks: first.getDay(),
    days
  };
}

function EventCard({ event, featured = false }: { event: CalendarEvent; featured?: boolean }) {
  return (
    <article className={`shine-card rounded-[2rem] border-2 border-grill bg-white p-6 shadow-crisp transition hover:-translate-y-1 ${featured ? "lg:p-7" : ""}`}>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="inline-flex rounded-full bg-dogred px-4 py-2 text-sm font-black uppercase text-white">
          {formatDate(event.startsAt)}
        </p>
        <span className={`rounded-full px-3 py-1 text-xs font-black uppercase ${event.isPrivate ? "bg-grill text-white" : "bg-cream text-dogred"}`}>
          {event.isPrivate ? "Booked" : "Public Stop"}
        </span>
      </div>
      <h2 className="mt-5 text-2xl font-black">{event.title}</h2>
      <div className="mt-4 grid gap-2 text-grill/72">
        <p className="flex gap-2">
          <MapPin aria-hidden="true" className="h-5 w-5 shrink-0 text-dogred" />
          {event.location}
        </p>
        <p className="flex gap-2">
          <Clock aria-hidden="true" className="h-5 w-5 shrink-0 text-dogred" />
          {formatTime(event)}
        </p>
      </div>
      {event.description ? <p className="mt-4 font-bold text-grill/80">{event.description}</p> : null}
    </article>
  );
}

export default async function LocationsPage() {
  const events = await getCalendarEvents();
  const thisWeek = events.slice(0, 4);
  const upcoming = events.slice(4, 10);
  const month = buildMonthDays(events);

  return (
    <main>
      <PageHero
        eyebrow="Where to find us"
        title="The Cheesedogs calendar, fresh every week."
        text="Check upcoming public stops, pop-ups, and booked dates across Raleigh, Durham, Cary, Wake Forest, and the Triangle."
        image="/images/cheesedogs-community-real.jpg"
        imageAlt="Cheesedogs NC serving guests at an outdoor Triangle event"
        primaryHref="/catering"
        primaryLabel="Book an Open Date"
      />

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.78fr] lg:items-end">
            <SectionHeader
              eyebrow="Live schedule"
              title="This week with Cheesedogs."
              text="Check the latest public stops, pop-ups, and booked dates. New Triangle NC events are added as they are confirmed."
            />
            <div className="shine-card rounded-[2rem] border-2 border-grill bg-dogred p-6 text-white shadow-crisp">
              <div className="flex items-center gap-3">
                <Sparkles aria-hidden="true" className="h-8 w-8 text-cheese" />
                <p className="text-sm font-black uppercase tracking-[0.22em] text-cheese">Fresh updates</p>
              </div>
              <h2 className="mt-3 text-2xl font-black">Follow along for daily stops.</h2>
              <p className="mt-3 text-white/82">Public stops show the details. Private bookings display as booked dates, so you can spot open windows faster.</p>
            </div>
          </div>

          {thisWeek.length ? (
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {thisWeek.map((event) => (
                <EventCard key={`${event.startsAt.toISOString()}-${event.title}`} event={event} featured />
              ))}
            </div>
          ) : (
            <div className="mt-10 rounded-[2rem] border-2 border-grill bg-white p-8 text-center shadow-crisp">
              <CalendarDays aria-hidden="true" className="mx-auto h-12 w-12 text-dogred" />
              <h2 className="mt-5 text-3xl font-black uppercase">No public stops posted yet.</h2>
              <p className="mx-auto mt-3 max-w-2xl text-lg text-grill/70">
                New public stops are coming soon. Follow Cheesedogs NC on social for same-day updates, or ask about bringing the cart to your event.
              </p>
              <div className="mt-7 flex flex-wrap justify-center gap-3">
                <ButtonLink href="/catering">Book the Cart</ButtonLink>
                <ButtonLink href="/contact" variant="secondary">Ask About Availability</ButtonLink>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <SectionHeader
              eyebrow="Monthly view"
              title={`${month.monthLabel} at a glance.`}
              text="A simple calendar view helps visitors see where Cheesedogs is popping up and which dates are already booked."
            />
            {upcoming.length ? (
              <div className="mt-8 grid gap-4">
                {upcoming.map((event) => (
                  <EventCard key={`${event.startsAt.toISOString()}-${event.title}`} event={event} />
                ))}
              </div>
            ) : (
              <p className="mt-8 rounded-[2rem] border-2 border-grill bg-cream p-6 text-lg font-bold text-grill/76">
                More dates will show here as soon as they are added to the calendar.
              </p>
            )}
          </div>

          <div className="rounded-[2rem] border-2 border-grill bg-cream p-4 shadow-crisp sm:p-6">
            <div className="grid grid-cols-7 gap-2 text-center text-xs font-black uppercase tracking-wide text-dogred">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div key={day}>{day}</div>
              ))}
            </div>
            <div className="mt-3 grid grid-cols-7 gap-2">
              {Array.from({ length: month.leadingBlanks }).map((_, index) => (
                <div key={`blank-${index}`} className="min-h-20 rounded-2xl border border-grill/10 bg-white/35" />
              ))}
              {month.days.map((day) => (
                <div key={day.date.toISOString()} className="min-h-20 rounded-2xl border border-grill/15 bg-white p-2">
                  <div className="text-sm font-black">{day.date.getDate()}</div>
                  <div className="mt-2 flex flex-wrap gap-1">
                    {day.events.slice(0, 2).map((event) => (
                      <span
                        key={`${event.startsAt.toISOString()}-${event.title}`}
                        aria-label={event.isPrivate ? "Booked event" : "Cheesedogs event"}
                        title={event.title}
                        className={`grid h-8 w-8 place-items-center rounded-full border-2 bg-white shadow-sm ${
                          event.isPrivate ? "border-grill" : "border-dogred"
                        }`}
                      >
                        <Image
                          src="/images/brand/cheesedogs-logo.png"
                          alt=""
                          width={22}
                          height={18}
                          className="h-5 w-6 object-contain"
                        />
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[2rem] border-2 border-grill bg-dogred p-6 text-white shadow-crisp sm:p-8 lg:grid-cols-[1fr_0.8fr] lg:p-10">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-cheese">Triangle hot dog stops</p>
            <h2 className="mt-3 text-3xl font-black uppercase leading-tight text-white sm:text-4xl lg:text-5xl">
              Looking for hot dogs in the Triangle?
            </h2>
            <p className="mt-4 text-lg text-white/82">
              Cheesedogs NC serves public and private hot dog cart stops around Raleigh, Durham, Cary, Apex, Holly Springs, Fuquay-Varina, Garner, Chapel Hill, Wake Forest, and nearby communities. Check social channels for daily updates and last-minute pop-ups.
            </p>
          </div>
          <div className="flex flex-col justify-center gap-3">
            <a className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border-2 border-grill bg-white px-6 py-3 font-black text-grill transition hover:-translate-y-1 hover:shadow-button" href={business.instagram}>
              <Instagram aria-hidden="true" className="h-5 w-5" />
              Follow on Instagram
            </a>
            <a className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border-2 border-grill bg-white px-6 py-3 font-black text-grill transition hover:-translate-y-1 hover:shadow-button" href={business.facebook}>
              <Facebook aria-hidden="true" className="h-5 w-5" />
              Follow on Facebook
            </a>
            <ButtonLink href="/catering" variant="secondary">Invite the Cart</ButtonLink>
          </div>
        </div>
      </section>
    </main>
  );
}
