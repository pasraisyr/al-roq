const steps = [
  { phase: "01. BROWSE & PICK", desc: "Explore ALROQ's ecosystem. Identify the product closest to your need." },
  { phase: "02. TELL US WHAT'S MISSING", desc: "Share your workflow, missing features, and custom requirements." },
  { phase: "03. WE BUILD YOUR VERSION", desc: "We add your desired flow and features on top of the base product." },
  { phase: "04. GO LIVE. DONE.", desc: "Deploy. Train. Scale. No waiting. No broken promises." },
];

export default function Deployment() {
  return (
    <section id="deployment" className="border border-[#e0e0e0] bg-[#f7f7f7] p-8 flex flex-col justify-between">
      <div>
        <h2 className="font-bebas text-4xl text-black tracking-wide mb-2">DEPLOYMENT PROTOCOL</h2>
        <p className="font-sans text-base text-[#555555] mb-8">From the moment you browse to the day your software goes live — we are with you at every step.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {steps.map((step, i) => (
          <div key={i} className="border border-[#e0e0e0] bg-white p-4">
            <div className="font-mono text-[10px] text-black tracking-widest uppercase mb-2">{step.phase}</div>
            <p className="font-sans text-sm text-[#555555]">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
