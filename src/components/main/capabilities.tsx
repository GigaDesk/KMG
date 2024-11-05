import * as React from "react";
import Service1 from "./service1";
import Service2 from "./service2";

export default function Capabilities() {
  return (
    <div>
      <div
        style={{ fontFamily: "Graphik" }}
        className="text-xl md:text-xxxl font-medium px-12"
      >
        <span className="text-green-950">What</span> we bring to the table
        <p className="text-lg pt-4 font-normal">
          We empower businesses with a comprehensive suite of services. Our
          digital transformation, tax, audit, and accounting, and strategic
          consulting expertise drive growth, efficiency, and innovation. By
          leveraging technology and industry insights, we help businesses
          navigate complexities and achieve sustainable success.
        </p>
        <Service1
          name="Digital Transformation"
          description="We help businesses harness the power of technology to drive innovation and growth. Our digital transformation services, such as cloud solutions, cybersecurity, data analytics, and automation, seamlessly integrate with our tax, audit, and accounting services to optimize financial processes and enhance decision-making. Additionally, these digital solutions support our strategic consulting efforts by providing data-driven insights to inform strategic initiatives and operational improvements."
          image="https://images.ctfassets.net/vjt7hlwnzx7i/7BJCvQsRigASaD1OrAyCBS/5df6e00aad6231c8e1bbadf656c4c3c2/pexels-darlene-alderson-4389795.jpg"
        />
        <Service2
          name="Tax, Audit & Accounting Services"
          description="Our experienced team provides comprehensive tax, audit, and accounting services to ensure compliance, mitigate risk, and optimize financial performance. By leveraging digital tools and technologies, we streamline processes, improve accuracy, and provide timely insights. Our tax, audit, and accounting services work in conjunction with our digital transformation and strategic consulting services to support the overall financial health and strategic direction of our clients."
          image="https://images.ctfassets.net/vjt7hlwnzx7i/1O4P5HbSkzLOU2D8ZI9Q5z/22a660ea0e0c12d43d725512a9220113/pexels-leeloothefirst-8962476.jpg"
        />
        <Service1
          name="Operational, Strategic & Management Consulting"
          description="We provide strategic guidance and operational expertise to help businesses achieve their goals. Our consulting services, including business strategy, process improvement, organizational design, and risk management, often involve the implementation of digital solutions to drive efficiency and effectiveness. We work closely with our digital transformation and tax, audit, and accounting teams to ensure that our strategic recommendations are aligned with our clients' financial objectives and technological capabilities."
          image="https://images.ctfassets.net/vjt7hlwnzx7i/k9ZT2CIm8I7xgReTAL0qb/5578a5e2d1e8d6ba5467f92302e254e8/pexels-kindelmedia-7688360.jpg"
        />
      </div>
    </div>
  );
}
