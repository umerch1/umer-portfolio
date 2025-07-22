import Link from "next/link";
import { ArrowLeft, Download, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function ResumePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-28">
          <div className="container px-4 md:px-6">
            <div className="flex justify-between items-center mb-8">
              <Button variant="ghost" asChild>
                <Link href="/about">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to About
                </Link>
              </Button>
              <Button asChild>
                <Link href="/resumeDownload.pdf" target="_blank">
                  <Download className="mr-2 h-4 w-4" /> Download PDF
                </Link>
              </Button>
            </div>

            <div className="mx-auto max-w-3xl bg-background rounded-lg shadow-lg p-8 print:shadow-none">
              <object
                data="/resumeDownload.pdf"
                type="application/pdf"
                width="100%"
                height="1024px"
              >
                <p>
                  Your browser does not support PDFs.
                  <a href="/resumeDownload.pdf">Download the PDF</a>.
                </p>
              </object>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
