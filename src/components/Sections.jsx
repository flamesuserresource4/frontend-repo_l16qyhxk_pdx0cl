import React, { useState } from 'react';
import { Calendar, Shield, RefreshCw, Headphones } from 'lucide-react';

const SectionTitle = ({ children }) => (
  <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8">{children}</h2>
);

const Modal = ({ open, onClose, title, videoUrl, children }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/20" onClick={onClose} />
      <div className="relative bg-white border border-black/10 shadow-xl rounded-lg max-w-2xl w-full mx-4 overflow-hidden">
        <button
          aria-label="Close"
          onClick={onClose}
          className="absolute top-3 right-3 text-black/70 hover:opacity-70"
        >
          ×
        </button>
        <div className="p-4 md:p-6 space-y-4">
          {videoUrl && (
            <div className="w-full aspect-video">
              <iframe
                className="w-full h-full"
                src={videoUrl}
                title={title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          )}
          <div className="space-y-2">
            <h3 className="text-xl font-medium tracking-tight">{title}</h3>
            <div className="text-sm md:text-base leading-relaxed">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export function AboutSection() {
  return (
    <section id="about" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 md:px-6 py-16 md:py-24">
        <SectionTitle>About</SectionTitle>
        <div className="max-w-3xl space-y-5 text-black/90 leading-relaxed">
          <p>
            Velodent is built for modern dental operators who demand precision, scalability, compliance, and performance.
          </p>
          <p>
            We don’t replace your team. We multiply them.
            Our AI strengthens every human at your front desk — delivering faster scheduling, faster verification, faster recall, and faster conversions — without burnout, without chaos, without wasted payroll.
          </p>
        </div>
      </div>
    </section>
  );
}

export function ServicesSection() {
  const [open, setOpen] = useState(null);
  const services = [
    {
      title: 'Intelligent Scheduling',
      summary: 'Dynamic waitlist and no-show mitigation with automated routing.',
      details:
        'Our AI models optimize chair utilization by predicting cancellations, proposing optimal time blocks, and auto-filling with waitlisted patients. Integrates with leading PMS systems.',
      video: 'https://www.youtube.com/embed/C0DPdy98e4c',
      icon: Calendar,
    },
    {
      title: 'Insurance + Eligibility',
      summary: 'Automated verification and benefit estimation before the appointment.',
      details:
        'We continuously verify eligibility, surface deductible/coverage insights, and flag exceptions for human review. Reduce friction while improving collection confidence.',
      video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      icon: Shield,
    },
    {
      title: 'Recall + Reactivation',
      summary: 'Personalized outreach that feels human, not spam.',
      details:
        'Segmented campaigns across SMS and email with intelligent send windows. Clear reporting pinpoints ROI by provider, procedure, and cohort.',
      video: 'https://www.youtube.com/embed/ysz5S6PUM-U',
      icon: RefreshCw,
    },
    {
      title: 'Front Desk Copilot',
      summary: 'Realtime assistance for calls, triage, and documentation.',
      details:
        'Live guidance for insurance questions, billing, and scripting—consistent service quality without added headcount. Fully auditable with role-based access.',
      video: 'https://www.youtube.com/embed/oHg5SJYRHA0',
      icon: Headphones,
    },
  ];

  return (
    <section id="services" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 md:px-6 py-16 md:py-24">
        <SectionTitle>Services</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={i}
                className="group border border-black/10 rounded-xl p-6 md:p-7 shadow-sm bg-white transition-all hover:shadow-md hover:-translate-y-0.5"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0">
                    <div className="h-10 w-10 rounded-full border border-black/10 flex items-center justify-center">
                      <Icon className="h-5 w-5 text-black" strokeWidth={1.75} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-semibold tracking-tight">{s.title}</h3>
                    <p className="mt-1 text-sm md:text-base text-black/80 leading-relaxed">
                      {s.summary}
                    </p>
                    <button
                      onClick={() => setOpen(s)}
                      className="mt-4 inline-block px-4 py-2 border border-black rounded-md text-sm hover:opacity-70 transition-opacity"
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <Modal
          open={!!open}
          onClose={() => setOpen(null)}
          title={open?.title}
          videoUrl={open ? open.video : ''}
        >
          {open?.details}
        </Modal>
      </div>
    </section>
  );
}

export function CaseStudiesSection() {
  const [open, setOpen] = useState(null);
  const cases = [
    {
      title: 'Multi-location DSO (18 clinics)',
      metrics: '↑ 22% chair utilization • −31% no-shows • +$1.8M annualized revenue',
      details:
        'Deployed scheduling optimization and recall automation. Integrated with PMS and phone system. Rolled out in phases across 18 locations with standardized training and QA.',
      video: 'https://www.youtube.com/embed/C0DPdy98e4c',
    },
    {
      title: 'Boutique Implant Practice',
      metrics: '↓ 47% admin time per case • +19% treatment acceptance',
      details:
        'Implemented eligibility automation, pre-authorizations, and finance workflows. Introduced case presentation sequencing with outcome tracking.',
      video: 'https://www.youtube.com/embed/ysz5S6PUM-U',
    },
    {
      title: 'Orthodontics Group (6 offices)',
      metrics: '↑ 2.3x reactivation rate • −18% call wait times',
      details:
        'Launched omnichannel outreach with intelligent windows and live dashboarding. Call triage and scripting reduced handle time while improving NPS.',
      video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
  ];

  return (
    <section id="case-studies" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 md:px-6 py-16 md:py-24">
        <SectionTitle>Case Studies</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {cases.map((c, i) => (
            <div key={i} className="border border-black/10 rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5">
              <div className="space-y-2">
                <h3 className="text-lg md:text-xl font-medium tracking-tight">{c.title}</h3>
                <p className="text-black/80 text-sm">{c.metrics}</p>
                <button
                  onClick={() => setOpen(c)}
                  className="mt-3 inline-block px-4 py-2 border border-black rounded-md text-sm hover:opacity-70 transition-opacity"
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
        <Modal
          open={!!open}
          onClose={() => setOpen(null)}
          title={open?.title}
          videoUrl={open ? open.video : ''}
        >
          {open?.details}
        </Modal>
      </div>
    </section>
  );
}

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        'The system quietly removed the day-to-day friction. Phones are calmer, schedules are fuller, and patients notice the difference.',
      name: 'Dr. Elena Park, DDS',
    },
    {
      quote:
        'Eligibility and estimates are accurate before patients arrive. Our collections are cleaner and our team has time to focus on care.',
      name: 'Michael Chen, Practice Manager',
    },
    {
      quote:
        'We grew without adding admin headcount. The reporting finally gives us clarity on what drives production.',
      name: 'Sara Williams, DSO Operations',
    },
    {
      quote:
        'Outreach feels personal. Reactivation doubled within two months and reviews improved.',
      name: 'Dr. Priya Rao, Orthodontist',
    },
  ];
  return (
    <section id="testimonials" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 md:px-6 py-16 md:py-24">
        <SectionTitle>What Our Clients Say</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="border border-black/10 rounded-lg p-6 bg-white shadow-sm">
              <p className="text-black/90 leading-relaxed">“{t.quote}”</p>
              <p className="mt-3 text-sm text-black/70">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FAQSection() {
  const [open, setOpen] = useState(null);
  const faqs = [
    {
      q: 'Do you integrate with our practice management system?',
      a: 'Yes. We integrate with leading PMS platforms and offer secure APIs. We follow strict access controls and auditing.',
    },
    {
      q: 'How long is implementation?',
      a: 'Typical rollout is 3–6 weeks including discovery, configuration, training, and QA. Multi-location deployments are phased.',
    },
    {
      q: 'Is patient data secure and HIPAA compliant?',
      a: 'Absolutely. We apply encryption in transit and at rest, enforce RBAC, and sign BAAs. Infrastructure and processes are audited.',
    },
    {
      q: 'What results should we expect?',
      a: 'Most clinics see reduced no-shows, improved collections, and time savings for front desk. We align on measurable targets before launch.',
    },
  ];

  return (
    <section id="faq" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 md:px-6 py-16 md:py-24">
        <SectionTitle>FAQ</SectionTitle>
        <div className="divide-y divide-black/10 border border-black/10 rounded-lg overflow-hidden">
          {faqs.map((f, i) => (
            <div key={i} className="p-6">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between text-left"
                aria-expanded={open === i}
              >
                <span className="font-medium">{f.q}</span>
                <span className="text-black/50">{open === i ? '−' : '+'}</span>
              </button>
              <div
                className={`grid transition-all duration-300 ease-out ${open === i ? 'grid-rows-[1fr] opacity-100 mt-3' : 'grid-rows-[0fr] opacity-0'} `}
              >
                <div className="overflow-hidden text-black/80 leading-relaxed text-sm md:text-base">{f.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
