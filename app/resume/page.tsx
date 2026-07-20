import Link from "next/link";
import { ArrowLeft, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Resume | Umer Farooq - Software Engineer",
  description:
    "View Umer Farooq's resume, highlighting his experience and skills in the MERN stack and React Native development.",
};

export default function ResumePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full bg-muted/70 py-16 md:py-24 lg:py-28 dark:bg-muted/40">
          <div className="container px-4 md:px-6">
            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <Button variant="ghost" asChild className="w-fit rounded-full">
                <Link href="/about">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to About
                </Link>
              </Button>
              <Button asChild className="w-fit rounded-full">
                <Link href="/resumeDownload.pdf" target="_blank">
                  <Download className="mr-2 h-4 w-4" /> Download PDF
                </Link>
              </Button>
            </div>

            <div className="mx-auto max-w-4xl overflow-hidden rounded-[1.8rem] border border-border/70 bg-background/90 p-3 shadow-[0_24px_60px_rgba(15,23,42,0.12)] print:shadow-none">
              <object
                data="/resumeDownload.pdf"
                type="application/pdf"
                width="100%"
                height="1060px"
                className="rounded-[1.3rem]"
              >
                <div className="rounded-[1.3rem] border border-dashed border-border p-8 text-center text-muted-foreground">
                  Your browser does not support PDFs.
                  <a href="/resumeDownload.pdf" className="ml-1 font-semibold text-primary">Download the PDF</a>.
                </div>
              </object>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
