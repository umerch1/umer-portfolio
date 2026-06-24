import { Mail, Phone, MapPin } from "lucide-react";
import AnimatedText from "@/components/animated-text";
import ContactForm from "@/components/contactComponent/contactForm";
export const metadata = {
  title: "Contact | Umer Farooq - Software Engineer",
  description:
    "Get in touch with Umer Farooq, a software engineer specializing in the MERN stack and React Native development.",};
export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  <AnimatedText text="Get in Touch" />
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Have a project in mind? Let's bring your ideas to life through
                  portfolio
                </p>
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start mt-12">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 mt-1 text-gray-500 dark:text-gray-400" />
                  <div>
                    <h3 className="text-lg font-medium">Email</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      umerf3024@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 mt-1 text-gray-500 dark:text-gray-400" />
                  <div>
                    <h3 className="text-lg font-medium">Phone</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      +92 3094162466
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 mt-1 text-gray-500 dark:text-gray-400" />
                  <div>
                    <h3 className="text-lg font-medium">Location</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Bhaseen PO/Box Bata
                      <br />
                      Shalimar Lahore
                    </p>
                  </div>
                </div>

                <div className="relative w-full aspect-video bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden">
                  {/* Map placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center text-gray-500 dark:text-gray-400">
                    Interactive Map
                  </div>
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
