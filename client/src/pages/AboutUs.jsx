import React from "react";
import Background from "../components/Background.jsx";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <Background className="fixed" />
      <Navbar />
      <div className="">
        {/* Header Section */}
        <header className="p-8 text-center">
          <h1 className="text-4xl font-bold mb-2 font-Bradley text-black">
            About Us
          </h1>
          <p className="text-xl font-semibold font-Bradley text-black">
            Empowering Access to Knowledge Through Digitized Manuals
          </p>
        </header>

        {/* Main Content Section */}
        <main className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-3xl font-semibold mb-4 text-purple-700">
                Our Mission
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                At DocFinder, we aim to revolutionize the way technical
                information is accessed and managed. By leveraging cutting-edge
                OCR technology and intuitive design, we bridge the gap between
                traditional documentation and modern digital solutions.
              </p>
              <h2 className="text-3xl font-semibold mb-4 text-purple-700">
                What We Do
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Our platform enables seamless parsing, searching, and organizing
                of scanned machine manuals. From intricate diagrams to critical
                instructions, our system ensures that every piece of information
                is just a click away. We cater to industries needing fast access
                to operational instructions, part details, and troubleshooting
                information.
              </p>
              <h2 className="text-3xl font-semibold mb-4 text-purple-700">
                Why Choose Us
              </h2>
              <p className="text-lg leading-relaxed">
                We prioritize usability and efficiency. Our team of developers,
                designers, and engineers works tirelessly to ensure your
                experience is seamless, empowering industries with reliable and
                user-friendly solutions.
              </p>
            </div>

            {/* Right Image */}
            <div className="flex justify-center">
              <img
                src="https://t3.ftcdn.net/jpg/09/15/87/34/360_F_915873468_yiGeDGboEWuQxcibGO6FeFkUrfx7pLy6.jpg"
                alt="Team working on digitization"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Values Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-semibold text-center mb-8 text-purple-700">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <Link>
                <div className="bg-white text-black p-6 rounded-lg shadow-md hover:bg-blue-200">
                  <h3 className="text-xl font-bold mb-2">Innovation</h3>
                  <p>
                    We use the latest technology to provide top-notch solutions,
                    ensuring our clients have access to cutting-edge tools for
                    their documentation needs.
                  </p>
                </div>
              </Link>
              <Link>
                <div className="bg-white text-black p-6 rounded-lg shadow-md hover:bg-blue-200">
                  <h3 className="text-xl font-bold mb-2">Accessibility</h3>
                  <p>
                    Ensuring that every user, regardless of technical expertise,
                    can easily find the information they need through our
                    intuitive interface.
                  </p>
                </div>
              </Link>
              <Link>
                <div className="bg-white text-black p-6 rounded-lg shadow-md hover:bg-blue-200">
                  <h3 className="text-xl font-bold mb-2">Efficiency</h3>
                  <p>
                    Saving time and reducing effort with our optimized
                    processes, enabling industries to focus on their core
                    operations without disruptions.
                  </p>
                </div>
              </Link>
            </div>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-purple-600 mt-8 mb-4">
              What Sets Us Apart
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                <strong>Cutting-Edge OCR Technology:</strong> Our advanced
                Optical Character Recognition system accurately extracts text
                from scanned documents, ensuring high-quality, searchable
                content.
              </li>
              <li>
                <strong>Intelligent Search Algorithms:</strong> Go beyond simple
                keyword matching with our context-aware search engine that
                understands technical terminology and relationships.
              </li>
              <li>
                <strong>User-Centric Design:</strong> An intuitive interface
                that requires minimal training, allowing you to focus on your
                work, not on learning a new system.
              </li>
              <li>
                <strong>Scalable Architecture:</strong> Whether you have a
                handful of manuals or a vast library, DocFinder grows with your
                needs.
              </li>
              <li>
                <strong>Robust Security:</strong> Your documents are sensitive.
                Our platform employs industry-leading security measures to keep
                your data safe and confidential.
              </li>
            </ul>
          </section>

          <section className="my-8">
            <h2 className="text-2xl font-bold text-purple-600 mb-4">
              Key Features and Benefits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-purple-200 rounded-lg p-4 shadow-lg">
                <h3 className="text-lg font-semibold text-purple-600 mb-2">
                  Effortless Upload and Processing
                </h3>
                <p className="text-gray-700">
                  Simply drag and drop your scanned manuals. Our system handles
                  the rest, from OCR to indexing, making your documents
                  instantly searchable.
                </p>
              </div>
              <div className="border border-purple-200 rounded-lg p-4 shadow-lg">
                <h3 className="text-lg font-semibold text-purple-600 mb-2">
                  Lightning-Fast Search
                </h3>
                <p className="text-gray-700">
                  Find exactly what you need in seconds. Our search
                  functionality understands context, technical terms, and even
                  common misspellings.
                </p>
              </div>
              <div className="border border-purple-200 rounded-lg p-4 shadow-lg">
                <h3 className="text-lg font-semibold text-purple-600 mb-2">
                  Smart Document Management
                </h3>
                <p className="text-gray-700">
                  Organize your manuals effortlessly. Our system automatically
                  categorizes documents, tracks versions, and allows for easy
                  updates.
                </p>
              </div>
              <div className="border border-purple-200 rounded-lg p-4 shadow-lg">
                <h3 className="text-lg font-semibold text-purple-600 mb-2">
                  Accessibility Anywhere
                </h3>
                <p className="text-gray-700">
                  Access your entire manual library from any device, anywhere.
                  Perfect for field technicians or remote troubleshooting.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-purple-600 mb-4">
              Industries We Serve
            </h2>
            <p className="text-gray-700 mb-4">
              DocFinder is versatile and caters to a wide range of industries,
              including but not limited to:
            </p>
            <ul className="list-disc list-inside text-gray-700 grid grid-cols-2 gap-2">
              <li>Manufacturing</li>
              <li>Aerospace</li>
              <li>Automotive</li>
              <li>Healthcare</li>
              <li>Energy and Utilities</li>
              <li>Telecommunications</li>
              <li>Construction</li>
              <li>Agriculture</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-purple-600 mb-4">
              Our Commitment to Innovation
            </h2>
            <p className="text-gray-700 mb-4">
              At DocFinder, we're constantly pushing the boundaries of what's
              possible in document management and information retrieval. Our
              dedicated team of engineers and researchers work tirelessly to
              incorporate the latest advancements in machine learning, natural
              language processing, and user experience design into our platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-600 mb-4">
              Join the DocFinder Revolution
            </h2>
            <p className="text-gray-700 mb-4">
              Experience the future of manual management. Whether you're a small
              workshop or a large multinational corporation, DocFinder is here
              to streamline your operations, reduce downtime, and empower your
              workforce with instant access to critical information.
            </p>
            <p className="text-gray-700 font-semibold">
              Ready to transform how you work with machine manuals? Get started
              with DocFinder today!
            </p>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default About;
