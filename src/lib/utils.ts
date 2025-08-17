import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const handleDownloadCV = () => {
  // Place your PDF file in the public folder: public/assets/resume/cv.pdf
  const pdfUrl = "/assets/resume/Shyam-Jith-CV.pdf";
  const link = document.createElement("a");
  link.href = pdfUrl;
  link.download = "Shyam-Jith-CV.pdf"; // filename for download
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
 
};
