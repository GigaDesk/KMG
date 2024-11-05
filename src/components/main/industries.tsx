import * as React from "react";
import Service1 from "./service1";
import Service2 from "./service2";

export default function Industries() {
  return (
    <div>
      <div
        style={{ fontFamily: "Graphik" }}
        className="text-xl md:text-xxxl font-medium px-12"
      >
        <span className="text-green-950">Who</span> we serve
        <p className="text-lg pt-4 font-normal">
          We empower diverse industries, from dynamic SMEs to global
          corporations, to achieve their full potential. Our comprehensive suite
          of services, delivered by seasoned experts, is designed to address the
          unique needs of each client. Whether you're a burgeoning startup or an
          established enterprise, we're committed to providing innovative
          solutions that drive growth, efficiency, and success.
        </p>
        <Service1
          name="Retail"
          description="For retailers navigating the ever-evolving landscape of consumer behavior, we offer strategic solutions to optimize operations, enhance customer experiences, and drive sustainable growth. By simplifying complex IT and financial processes, including accounting, auditing, tax, and streamlining management, we empower retailers to focus on what matters most: delivering exceptional customer value and achieving long-term success."
          image="https://images.ctfassets.net/vjt7hlwnzx7i/3AtRMkrCAErmKcNSp4iX92/3b52ee9617d3f825ac8d9421fc4015d1/pexels-pixabay-264636.jpg"
        />
        <Service2
          name="Education"
          description="We empower educational institutions to harness the power of technology to enhance learning experiences and administrative efficiency. Our blend of financial and IT solutions streamline operations, improve data management, and facilitate seamless communication between students, faculty, and staff. By leveraging cutting-edge technology, we equip educational institutions to adapt to the evolving needs of the 21st century."
          image="https://images.ctfassets.net/vjt7hlwnzx7i/4E0jbI9BJhpSNPx7iK9XfD/9f7692ce67c5b9e8ee5df8edff131f2e/pexels-katerina-holmes-5905918.jpg"
        />
        <Service1
          name="Manufacturing"
          description="We empower manufacturers to optimize their operations and financial performance by simplifying complex processes. Our expert team streamlines accounting, auditing, and tax procedures, while implementing innovative IT solutions to enhance efficiency and reduce costs. By combining financial expertise with technological advancements, we help manufacturers focus on core competencies and achieve sustainable growth."
          image="https://images.ctfassets.net/vjt7hlwnzx7i/4eoXXwzjfXATKK5FxdBFVy/778bb3664cbf209748d085cda0a697d7/pexels-elevate-1267361.jpg"
        />
        <Service2 
        name="Microfinance"
        description="We empower microfinance institutions to drive financial inclusion and economic growth. Our expert team provides tailored solutions to optimize operations, mitigate risk, and enhance financial performance. By leveraging technology and data-driven insights, we help microfinance institutions deliver innovative financial products and services to underserved communities."
        image="https://images.ctfassets.net/vjt7hlwnzx7i/5c8h3QhzJOXz4v0tyHADqZ/697b95ef86377232082f8379700dcdd9/pexels-pixabay-210600.jpg"
        />
        <Service1 
        name="Tourism & Hospitality"
        description="We empower the tourism and hospitality industry to elevate guest experiences and maximize revenue. Our expert team provides strategic solutions to optimize operations, enhance marketing efforts, and streamline financial processes. From luxury resorts to adventurous safaris, we help businesses in the tourism and hospitality sector deliver unforgettable experiences and achieve sustainable growth."
        image="https://images.ctfassets.net/vjt7hlwnzx7i/4DUzXtSK45gq92kaYmOFZE/7ad144eb1aef7f478291f785ec994e45/pexels-renato-conti-1385524-2677843.jpg"
       />
      </div>
    </div>
  );
}
