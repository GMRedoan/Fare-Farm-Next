"use client";

export default function GetInTouch() {
    return (
        <section className="pb-24 bg-base-100">
            <div className="text-center my-10 mb-26">
                <h2 className="text-3xl md:text-5xl font-bold"><span className="text-primary">Contact</span> With Us</h2>
                <p className="text-accent mt-4">We available 24/7 for your message response</p>
            </div>

            <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">

                {/* Contact Form */}
                <div className="lg:w-1/2 bg-base-200 rounded-3xl shadow-2xl p-10">
                    <h2 className="text-4xl font-bold text-base-300 mb-6">Get in <span className="text-primary">Touch</span></h2>
                    <p className="text-accent mb-8">
                        Have questions or want to collaborate? Send us a message and we’ll get back to you.
                    </p>
                    <form className="space-y-6">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full p-4 border border-yellow-200 rounded-xl focus:ring-2 focus:ring-yellow-400 outline-none transition"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full p-4 border border-yellow-200 rounded-xl focus:ring-2 focus:ring-yellow-400 outline-none transition"
                        />
                        <textarea
                            placeholder="Your Message"
                            className="w-full p-4 border border-yellow-200 rounded-xl focus:ring-2 focus:ring-yellow-400 outline-none transition h-32 resize-none"
                        ></textarea>
                        <button
                            type="submit"
                            className="w-full bg-yellow-500 text-white font-semibold py-4 rounded-xl hover:bg-yellow-600 transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

                {/* Image / Illustration */}
                <div className="lg:w-1/2">
                    <img
                        src="https://i.ibb.co.com/931PyBF8/India-Farming.jpg"
                        alt="Fare Farm Contact"
                        className="rounded-3xl shadow-2xl w-full object-cover"
                    />
                </div>
            </div>

        </section>
    );
}
