import { Heart, Users, Eye } from "lucide-react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

const Donation = () => {
  return (
    <div className="min-h-screen px-2 sm:px-5 bg-blue-50">
        <Navbar />
      {/* Hero */}
        <section className="mx-auto max-w-7xl py-14 text-center lg:py-10">
          <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
            Donate
          </span>
          <h1 className="mx-auto mt-5 max-w-4xl text-4xl font-bold leading-tight sm:text-6xl">
            Give the Gift of Sight
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Your donation helps provide eye screenings, treatments,
          surgeries, and outreach programs for underserved communities.
          </p>
        </section>

      {/* Impact Cards */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white rounded-3xl p-8 shadow-md">
            <Eye className="w-10 h-10 text-blue-900 mb-4" />
            <h3 className="font-bold text-xl mb-2">₦5,000</h3>
            <p>
              Supports eye screening for a child in need.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-md">
            <Heart className="w-10 h-10 text-red-500 mb-4" />
            <h3 className="font-bold text-xl mb-2">₦20,000</h3>
            <p>
              Provides treatment and essential eye care support.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-md">
            <Users className="w-10 h-10 text-green-600 mb-4" />
            <h3 className="font-bold text-xl mb-2">₦50,000</h3>
            <p>
              Helps sponsor outreach programs in rural communities.
            </p>
          </div>

        </div>
      </section>

      {/* Donation Form */}
      <section className="max-w-3xl mx-auto px-6 pb-20">
        <div className="bg-white rounded-3xl shadow-lg p-8">

          <h2 className="text-3xl font-bold text-center mb-8">
            Make a Donation
          </h2>

          <form className="space-y-5">

            <input
              type="text"
              placeholder="Full Name"
              className="w-full border rounded-xl p-4 outline-none"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border rounded-xl p-4 outline-none"
            />

            <input
              type="number"
              placeholder="Amount (₦)"
              className="w-full border rounded-xl p-4 outline-none"
            />

            <textarea
              rows="4"
              placeholder="Message (Optional)"
              className="w-full border rounded-xl p-4 outline-none"
            />

            <button
              type="submit"
              className="w-full bg-blue-900 text-white py-4 rounded-xl font-semibold hover:bg-blue-800 transition"
            >
              Donate Now
            </button>

          </form>
        </div>
      </section>
        <Footer />
    </div>
  );
};

export default Donation;
