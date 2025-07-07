"use client";
import Link from "next/link";

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-black to-zinc-800 text-white px-4 py-10 flex flex-col items-center">
      <div className="w-full max-w-3xl flex justify-start mb-6">
        <Link href="/" className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 text-white rounded-xl font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12m0 0l7.5-7.5M8.25 12h12.75" />
          </svg>
          Go to Home Page
        </Link>
      </div>
      <div className="bg-zinc-900 rounded-2xl shadow-lg p-8 w-full max-w-3xl flex flex-col items-center">
        <h1 className="text-4xl font-bold text-cyan-400 mb-6 flex items-center gap-2">
          <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={2} stroke='currentColor' className='w-7 h-7 text-cyan-400'><path strokeLinecap='round' strokeLinejoin='round' d='M16 16v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h6a2 2 0 012 2v2m2 4h-8m8 0l-4 4m4-4l-4-4' /></svg>
          Resume
        </h1>
        <p className="text-zinc-300 text-lg mb-8 text-center">You can download my resume below:</p>
        <a href="/Resume.pdf" download className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 text-white font-semibold rounded-xl shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-200 text-lg focus:outline-none focus:ring-2 focus:ring-cyan-400">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
          </svg>
          Download Resume
        </a>
      </div>
    </div>
  );
}
